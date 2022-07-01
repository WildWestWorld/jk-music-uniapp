<template>
    <block>
		<view>
			<!-- <JKNavigator title="音乐库" :backToIndexPage="true" :showBack="false"></JKNavigator> -->

			<view class="page" :style="'height:calc(100vh - ' + contentTop + 'px);top:' + contentTop + 'px'">
				<view class="tabs-container">
					<scroll-view class="tabs" scroll-x :show-scrollbar="false" :enhanced="true" :scroll-into-view="toTab" :scroll-left="scrollLeft">
						<view class="tab-item-container">
							<view
								:class="currentTabIndex == index ? 'current-tab-item' : 'tab-item'"
								:data-clickItemIndex="index"
								@tap="changeCurrentTabIndex"
								:id="'Tab' + index"
								:scroll-left="scrollRight"
								v-for="(item, index) in tabList"
								:key="index"
								
							>
							
								<view class="tab-item-content">{{ item }}</view>
							</view>
							<view class="scroll-bar-container">
								<view class="scroll-bar" :style="'transform:translateX(' + (85 + 170 * (currentTabIndex + scrollPercent)) + 'rpx) translateX(-50%);'"></view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="tab-content-container">
					<swiper
						class="tab-content"
						@transition="watchSwiperItemPositon"
						@animationfinish="watchSwiperAnimationFinish"
						@change="watchSwiperChange"
						:current="currentTabIndex"
					>
						<swiper-item class="tab-content-item">
							<scroll-view class="scroll-content" scroll-y :show-scrollbar="false" :enhanced="true" 
							:refresher-enabled="true"	 @refresherrefresh="onFreshMusicList" :refresher-triggered="triggeredMusicList"
							@scroll="onScroll"

							@refresherpulling="onPullingMusicList"
							
							@scrolltolower="onBottomMusicList"
							
							lower-threshold='50'	
							>
								
								<view class="scroll-container">
									<view class="scroll-item-container">
										<!-- <view class="music-item-container">
					  <view class="left">
						<view class="music-name">周大侠</view>
						<view class="artist-name-icon-container">
						  <view class="HQ-icon">
							<image src="../../images/HQ.png"></image>
						  </view> 
						  
						  <view class="artist-name">周杰伦</view> 
						</view>

					  </view>
					  <view class="right">
					  <image src="../../images/more.png" style="width: 32px;height: 32px;"></image>
					  </view>
					</view> -->

										<musicItem :item="item" v-for="(item, index) in musicList" :key="index"></musicItem>
										<JKLoading  :showLoading="showLoading"></JKLoading>
										<JKEnding  :showEnding="showEnding"></JKEnding>
										
									</view>
								</view>
							</scroll-view>
						</swiper-item>

						<swiper-item class="tab-content-item">1</swiper-item>
						<swiper-item class="tab-content-item">1</swiper-item>
						<swiper-item class="tab-content-item">1</swiper-item>
						<swiper-item class="tab-content-item">1</swiper-item>
					</swiper>
				</view>

				
				
				
				<play-bar :currentMusic="currentMusic" playAnimState="paused" :isPlay="isPlay" :playSongList="playSongList" :playSongIndex="playSongIndex"></play-bar>
			</view>
		</view>
    </block>
</template>

<script>
import JKNavigator from '../../components/common/JKNavigator/index';
import JKLoading from '../../components/common/JKLoading/index';
import JKEnding from '../../components/common/JKEnding/index';
import playBar from '../../components/index/play-bar/index';
import musicItem from '../../components/lib/music-item/index';
import musicItemNvue from '../../components/lib/music-item/nIndex';
import { getPageByMusicName } from '../../api/music';
import { debounce, playerStore, throttle } from '../../store/index'; // pages/lib/index.ts

