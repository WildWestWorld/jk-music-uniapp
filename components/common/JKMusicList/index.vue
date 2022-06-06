<template>
    <block>
        <!-- 音乐播放列表 -->
        <!-- 展示音乐时出现的灰色的背景 -->
        <view class="maskBgc" v-if="showMusicList" @tap="changeShowMusicListState"></view>

        <view class="real-music-list" :style="'transform:translate(0%,' + (showMusicList ? '0vh' : '80vh') + ');'">
            <view class="music-list-container">
                <view class="music-list-title">
                    当前播放
                    <text class="musicListLength">({{ playSongList.length }})</text>
                </view>

                <scroll-view class="musicListSrcoll" scroll-y :show-scrollbar="false" :enhanced="true" :scroll-into-view="'currentMusic' + playSongIndex">
                    <view class="musicItem" :id="'currentMusic' + index" :data-index="index" @tap="changeCurrentMusic" v-for="(item, index) in playSongList" :key="index">
                        <view class="music-info-container">
                            <view :class="playSongIndex === index ? 'current-music-name' : 'music-name'">{{ item.name }}</view>
                            <view :class="playSongIndex === index ? 'current-artist-name' : 'artist-name'">-{{ map.getNameList(item.artistVoList) || '' }}</view>
                        </view>

                        <view class="delete-icon-container">
                            <view class="delete-icon" @tap.stop.prevent="deleteMusicListCurrentMusic" :data-index="index">×</view>
                        </view>
                    </view>
                </scroll-view>

                <view class="music-list-bottom"></view>
            </view>
        </view>
    </block>
</template>
<script module="map" lang="wxs" src="../../../pages/music-player/map.wxs"></script>
<script>
import { playerStore } from '../../../store/index'; // components/common/JKMusicList/index.ts

export default {
    data() {
        return {
            showMusicList: false
        };
    },
    /**
     * 组件的属性列表
     */
    props: {
        // showMusicList:{
        //   type:Boolean,
        //   value:false
        // },
        playSongIndex: {
            type: Number,
            default: 0
        },
        playSongList: {
            type: Object,
            default: () => {
                null;
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        changeShowMusicListState() {
            let showMusicList = !this.showMusicList;
            this.setData({
                showMusicList: showMusicList
            });
        },

        changeCurrentMusic(event) {
            let newMusicIndex = event.currentTarget.dataset.index; //必须是不等于undefined 不然为0的时候他就工作了

            if (newMusicIndex !== undefined) {
                playerStore.dispatch('changeCurrentMusic', newMusicIndex);
            }
        },

        //点击歌曲删除歌曲列表中当前元素(页面绑定)
        deleteMusicListCurrentMusic(event) {
            let newMusicIndex = event.currentTarget.dataset.index;
            playerStore.dispatch('deleteMusicListCurrentMusic', newMusicIndex); // //必须是不等于undefined 不然为0的时候他就工作了
            // let playSongList=this.data.playSongList
            // playSongList.splice(newMusicIndex,1)
            // if(newMusicIndex !== undefined){
            // this.setData({playSongList})
            // playerStore.setState('playSongList',playSongList)
            // }
        }
    }
};
</script>
<style lang="scss">
.maskBgc {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
}

.real-music-list {
    position: fixed;
    bottom: 2vh;
    left: calc((100vw - 628rpx) / 2);
    /* 通过位移隐藏列表框 */
    width: 628rpx;
    height: 628rpx;
    border-radius: 40rpx;
    background-color: rgba(white, 0.6);
    backdrop-filter: blur(60rpx);
    /* opacity: 0;*/
    display: block;

    transform: translate(0%, 58vh);
    transition: transform 0.75s;

    overflow: hidden;
    z-index: 1000;
    .music-list-container {
        max-height: 628rpx;
        max-width: 628rpx;
        width: 628rpx;
        height: 628rpx;
        display: flex;
        flex-direction: column;
        .music-list-title {
            height: 6vh;
            width: calc(100% - 34rpx);
            font-size: 34rpx;
            line-height: 6vh;
            margin-left: 35rpx;
            font-weight: 600;
            color: rgba($color: black, $alpha: 0.75);
            .musicListLength {
                font-size: 26rpx;
                color: rgba($color: grey, $alpha: 0.95);
            }
        }
        .musicListSrcoll {
            margin-left: 34rpx;
            height: 50%;
            flex: 1;
            width: calc(100% - 34rpx);
            .musicItem {
                position: relative;
                margin: 0rpx 0 0rpx 0rpx;
                height: 70rpx;
                width: 100%;
                text-overflow: ellipsis;

                display: flex;
                align-items: center;
                .music-info-container {
                    display: flex;
                    flex-direction: row;

                    width: 80%;
                    max-width: 80%;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 25rpx;
                    color: rgba($color: black, $alpha: 0.8);
                    .artist-name {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 25rpx;
                        color: rgba($color: grey, $alpha: 0.85);
                    }
                    .current-music-name {
                        color: rgba($color: #0041c4, $alpha: 1);
                    }
                    .current-artist-name {
                        color: rgba($color: #0041c4, $alpha: 1);
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 25rpx;
                    }
                }
                .delete-icon-container {
                    height: 100%;
                    width: 20%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .delete-icon {
                        color: #a0a0a0;
                        font-size: 50rpx;
                    }
                }
            }
        }
        .music-list-bottom {
            min-height: 4vh;
        }
    }
}
</style>
