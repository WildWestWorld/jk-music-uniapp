<template>
    <block>
		<view v-if="currentMusic.id">
			<view class="play-bar-placeholder" v-if="currentMusic.id"></view>
			<view class="play-bar" v-if="currentMusic.id" @tap="navigateToCurrentMusic">
				<view class="left">
					<image class="cover cover-anim" mode="aspectFill" :src="currentMusic.photo.url" :style="'animation-play-state:' + playAnimState"></image>
					<view class="name">{{ currentMusic.name }}</view>
				</view>
				<view class="right">
					<image
						class="icon-play"
						:src="isPlay ? '/static/images/play-music-pause.png' : '/static/images/play-music-play.png'"
						@tap.stop.prevent="changeMusicState"
					></image>
					<image
						class="icon-playlist"
						:src="showMusicList ? '/static/images/play-list-click.png' : '/static/images/play-list-unclick.png'"
						@tap.stop.prevent="changeShowMusicListState"
					></image>
				</view>
			</view>
      

        <!-- 音乐播放列表 -->

        <!-- 音乐播放列表 -->
        <!-- 展示音乐时出现的灰色的背景 -->
        <view class="maskBgc" v-if="showMusicList" @tap="changeShowMusicListState"></view>

        <view class="real-music-list" :style="'transform:translate(0%,' + (showMusicList ? '0vh' : '60vh') + ');'">
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
	 </view>
    </block>
</template>
<script module="map" lang="wxs" src="../../../pages/music-player/map.wxs"></script>
<script>
import JKMusicList from '../../../components/common/JKMusicList/index';
import { playerStore } from '../../../store/index'; // components/index/play-bar/index.ts

export default {
    
	 components: {
		 JKMusicList
	 },
    data() {
        return {
            showMusicList: false
        };
    },
    /**
     * 组件的属性列表
     */
    options: {
        styleIsolation: 'isolated'
    },
    props: {
        currentMusic: {
            type: Object,
            default: () => {
                null;
            }
        },
        playAnimState: {
            type: String,
            default: ''
        },
        isPlay: {
            type: Boolean,
            default: false
        },
        showMusicListClone: {
            type: Boolean,
            default: false
        },
        playSongList: {
            type: Array,
            default: () => []
        },
        playSongIndex: {
            type: Number,
            default: 0
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        //改变音乐的播放状态（页面绑定）
        changeMusicState() {
            let isPlay = !this.isPlay;
            playerStore.dispatch('changeMusicPlayState', isPlay);
        },

        //跳转到当前播放的音乐界面(页面绑定)
        navigateToCurrentMusic() {
            uni.navigateTo({
                url: '/pages/music-player/detail?id=' + this.currentMusic.id
            });
        },

        changeShowMusicListState() {
            let showMusicList = !this.showMusicList;
            this.setData({
                showMusicList: showMusicList
            });
        },

        //点击歌曲改变歌曲播放(页面绑定)(已经转移到compenent组件)
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
.play-bar-placeholder {
    height: 44px;
}

/* 播放工具栏*/
.play-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    width: 100%;
    max-width: 100%;
    padding: 0 8px;
    background-color: #fafafa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    .left {
        max-width: 80%;
        min-width: 80%;
        display: flex;
        align-items: center;
        .cover {
            width: 44px;
            height: 44px;
            min-width: 44px;
            min-height: 44px;
            border-radius: 50%;
            position: relative;
            top: -6px;
        }
        .cover-anim {
            /*旋转10s */
            animation: coverRotate 16s linear infinite;
        }
        /*旋转动画*/
        @keyframes coverRotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        .name {
            font-size: 28rpx;
            margin-left: 10rpx;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .icon-play {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }

        .icon-playlist {
            width: 30px;
            height: 30px;
        }
    }
}

.maskBgc {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
}

.real-music-list {
    position: fixed;

    bottom: calc(0rpx + 2vh);
    left: calc(5% / 2);
    /* 通过位移隐藏列表框 */
    width: 95%;
    height: 55vh;
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
        max-height: 100%;
        max-width: 100%;
        width: 100%;
        height: 100%;
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
