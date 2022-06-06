<template>
    <!-- components/index/lastplaymusic-list/index.wxml -->
	
    <view class="music-card">
        <view class="cover">
            <image :src="item.cover"></image>
            <view class="circle"></view>
        </view>

        <view class="info">
            <view class="name">{{ item.name }}</view>
            <view class="author">{{ item.album + ' - ' + item.artist }}</view>
        </view>
        <view class="likeAbleContainer" v-if="likeAble">
            <image class="likeAble" src="/static/images/heart.svg"></image>
        </view>
    </view>
</template>

<script>
// components/index/lastplaymusic-list/index.ts
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
        item: {
            type: Object,
            default: () => {
                null;
            }
        },
        likeAble: {
            type: Boolean,
            default: false
        },

    },
    /**
     * 组件的方法列表
     */
    methods: {}
};
</script>
<style lang="scss">
@import '../../../style/styleBySelf.scss';

.music-card {
    display: flex;
    flex-direction: row;
    margin-bottom: 40rpx;


    .cover {
        position: relative;
        width: 128rpx;
        height: 128rpx;
        image {
            width: 128rpx;
            height: 128rpx;
            border-radius: 64rpx;
        }
        .circle {
            position: absolute;
            width: 32rpx;
            height: 32rpx;
            border-radius: 16rpx;
            background-color: #fff;
            top: calc(50% - 16rpx);
            right: calc(50% - 16rpx);
        }
    }
    .info {
        margin-left: 30rpx;
        max-width: 100%;
        .name {
            margin-top: 20rpx;
            font-size: 32rpx;
            color: #002251;
            line-height: 36rpx;
        }
        .author {
            margin-top: 12rpx;
            font-size: 28rpx;
            color: $text-color;
            line-height: 34rpx;
        }
    }
    .likeAbleContainer {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-self: center;
        margin-right: 20rpx;
        .likeAble {
            width: 32rpx;
            height: 30rpx;
        }
    }
}
</style>
