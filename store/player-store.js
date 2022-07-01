import { HYEventStore } from 'hy-event-store';
import { getMusicById } from '../api/music';
import { getDIY } from '../api/request';
import { parseLyric, debounce, throttle } from '../store/index';
import store from './index.js';

import moment from '@/miniprogram_npm/moment';
const backgroundAudioManager = uni.getBackgroundAudioManager();
const appInstance = getApp();
const musicNotification = uni.requireNativePlugin('XZH-musicNotification');



musicNotification.init({
	
		//点击通知栏跳转页面
		path: '/pages/music-player/detail', // 非必传
		// (废弃)设置状态栏小图标，只有 android 8.0 以上才有效，新的方式：覆盖插件目录的 android/res/drawable/music_icon.png
		icon: '/static/images/back.png',
});


const playerStore = new HYEventStore({
    //常量
    state: {
		
        music: null,
        id: 0,
        isFirstPlay: true,
        isStop: false,
        canPlay: false,
        isPlay: false,
        lycArray: [],
        currentLycIndex: 0,
        totalTime: 0,
        formatTime: '00:00',
        currentTime: '00:00',
        currentTimeMs: 0,
        lycScrollTop: 0,
        toLyc: '',
        isSliderDrag: false,
        value: 0,
        playModeIndex: 0,
        //0循环播放，1单曲播放 2随机播放
        playModeName: 'order',
        playSongList: [],
        playSongIndex: 0,
        currentSong: null,
		beforeTotalTime:0,
		isDoubleLanguage:false,
		
		isCreateNotification: false, // 是否创建了Notification
    },
    actions: {
        //这里的{id}也可以写作payload，不过payload得传个对象，拿数据的时候得是payload.id
        playMusicWithSongIdAction(state, { id, isRefresh = false }) {
            //如果播放的是同一首歌的话，我们就不再去请求音乐的API了
            //而且isRefresh为false，因为isRefresh用于强制刷新
            if (state.id === id && !isRefresh) {
                this.dispatch('changeMusicPlayState', state.isPlay);
                return;
            } //重置所有音乐变量 目的:改变音乐时会产生遗留上一首音乐的信息
			
			state.totalTime = '0';
			uni.$store.commit('setTotalTime','0')
            state.formatTime = '00:00';
			uni.$store.commit('setFormatTime','00:00')
            state.lycArray = [];
			uni.$store.commit('setLycArray',[])
			
            state.currentLycIndex = 0;
			uni.$store.commit('setCurrentLycIndex',0)
            state.lycScrollTop = 0;
            state.toLyc = '';
			uni.$store.commit('setToLyc','')
            state.currentTime = '00:00';
			uni.$store.commit('setCurrentTime','00:00')
            state.value = 0;
			uni.$store.commit('setValue',0)
			
            state.isChangeMusic = false;
			 
			uni.$store.commit('setIsChangeMusic',false)
			 
			 // 是否已经初始化了通知栏
			 let isCreateNotification =  state.isCreateNotification
			 if(!isCreateNotification){
			 	// let payload={ isCreateNotification :isCreateNotification}
			 	this.dispatch('createNotification') 
			 }
			 
			 //1.请求歌曲

            getMusicById(id).then((res) => {
                console.log(res);
                state.music = res.data;
				// console.log(store);
				console.log(uni.$store);
				uni.$store.commit('setMusic',res.data)
				
				console.log(state.music);
                state.id = id; 
				
				//更新通知栏
				this.dispatch('updateNotification')
				
				//2.请求歌词
                //如果存在歌词的链接就请求
				
                if (state.music.lyc !== null && state.music.lyc) {
                    getDIY(state.music.lyc.url).then((res) => {
                        let lyc = res.data; //方法来自于store里面的parse-lyric

                        lyc = parseLyric(lyc);
                        console.log(lyc);
						
                        state.lycArray = lyc[0];
						
						uni.$store.commit('setLycArray',lyc[0])
                    });
                } //3.开启播放

                backgroundAudioManager.stop();
				// #ifdef APP-PLUS
				 //安卓端无法正常识别带密匙的腾讯云url
				 let musicUrl =state.music.file.url
				 musicUrl =musicUrl.split("?")[0]
				 state.music.file.url=musicUrl
				 
				 backgroundAudioManager.src =musicUrl ;
				 console.log(musicUrl)
				// #endif
				
				// // #ifndef APP-PLUS
				//    backgroundAudioManager.src = state.music.file.url;
				// // #endif

				// backgroundAudioManager.src = "http://freetyst.nf.migu.cn/public/product5th/product34/2019/07/1822/2009年06月26日博尔普斯/全曲试听/Mp3_64_22_16/60054701923.mp3?channelid=02&msisdn=7439f518-dfb3-4b4f-bad1-417148e4ba7e&Tim=1654159906659&Key=1785b552502b5e63";
				// backgroundAudioManager.src = "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3";
				// backgroundAudioManager.src="https://jkmusic-1309902120.cos.ap-shanghai.myqcloud.com/020fee1f15b0f7b917ca09ff55b4e461"
           
			   
				backgroundAudioManager.title = state.music.name;
                backgroundAudioManager.autoplay = true; //修复音乐播放总时长无法正常获取的BUG
				console.log(backgroundAudioManager)
				
                backgroundAudioManager.onCanplay(this.dispatch('loadDuration')); //4.监听歌曲事件
				 
				 backgroundAudioManager.play();
				// if(backgroundAudioManager.duration>1 && backgroundAudioManager.duration<2000 ){
					
				// 	let totalTime = backgroundAudioManager.duration;
				// 	let formatTime = moment(totalTime * 1000).format('mm:ss');
				// 	state.totalTime = totalTime;
				// 	state.formatTime = formatTime; 
				// 	state.beforeTotalTime = state.totalTime
				// }
                //监听函数只需要开启一次监听就可以了，因为我们backgroundAudioManager是一直复用的
	
                if (state.isFirstPlay) {
                    this.dispatch('watchMusic');
					this.dispatch('watchNotificaiton')
                    state.isFirstPlay = false;

					
					
                }
            });
        },

        //监听音乐的函数（重要）
        watchMusic(state) {
            backgroundAudioManager.onPlay(() => {
                let isPlay = true;
                state.isPlay = isPlay; //设置全局变量isMusicPlay，isMusicPlay用于检验我们退出当前界面后我们是否点击了相同的音乐
				uni.$store.commit('setIsPlay',isPlay)
				musicNotification.playOrPause({
						playing: isPlay
				});

				// #ifndef APP-PLUS
                appInstance.globalData.isMusicPlay = true;
                appInstance.globalData.musicId = state.id;
				// #endif

            });
            backgroundAudioManager.onPause(() => {
                let isPlay = false;
                state.isPlay = isPlay; //当我们进行播放的时候我们就已经
				uni.$store.commit('setIsPlay',isPlay)
				musicNotification.playOrPause({
						playing: isPlay
				});
				
				// #ifndef APP-PLUS
                appInstance.globalData.isMusicPlay = false;
				// #endif
            }), //用于用户把小程序的背景播放给关掉的情况
                backgroundAudioManager.onStop(() => {
                    let isPlay = false;
                    state.isPlay = isPlay;
                    state.isStop = true;
					uni.$store.commit('setIsPlay',isPlay)
					musicNotification.playOrPause({
							playing: isPlay
					});
					
					// #ifndef APP-PLUS
                    appInstance.globalData.isMusicPlay = false;
					// #endif
					

                }),
                backgroundAudioManager.onTimeUpdate(
                    throttle(() => {
						console.log(backgroundAudioManager.currentTime);
                        state.currentTimeMs = backgroundAudioManager.currentTime;
                        let procent = Math.floor((backgroundAudioManager.currentTime / backgroundAudioManager.duration) * 1000) / 10; //当前时间的从s转化为min
						
                        let currentTime = moment(backgroundAudioManager.currentTime * 1000).format('mm:ss'); //不是在slider滑动状态，我们就设置data，如果在滑动我们就不设置data
						

						console.log(123,procent);
						
                        // if (Math.abs(state.value - procent) > 1.5) {
                        //     procent = state.value;
                        //     currentTime = state.currentTime;
                        // }
						let value =uni.$store.state.value
						if (Math.abs(value - procent) > 1.5) {
						    procent = value;
						    currentTime = state.currentTime;
						}
						
							
       //                  if (!state.isSliderDrag ) {
       //                      state.value = procent;
							// console.log(123);
							// uni.$store.commit('setValue',procent)
							
       //                      state.currentTime = currentTime;
							// uni.$store.commit('setCurrentTime',currentTime)
       //                  }
							let isSliderDrag =uni.$store.state.isSliderDrag
						if (!isSliderDrag) {
						    state.value = procent;
							console.log(123);
							uni.$store.commit('setValue',procent)
							
						    state.currentTime = currentTime;
							uni.$store.commit('setCurrentTime',currentTime)
						}
						 // let time=backgroundAudioManager.currentTime.toString().split('.')
                        // let timeMs=parseInt(time)*1000
                        // let min=this.transformMsToMin(timeMs)
                        // let sec=this.transformMsToSec(timeMs).toString().slice(0,2)
                        // // console.log(this.transformMsToSec(timeMs))
                        // let currentTime=this.data.formatTime.split(':')
                        // currentTime[0]=min.toString();
                        // currentTime[1]=sec.toString();
                        // currentTime=currentTime.join(':').toString()
                        //歌词根据当前时间进行滚动
                        //为什么乘1000因为我们在parse-lyric里面把以ms为单位，currentTime返回的是s，所以乘以1000

                        let musicCurrentTime = backgroundAudioManager.currentTime * 1000;
                        let lycArray = state.lycArray; //原理：找出比当前时间大的一些的歌词的位置，找到了，当前歌词的位置就在到歌词的下面
                        //如果lycArray的长度没有值的话就直接跳过
                        //注意：设置值的时候得在这一行之前，因为这里有个return，若是if()里面的成立，return后面的命令行就不会触发了

                        if (!state.lycArray.length || state.lycArray.length === 0) return;
                        let i = 0;

                        for (; i < lycArray.length; i++) {
                            let lycTime = lycArray[i][0];

                            if (musicCurrentTime < lycTime) {
                                break;
                            }
                        }

                        let currentIndex = i - 1; //如果currentIndex小于-1，当前歌词不会变蓝，所以小于0得把他设置为0（似乎不是这个原因）

                        if (currentIndex <= 0) {
                            currentIndex = 0;
                            state.currentLycIndex = currentIndex;
							uni.$store.commit('setCurrentLycIndex',currentIndex)
                        }
							
       //                  if (state.currentLycIndex !== currentIndex) {
       //                      state.currentLycIndex = currentIndex;
							// uni.$store.commit('setCurrentLycIndex',currentIndex)
       //                  }
						
						if (uni.$store.state.currentLycIndex !== currentIndex) {
						    state.currentLycIndex = currentIndex;
							uni.$store.commit('setCurrentLycIndex',currentIndex)
						}
						
						
     //                    if (state.currentLycIndex >= 0) {
     //                        //设置滚动距离，
     //                        //为什么减6？因为我们是从第7个开始滚动的，也就是中间的这个位置
					// 		// let redioDevice =uni.upx2px(10)/10
					// 		let redioDevice =0.5
					// 		// let redioDevice = uni.getSystemInfo().devicePixelRatio
							
					
					// 		// let redioDevice =0.7
					// 		let isDoubleLanguage = state.isDoubleLanguage
							
							
							
     //                        state.lycScrollTop = isDoubleLanguage?(state.currentLycIndex - 0) * 167 * redioDevice:(state.currentLycIndex - 0) * 72 * redioDevice
							
     //                        state.toLyc = 'Lyc' + state.currentLycIndex;
							
					// 		uni.$store.commit('setToLyc','Lyc' + uni.$store.state.currentLycIndex)
     //                    }
						
						if (uni.$store.state.currentLycIndex  >= 0) {
						    //设置滚动距离，
						    //为什么减6？因为我们是从第7个开始滚动的，也就是中间的这个位置
							// let redioDevice =uni.upx2px(10)/10
							let redioDevice =0.5
							// let redioDevice = uni.getSystemInfo().devicePixelRatio
							
											
							// let redioDevice =0.7
							let isDoubleLanguage = state.isDoubleLanguage
							
							
							
						 //    state.lycScrollTop = isDoubleLanguage?(state.currentLycIndex - 0) * 167 * redioDevice:(state.currentLycIndex - 0) * 72 * redioDevice
							
						 //    state.toLyc = 'Lyc' + state.currentLycIndex;
							
							uni.$store.commit('setToLyc','Lyc' + uni.$store.state.currentLycIndex)
						}
                    }, 50)
                ), //监听播放结束的事件
                backgroundAudioManager.onEnded(() => {
                    //切换音乐
                    this.dispatch('changePlayMusicToNextMusicOrPreMusic', true);
                });
        },

        //用于进行音乐状态的改变
        changeMusicPlayState(state, isPlay = true) {
            state.isPlay = isPlay; //如果用户把微信判断的背景音乐窗口关闭了
			uni.$store.commit('setIsPlay',isPlay)

				
            if (state.isPlay && state.isStop && !uni.$store.state.isChangeMusic) {
                backgroundAudioManager.src = state.music.file.url;
                backgroundAudioManager.title = state.music.name; //如果关了窗口如何让用户回到原来播放的位置
                //我们需要的是秒

                backgroundAudioManager.startTime = state.currentTimeMs / 1000;
                state.isStop = false;
            }

            if (state.isPlay) {
				console.log('正在播放');
				console.log(backgroundAudioManager)
                backgroundAudioManager.play();
	
            } else {
				console.log('暂停');
				console.log(backgroundAudioManager)
                backgroundAudioManager.pause();
				
            }
        },

        //切换下一首/切换上一首，切换参数isNext
        //若isNext=ture就是切换下一首，为false就是切换上一首
        changePlayMusicToNextMusicOrPreMusic(state, isNext = true) {
            console.log(state.playSongList);
            console.log(state.playSongList.length); //1.获取当前音乐的索引

            let currentIndex = uni.$store.state.playSongIndex; //2.根据不同的模式播放不同的音乐

            switch (uni.$store.state.playModeIndex) {
                case 0:
                    //顺序播放
                    currentIndex = isNext ? currentIndex + 1 : currentIndex - 1; //如果当前的的索引到了playSongList的长度，就让index置为0

                    if (currentIndex > uni.$store.state.playSongList.length - 1) {
                        currentIndex = 0;
                    }

                    if (currentIndex < 0) {
                        currentIndex = uni.$store.state.playSongList.length - 1;
                    }

                    break;

                case 1:
                    //单曲播放
                    currentIndex = currentIndex;
                    break;

                case 2:
                    //随机播放
                    currentIndex = Math.floor(Math.random() * uni.$store.state.playSongList.length);
                    break;
                //如果随机到的数字还是我们当前播放的音乐就再随机一次
            } //3.获取当前歌曲

            let currentSong = uni.$store.state.playSongList[currentIndex]; //如果没有playSongList
			uni.$store.commit('setPlaySongIndex',currentIndex)
            if (!currentSong) {
                currentSong =  uni.$store.state.currentSong;
            } //如果有歌曲
            else {
                //设置新的索引 若不设置，就点击下一首只能生效一次
                state.playSongIndex = currentIndex;
				uni.$store.commit('setPlaySongIndex',currentIndex)
            } //4.播放新的歌曲

            let playload = {
                id: currentSong.id,
                isRefresh: true
            };
            this.dispatch('playMusicWithSongIdAction', playload); //判断是否是跳转的

            state.isChangeMusic = true;
			uni.$store.commit('setIsChangeMusic',true)
        },

        //快进30s
        changePlayMusicToQuickOrSlow30s(state, isQuick = true) {
            let musicCurrentTime = backgroundAudioManager.currentTime;

            if (isQuick) {
                let newCurrentTime = musicCurrentTime + 30;
                let newValue = Math.floor((newCurrentTime / backgroundAudioManager.duration) * 1000) / 10;
                let currentTime = moment(newCurrentTime * 1000).format('mm:ss'); // console.log(currentTime)
                // console.log(currentTime,newCurrentTime)

                backgroundAudioManager.seek(newCurrentTime);
                state.value = newValue;
				uni.$store.commit('setValue',newValue)
                state.currentTime = currentTime;
				uni.$store.commit('setCurrentTime',currentTime)
            } else {
                let newCurrentTime = musicCurrentTime - 30;
                let newValue = Math.floor((newCurrentTime / backgroundAudioManager.duration) * 1000) / 10;
                let currentTime = moment(newCurrentTime * 1000).format('mm:ss'); // console.log(currentTime,newCurrentTime)

                backgroundAudioManager.seek(newCurrentTime);
                state.value = newValue;
				uni.$store.commit('setValue',newValue)
				
                state.currentTime = currentTime;
				uni.$store.commit('setCurrentTime',currentTime)
				
            }
        },

        //在歌曲列表弹框，点击跳转
        changeCurrentMusic(state, musicIndex) {
            //获取当前的音乐索引后面会用来比对
            const currentIndex = uni.$store.state.playSongIndex;

            if (currentIndex === musicIndex) {
                return;
            } //1.把当前音乐的索引改为我们要跳转的音乐的索引

            state.playSongIndex = musicIndex; //2.获取我们要跳转的音乐歌曲
			uni.$store.commit('setPlaySongIndex',musicIndex)
            // let currentSong = state.playSongList[musicIndex]; //如果没有playSongList
			let currentSong = uni.$store.state.playSongList[musicIndex]; //如果没有playSongList
            if (!currentSong) {
                currentSong = uni.$store.state.currentSong;
            } //如果有歌曲
            else {
                //设置新的索引 若不设置，就点击下一首只能生效一次
                state.playSongIndex = musicIndex;
				uni.$store.commit('setPlaySongIndex',musicIndex)
            } //3.播放新的歌曲

            let playload = {
                id: currentSong.id,
                isRefresh: true
            };
            this.dispatch('playMusicWithSongIdAction', playload); //判断是否是跳转的

            state.isChangeMusic = true;
			uni.$store.commit('setIsChangeMusic',true)
        },

        //删除列表中的当前元素
        deleteMusicListCurrentMusic(state, musicIndex) {
            console.log(musicIndex);
            console.log(state.playSongList);
            console.log(state.playSongIndex); //必须是不等于undefined 不然为0的时候他就工作了

            let playSongList = state.playSongList; //当前播放的音乐的索引

            let CurrentMusicIndex = state.playSongIndex;

            if (musicIndex !== undefined) {
                playSongList.splice(musicIndex, 1); //不设置为空，页面无法监听到

                state.playSongList = [];
                state.playSongList = playSongList; //要被删除的索引在播放的音乐的上面

                if (musicIndex < CurrentMusicIndex) {
                    state.playSongIndex = CurrentMusicIndex - 1;
                } //要被删除的索引就是播放的音乐

                if (musicIndex === CurrentMusicIndex) {
                    state.playSongIndex = CurrentMusicIndex;
                    let newCurrentSong = state.playSongList[CurrentMusicIndex];
                    let playload = {
                        id: newCurrentSong.id,
                        isRefresh: true
                    };
                    this.dispatch('playMusicWithSongIdAction', playload); //判断是否是跳转的

                    state.isChangeMusic = true;
					uni.$store.commit('setIsChangeMusic',true)
                }
            }
        },

        //将歌曲放入我们的播放列表中
        addNewMusicToPlayList(state, { item }) {
            let musicItem = item;
		
            console.log(musicItem);

            if (musicItem) {
                //拿到当前的音乐列表
                let currentPlayList = uni.$store.state.playSongList; //查找是否音乐列表中有该音乐

                let musicItemIndex = currentPlayList.findIndex((item) => {
                    return item.id === musicItem.id;
                });
                console.log(musicItemIndex); //音乐列表中有该音乐

                if (musicItemIndex !== -1) {
                    state.playSongIndex = musicItemIndex;
					uni.$store.commit('setPlaySongIndex',musicItemIndex)
                    let newCurrentSong = state.playSongList[musicItemIndex];
                    let playload = {
                        id: newCurrentSong.id,
                        isRefresh: true
                    };
                    this.dispatch('playMusicWithSongIdAction', playload);
                } else {
                    //如果没有音乐列表中没有该音乐
                    //将当前的音乐放入到播放列表的首位
                    currentPlayList.unshift(musicItem); //点击这个item之后就把他放进我们的播放列表中

                    state.playSongList = [];
					
                    state.playSongList = currentPlayList;
					uni.$store.commit('setPlaySongList',currentPlayList)
                    state.playSongIndex = 0;
					uni.$store.commit('setPlaySongIndex',0)
                }
            }
        },

        //将音乐列表存放到storage
        saveMusicListIntoStorage(state) {
			console.log(uni.$store.state.playSongList);
            let playSongList = uni.$store.state.playSongList;
            console.log(playSongList);

            if (playSongList.length !== 0) {
                uni.setStorageSync('playSongList', playSongList);
            }
			console.log('storage',uni.getStorageSync('playSongList'));
            console.log(playSongList);
        },

        //被调用的子函数
        //用于修复音乐播放总时长无法正常获取的BUG
        loadDuration(state) {
            setTimeout(() => {
				
				let totalTime = backgroundAudioManager.duration;
				//为什么要加不等于5832.704 因为App端有获取时间BUG，明明有正常的duration时间但是偏要显5832.704
                if (totalTime > 20 &&  totalTime < 2000) {
                    console.log(totalTime);
                  
					// if (totalTime> 2000) {
					// 	 this.dispatch('loadDuration');
					// }
					
                    let formatTime = moment(totalTime * 1000).format('mm:ss');
                    state.totalTime = totalTime;
					uni.$store.commit('setTotalTime',totalTime)
                    state.formatTime = formatTime; //有些時候還是會查不出來所以我們需要再查一次
					
					uni.$store.commit('setFormatTime',formatTime)

					
                    if ( state.beforeTotalTime !== state.totalTime) {
						
						
						// #ifdef APP-PLUS
							state.beforeTotalTime = state.totalTime
							clearTimeout();
						// #endif
						
						// // #ifdef APP-PLUS
						// 	state.beforeTotalTime = state.totalTime
						// 	appInstance.globalData.musicTotalTime = state.totalTime;
						// 	clearTimeout();
						// // #endif
                    } else {
						// #ifdef APP-PLUS
							state.beforeTotalTime =0
						// #endif
						
						// // #ifndef APP-PLUS
      //                   appInstance.globalData.musicTotalTime = 0;
						// state.beforeTotalTime =0
						// // #endif
						
                        this.dispatch('loadDuration');
                    }
                } else {
                    this.dispatch('loadDuration');
                }
            }, 100);
        },
		
	//创建通知栏
	createNotification(state){
			console.log('创建');
			// 创建通知栏，要创建通知栏成功才能做别的操作
			return new Promise((resolve, reject) => {
				musicNotification.createNotification(() => {
					state.isCreateNotification = true;
					resolve();
				})
			})

	},
	//更新通知栏
	updateNotification(state){
		console.log('更新');
		let music=state.music
		let artist =music.artistVoList.map((item)=>{
			return item.name
		})
		artist=artist.join('/')
		console.log(artist);
		
		console.log(music);
		console.log(music.file.url);
		let NotificationRes = musicNotification.update({
			//歌曲名字
			songName: music.name,
			//专辑名字
			artistsName: artist,
			//专辑图片
			picUrl: music.photo.url,
			//搜藏
			favour:true,
		});
		
		switch (NotificationRes.code) {
			case -1: //未知错误
				console.log("未知错误");
				return;
			case -2: //没有权限
				musicNotification.openPermissionSetting(); //没有权限，跳转设置页面
				return;
		}
		
	 },
	 watchNotificaiton(state){
			// 监听暂停或播放按钮事件回调
			plus.globalEvent.addEventListener('musicNotificationPause', (event) => {
				console.log("暂停或播放按钮事件回调", event);
				console.log('转换');
				let isPlay=!state.isPlay
				this.dispatch('changeMusicPlayState',isPlay)
			});
			// 监听播放上一首按钮事件回调
			plus.globalEvent.addEventListener('musicNotificationPrevious', (event) => {
				console.log("播放上一首按钮事件回调", event);
				this.dispatch('changePlayMusicToNextMusicOrPreMusic',false)
				
			});
			// 监听播放下一首按钮事件回调
			plus.globalEvent.addEventListener('musicNotificationNext', (event) => {
				console.log("播放下一首按钮事件回调", event);
				this.dispatch('changePlayMusicToNextMusicOrPreMusic',true)
			});
			
			// 监听耳机事件回调，注意只能在应用播放音乐的时候才能接收到事件
			plus.globalEvent.addEventListener('musicMediaButton', (event) => {
				console.log("耳机按钮事件回调", event);

				switch (e.type) {
					case 'headset':
						// 有线耳机事件 拔出： 0, 插入：1
						if (e.keyCode === 0) {
							this.dispatch('changeMusicPlayState',false)
						}
						break;
					case 'bluetooth':
						// 蓝牙耳机事件 断开： 0, 打开：1，连接：2
						if (e.keyCode === 0) {
							this.dispatch('changeMusicPlayState',false)
						}
						break;
					case 'mediaButton':
						// 耳机按键事件，如果有的耳机按键按了没反应，不要怀疑是插件问题，插件已经把事件直接返回了，没有事件，那就是耳机根本没发起事件
						switch (e.keyCode) {
							//转换播放
							case 79:
								/** 谷歌原文 Key code constant: Headset Hook key. Used to hang up calls and stop media. */
								let isPlay=!state.isPlay
								this.dispatch('changeMusicPlayState',isPlay)
								break;
							//下一首
							case 87:
								/** 谷歌原文 Key code constant: Play Next media key. */
								this.dispatch('changePlayMusicToNextMusicOrPreMusic',true)
								break;
							//上一首
							case 88:
								/** 谷歌原文 Key code constant: Play Previous media key. */
								this.dispatch('changePlayMusicToNextMusicOrPreMusic',false)
								break;
							//播放
							case 126:
								/** 谷歌原文 Key code constant: Play media key. */
								this.dispatch('changeMusicPlayState',true)
								break;
							//暂停
							case 127:
								/** 谷歌原文 Key code constant: Pause media key. */
								this.dispatch('changeMusicPlayState',false)
								break;
						}
						break;
				}
			});

	 },
	 //关闭通知栏
	 closeNotificaiton(state){
		state.isCreateNotification = false;
		musicNotification.cancel();
		setTimeout(function() {
			plus.runtime.quit();
		}, 100)
	 },
    }
});
export { backgroundAudioManager, playerStore };
