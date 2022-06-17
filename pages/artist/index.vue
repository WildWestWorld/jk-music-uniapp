<template>
	
	
	<view class="page">
		
		<JKNavigator :navMarginTop="navMarginTop" :navHeight="navHeight" :menuButtonRightPadding="menuButtonRightPadding"  :backToIndexPage="false" :isWhiteIcon="true"></JKNavigator>
		
		
		<view class="artist-page-icon" >
			<image  class="play-icon"  src="/static/images/play-music-play.png"></image>
		</view>
		
		
		
		<view class="image-container">
			<view class="image-pic">
				<image class="artist-image" src="/static/images/test.jpeg" ></image>
			</view>
			<view  class="image-bgc">				
			</view>
			
			<view class="aritst-info">
				<text class="aritst-info-text">ARTIST</text>
			</view>
			
			<view class="aritst-name">
				<text class="aritst-name-text">AlanWalker</text>
			</view>
		</view>
		
		<JKScrollTab></JKScrollTab>
		
		
		
		
	</view>
</template>

<script>
	import JKNavigator from '../../components/common/JKNavigator/index';
	import JKScrollTab from '../../components/common/JKScrollTab/index';
	export default{
		components:{
			JKNavigator,
			JKScrollTab
		},
		
		data(){
			return{
				tabList: ['歌曲', '专辑'],
				currentTabIndex: 0,
				toTab: 'Tab0',
				scrollRight: '',
				scrollPercent: 0,
				scrollLeft: '',
			}
		},
		methods:{
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
		}
	}
</script>

<style lang="scss">
@import '../../style/styleBySelf.scss';
.page{
	position: relative;
	height: 100vh;
	width: 100vw;
	.artist-page-icon{
		position: absolute;
	
		top: 614rpx;
		left: 578rpx;
		z-index: 9999;
		.play-icon{
		
			width: 140rpx;
			height: 140rpx;
			
		}
	}

	.image-container{
		position: relative;
		width: 750rpx;
		height: 684.5rpx;
		
		.image-pic{
			position: relative;
			width: 750rpx;
			height: 684.5rpx;
			.artist-image{
				height: 100%;
				width: 100%;
			}
		}
		.image-bgc{
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			opacity: 0.75;
			background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,255) 100%);
			
		}
		.aritst-info{
			position: absolute;
			top: 482rpx;
			left: 32rpx;
			opacity: 0.65;
			color: #FFFFFF;
			font-family: AppleGothic;
			font-size: 30rpx;
			font-weight: 400;
			
		}
		.aritst-name{
			position: absolute;
			width: 750rpx;
			max-width: 750rpx;
			top: 526rpx;
			left: 32rpx;
			
			color: rgb(255, 255, 255);
			font-family: AppleGothic;
			font-size: 68rpx;
			font-weight: 400;
			line-height: 80rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow:ellipsis;
		}
	}
	
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
	
}


</style>