import { backgroundAudioManager, playerStore } from './player-store';
import { parseLyric, debounce, throttle } from './parse-lyric';
export { backgroundAudioManager, playerStore, parseLyric, debounce, throttle };


import Vue from 'vue'
import Vuex from 'vuex'
import moment from '@/miniprogram_npm/moment';

Vue.use(Vuex);


const musicNotification = uni.requireNativePlugin('XZH-musicNotification');



musicNotification.init({
		//点击通知栏跳转页面
		path: '/pages/music-player/detail', // 非必传
		// (废弃)设置状态栏小图标，只有 android 8.0 以上才有效，新的方式：覆盖插件目录的 android/res/drawable/music_icon.png
		icon: '/static/images/back.png',
});

export default new Vuex.Store({
    state: {
        hasLogin: false, // 登录状态
        userInfo: {}, // 用户信息
		
		music:null,
		formatTime:'00:00',
		currentTime:'00:00',
		totalTime:0,
		value: 0,
		isSliderDrag:false,
		isPlay: false,
		lycArray:[],
		currentLycIndex:0,
		toLyc:'',
		isDoubleLanguage:false,
		playSongList:[],
		playSongIndex:0,
		playModeIndex: 0,
		
		currentSong: null,
		isChangeMusic:false,
		isFirstPlay: true,
		isCreateNotification:false
    },
    mutations: {
        setHasLogin(state, value){
            state.hasLogin = value
            console.log(state.hasLogin)
        },
		setMusic(state,value){
			state.music=value
			console.log('vuexMusic',state.music);
		},
		setFormatTime(state,value){
			state.formatTime=value
			console.log('vuexFormatTime',state.formatTime);
		},
		setValue(state,value){
			state.value=value
			console.log(state.value);
		},
		setCurrentTime(state,value){
			state.currentTime=value
			console.log(state.currentTime);
		},
		setTotalTime(state,value){
			state.totalTime=value
			console.log(state.totalTime);
		},
		setIsSliderDrag(state,value){
			state.isSliderDrag=value
			console.log(state.isSliderDrag);
		},
		setIsPlay(state,value){
			state.isPlay=value
			console.log(state.isPlay);
		},
		setLycArray(state,value){
			state.lycArray=value
		},
		setCurrentLycIndex(state,value){
			state.currentLycIndex=value
		},
		setToLyc(state,value){
			state.toLyc=value
		},
		setIsDoubleLanguage(state,value){
			state.isDoubleLanguage=value
		},
		setPlaySongList(state,value){
			state.playSongList=value
		},
		setPlaySongIndex(state,value){
			state.playSongIndex=value
		},
		setIsChangeMusic(state,value){
			state.isChangeMusic=value
		},
		setPlayModeIndex(state,value){
			state.playModeIndex=value
		},
		setIsFirstPlay(state,value){
			state.isFirstPlay=value
		},
		setIsCreateNotification(state,value){
			state.isCreateNotification=value
		}
    },
    actions: {
		createNotification(state){
				console.log('创建');
				// 创建通知栏，要创建通知栏成功才能做别的操作
				return new Promise((resolve, reject) => {
					musicNotification.createNotification(() => {
						musicNotification.switchNotification(true);
						state.isCreateNotification = true;
						resolve();
					})
				})
		},
		
		//更新通知栏
		updateNotification(state){
			console.log('更新');
			let music=uni.$store.state.music
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
		changeNotificaitonPlayState(state,{isPlay}){
			musicNotification.playOrPause({
					playing: isPlay
			});
		},
		watchNotificaiton(state){
					// 监听暂停或播放按钮事件回调
					plus.globalEvent.addEventListener('musicNotificationPause', (event) => {
						console.log("暂停或播放按钮事件回调", event);
						console.log('转换');
						let isPlay=!uni.$store.state.isPlay
						playerStore.dispatch('changeMusicPlayState',isPlay)
					});
					// 监听播放上一首按钮事件回调
					plus.globalEvent.addEventListener('musicNotificationPrevious', (event) => {
						console.log("播放上一首按钮事件回调", event);
						playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic',false)
						
					});
					// 监听播放下一首按钮事件回调
					plus.globalEvent.addEventListener('musicNotificationNext', (event) => {
						console.log("播放下一首按钮事件回调", event);
						playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic',true)
					});
					
					// 监听耳机事件回调，注意只能在应用播放音乐的时候才能接收到事件
					plus.globalEvent.addEventListener('musicMediaButton', (event) => {
						console.log("耳机按钮事件回调", event);
		
						switch (e.type) {
							case 'headset':
								// 有线耳机事件 拔出： 0, 插入：1
								if (e.keyCode === 0) {
									playerStore.dispatch('changeMusicPlayState',false)
								}
								break;
							case 'bluetooth':
								// 蓝牙耳机事件 断开： 0, 打开：1，连接：2
								if (e.keyCode === 0) {
									playerStore.dispatch('changeMusicPlayState',false)
								}
								break;
							case 'mediaButton':
								// 耳机按键事件，如果有的耳机按键按了没反应，不要怀疑是插件问题，插件已经把事件直接返回了，没有事件，那就是耳机根本没发起事件
								switch (e.keyCode) {
									//转换播放
									case 79:
										/** 谷歌原文 Key code constant: Headset Hook key. Used to hang up calls and stop media. */
										let isPlay=!state.isPlay
										playerStore.dispatch('changeMusicPlayState',isPlay)
										break;
									//下一首
									case 87:
										/** 谷歌原文 Key code constant: Play Next media key. */
										playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic',true)
										break;
									//上一首
									case 88:
										/** 谷歌原文 Key code constant: Play Previous media key. */
										playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic',false)
										break;
									//播放
									case 126:
										/** 谷歌原文 Key code constant: Play media key. */
										playerStore.dispatch('changeMusicPlayState',true)
										break;
									//暂停
									case 127:
										/** 谷歌原文 Key code constant: Pause media key. */
										playerStore.dispatch('changeMusicPlayState',false)
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
		 
		 //切换下一首/切换上一首，切换参数isNext
		 //若isNext=ture就是切换下一首，为false就是切换上一首
		 changePlayMusicToNextMusicOrPreMusic(state, isNext = true) {
		     // console.log(state.playSongList);
		     // console.log(state.playSongList.length); //1.获取当前音乐的索引
		 
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
		 	// uni.$store.commit('setPlaySongIndex',currentIndex)
		     if (!currentSong) {
		         currentSong =  uni.$store.state.currentSong;
		     } //如果有歌曲
		     else {
		         //设置新的索引 若不设置，就点击下一首只能生效一次
		         // state.playSongIndex = currentIndex;
		 		uni.$store.commit('setPlaySongIndex',currentIndex)
		     } //4.播放新的歌曲
		 
		     let playload = {
		         id: currentSong.id,
		         isRefresh: true
		     };
		     playerStore.dispatch('playMusicWithSongIdAction', playload); //判断是否是跳转的
		 
		     state.isChangeMusic = true;
		 	// uni.$store.commit('setIsChangeMusic',true)
		 },
		 
		 watchMusic(state) {
		        backgroundAudioManager.onPlay(() => {
		            let isPlay = true;
		            state.isPlay = isPlay; //设置全局变量isMusicPlay，isMusicPlay用于检验我们退出当前界面后我们是否点击了相同的音乐
		 				uni.$store.commit('setIsPlay',isPlay)
		 				// console.log(uni.$store.state.CurrentMusicIndex);
		 				// musicNotification.playOrPause({
		 				// 		playing: isPlay
		 				// });
		 				uni.$store.dispatch('changeNotificaitonPlayState',{isPlay})
		 				//更新通知栏
		 				// this.dispatch('updateNotification')
		 				uni.$store.dispatch('updateNotification')
		 				
		 				// #ifndef APP-PLUS
		            appInstance.globalData.isMusicPlay = true;
		            appInstance.globalData.musicId = state.id;
		 				// #endif
		 
		        });
		        backgroundAudioManager.onPause(() => {
		            let isPlay = false;
		            state.isPlay = isPlay; //当我们进行播放的时候我们就已经
		 				uni.$store.commit('setIsPlay',isPlay)
		 				uni.$store.dispatch('changeNotificaitonPlayState',{isPlay})
		 				// musicNotification.playOrPause({
		 				// 		playing: isPlay
		 				// });
		 				
		 				// #ifndef APP-PLUS
		            appInstance.globalData.isMusicPlay = false;
		 				// #endif
		        }), //用于用户把小程序的背景播放给关掉的情况
		            backgroundAudioManager.onStop(() => {
		                let isPlay = false;
		                state.isPlay = isPlay;
		                state.isStop = true;
		 					uni.$store.commit('setIsPlay',isPlay)
		 					uni.$store.dispatch('changeNotificaitonPlayState',{isPlay})
		 					// musicNotification.playOrPause({
		 					// 		playing: isPlay
		 					// });
		 					
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
		 							currentTime = uni.$store.state.currentTime
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
		                    let lycArray =uni.$store.state.lycArray; //原理：找出比当前时间大的一些的歌词的位置，找到了，当前歌词的位置就在到歌词的下面
		 						
		 						
		 						
		 						//如果lycArray的长度没有值的话就直接跳过
		                    //注意：设置值的时候得在这一行之前，因为这里有个return，若是if()里面的成立，return后面的命令行就不会触发了
		 
		                    if (!lycArray.length || lycArray.length === 0) return;
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
		            backgroundAudioManager.onEnded(debounce(() => {
		                //切换音乐
		                // this.dispatch('changePlayMusicToNextMusicOrPreMusic', true);
		 					uni.$store.dispatch('changePlayMusicToNextMusicOrPreMusic',true) 
		            },500));
		 				
		    },
		 
		 
	},
	
	
	
    getters: {}
})