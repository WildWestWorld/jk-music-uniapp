<template>
    <view class="header-container">

        <view class="title">{{title}}</view>

		
        <view class="more" v-if="hideMoreLabel">{{moreLabel}}</view>
    </view>
</template>

<script>
// components/index/srollable-frame-component/title-banner/index.ts
export default {
    data() {
        return {};
    },
    /**
     * 组件的属性列表
     */
    props: {
        title: {
            type: String,
            default: '默认列表'
        },
        moreLabel: {
            type: String,
            default: '更多'
        },
        // 用于隐藏more标签的布尔值
        hideMoreLabel: {
            type: Boolean,
            default: 'true'
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {}
};
</script>
<style lang="scss">
@import '../../../../style/styleBySelf.scss';
	.header-container{
	  padding: 0 50rpx;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: 40rpx;
	  .title{
		font-size: 44rpx;
		color: $text-acitve-color;
		line-height: 52rpx;
		
	  }
	  .more{
		font-style: 28rpx;
		color:blue;
		line-height: 40rpx;
		
	  }
	}
</style>
