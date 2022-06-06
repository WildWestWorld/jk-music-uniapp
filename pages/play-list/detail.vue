<template>
    <block>
        <JKNavigator title="歌单详情"></JKNavigator>

        <view class="page">
            <header-background-image></header-background-image>

            <view class="header">
                <image class="cover" src="/static/images/playlist-cover.svg" alt="" />
                <view class="name">杀破狼</view>
                <view class="description">仙剑奇侠传3-原声大碟</view>
            </view>

            <view class="action-area">
                <view class="playmusic-btn-container">
                    <button class="playmusic-btn" hover-class="playmusic-btn-hover">播放</button>
                </view>

                <view class="download-btn-container">
                    <button class="download-btn"><image class="download-image" src="/static/images/down-load.svg"></image></button>
                </view>
            </view>

            <view class="lastPlayMusic">
                <view class="lastplaymusic-list" :style="'height:' + (lastPlayMusicList.length * 168 + 40) + 'rpx'">
                    <lastplaymusic-card :item="item" likeAble v-for="(item, index) in lastPlayMusicList" :key="index"></lastplaymusic-card>
                </view>
            </view>
        </view>
    </block>
</template>

<script>
import JKButton from '../../components/common/JKButton/index';
import lastplaymusicCard from '../../components/index/lastplaymusic-card/index';
import JKNavigator from '../../components/common/JKNavigator/index';
import headerBackgroundImage from '../../components/play-list/header-background-image/index';
// pages/playList/detail.ts
export default {
    components: {
        JKButton,
        lastplaymusicCard,
        JKNavigator,
        headerBackgroundImage
    },
    data() {
        return {
            lastPlayMusicList: [
                {
                    name: '夜曲',
                    album: '十一月的肖邦',
                    artist: '周杰伦',
                    cover: '/static/images/yequ.jpeg'
                },
                {
                    name: '夜曲',
                    album: '十一月的肖邦',
                    artist: '周杰伦',
                    cover: '/static/images/yequ.jpeg'
                },
                {
                    name: '夜曲',
                    album: '十一月的肖邦',
                    artist: '周杰伦',
                    cover: '/static/images/yequ.jpeg'
                }
            ]
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
    methods: {}
};
</script>
<style lang="scss">
@import '../../style/styleBySelf.scss';

.page {
    position: relative;
    width: 100vw;
    height: 100vh;
    .backgroud-image {
        position: absolute;
        top: 0rpx;
        left: 0rpx;
        width: 750rpx;
        height: 470rpx;
        z-index: -1;
    }
    .header {
        padding-top: 250rpx;
        width: 100vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        .cover {
            width: 320rpx;
            height: 320rpx;
            border-radius: 34rpx;
            margin-bottom: 40rpx;
        }
        .name {
            color: $text-acitve-color;
            font-size: 36rpx;
            line-height: 42rpx;
            margin-bottom: 20rpx;
        }
        .description {
            color: $text-color;
            max-width: 476rpx;
            height: 56rpx;
            font-size: 24rpx;
            line-height: 30rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            line-clamp: 2;
            white-space: nowrap;
        }
    }
    .action-area {
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* 清除小程序原有的样式*/

        button {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            padding: 20rpx;
            text-align: center;
            vertical-align: middle;
            -webkit-appearance: none;
            -webkit-text-size-adjust: 100%;
            &::before {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                border: inherit;
                border-radius: inherit; /* inherit parent's border radius */
                transform: translate(-50%, -50%);
                opacity: 0;
                content: ' ';
                background-color: black;
                border-color: black;
            }
            /* reset weapp default border*/
            &::after {
                border-width: 0;
            }
        }

        .playmusic-btn-container {
            .playmusic-btn {
                width: 442rpx;
                height: 88rpx;
                background-color: $primary-color;
                border-radius: 20rpx;
                font-size: 32rpx;
                line-height: 36rpx;
                color: white;
                margin-right: 20rpx;
            }
            .playmusic-btn-hover {
                background: $primary-color;
                opacity: 0.8;
            }
        }
        .download-btn-container {
            .download-btn {
                width: 88rpx;
                height: 88rpx;

                border-radius: 20rpx;
                opacity: 1;
                .download-image {
                    width: 44rpx;
                    height: 44rpx;
                }
            }
        }
    }
    .lastPlayMusic {
        margin-top: 80rpx;
        .lastplaymusic-list {
            display: flex;
            flex-direction: column;
            padding: 0 50rpx;
        }
    }
}
</style>
