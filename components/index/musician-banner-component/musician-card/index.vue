<!--components/index/musician-banner-component/musician-card/index.wxml-->
<!-- bindtap绑定一个手机的点击事件，后面我们会把他转成click时间被上层的bindclick捕获 -->
<template>
	<view class="card" @tap="onTab">
	  <image :src="item.photo.url" class="image" mode="scaleToFill"></image>
	  <view class="name">{{item.name}}</view>
	  <view class="category" v-if="item.category">{{item.category}}</view>
	</view>
</template>


<script>
import { sayHello } from "../../../../api/hello"
	
	// components/index/srollable-frame/index.ts
	export default {
	    data() {
	        return {
				
			};
	    },
	    /**
	     * 组件的属性列表
	     */
	    options: {
	        styleIsolation: 'isolated'
	    },
	    props: {
			   item:{
				 type:Object,
				 default:()=>{null}
			   }
	    },
	    /**
	     * 组件的方法列表
	     */
	    methods: {
			// 此外就是不转化成click事件也会因为BindTab的冒泡属性，被父组件捕获
			//就是把tab事件改为click事件，并且传入参数
			 //this.triggerEvent 小程序的触发时间  前面那个是触发的类型 
			 //后面这个是传进来参数 
			 onTab() {
				 console.log("1123");
				 
				 uni.navigateTo({
				     url: `/pages/artist/detail`
				 }); //对歌曲进行数据请求
				 

			 },
			
			 hi(){
			   //因为返回回来的是promise对象所以可以.then
			   sayHello().then(resData =>{
			  
			     //微信中的赋值
			     this.setData({
			     message : resData
			    })
			    
			     return console.log(resData)
			   })
			 },
		}
	};
	
</script>

<style lang="scss">
	@import '../../../../style/styleBySelf.scss';
	
	.card{
	  display: flex;
	  flex-direction: column;
	  width: 240rpx;
	  align-items: center;
	  overflow: hidden;

	  .image{
	    width: 240rpx;
	    height: 240rpx;
	    border-radius: 240rpx;
	    overflow: hidden;
	  }
	  .name{
	    max-width: 200rpx;
	    margin-top: 20rpx;
	    font-size: 32rpx;
	    color: $text-acitve-color;
	    line-height: 36rpx;
	    text-align: center;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    text-align: center;
	    overflow: hidden;
	  }
	  .category{
	    max-width: 150rpx;
	    margin-top: 10rpx;
	    font-size: 24rpx;
	    color:#7A869A;
	    line-height: 30rpx;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    text-align: center;
	  }
	}
</style>