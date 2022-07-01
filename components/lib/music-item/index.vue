<template>
    <view class="scroll-item-container"  hover-class="hover" hover-stay-time="100" @tap="onTab">
        <view class="music-item-container">
            <view class="left">
                <view class="music-name">
                    <text>{{ item.name }}</text>
                </view>
                <view class="artist-name-icon-container">
                    <view class="HQ-icon">
                        <image src="/static/images/HQ.png"></image>
                    </view>

                    <view class="artist-name">{{map.getArtstNameList(item.artistVoList) || ''}}</view>
                </view>
            </view>
            <view class="right">
                <image src="/static/images/more.png" style="width: 32px; height: 32px"></image>
            </view>
        </view>
    </view>
</template>
<script module="map" lang="wxs" src="./map.wxs"></script>
<script>
	
import { playerStore } from '../../../store/player-store';
export default {
    data() {
        return {
			artist:null
        };
    },
	props:{
		item:{
		type:Object,
		default:()=>{null}
		}
	}
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad() {
		this.artist =item.artistVoList.map(item=>{
			return item.name
		}).join('/')
	},
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
    }
};
</script>


<style lang="scss">
	.hover{
		background-color: #f7f7f9;
	}
	
.scroll-item-container {

    height: 100rpx;
    box-sizing: border-box;
	margin-bottom: 20rpx;
    .music-item-container {
        height: 100%;
	margin: 0rpx 46rpx 0rpx 46rpx;
        display: flex;
        flex-direction: row;
        .left {
            width: 70%;
            max-width: 70%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .music-name {
                font-size: 36rpx;
                font-weight: 400;
                display: flex;
                align-items: center;
                height: 60%;
                max-height: 60%;
                width: 100%;
                max-width: 100%;

                text-overflow: ellipsis;
                text {
                    max-width: 100%;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            .artist-name-icon-container {
                height: 40%;
                max-height: 40%;
                line-height: 18px;
                font-size: 30rpx;
                color: rgb(131, 131, 131);
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                .HQ-icon {
                    width: 40rpx;
                    height: 40rpx;
                    image {
                        width: 40rpx;
                        height: 40rpx;
                    }
                }
            }
        }
        .right {
            width: 30%;
            max-width: 30%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
}
</style>
