<template>

	<view class="navigator" :style="'top:' + navMarginTop + 'px;'  + ('height:' + navHeight + 'px;')  + ('padding:0 ' + (menuButtonRightPadding + 22) + 'px;') + ' '">
        <view class="left-icon-container" @tap="backToIndexPage ? backIndexPage() : backBeforePage()" v-if="showBack === true">
            <image :src="isWhiteIcon?'/static/images/back-white.svg':'/static/images/back.svg'" class="left-icon" ></image>
        </view>

        <view class="title" :style="titleFontSize > 0 ? 'font-size:' + titleFontSize + 'rpx' : ''">{{ title }}</view>
    </view>
</template>

<script>
// components/common/JKNavigator/index.ts
export default { 
    data() {
        return {


            //胶囊的右边距
            pages: null,

            //所有的页面信息
            //用于判断回退按钮是否显示
            backToIndexPage: false,

            back: false,
			
        };
    },
    /**
     * 组件的属性列表
     */
    props: {
        title: {
            type: String,
            default: ''
        },
        showBack: {
            type: Boolean,
            default: true
        },
        titleFontSize: {
            type: Number,
            default: 0
        },
        navBoxHeight:{
			type: Number,
			default: 0
		},
		statusBarHeight:{
			type: Number,
			default: 0
		},

		navMarginTop:{
			type: Number,
			default: 24
		},
		navHeight:{
			type: Number,
			default: 32
		},
		navWidth:{
			type: Number,
			default: 0
		},
		menuButtonRightPadding:{
			type: Number,
			default: 7
		},
		isWhiteIcon:{
			type:Boolean,
			default:false
		}

    },
	
	computed: {
	      options () {
	        const { navMarginTop, navHeight,menuButtonRightPadding } = this
	        return { navMarginTop, navHeight,menuButtonRightPadding }
	      }
	 },
	  watch: {
	       options :{
	          deep:true,
			  immediate:true,
	          handler(newValue,OldValue){
	             console.log('newValue=========>',newValue);
				 this.navMarginTop=newValue.navMarginTop
				 this.navHeight=newValue.navHeight
				 this.menuButtonRightPadding=newValue.menuButtonRightPadding
	          }
	     }
	  },
    beforeMount() {

		// 根据微信小程序的右上侧的胶囊样式 设置导航栏内容的高度
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		this.calculateMenuAndStatusBar()
		// #endif
		
		// 根据微信小程序的右上侧的胶囊样式 设置导航栏内容的高度
		// #ifdef H5 || APP-PLUS || MP-ALIPAY

		this.navMarginTop=24
		this.navHeight=32
		this.menuButtonRightPadding=7
		// #endif


        const pages = getCurrentPages(); //如果访问过的页面大于1时，也就是你之前有访问过页面，就设置值为true，该值用于判断是否显示回退
        //因为回退函数是基于你之前访问过的页面来回退的，所以要判断pages是否大于1

        this.setData({
            pages
        });

        if (pages.length > 1) {
            this.setData({
                back: true
            });
        } else {
            this.setData({
                back: false
            });
        }
		
    },
    methods: {
        //calculateMenuAndStatusBar用于获取和计算头部导航栏的宽度和高度的函数
          calculateMenuAndStatusBar() {
			 
			 
			 
            //利用 wx.getMenuButtonBoundingClientRect 得到胶囊按钮的坐标和高宽等信息
            let menuButtonInfo = uni.getMenuButtonBoundingClientRect(); //top是胶囊按钮的上坐标，right是胶囊按钮的下坐标
            //width,height是胶囊按钮的宽度和高度

            const { top, right, width, height } = menuButtonInfo; // console.log(menuButtonInfo)
            //利用 wx.getSystemInfo方法获取到状态栏的高度，状态栏就是右上角的电池
			console.log( top, right, width, height )
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

        //calculateMenuAndStatusBar止
        //backBeforePage 回到之前页面的函数，使用之前先用getCurrentPage判断用户是否有访问多个页面，若是单个页面是无法退回的
        backBeforePage() {
            //wx自带的回退函数
            uni.navigateBack(); // let beforePage = this.data.pages[this.data.pages.length -2];  //获取上个页面的实例对象
            // beforePage.go_update();   //触发上个页面自定义的go_update方法
        },

        backIndexPage() {
            //wx自带的回退函数
            uni.switchTab({
                url: '/pages/index/index'
            });
        }
    }
};
</script>
<style lang="scss">
@import '../../../style/styleBySelf.scss';

.navigator {
    box-sizing: border-box;
    position: absolute;
    width: 100vw;
    height: 44rpx;
    top: 144rpx;
    left: 0;
    z-index: 99;
    display: flex;
    flex-direction: row;

    .left-icon-container {
        display: flex;
        align-items: center;


        .left-icon {
            width: 44rpx;
            height: 44rpx;
	

        }
    }
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 44rpx;
        color: rgb(0, 0, 0);
        opacity: 0.6;
        font-size: 28rpx;
        line-height: 30rpx;
        flex: 1;
        font-family: 'AppleGothic';
    }
}
</style>
