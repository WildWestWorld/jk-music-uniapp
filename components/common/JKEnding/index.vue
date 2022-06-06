<template>
	<view   v-if="showEnding">
		<view class="ending-container"  v-if="showEnding">
				 <view class="ending-text">暂无更多数据</view>
		 </view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				
			};
		},
		props:{
			showEnding:{
			  type:Boolean,
			  value:true
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.ending-container{
	  height: 50rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	
	  .ending-text{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    font-size: 24rpx;
	    white-space: nowrap;
	    color: #999;
	    &::before{
	      content: '';
	      border-bottom: 2rpx solid #e5e5e5;
	      transform: scaleY(0.5);
	      width: 180rpx;
	    }
	    &::after{
	      content: '';
	      border-bottom: 2rpx solid #e5e5e5;
	      transform: scaleY(0.5);
	
	      width: 180rpx;
	    }
	  }
	}
</style>