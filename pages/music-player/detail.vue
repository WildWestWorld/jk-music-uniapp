<template>

    <block>
		<view v-if="music">
			
		
		<JKNavigator title="NOW PLAYING" :navMarginTop="navMarginTop" :navHeight="navHeight" :menuButtonRightPadding="menuButtonRightPadding"  :backToIndexPage="false"></JKNavigator>
		
        <!-- 1.背景 -->
        <!-- 图片设置mode="aspectFill"属性（保持宽高比例，图片充满，超出裁剪） -->
        <image class="bg-image" mode="aspectFill" :src="music.photo.url || '../../images/test.png'" ></image>
        <view class="bg-cover"></view>

        <!-- 音乐播放列表 -->
        <!-- 展示音乐时出现的灰色的背景 -->
        <view class="maskBgc" v-if="showMusicList" @tap="changeShowMusicListState"></view>
        <!-- 用于展示音乐歌单 -->

        <view class="real-music-list" :style="'transform:translate(0%,' + (showMusicList ? '0vh' : '60vh') + ');'">
            <view class="music-list-container">
                <view class="music-list-title">
                    当前播放
                    <text class="musicListLength">({{ playSongList.length}})</text>
                </view>

                <scroll-view class="musicListSrcoll" scroll-y :show-scrollbar="false" :enhanced="true" :scroll-into-view="'currentMusic' + playSongIndex">
                    <view class="musicItem" :id="'currentMusic' + index" :data-index="index" @tap="changeCurrentMusic" v-for="(item, index) in playSongList" :key="index">
                        <view class="music-info-container">
                            <view :class="playSongIndex === index ? 'current-music-name' : 'music-name'">{{ item.name }}</view>
                            <view :class="playSongIndex === index ? 'current-artist-name' : 'artist-name'">-{{ map.getNameList(item.artistVoList) || '' }}</view>
                        </view>

                        <view class="delete-icon-container">
                            <view class="delete-icon" @tap.stop.prevent="deleteMusicListCurrentMusic" :data-index="index">×</view>
                        </view>
                    </view>
                </scroll-view>

                <view class="music-list-bottom"></view>
            </view>
        </view>

        <!-- 内容 -->
        <!-- <view class="page" style="height:{{contentHeight}}px;top:{{contentTop}}px"> -->
        <view class="page" :style="'height:100vh;top:' + contentTop + 'px'">
			
            <view class="music-player-container">
                <!-- 图片 -->
                <view class="img-container">
                    <view>
                        <image :src="music.photo.url || '../../images/test.png'" class="musicImg" @tap="changeLrcState" v-if="showLrc === false"></image>
                        <view class="lyc-container" @tap="changeLrcState" v-if="showLrc === true">
                            <scroll-view scroll-y :show-scrollbar="false" :enhanced="true" :scroll-top="lycScrollTop" >
                                <view class="decorate">1</view>
                                <view class="decorate">1</view>
                                <view class="decorate">1</view>
                                <view class="decorate">1</view>
                                <view class="decorate">1</view>
                                <view class="decorate">1</view>



                                <view  :class="isDoubleLanguage?'lyc-item-for-double-container':'lyc-item-for-container' "  :id="'Lyc' + index" v-for="(item, index) in lycArray" :key="index" >
									<view class="lyc-item-container" >
										<view :class="currentLycIndex === index ? 'currentLyc' : ''" style="" >
											{{ item[1] }}
										</view>
																		
										<view :class="currentLycIndex === index ? 'currentChineseLyc' : ''" v-if="item[2]">
											{{ item[2] }}
										</view>
									</view>

								   
                                </view>
								


								
                            </scroll-view>
                        </view>
                        <view class="shrinked-lyc-container" @tap="changeLrcState" v-if="showLrc === false">
                            <view class="shrinked-scroll-container">
                                <scroll-view scroll-y :show-scrollbar="false" :enhanced="true" :scroll-into-view="toLyc">
                                    <view :class="currentLycIndex === index ? 'currentLyc' : ''" :id="'Lyc' + index" v-for="(item, index) in lycArray" :key="index">
                                       {{ item[1] }} 
										
                                    </view>
									
                                </scroll-view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="function-icon-container">
                    <!-- 歌曲名字/歌手名字 -->
                    <view class="text-container">
                        <view>
                            <view class="music-name-container">
                                <text>{{ music.name }}</text>
                            </view>

                            <view class="album-name-container" v-if="music.albumVoList.length !== 0">
                                <text>{{ map.getNameList(music.albumVoList) || '' }}</text>
                            </view>

                            <view class="artist-name-container" v-if="music.artistVoList.length !== 0">
                                <text>{{ map.getNameList(music.artistVoList) || '' }}</text>
                            </view>
                        </view>
                    </view>
                    <!-- 音乐播放进度条 -->
                    <view class="time-code-solider">
                        <!-- <view class="progress">
      
        <view class="progress-bar" style="width:{{value}}%;">
       

        </view>
      </view> -->
                        <view class="slider-container">
                            <view>
                                <slider
                                    class="slider"
                                    :block-size="blockSize"
                                    selected-color="rgba(16, 93, 251,1)"
                                    backgroundColor=" rgba(16, 93, 251,0.4)"
                                    block-color="rgba(255, 255, 255, 0.75)"
                                    :value="value"
                                    @change="handleSliderChange"
                                    @changing="handleSliderDrag"
                                ></slider>
                            </view>
                        </view>

                        <view class="time-container">
                            <view class="current-time">{{ currentTime || '00:00' }}</view>
                            <view class="total-time">{{ formatTime || '00:00' }}</view>
                        </view>
                    </view>

                    <!-- 播放按钮区域 -->
                    <view class="play-icon-container">
                        <view class="back" @tap="changePlayMusicToSlow30s">
                            <view>
                                <image src="/static/images/reback.png" alt="" />
                            </view>
                        </view>

                        <view class="previous-music" @tap="changePlayMusicToPreMusic">
                            <view>
                                <image src="/static/images/previous-music.png" alt="" />
                            </view>
                        </view>

                        <view class="play-music" @tap="changePlayState">
                            <view>
                                <image :src="isPlay ? '/static/images/play-music-pause.png' : '/static/images/play-music-play.png'" alt="" />
                            </view>
                        </view>
                        <view class="next-music" @tap="changePlayMusicToNextMusic">
                            <view>
                                <image src="/static/images/next-music.png" alt="" />
                            </view>
                        </view>
                        <view class="forward" @tap="changePlayMusicToQuick30s">
                            <view>
                                <image src="/static/images/forward.png" alt="" />
                            </view>
                        </view>
                    </view>
                    <!-- 喜欢/设置按钮区域 -->
                    <view class="like-icon-container">
                        <view class="like">
                            <view>
                                <image src="/static/images/like.png" alt="" />
                            </view>
                        </view>

                        <view class="ramdom-play">
                            <view>
                                <image
                                    @tap="changePlayModeIndexToRadom"
                                    :src="playModeIndex === 2 ? '/static/images/ramdom-play-click.png' : '/static/images/ramdom-play-unclick.png'"
                                    alt=""
                                />
                            </view>
                        </view>

                        <view class="single-circle-play">
                            <view>
                                <image
                                    @tap="changePlayModeIndexToSingleCricle"
                                    :src="playModeIndex === 1 ? '/static/images/single-circle-click.png' : '/static/images/single-circle-unclick.png'"
                                    alt=""
                                />
                            </view>
                        </view>

                        <view class="list-circle-play">
                            <view>
                                <image
                                    @tap="changePlayModeIndexToListCricle"
                                    :src="playModeIndex === 0 ? '/static/images/list-circle-click.png' : '/static/images/list-circle-unclick.png'"
                                    alt=""
                                />
                            </view>
                        </view>

                        <view class="music-list" @tap="changeShowMusicListState">
                            <view>
                                <image :src="showMusicList ? '/static/images/play-list-click.png' : '/static/images/play-list-unclick.png'" alt="" />
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
	  </view>
    </block>
