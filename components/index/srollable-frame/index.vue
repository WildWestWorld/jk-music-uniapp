<template>
    <block>
		<view>
			<!-- 滑动框组件 用于装载滑动图片的容器 -->
			<view class="header-container">
				<view class="title">{{ title }}</view>
				<view class="more" v-if="hideMoreLabel">{{ moreLabel }}</view>
			</view>

			<scroll-view scroll-x :show-scrollbar="false" :enhanced="true">
				<view class="list" :style="'width:' + (itemCount * itemWidth + 50) + 'rpx'">
					<!-- 自定义组件 -->
					<!-- bindclick 点击事件，下层的手机点击事件会被转化成click事件被该层捕获 -->
					
					<slot></slot>
				</view>
			</scroll-view>
		</view>
    </block>
</template>

<script>
// components/index/srollable-frame/index.ts
export default {
    data() {
        return {};
    },
    /**
     * 组件的属性列表
     */
    options: {
        styleIsolation: 'isolated'
    },
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
        },
        itemWidth: {
            type: Number,
            default: 290
        },
        itemCount: {
            type: Number,
            default: 6
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {}
};
</script>
<style lang="scss">
@import '../../../style/styleBySelf.scss'; /* components/index/musician-banner/index.wxss */

.header-container {
    padding: 0 50rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40rpx;
    .title {
        font-size: 44rpx;
        color: $text-acitve-color;
        line-height: 52rpx;
    }
    .more {
        font-style: 28rpx;
        color: $primary-color;
        line-height: 40rpx;
    }
}

.list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>
