<template>

		<view >
			<view class="header-container">
				<view class="title">{{title}}</view>
				<view class="more">更多</view>
			</view>
			<scroll-view scroll-x :show-scrollbar="false" :enhanced="true">
				<view class="list" :style="'width:' + (list.length * 290 + 50) + 'rpx'">
					<!-- 自定义组件 -->
					<!-- bindclick 点击事件，下层的手机点击事件会被转化成click事件被该层捕获 -->
					<musicianCard :item="item" @click="onClick" v-for="(item, index) in list" :key="index"></musicianCard>
				</view>
			</scroll-view>
		</view>

</template>

<script>
import musicianCard from '../musician-banner-component/musician-card/index';
// components/index/musician-banner/index.ts
export default {
	
    components: {
        musicianCard
    },
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
            default: ''
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //将捕获到的click时间打印出来
        onClick(e) {
            console.log(e);
        }
    }
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
