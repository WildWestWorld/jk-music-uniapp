<template>
    <!-- 暂时废弃，原因：V1已被修复完毕 -->
    <view class="nav-bar">
        <!-- 电量和时间的状态栏 -->
        <view class="status-bar" :style="'height:' + statusBarHeight + 'px;'"></view>
        <view class="nav-bar-button">
            <view class="left">L</view>
            <view class="center">C</view>
            <view class="right">R</view>
        </view>
    </view>
</template>

<script>
// components/common/JKNavigatorV2/index.ts
export default {
    data() {
        return {
            statusBarHeight: getApp().globalData.statusBarHeight
        };
    },
    /**
     * 组件的属性列表
     */
    props: {},
    //ready=onload
    mounted: () => {},
    /**
     * 组件的方法列表
     */
    methods: {}
};
</script>
<style lang="scss">
/* components/common/JKNavigatorV2/index.wxss */

.status-bar {
    background-color: #f00;
    width: 100%;
}
.nav-bar-button {
    display: flex;
    align-items: center;
    .center {
        flex: 1;
    }
    .left,
    .right {
        width: 120rpx;
    }
}
</style>