</template>
<script module="map" lang="wxs" src="./map.wxs"></script>
<script>
import JKNavigator from '../../components/common/JKNavigator/index';
import JKNavigatorV2 from '../../components/common/JKNavigatorV2/index';
import { get, getDIY } from '../../api/request';
import { getMusicById } from '../../api/music';
import { backgroundAudioManager, debounce, parseLyric, playerStore, throttle } from '../../store/index';
import moment from '@/miniprogram_npm/moment';
const app = getApp();
const playModeNames = ['order', 'repeat', 'random']; //！！！！！！！！！！！
// 该页面的大部分的逻辑代码都转移到了store/plaer-store了，留下来的都是原稿

export default {
    components: {
        JKNavigator,
        JKNavigatorV2
    },
    data() {
        return {
            value: 0,
            music: null,
            isPlay: false,
            totalTime: 0,
            formatTime: '00:00',
            currentTime: '00:00',
            canPlay: false,
            percent: 0,
            showLrc: false,
            lycArray: [],
            currentLycIndex: 0,
            lycScrollTop: 0,
            musicSrc: null,
            musicName: null,
            musicId: null,
            toLyc: '',
            showMusicList: false,
            contentHeight: 0,

            //需要下移的高度
            contentTop: 0,

            deviceRadio: 0,
            isSliderDrag: false,
            playModeIndex: 0,
            playModeName: 'order',
            playSongList: [],
            playSongIndex: 0,
            toCurrentMusic: '',
            toView: '',
            id: '',
            url: '',
			showNavigator:false,
			
			
			navBoxHeight: 0,
			
			//导航栏的盒子高度
			statusBarHeight: 0,
			
			// 状态栏高度
			navMarginTop: 0,
			
			// 导航栏上边距/胶囊按钮的上边距
			navHeight: 0,
			
			// 导航栏高度
			navWidth: 0,
			
			// 导航栏宽度
			menuButtonRightPadding: 0,
			
			//进度条滑块的大小
			blockSize:0,
			
			//是否为双语歌词
			isDoubleLanguage:false
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // 整体的业务逻辑已经转移到store里面的player-store文件里面去了
    onLoad(options) {
		// 根据微信小程序的右上侧的胶囊样式 设置导航栏内容的高度
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		this.calculateMenuAndStatusBar()
		// #endif
		
		// 根据微信小程序的右上侧的胶囊样式 设置导航栏内容的高度
		// #ifdef H5 || APP-PLUS || MP-ALIPAY
		
		let redioDevice =uni.upx2px(10)/10
		
		this.navMarginTop=24
		this.navHeight= 32
		this.menuButtonRightPadding=7
		this.blockSize=20/2/redioDevice
		// #endif


		// this.calculateMenuAndStatusBar()
        //获取播放模式
        let playModeIndex = uni.getStorageSync('playModeIndex');

        if (playModeIndex) {
            this.setData({
                playModeIndex
            });
        } else {
            this.setData({
                playModeIndex: 0
            });
            uni.setStorageSync('playModeIndex', 0);
            playerStore.setState('playModeIndex', 0);
        } //监听和获取歌曲的信息
		
		
        this.watchPlayerStoreListener(); //计算页面容器的高度

        const info = uni.getSystemInfoSync(); //整个屏幕的高度

        let sreenHeight = app.globalData.sreenHeight || info.screenHeight; // 状态栏 + 胶囊按钮边距

        let navMarginTop = app.globalData.navMarginTop; //胶囊按钮的高度

        let navHeight = app.globalData.navHeight; //页面的高度

        let contentHeight = sreenHeight - navMarginTop - navHeight; //页面排除胶囊按钮后的高度

        let contentTop = navMarginTop + navHeight; //像素比

        let deviceRadio = app.globalData.deviceRadio;
        console.log(contentHeight, sreenHeight, navMarginTop, navHeight);
        this.setData({
            contentHeight,
            contentTop,
            deviceRadio
        });
		
		
		// #ifdef H5 || APP-PLUS || MP-ALIPAY
		
		this.contentTop=56
			
		// #endif
		
        console.log(this.deviceRadio);
        console.log(options);
        let isNowPlayMusic = this.musicIsNowPlayMusic(options.id);
        console.log(isNowPlayMusic);

        if (isNowPlayMusic) {
            this.changeMusicIsPlay(true);
        }

        if (options.id) {
            console.log(`/music/${options.id}`); // getMusicById(options.id).then(res=>{
            //   console.log(res)
            //   this.setData({
            //     music:res.data
            //   })

            console.log(this.music); //创建一个可以后台播放的audio 并且绑定到this上，这样我们就可以在任意位置调用该audio的方法和属性
            //上面的是我们以前使用的方法，现在我们使用Store里面的文件来引入一个backgroundAudioManager
            //这样就不用this.backgroundAudioManager 而是直接使用
            //修改：现在引入的方法并不好用该为原来的方法
            // this.backgroundAudioManager= wx.getBackgroundAudioManager()
            // this.backgroundAudioManager.stop();
            // this.backgroundAudioManager.src=this.data.music.file.url;
            // this.backgroundAudioManager.title=this.data.music.name
            //为了处理组件运行了一个歌曲，再运行时显示的长度是上一首歌曲的时间长度
            // if(appInstance.globalData.musicTotalTime=this.data.totalTime){
            //   this.loadDuration()
            // }
            //设置音乐的访问地址和名字和id
            // this.setData({
            //   musicSrc:this.data.music.file.url,
            //   musicName:this.data.music.name,
            //   musicId:this.data.music.id
            // })

            console.log(this.totalTime); //判断此时的页面是是否是我们之前播放的页面
            //音乐播放进度条的更新
            // this.musicProcessTimeUpdate()
            //音乐的更新状态函数
            // this.watchMusic()
            // this.musicOnEnd()
            //请求歌词数据
            // console.log(this.data.music.lyc.url)
            // getDIY(this.data.music.lyc.url).then((res)=>{
            //   let lyc=res.data
            //   lyc=parseLyric(lyc)
            //   console.log(lyc)
            //   this.setData({
            //     lycArray:lyc
            //   })
            // })
            // })
        } //用于掩饰进度条
        // setTimeout(()=>{
        //   setInterval(()=>{
        //     this.setData({
        //       value:this.data.value+1
        //     })
        //     // if(innerAudioContext.currentTime){
        //     // console.log(innerAudioContext.currentTime)
        //     // }
        //   },100)
        // },1000);
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        playerStore.dispatch('saveMusicListIntoStorage');
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        //停止监听
        //     playerStore.offStates(["formatTime","lycArray","totalTime","currentLycIndex","lycScrollTop","toLyc","currentTime"],
        // //封装好的函数，就在watchPlayerStoreListener上面
        //     this.musicStateWatchFunciton
        //     );
        // playerStore.dispatch('saveMusicListIntoStorage')
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
    methods: {


        // 自定义函数区
		
		//calculateMenuAndStatusBar用于获取和计算头部导航栏的宽度和高度的函数
		  calculateMenuAndStatusBar() {
		    //利用 wx.getMenuButtonBoundingClientRect 得到胶囊按钮的坐标和高宽等信息
		    let menuButtonInfo = uni.getMenuButtonBoundingClientRect(); //top是胶囊按钮的上坐标，right是胶囊按钮的下坐标
		    //width,height是胶囊按钮的宽度和高度
		
		    const { top, right, width, height } = menuButtonInfo; // console.log(menuButtonInfo)
		    //利用 wx.getSystemInfo方法获取到状态栏的高度，状态栏就是右上角的电池

		    uni.getSystemInfo({
		        success: (res) => {
		            //statusBarHeight就是状态栏的高度
		            const { statusBarHeight,screenWidth } = res; //top:胶囊按钮的上坐标，上坐标是从页面顶部到胶囊按钮的顶部的距离
					console.log(res);
		            //statusBarHeight就是状态栏的高度
		            //两值相减就能得到他们的间距，也就是margin
		
		            const margin = top - statusBarHeight; //getWindowInfo用于获取窗口的宽度，注意：需要小程序基础库版本不低于 2.21.3
		
		
					
		            this.setData({
		                //statusBarHeight就是状态栏的高度
		                statusBarHeight: statusBarHeight,
		                //navHeight导航栏的总体高度，胶囊按钮高度+状态栏的高度+胶囊按钮边距
		                navBoxHeight: height + statusBarHeight + margin * 2,
		                //导航栏的margintop，就是状态栏的高度+状态栏和胶囊按钮的间距，其实就是胶囊按钮的上边距
		                navMarginTop: statusBarHeight + margin,
		                // 状态栏 + 胶囊按钮边距
		                //导航栏文字和图标的高度
		                navHeight: height,
		                // 与胶囊按钮同高
		                //right:胶囊按钮右边坐标
		                //width:胶囊按钮宽度
		                //这里计算的是胶囊按钮左边部分的可用宽度
		                navWidth: right - width,
		                // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
		                //胶囊按钮的右边距
		                menuButtonRightPadding: res.screenWidth - menuButtonInfo.right
		            });
				
					
		            const app = getApp();
		            app.globalData.navMarginTop = this.navMarginTop;
		            app.globalData.navHeight = this.navHeight;
					console.log(app.globalData.navMarginTop )
					
		        }
		    });
		},
        //改变播放状态的函数
        changePlayState() {
            let isPlay = !this.isPlay;
            playerStore.dispatch('changeMusicPlayState', isPlay);
            this.setData({
                isPlay
            }); // this.changeMusicPlayState(isPlay);
            // console.log(this.data.isPlay)
        },

        //改变音乐播放状态
        changeMusicPlayState(isPlay) {
            if (isPlay) {
                backgroundAudioManager.play();
            } else {
                backgroundAudioManager.pause();
            }
        },

        //设置用于图标显示isPlay变量的函数，只是个封装函数跟this.setData一样的，只是这样写更美观
        changeMusicIsPlay(isPlay) {
            this.setData({
                isPlay
            });
        },

        //改变歌词的显示状态(页面绑定)
        changeLrcState() {
            this.setData({
                showLrc: !this.showLrc
            });
        },

        //改变随机播放图标的显示状态(页面绑定)
        changePlayModeIndexToRadom() {
            this.setData({
                playModeIndex: 2
            });
            playerStore.setState('playModeIndex', 2);
            uni.setStorageSync('playModeIndex', 2);
            uni.showToast({
                title: '随机播放',
                icon: 'none',
                duration: 1000
            });
        },

        changePlayModeIndexToSingleCricle() {
            this.setData({
                playModeIndex: 1
            });
            playerStore.setState('playModeIndex', 1);
            uni.setStorageSync('playModeIndex', 1);
            uni.showToast({
                title: '单曲循环',
                icon: 'none',
                duration: 1000
            });
        },

        changePlayModeIndexToListCricle() {
            this.setData({
                playModeIndex: 0
            });
            playerStore.setState('playModeIndex', 0);
            uni.setStorageSync('playModeIndex', 0);
            uni.showToast({
                title: '列表循环',
                icon: 'none',
                duration: 1000
            });
        },

        //切换下一首(页面绑定)
        changePlayMusicToNextMusic() {
            //重置歌词状态，不重置会导致歌词还保留上一首歌曲的歌曲的位置
            this.setData({
                currentLycIndex: 0
            });
            playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic', true);
        },

        //切换上一首(页面绑定)
        changePlayMusicToPreMusic() {
            this.setData({
                currentLycIndex: 0
            });
            playerStore.dispatch('changePlayMusicToNextMusicOrPreMusic', false);
        },

        //快进30s(页面绑定)
        changePlayMusicToQuick30s() {
            playerStore.dispatch('changePlayMusicToQuickOrSlow30s', true);
        },

        //后退30s(页面绑定)
        changePlayMusicToSlow30s() {
            playerStore.dispatch('changePlayMusicToQuickOrSlow30s', false);
        },

        //点击歌曲改变歌曲播放(页面绑定)(已经转移到compenent组件)
        changeCurrentMusic(event) {
            let newMusicIndex = event.currentTarget.dataset.index; //必须是不等于undefined 不然为0的时候他就工作了

            if (newMusicIndex !== undefined) {
                playerStore.dispatch('changeCurrentMusic', newMusicIndex);
            }
        },

        //点击歌曲删除歌曲列表中当前元素(页面绑定)
        deleteMusicListCurrentMusic(event) {
            let newMusicIndex = event.currentTarget.dataset.index;
            playerStore.dispatch('deleteMusicListCurrentMusic', newMusicIndex); // //必须是不等于undefined 不然为0的时候他就工作了
            // let playSongList=this.data.playSongList
            // playSongList.splice(newMusicIndex,1)
            // if(newMusicIndex !== undefined){
            // this.setData({playSongList})
            // playerStore.setState('playSongList',playSongList)
            // }
        },

        //用于修复微信小程序无法正确获取到音频长度的BUG
        loadDuration() {
            setTimeout(() => {
                if (backgroundAudioManager.duration > 0) {
                    // 获取到正确的duration
                    console.log(backgroundAudioManager.duration);
                    let time = backgroundAudioManager.duration.toString().split('.');
                    let timeMs = parseInt(time) * 1000;
                    let min = this.transformMsToMin(timeMs);
                    let sec = this.transformMsToSec(timeMs).toString().slice(0, 2);
                    let formatTime = this.formatTime.split(':');
                    formatTime[0] = min.toString();
                    formatTime[1] = sec.toString();
                    formatTime = formatTime.join(':').toString();
                    this.setData({
                        totalTime: backgroundAudioManager.duration,
                        // canPlay:true,
                        formatTime: formatTime
                    });
                    app.globalData.musicTotalTime = this.totalTime;

                    if (this.canPlay) {
                        // innerAudioContext.play();
                    }
                } else {
                    this.loadDuration();
                }
            }, 10);
        },

        //用于转换ms与s之间的转换
        transformMsToSec(totalMs) {
            let min = parseInt(totalMs / 60000);
            let remainSec = parseInt(totalMs / 1000 - min * 60);

            if (remainSec < 10) {
                return '0' + remainSec;
            } else {
                return remainSec;
            }
        },

        //用于转化ms与分钟之间的关系
        transformMsToMin(totalMs) {
            let min = Math.floor((parseInt(totalMs) / 60000) * 10) / 10;

            if (parseInt(min) < 10) {
                return '0' + parseInt(min);
            } else {
                return parseInt(min);
            }
        },

        //用于更新歌曲的进度条/当前时间(废弃，已经和watchMusic合并)
        musicProcessTimeUpdate() {
            backgroundAudioManager.onTimeUpdate(() => {
                let procent = Math.floor((backgroundAudioManager.currentTime / backgroundAudioManager.duration) * 1000) / 10;

                if (procent === 100) {
                    console.log('成功');
                } //当前时间的从s转化为min
                // let time=backgroundAudioManager.currentTime.toString().split('.')
                // let timeMs=parseInt(time)*1000
                // let min=this.transformMsToMin(timeMs)
                // let sec=this.transformMsToSec(timeMs).toString().slice(0,2)
                // // console.log(this.transformMsToSec(timeMs))
                // let currentTime=this.data.formatTime.split(':')
                // currentTime[0]=min.toString();
                // currentTime[1]=sec.toString();
                // currentTime=currentTime.join(':').toString()

                let currentTime = moment(backgroundAudioManager.currentTime * 1000).format('mm:ss'); //歌词根据当前时间进行滚动

                let musicCurrentTime = backgroundAudioManager.currentTime;
                let lycArray = this.lycArray; //判断是否是最后一行，因为我们在最后一行的时候无法再比较下下句和当前句的时间了，所以我们得进行特殊的判断

                if (this.currentLycIndex === lycArray.length - 2) {
                    console.log(this.currentLycIndex); //在唱最后一句

                    if (musicCurrentTime >= lycArray[lycArray.length - 1][0]) {
                        this.setData({
                            currentLycIndex: lycArray.length - 1
                        });
                    }
                } else if (this.currentLycIndex <= lycArray.length - 2) {
                    for (let i = 0; i < lycArray.length; i++) {
                        if (musicCurrentTime >= lycArray[i][0] && musicCurrentTime < lycArray[i + 1][0]) {
                            this.setData({
                                currentLycIndex: i
                            });
                        }
                    }
                }

                if (this.currentLycIndex >= 0) {
                    this.setData({
                        //设置滚动距离，
                        //为什么减6？因为我们是从第7个开始滚动的，也就是中间的这个位置
                        toView: 'cate' + this.currentLycIndex,
                        lycScrollTop: (this.currentLycIndex - 0) * 50 * 2
                    });
                } //不是在slider滑动状态，我们就设置data，如果在滑动我们就不设置data

                console.log(!this.isSliderDrag);

                if (!this.isSliderDrag) {
                    this.setData({
                        value: procent,
                        currentTime: currentTime
                    });
                }
            });
        },

        //判断此时的页面是是否是我们之前播放的页面(废弃)
        musicIsNowPlayMusic(musicId) {
            //如果此时的全局变量isMusicPlay为true和musicID与当前的msuicID相同
            //也就是当前music在播放，而且新打开的页面与之前的页面相同
            if (app.globalData.isMusicPlay && app.globalData.musicId === musicId) {
                console.log(app.globalData.isMusicPlay);
                console.log(app.globalData.musicId === musicId);
                this.setData({
                    isPlay: true
                });
                return true;
            } else {
                return false;
            }
        },

        //防抖（已经迁移，迁移位置在顶部）
        debounce(fun, delay) {
            let run;
            return () => {
                let that = this;
                let args = arguments;
                clearTimeout(run);
                run = setTimeout(() => {
                    fun.apply(that, args);
                }, delay);
            };
        },

        // 处理歌词（废弃，改用store下面parse-lyric函数）
        dealLyric(lyc) {
            let lycResult = []; //处理歌词我们需要把他转化成数组形式

            let lycArray = lyc.split('\r\n');

            if (lycArray.length <= 2) {
                lycArray = lyc.split('\n');
            } //删除数组中的最后一个元素，因为大多数情况下他都是空的

            if (lycArray[lycArray.length - 1] === '') {
                lycArray.pop();
            } //使用正则表达式匹配歌词前面的时间
            // \d 匹配数字 \d{2} 匹配两位
            // \[ \用于转义，说明你这个[使用来搜索的  \. 也是用于转义
            // .原来的意思是匹配除了换行符以外的任意单个字符

            let pattern = /\[\d{2}:\d{2}\.\d{2,3}\]/; //利用map函数替换每一个带有时间标记的元素

            lycArray.map((item) => {
                let realLyc = item.replace(pattern, '');
                let lycTime = item.match(pattern); //去除括号

                if (lycTime !== null) {
                    lycTime = lycTime[0].slice(1, -1);
                    let timeArray = lycTime.split(':');
                    let realTime = parseInt(timeArray[0]) * 60 + parseFloat(timeArray[1]);
                    let realTimeStr = parseFloat(realTime.toFixed(3)); //把时间和歌词放进一个数组中

                    lycResult.push([realTimeStr, realLyc]);
                    lycResult = this.dealLyricIsEmpty(lycResult);
                } // console.log(lycTime)
            });
            return lycResult;
        },

        //处理歌词是空的情况，属于处理歌词的子函数（废弃）
        dealLyricIsEmpty(lycArray) {
            let resultLycArray = [];
            lycArray.map((item) => {
                if (item[1] !== '') {
                    resultLycArray.push(item);
                }
            });
            return resultLycArray;
        },

        //显示音乐数组（理应保留）(现在已转移到component)
        changeShowMusicListState() {
            let showMusicList = !this.showMusicList;
            this.setData({
                showMusicList: showMusicList
            });
        },

        // ------------------------------监听专区---------------------
        //用于监听Slider值变动后使用的函数(理应保留)
        handleSliderChange(event) {
            console.log(event); //获取滑动后变化的值

            let valueAfterSlider = event.detail.value;
            console.log(valueAfterSlider); //转化为百分比

            let percentAfterSlider = valueAfterSlider / 100; //当前的时间 百分比*总时间
            //此时的总时间是Ms 我们需要s，所以除以1000

            let currentTimeAfterSlider = percentAfterSlider * this.totalTime; //调用backgroundAudioManager的seek函数让他跳转到指定的位置

            backgroundAudioManager.pause();
            backgroundAudioManager.seek(currentTimeAfterSlider);
            backgroundAudioManager.play();
            playerStore.setState('value', valueAfterSlider);
            let currentTime = moment(currentTimeAfterSlider * 1000).format('mm:ss');
            playerStore.setState('currentTime', currentTime); //设置最新的进度条状态

            this.setData({
                value: valueAfterSlider,
                // 结束拖动事件，结束拖动状态
                isSliderDrag: false,
                currentTime: currentTime
            });
            playerStore.setState('isSliderDrag', false);
        },

        //用于监听页面的拖动状态(理应保留)
        handleSliderDrag(event) {
            this.setData({
                isSliderDrag: true
            });
            playerStore.setState('isSliderDrag', true); //获取滑动正在拖动的位置当前值

            let valueAfterDrag = event.detail.value;
            console.log(valueAfterDrag); //转化为百分比

            let percentAfterDrag = valueAfterDrag / 100;
            let currentTimeAfterDrag = percentAfterDrag * this.totalTime; //时间格式化
            // let time=currentTimeAfterDrag.toString().split('.')
            // let timeMs=parseInt(time)*1000
            // let min=this.transformMsToMin(timeMs)
            // let sec=this.transformMsToSec(timeMs).toString().slice(0,2)
            // // console.log(this.transformMsToSec(timeMs))
            // let currentTime=this.data.formatTime.split(':')
            // currentTime[0]=min.toString();
            // currentTime[1]=sec.toString();
            // currentTime=currentTime.join(':').toString()

            let currentTime = moment(currentTimeAfterDrag * 1000).format('mm:ss');
            playerStore.setState('isSliderDrag', true);
            playerStore.setState('currentTime', currentTime);
            this.setData({
                isSliderDrag: true,
                currentTime: currentTime
            });
            console.log(currentTime);
        },

        //监听歌曲播放(重要)（已经迁移，迁移位置在顶部）
        watchMusic() {
            backgroundAudioManager.onPlay(() => {
                this.changeMusicIsPlay(true); //设置全局变量isMusicPlay，isMusicPlay用于检验我们退出当前界面后我们是否点击了相同的音乐

                app.globalData.isMusicPlay = true;
                app.globalData.musicId = this.musicId;
            });
            backgroundAudioManager.onPause(() => {
                this.changeMusicIsPlay(false); //当我们进行播放的时候我们就已经

                app.globalData.isMusicPlay = false;
            });
            backgroundAudioManager.onStop(() => {
                this.changeMusicIsPlay(false);
                app.globalData.isMusicPlay = false;
            });
            backgroundAudioManager.onTimeUpdate(
                this.debounce(() => {
                    let procent = Math.floor((backgroundAudioManager.currentTime / backgroundAudioManager.duration) * 1000) / 10;

                    if (procent === 100) {
                        console.log('成功');
                    } //当前时间的从s转化为min

                    let currentTime = moment(backgroundAudioManager.currentTime * 1000).format('mm:ss'); // let time=backgroundAudioManager.currentTime.toString().split('.')
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
                    let lycArray = this.lycArray; //该方法废弃，废弃原因：会造成歌词显示慢，改用下面的方法
                    //判断是否是最后一行，因为我们在最后一行的时候无法再比较下下句和当前句的时间了，所以我们得进行特殊的判断
                    // if(this.data.currentLycIndex === lycArray.length-2){
                    //   console.log(this.data.currentLycIndex)
                    //   //在唱最后一句
                    //   if(musicCurrentTime>=lycArray[lycArray.length-1][0]){
                    //     this.setData({
                    //       currentLycIndex:lycArray.length-1
                    //     })
                    //   }
                    // }else if(this.data.currentLycIndex <= lycArray.length-2){
                    //   for( let  i=0;i<lycArray.length;i++){
                    //     if(musicCurrentTime>=lycArray[i][0]&&musicCurrentTime<lycArray[i+1][0]){
                    //       this.setData({
                    //         currentLycIndex:i
                    //       })
                    //     }
                    //   }
                    // }
                    //原理：找出比当前时间大的一些的歌词的位置，找到了，当前歌词的位置就在到歌词的下面
                    //如果lycArray的长度没有值的话就直接跳过

                    if (!this.lycArray.length) {
                        return;
                    }

                    let i = 0;

                    for (; i < lycArray.length; i++) {
                        let lycTime = lycArray[i][0];

                        if (musicCurrentTime < lycTime) {
                            break;
                        }
                    }

                    let currentIndex = i - 1;

                    if (this.currentLycIndex !== currentIndex) {
                        this.setData({
                            currentLycIndex: currentIndex
                        });
                    }

                    if (this.currentLycIndex >= 0) {
                        this.setData({
                            //设置滚动距离，
                            //为什么减6？因为我们是从第7个开始滚动的，也就是中间的这个位置
                            lycScrollTop: (this.currentLycIndex - 0) * 50 * 2,
                            toLyc: 'Lyc' + this.currentLycIndex
                        });
                    } //不是在slider滑动状态，我们就设置data，如果在滑动我们就不设置data

                    console.log(this.isSliderDrag);

                    if (!this.isSliderDrag) {
                        this.setData({
                            value: procent,
                            currentTime: currentTime
                        });
                    }
                }, 200)
            );
        },

        // 歌词相关的变量监听 函数抽离
        musicStateWatchFunciton({ formatTime, lycArray, totalTime, currentLycIndex, lycScrollTop, toLyc, currentTime,isDoubleLanguage }) {
            if (formatTime) {
                this.setData({
                    formatTime
                });
            }

            if (lycArray) {
                this.setData({
                    lycArray
                });
            }

            if (totalTime) {
				console.log(totalTime)
                this.setData({
                    totalTime
                });
            }

            if (currentLycIndex !== undefined && currentLycIndex !== null) {
                this.setData({
                    currentLycIndex
                });
            }

            if (lycScrollTop) {
				console.log(lycScrollTop)
                this.setData({
                    lycScrollTop
                });
            }

            if (toLyc) {
                this.setData({
                    toLyc
                });
            } //时间变化

            if (currentTime && !this.isSliderDrag) {
                this.setData({
                    currentTime
                });
				console.log(currentTime)
            }
			if( isDoubleLanguage !== undefined && isDoubleLanguage !== null){
				this.setData({
					isDoubleLanguage
				})
				console.log(isDoubleLanguage)
			}
        },

        //用于监听store下面的player-store player-store放着我们需要的歌曲/歌词信息
        //注意异步请求，会有一段时间的null，所以建议发过来的值就是直接是异步请求后的
        //(重要)
        watchPlayerStoreListener() {
            // onStates可以监听多个数值
            //若只有最右边的括号里只有个值，就返回的是对象，若是有多个值加个中括号就是对象里面的值了
            //播放相关的变量监听
            playerStore.onStates(['music', 'id', 'isPlay'], ({ music, id, isPlay }) => {
                if (music) {
                    this.setData({
                        music: music
                    });
                }

                if (id) {
                    this.setData({
                        id: id
                    });
                }

                if (isPlay) {
                    this.setData({
                        isPlay: isPlay
                    });
                }
            }); //歌词相关的变量监听

            playerStore.onStates(
                ['formatTime', 'lycArray', 'totalTime', 'currentLycIndex', 'lycScrollTop', 'toLyc', 'currentTime','isDoubleLanguage'], //封装好的函数，就在watchPlayerStoreListener上面
                this.musicStateWatchFunciton
            ); //进度条相关变量监听

            playerStore.onStates(['value'], ({ value }) => {
                if (value !== undefined && value !== null) {
                    this.setData({
                        value: value
                    });
                } //  const  fun =()=>{
                //   console.log(value)
                //   if(value){   this.setData({value:value})
                //  }
                //   }
                // throttle(()=>{
                // console.log(value)
                // if(value){   this.setData({value:value})}
                // },10)
            }); //播放模式相关变量监听

            playerStore.onStates(['playModeIndex'], ({ playModeIndex }) => {
                if (playModeIndex) {
                    this.setData({
                        playModeIndex: playModeIndex,
                        playModeName: playModeNames[playModeIndex]
                    });
                }
            }); //歌单相关变量监听

            playerStore.onStates(['playSongList', 'playSongIndex'], ({ playSongList, playSongIndex }) => {
                if (playSongList !== undefined && playSongList !== null) {
                    this.setData({
                        playSongList: playSongList
                    });
                }

                if (playSongIndex !== undefined && playSongIndex !== null) {
                    this.setData({
                        playSongIndex: playSongIndex
                    });
                }
            });
        }
    }
};
</script>
<style lang="scss">
/* pages/music-player/detail.wxss */

page {
    overflow-y: hidden;
}

.bg-image {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
.bg-cover {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: rgba(white, 0.5);
    backdrop-filter: blur(30px);
}
.maskBgc {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
}
.shrinked-lyc-container {
    position: relative;
    flex: 1;

    width: 632rpx;
    max-width: 632rpx;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    .shrinked-scroll-container {
        position: relative;
        display: flex;
        max-height: 60rpx;
        width: 30rpx;
        scroll-view {
            max-height: 50rpx;
            view {
                width: 100%;
                color: rgba(black, 0.5);
                font-size: 34rpx;
                line-height: 50rpx;
                text-align: center;
            }
			
            .currentLyc {
                color: rgba(#0041c4, 1);
            }
			
        }
    }
}

.real-music-list {
    position: fixed;
    bottom: 2vh;
    left: calc((100vw - 628rpx) / 2);
    /* 通过位移隐藏列表框 */
    width: 628rpx;
    height: 628rpx;
    border-radius: 40rpx;
    background-color: rgba(white, 0.6);
    backdrop-filter: blur(60rpx);
    /* opacity: 0;*/
    display: block;

    transform: translate(0%, 60vh);
    transition: transform 0.75s;

    overflow: hidden;
    z-index: 1000;
    .music-list-container {
        max-height: 628rpx;
        max-width: 628rpx;
        width: 628rpx;
        height: 628rpx;
        display: flex;
        flex-direction: column;
        .music-list-title {
            height: 6vh;
            width: calc(100% - 34rpx);
            font-size: 34rpx;
            line-height: 6vh;
            margin-left: 35rpx;
            font-weight: 600;
            color: rgba($color: black, $alpha: 0.75);
            .musicListLength {
                font-size: 26rpx;
                color: rgba($color: grey, $alpha: 0.95);
            }
        }
        .musicListSrcoll {
            margin-left: 34rpx;
            height: 50%;
            flex: 1;
            width: calc(100% - 34rpx);
            .musicItem {
                position: relative;
                margin: 0rpx 0 0rpx 0rpx;
                height: 70rpx;
                width: 100%;
                text-overflow: ellipsis;

                display: flex;
                align-items: center;
                .music-info-container {
                    display: flex;
                    flex-direction: row;

                    width: 80%;
                    max-width: 80%;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 25rpx;
                    color: rgba($color: black, $alpha: 0.8);
                    .artist-name {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 25rpx;
                        color: rgba($color: grey, $alpha: 0.85);
                    }
                    .current-music-name {
                        color: rgba($color: #0041c4, $alpha: 1);
                    }
                    .current-artist-name {
                        color: rgba($color: #0041c4, $alpha: 1);
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 25rpx;
                    }
                }
                .delete-icon-container {
                    height: 100%;
                    width: 20%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .delete-icon {
                        color: #a0a0a0;
                        font-size: 50rpx;
                    }
                }
            }
        }
        .music-list-bottom {
            min-height: 4vh;
        }
    }
}
.function-icon-container {
    height: 50vh;
    width: 50vh;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
}
.page {
    display: flex;

    flex-direction: column;

    position: relative;
    width: 100vw;
    height: 100vh;

    .music-player-container {
        height: 100%;
        width: 100%;
        display: flex;

        flex-direction: column;
        align-items: center;
    }
    .img-container {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        max-height: 50vh;
        min-height: 50vh;

        view {
            position: relative;
            flex-direction: column;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;

            border-radius: 40rpx;
            .musicImg {
                margin-top: 2vh;

                width: 628rpx;
                height: 628rpx;
                border-radius: 40rpx;
                display: inline-block;
            }
            /*高斯模糊*/
            .musicImg::before {
                /* content: "";*/

                /* position: absolute; */ /* 一定要用绝对定位 */ /**/
                /* width: 628rpx;*/
                /* height: 628rpx;*/
                /* backdrop-filter: blur(120rpx); */ /* 模糊半径 */ /**/
                /* border-radius: 40rpx;*/
                /* opacity: 0.6;*/
                /* z-index:-1;*/
            }
        }
    }
    .lyc-container {
        width: 40vh;
        height: 50vh;

        max-height: 50vh;
        border-radius: 40rpx;
        scroll-view {
            max-height: 50vh;
            height: 100%;


			.lyc-item-for-container{
				max-height: 50rpx;
				width: 100%;
				color: rgba(black, 0.5);
				font-size: 34rpx;
				line-height: 50rpx;
				text-align: center;
				.lyc-item-container{
					
					.currentLyc {
						color: #0041c4;
					}
					.currentChineseLyc{
						color: #0041c4;
					}

				}
			}
			
			.lyc-item-for-double-container{
				max-height: 100rpx;
				width: 100%;
				color: rgba(black, 0.5);
				font-size: 34rpx;
				line-height: 50rpx;
				text-align: center;
				.lyc-item-container{
					
					.currentLyc {
						color: #0041c4;
					}
					.currentChineseLyc{
						color: #0041c4;
					}
				
				}
			}
			
			
			
            .decorate {
                visibility: hidden;
				 max-height: 50rpx !important;
            }
        }
    }

    .text-container {
        position: relative;

        width: 632rpx;
        max-width: 632rpx;

        height: 162rpx;
        max-height: 162rpx;
        view {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;

            .music-name-container {
                width: 100%;
                height: 52rpx;
                color: rgb(8, 8, 8);
                font-size: 48rpx;
                font-weight: 1400rpx;
                line-height: 52rpx;
                letter-spacing: 0px;
                overflow-x: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-family: 'AppleGothic';
            }
            .album-name-container {
                width: 100%;
                height: 40rpx;
                color: rgb(255, 45, 85);
                opacity: 0.6;
                font-size: 34rpx;
                font-weight: 800rpx;
                line-height: 40rpx;
                letter-spacing: 0px;
                margin-top: 16rpx;
                overflow-x: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-family: 'AppleGothic';
            }
            .artist-name-container {
                width: 100%;
                height: 40rpx;
                color: rgb(8, 8, 8);
                opacity: 0.61;
                font-size: 34rpx;
                font-weight: 800rpx;
                line-height: 40rpx;
                letter-spacing: 0px;
                margin-top: 16rpx;
                overflow-x: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-family: 'AppleGothic';
            }
        }
    }
    .time-code-solider {
        position: relative;
        flex: 0.4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 84rpx;
        width: 634rpx;
        .progress {
            position: relative;
            width: 100%;
            height: 30rpx;
            /*进度条以外的背景颜色*/
            background-color: rgba(16, 93, 251, 0.4);
            /*主要倒圆角的位置*/
            border-radius: 60rpx;
            overflow: hidden;
            .progress-bar {
                /* 设置默认的宽度，我们用脚本来设置该宽度*/
                width: 0;
                height: 100%;
                /* 设置背景主色调，进度条的主要颜色来源，进度条其实原本没什么颜色*/
                background-color: rgba(16, 93, 251, 1);
                background-image: linear-gradient(
                    /* 倾斜135度*/ 135deg,
                    /*rgba(255,255,255,.15) 就是白色线 */ /* rgba(255,255,255,.15) 0%,*/ /* rgba(255,255,255,.15) 25%, 意思是整个图片的0-25%是整个颜色的，也就是有点透明的白色*/
                        rgba(255, 255, 255, 0.15) 0%,
                    rgba(255, 255, 255, 0.15) 25%,
                    /* transparent 25%,transparent 50%,意思是整个图片的25-50%是透明的，他之所以看起来是蓝色是因为我们设置了背景颜色，*/ transparent 25%,
                    transparent 50%,
                    /*同上*/ rgba(255, 255, 255, 0.15) 50%,
                    rgba(255, 255, 255, 0.15) 75%,
                    /*同上*/ transparent 75%,
                    transparent 100%
                );
                /*设置背景图像的高度和宽度(不加的话，只有一张图片而且图片会一直变大，失真)*/
                background-size: 80rpx 80rpx;
                /* transition: width 0.6s ease;*/
                /*倒圆角，主要倒圆角的位置不是在这里，在父级容器*/
                border-radius: 60rpx;
                /* progress-bar-anim是我们自定义的动画*/
                /*2s 就是整个移动持续2s*/
                /*linear线性 要是不加就2s触发一次动画，这也是我们进度条美观的核心*/
                /*infinite无限循环，这就是我们精度条美观的核心*/
                animation: progress-bar-anim 2s linear infinite;
                .progress-bar-value {
                    font-size: 26rpx;
                    font-weight: bold;
                    opacity: 0;
                    color: white;
                }
                /* 设置动画*/
                /* 动画的内容，图片从右边 80rpx的位置滑动的移动到0px的位置*/
                /*因为我们的进度条最长也就80px，也就是说整个背景图片就会一直往左移动*/
                @keyframes progress-bar-anim {
                    from {
                        background-position: 80rpx 0;
                    }
                    to {
                        background-position: 0rpx 0;
                    }
                }
            }
        }
        .slider-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            view {
                width: 98%;
                height: 100%;

                .slider {
                    width: 100%;

                    margin: 0 0 0 0 !important;
                }
				//uniapp适配
				uni-slider .uni-slider-track {
				    width: 0;
				    /* background: linear-gradient(to right, #4169E1 0%, #00FFFF 100%);*/
				    background-image: linear-gradient(
				        /* 倾斜135度*/ 135deg,
				        /*rgba(255,255,255,.15) 就是白色线 */ /* rgba(255,255,255,.15) 0%,*/ /* rgba(255,255,255,.15) 25%, 意思是整个图片的0-25%是整个颜色的，也就是有点透明的白色*/
				            rgba(255, 255, 255, 0.15) 0%,
				        rgba(255, 255, 255, 0.15) 25%,
				        /* transparent 25%,transparent 50%,意思是整个图片的25-50%是透明的，他之所以看起来是蓝色是因为我们设置了背景颜色，*/ transparent 25%,
				        transparent 50%,
				        /*同上*/ rgba(255, 255, 255, 0.15) 50%,
				        rgba(255, 255, 255, 0.15) 75%,
				        /*同上*/ transparent 75%,
				        transparent 100%
				    );
				    /*设置背景图像的高度和宽度(不加的话，只有一张图片而且图片会一直变大，失真)*/
				    background-size: 80rpx 80rpx;
				    /* transition: width 0.6s ease;*/
				    /*倒圆角，主要倒圆角的位置不是在这里，在父级容器*/
				    border-radius: 60rpx;
				    /* progress-bar-anim是我们自定义的动画*/
				    /*2s 就是整个移动持续2s*/
				    /*linear线性 要是不加就2s触发一次动画，这也是我们进度条美观的核心*/
				    /*infinite无限循环，这就是我们精度条美观的核心*/
				    animation: progress-bar-anim 2s linear infinite;
				    @keyframes progress-bar-anim {
				        from {
				            background-position: 80rpx 0;
				        }
				        to {
				            background-position: 0rpx 0;
				        }
				    }
				}
				uni-slider .uni-slider-handle-wrapper {
				    height: 26rpx;
				}
				
				
				//小程序适配
                wx-slider .wx-slider-track {
                    width: 0;
                    /* background: linear-gradient(to right, #4169E1 0%, #00FFFF 100%);*/
                    background-image: linear-gradient(
                        /* 倾斜135度*/ 135deg,
                        /*rgba(255,255,255,.15) 就是白色线 */ /* rgba(255,255,255,.15) 0%,*/ /* rgba(255,255,255,.15) 25%, 意思是整个图片的0-25%是整个颜色的，也就是有点透明的白色*/
                            rgba(255, 255, 255, 0.15) 0%,
                        rgba(255, 255, 255, 0.15) 25%,
                        /* transparent 25%,transparent 50%,意思是整个图片的25-50%是透明的，他之所以看起来是蓝色是因为我们设置了背景颜色，*/ transparent 25%,
                        transparent 50%,
                        /*同上*/ rgba(255, 255, 255, 0.15) 50%,
                        rgba(255, 255, 255, 0.15) 75%,
                        /*同上*/ transparent 75%,
                        transparent 100%
                    );
                    /*设置背景图像的高度和宽度(不加的话，只有一张图片而且图片会一直变大，失真)*/
                    background-size: 80rpx 80rpx;
                    /* transition: width 0.6s ease;*/
                    /*倒圆角，主要倒圆角的位置不是在这里，在父级容器*/
                    border-radius: 60rpx;
                    /* progress-bar-anim是我们自定义的动画*/
                    /*2s 就是整个移动持续2s*/
                    /*linear线性 要是不加就2s触发一次动画，这也是我们进度条美观的核心*/
                    /*infinite无限循环，这就是我们精度条美观的核心*/
                    animation: progress-bar-anim 2s linear infinite;
                    @keyframes progress-bar-anim {
                        from {
                            background-position: 80rpx 0;
                        }
                        to {
                            background-position: 0rpx 0;
                        }
                    }
                }

                wx-slider .wx-slider-handle-wrapper {
                    height: 26rpx;
                }
            }
        }
        .time-container {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .current-time {
                font-size: 22rpx;
                font-weight: 800rpx;
                line-height: 26rpx;
                color: rgb(16, 93, 251);
                font-family: 'AppleGothic';
            }
            .total-time {
                font-size: 22rpx;
                font-weight: 800rpx;
                line-height: 26rpx;
                color: rgb(16, 93, 251);
                font-family: 'AppleGothic';
            }
        }
    }

    .play-icon-container {
        width: 634rpx;
        height: 100rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .back {
            position: relative;
            width: 36rpx;
            height: 40rpx;

            view {
                position: relative;
                width: 36rpx;
                height: 40rpx;
                max-width: 36rpx;
                max-height: 40rpx;
                image {
                    width: 100%;
                    height: 100%;
                    max-width: 56rpx;
                    max-height: 60rpx;
                }
            }
        }

        .previous-music {
            position: relative;
            width: 66rpx;
            height: 40rpx;
            view {
                position: relative;
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .play-music {
            position: relative;
            width: 140rpx;
            height: 140rpx;
            view {
                position: relative;
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .next-music {
            position: relative;
            width: 66rpx;
            height: 40rpx;
            view {
                position: relative;
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .forward {
            position: relative;
            width: 36rpx;
            height: 40rpx;
            view {
                position: relative;
                width: 36rpx;
                height: 40rpx;
                max-width: 36rpx;
                max-height: 40rpx;
                image {
                    width: 100%;
                    height: 100%;
                    max-width: 56rpx;
                    max-height: 60rpx;
                }
            }
        }
    }
    .like-icon-container {
        width: 650rpx;
        height: 200rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .like {
            position: relative;
            width: 48rpx;
            height: 48rpx;

            view {
                position: relative;
                width: 100%;
                height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .ramdom-play {
            position: relative;
            width: 56rpx;
            height: 56rpx;

            view {
                position: relative;
                width: 100%;
                height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .single-circle-play {
            position: relative;
            width: 48rpx;
            height: 48rpx;

            view {
                position: relative;
                width: 100%;
                height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .list-circle-play {
            position: relative;
            width: 48rpx;
            height: 48rpx;

            view {
                position: relative;
                width: 100%;
                height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .music-list {
            position: relative;
            width: 60rpx;
            height: 60rpx;

            view {
                position: relative;
                width: 100%;
                height: 100%;
                image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
