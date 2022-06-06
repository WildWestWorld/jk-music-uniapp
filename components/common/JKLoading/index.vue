<template>

		
		<view v-if="showLoading">
				<view class="loading-container" v-if="showLoading">
				
						<view class="loading-icon"></view>
				
				
						<view class="loading-text">加载中</view>
				
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
			showLoading:{
				type:Boolean,
				value:true
			}
		},
	}
</script>

<style lang="scss">
	@import '../../../style/styleBySelf.scss';
	
	.loading-container{
	  position: relative;
	  height: 80rpx;
	  width: 100%;
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
	  align-items: center;
	    .loading-icon{
	      box-sizing: border-box;
	      width: 40rpx;
	      height: 40rpx;
	
	      border-radius: 50%;
	
	      border: 8rpx solid ;
	      border-left-color:$primary-color;
	
	      border-top-color:$primary-color; ;
	      border-bottom-color:#e5e5e5 ;
	      border-right-color:$primary-color; ;
	      
	      animation:loading-icon-rotate 0.85s linear infinite ;
	    }
	    
	    @keyframes loading-icon-rotate {
	      0%{
	        transform: rotate(0deg);
	      }
	      100%{
	        transform: rotate(360deg);
	      }
	    
	
	  }
	
	
	    .loading-text{
	      margin-left: 12rpx;
	      font-size: 30rpx;
	    }
	
	}
</style>