const app = getApp();
export default {
    components: {
        JKNavigator,
		JKLoading,
		JKEnding,
        playBar,
        musicItem,
		musicItemNvue
		
    },
    data() {
        return {
            contentHeight: 0,
            contentTop: 0,
            deviceRadio: 0,
            tabList: ['歌曲', '歌单', '歌手', '专辑', '风格'],
            currentTabIndex: 0,
            toTab: 'Tab0',
            scrollLeft: 0,

            //tab标题的滚动条位置
            screenWidth: 0,

            scrollPercent: 0,
            isClick: false,
            currentMusic: {},
            isPlay: false,
            playAnimState: 'paused',
            playSongList: [],
            playSongIndex: 0,
            musicList: [],
            test: '',
            scrollRight: '',
			//sroll view 下拉加载是否触发的控制变量（页面绑定）
			triggeredMusicList:false,
			pageNumMusicList:1,
			
			//控制music里面的数据完全请求完了，的变量
			isMusicListOver:false,
			
			//显示loading-icon的变量
			showLoading:false,
			//显示ending的变量
			showEnding:false,
			
			scrollRefresherEnabled:false,
			
        };
    },
    onLoad() {
        //监听
        this.watchPlayerStoreListener(); //计算页面容器的高度

        const info = uni.getWindowInfo(); //整个屏幕的宽度
		console.log(info)
        let screenWidth = info.windowWidth; //整个屏幕的高度

        let sreenHeight = app.globalData.sreenHeight || info.screenHeight; // 状态栏 + 胶囊按钮边距

        let navMarginTop = app.globalData.navMarginTop|| info.safeArea.top; //胶囊按钮的高度

        let navHeight = app.globalData.navHeight|| info.safeArea.height; //页面的高度

        let contentHeight = sreenHeight - navMarginTop - navHeight; //页面排除胶囊按钮后的高度
		
		// #ifndef APP-PLUS
		   let contentTop = navMarginTop + navHeight; //像素比
		// #endif
		
		// #ifdef APP-PLUS
		   let contentTop = navMarginTop ; //像素比
		// #endif
		



        let deviceRadio = app.globalData.deviceRadio|| info.pixelRatio;
        console.log(contentHeight, sreenHeight, navMarginTop, navHeight);
        this.setData({
            contentHeight,
            contentTop,
            deviceRadio,
            screenWidth
        }); //获取歌曲数据
		
		console.log(contentTop);
		
        let data = {
            pageNum: 1,
            pageSize: 15,
            searchWord: ''
        };
        getPageByMusicName(data).then((res) => {
            console.log(res.data.records);

            if (res.data.records !== undefined) {
                this.setData({
                    musicList: res.data.records
                });
            }
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},
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
        /**
         * 生命周期函数--监听页面加载
         */
        //自定义函数区
        //改变当前Tab的Index值（页面绑定）
        changeCurrentTabIndex(event) {
            let clickItemIndex = event.currentTarget.dataset.clickitemindex;
			console.log(event);
			console.log(clickItemIndex);
			console.log(this.scrollPercent);
			 clickItemIndex=parseInt(clickItemIndex)
            if (clickItemIndex !== undefined && clickItemIndex !== null) {
				
                this.setData({
                    currentTabIndex: clickItemIndex,
					
                    isClick: true
                });
            } //如果点击的Item的索引在第四个，就引动

            if (clickItemIndex >= 3) {
                this.setData({
                    scrollLeft: 400
                });
            } else {
                this.setData({
                    scrollLeft: 0
                });
            }
        },

        //监控当前SwiperItem滑动的位置(页面绑定)
        watchSwiperItemPositon(event) {
            let intDx = parseInt(event.detail.dx);
            let scrollPercent = Math.floor(((intDx / this.screenWidth) * 10000) / 100) / 100; // scrollPercent=scrollPercent%1
   //          console.log(event)
			// console.log((intDx / this.screenWidth));
            let isClick = this.isClick;

            if (scrollPercent != 0 && isClick === false ) {
				console.log(scrollPercent);
                this.setData({
                    scrollPercent: scrollPercent
                });
            }
        },

        //监控当前Swiper动画完成(页面绑定)
        watchSwiperAnimationFinish(event) {
            let currentSwiperItemIndex = event.detail.current;
			 currentSwiperItemIndex=parseInt(currentSwiperItemIndex)
            if (currentSwiperItemIndex !== undefined && currentSwiperItemIndex !== null) {
                this.setData({
                    currentTabIndex: currentSwiperItemIndex,
                    scrollPercent: 0,
                    isClick: false
                });
            }

            if (currentSwiperItemIndex >= 3) {
                this.setData({
                    scrollLeft: 400
                });
            } else {
                this.setData({
                    scrollLeft: 0
                });
            }
        },

        //检测swiper数值改变
        watchSwiperChange(event) {

		},

        //查询tab-item的宽度
        queryTabItem() {
            const query = uni.createSelectorQuery();
            query.selectAll('.tab-item-content').boundingClientRect();
            query.selectViewport().scrollOffset();
            query.exec((res) => {
                console.log(res);
                let currentTabIndex = this.currentTabIndex;
                this.setData({
                    test: res[0][currentTabIndex].width
                });
                console.log(this.test);
            });
        },
		//自定义下拉刷新被触发(页面绑定)
		onFreshMusicList(){
			console.log("下拉被触发")
			//隐藏 无更多数据的样式
			this.showEnding=false
			//隐藏 加载icon的样式
			this.showLoading=false
			
			this.triggeredMusicList=true
			this.isMusicListOver=false
			this.pageNumMusicList=1
			let pageNumMusicList=this.pageNumMusicList
			//重新请求页面
			let data = {
			    pageNum: pageNumMusicList,
			    pageSize: 15,
			    searchWord: ''
			};

			getPageByMusicName(data).then((res) => {
			    console.log(res.data.records);
			
			    if (res.data.records !== undefined && res.data.records !== null) {
			        this.setData({
			            musicList: res.data.records,
						triggeredMusicList:false
			        });
			    }
			});
			
			
		},
		//自定义下拉刷新控件被下拉(页面绑定)(暂时无用)
		onPullingMusicList(event){
			
		},
		//页面到底部了
		onBottomMusicList(){
			console.log('到底了')
			
			//显示加载图标
			this.showLoading=true
				
			//获取当前的pageNum
			let pageNumMusicList=this.pageNumMusicList
			pageNumMusicList=pageNumMusicList+1
			
			//重新请求页面
			let data = {
			    pageNum: pageNumMusicList,
			    pageSize: 15,
			    searchWord: ''
			};
			let isMusicListOver=this.isMusicListOver
			

			
			if(!isMusicListOver){

				
				getPageByMusicName(data).then((res) => {
				
				
				    if (res.data.records !== undefined && res.data.records !== null &&  res.data.records.length > 0) {
						let musicList=this.musicList					
						//获取的是个对象所以要map一下
						let newRes=res.data.records
				
						newRes.map((item,index)=>{
							musicList.push(item)
						})
						
						this.pageNumMusicList=pageNumMusicList
						
						//隐藏加载图标
						this.showLoading=false
				
				    }else{
						console.log('没有歌了')
						this.isMusicListOver=true
						
						
						//隐藏加载图标
						this.showLoading=false
						
						//显示 无更多数据的样式
						this.showEnding=true
						

					}
					
				})
			}else{
				//显示加载图标
				this.showLoading=false
			}
	

			
		},
		onScroll(event){

		},
		
        //监听专区
        watchPlayerStoreListener() {
            //监听currentSong的信息
            playerStore.onStates(['music', 'isPlay'], ({ music, isPlay }) => {
                if (music !== undefined) {
                    this.setData({
                        currentMusic: music
                    });
                }

                if (isPlay !== undefined) {
                    this.setData({
                        isPlay: isPlay,
                        playAnimState: isPlay ? 'running' : 'paused'
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
@import '../../style/styleBySelf.scss';

page {
    overflow-y: hidden;
}
.page {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100vw;
    height: 100vh;
    .tabs-container {
        height: 100rpx;
        width: 100vw;
        position: relative;
        background-color: #fff;
        box-sizing: border-box;

        .tabs {
            width: 100%;
            height: 100rpx;
            position: relative;

            &::before {
                width: 100%;
                content: '';
                position: absolute;
                border-bottom: 2rpx solid rgba($color: grey, $alpha: 0.3);
                transform: scaleY(0.5);
                -webkit-transform: scaleY(0.5);
                bottom: 0;
                left: 0;
            }
            .tab-item-container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                position: relative;
                white-space: nowrap;
                .tab-item {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    min-height: 40rpx;

                    color: #999;
                    font-weight: 400;
                    font-size: 32rpx;

                    min-width: 170rpx;
                    min-height: 40rpx;
                }
                .current-tab-item {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    min-height: 40rpx;

                    color: $primary-color;
                    font-size: 36rpx;
                    font-weight: bold;

                    min-width: 170rpx;
                    min-height: 40rpx;
                }

                .scroll-bar-container {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 8rpx;

                    .scroll-bar {
                        position: relative;
                        box-sizing: border-box;

                        min-width: 70rpx;
                        max-width: 72rpx;

                        height: 8rpx;
                        background-color: $primary-color;
                        transition-duration: 0.15s;
                        border-radius: 8rpx;
                    }
                }
            }
        }
    }

    .tab-content-container {
	
        height:calc(100%);
        position: relative;

        .tab-content {
            height: 100%;

            .tab-content-item {
                height: 100%;

                .scroll-content {
                    height: 100%;

                    box-sizing: border-box;
                    .scroll-container {
                        height: 100%;
                       
                        .scroll-item-container {
							margin-top: 20rpx;
                            
							width: 100%;
                            box-sizing: border-box;
							display: flex;
							flex-direction: column;
                            .music-item-container {
                                height: 100%;
                                display: flex;
                                flex-direction: row;
                                .left {
                                    width: 70%;
                                    max-width: 70%;
                                    display: flex;
                                    flex-direction: column;
                                    .music-name {
                                        font-size: 40rpx;
                                        font-weight: 400;
                                        display: flex;
                                        align-items: center;
                                        height: 60%;
                                        max-height: 60%;
                                    }
                                    .artist-name-icon-container {
                                        height: 40%;
                                        max-height: 40%;
                                        line-height: 18px;
                                        font-size: 30rpx;
                                        color: rgb(131, 131, 131);
                                        display: flex;
                                        flex-direction: row;
                                        justify-content: flex-start;
                                        align-items: center;
                                        .HQ-icon {
                                            width: 40rpx;
                                            height: 40rpx;
                                            image {
                                                width: 40rpx;
                                                height: 40rpx;
                                            }
                                        }
                                    }
                                }
                                .right {
                                    width: 30%;
                                    max-width: 30%;
                                    display: flex;
                                    justify-content: flex-end;
                                    align-items: center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
