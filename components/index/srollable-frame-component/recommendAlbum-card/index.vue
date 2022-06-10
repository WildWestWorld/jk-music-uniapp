<template>
    <!-- bindtap绑定一个手机的点击事件，后面我们会把他转成click事件被上层的bindclick捕获 -->
	
		<view class="recommand-card" >
			<image :src="item.photo.url" class="image"></image>
			<view class="name-container">
				<view class="name">{{ item.name }}</view>
			</view>

			<view class="description">{{ map.getArtstNameList(item.albumArtistList) }}</view>
		</view>

</template>
<script module="map" lang="wxs" src="./map.wxs"></script>
<script>
// components/index/srollable-frame-component/recommandMusic-card/index.ts
import { playerStore } from '../../../../store/player-store';
export default {
    data() {
        return {
            artist: null
        };
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
		dataIndex:{
			type:Number,
			default:0
		},
		
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onTab() {
            let id = this.item.id;
            uni.navigateTo({
                url: `/pages/music-player/detail?id=${this.item.id}&musicName=${this.item.name}&artistName=${this.item.artistVoList[0].name}`
            }); //对歌曲进行数据请求
			

            let payload = {
                id: id
            };
            playerStore.dispatch('playMusicWithSongIdAction', payload); //获取当前的歌曲列表/当前歌曲的索引
			
			//将音乐放入的播放音乐列表中
			this.addNewMusicInMusicList()
        },
		//子函数
		//将音乐放入的播放音乐列表中
		addNewMusicInMusicList(){
			let index=this.dataIndex
			console.log(index)
			playerStore.setState("playSongIndex",index)
			  
			// playerStore.setState("playSongList",this.data.JKRecommandMusicList)
			  
			//拿到item信息
			let musicItem=this.item;
			// //拿到当前的音乐列表
			// let currentPlayList=this.data.playSongList
			// //将当前的音乐放入到播放列表的首位
			// currentPlayList.unshift(musicItem)
			//   //点击这个item之后就把他放进我们的播放列表中
			// playerStore.setState("playSongList",currentPlayList)
			// playerStore.setState("playSongIndex",0)
			let payload={item:musicItem}
			playerStore.dispatch('addNewMusicToPlayList',payload)
		}
    },
    onLoad() {}
};
</script>
<style lang="scss">
@import '../../../../style/styleBySelf.scss'; /* components/index/srollable-frame-component/recommandMusic-card/index.wxss */

.recommand-card {
    display: flex;
    flex-direction: column;


    align-items: center;
    overflow: hidden;
    .image {
        width: 280rpx;
        height: 280rpx;
        border-radius: 30rpx;
        overflow: hidden;
    }
    .name-container {
        width: 100%;
        white-space: nowrap;

        .name {
            max-width: 300rpx;
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
    }
    .description {
        max-width: 300rpx;
        margin-top: 10rpx;
        font-size: 24rpx;
        color: #7a869a;
        line-height: 30rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }
}
</style>
