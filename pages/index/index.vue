<template>



	<view class="page">
		<view class="bg-cover" ></view>
	  <view class="header">
		<!-- 下面这个img是个图片 不是那个大的全蓝背景，而是一个淡淡的蓝色划痕，属于装饰品 -->
	  
		<image class="header-bg" src="/static/images/header-bg.png"></image>
		<!-- 右侧的用户头像存放界面 -->
		<view class="user-box">

		  <!-- 头像框 -->
		  <view class="avatar-box">
			 <view>捷</view>
		  </view>
		  <!-- 通知框 -->
		  <view class="notification-box">
			<image class="bell-icon" src="../../images/bell.svg"></image>
			<!-- 通知图标的数量显示的框 -->
			<image class="dot-icon" src="../../images/dot.svg"></image>
			<!-- 通知的数量 -->
			<view class="dot-num">3</view>
		  </view>

		</view>
	  </view>

	  <!--scroll-view 用于滑动：专题 （该组件还未组件化，个人选择保留） -->
	  <scroll-view class="category-banner-list" scroll-x 
	   show-scrollbar="false" enhanced="true"> 
		<view class="big-container" :style="'width:' + (categoryBannerList.length * 320+40) +'rpx'">

	  <view class="container" :style="'width:' + (categoryBannerList.length * 320) +'rpx'">

	  <view class="category-box" v-for="(item,index)  of categoryBannerList" :key="index">
		<image :src="item.image" style="height: 100%;"></image>

		<view class="title-container">
		  <view class="name">{{item.name}}</view>
		  <view class="playTimes">{{item.playTimes}} Played</view>
		</view>

	  </view>

	  </view>
	</view>
	  </scroll-view>

	  <!--流行音乐人-->
	  <view class="trending-musician"  v-if="JKRecommandArtistList && JKRecommandArtistList.length>0">
		<muscianBanner title="流行音乐人" :list="JKRecommandArtistList"></muscianBanner>
	  </view>

	  <!-- 推荐歌单 -->
	<view class="recommendMusicList" style="width: 100%;" v-if="JKRecommandMusicList && JKRecommandMusicList.length>0">
	<!-- 自定义滑动模块组件 -->
	  <srollableFrame title="推荐歌单" moreLabel="更多歌单" :hideMoreLabel="true" :itemWidth="320" :itemCount="recommandMusicList.length">

		<recommendMusicCard v-for="(item,index) of recommandMusicList" :key="index" :item="item"></recommendMusicCard>
	  </srollableFrame>
	</view>

	  <!-- 推荐专辑 -->
	  <view class="recommendAlbumList" style="width: 100%;"  v-if="JKRecommandMusicList && JKRecommandMusicList.length>0">
	<!-- 自定义滑动模块组件 -->
	  <srollableFrame title="推荐专辑" moreLabel="更多专辑" :hideMoreLabel="true" itemWidth="320" :itemCount="recommandMusicList.length">
			
		<recommendMusicCard v-for="(item,index) of recommandMusicList" :key="index" :item="item"  ></recommendMusicCard>

	  </srollableFrame>
	</view>

	  <!-- 推荐音乐 -->
	  <view class="recommendPodcastList" style="width: 100%;"  v-if="JKRecommandMusicList && JKRecommandMusicList.length>0">
	<!-- 自定义滑动模块组件 -->
	  <srollableFrame title="推荐音乐" moreLabel="更多音乐" :hideMoreLabel="true" :itemWidth="320" :itemCount="JKRecommandMusicList.length">

				<recommendMusicCard v-for="(item,index) of JKRecommandMusicList" v-key="index" :item="item"  
				:data-index="index" :data-item="item" :dataIndex="index"
				></recommendMusicCard>
		
	  </srollableFrame>
	</view>

	<view class="lastPlayMusic"  v-if="lastPlayMusicList && lastPlayMusicList.length>0">
	
			<titleBanner title="最近播放" moreLabel="更多" hideMoreLabel="true"  ></titleBanner>
		

		<view class="lastplaymusic-list" :style="'height:'+(lastPlayMusicList.length*168+40)+'rpx'">
		  <lastplaymusicCard v-for="(item,index) of lastPlayMusicList" v-key="index" :item="item" ></lastplaymusicCard>
		</view>

	</view>


	<!-- 播放工具栏 -->
	<playBar :currentMusic="currentMusic" playAnimState="paused" :isPlay="isPlay" :playSongList="playSongList"  :playSongIndex="playSongIndex" ></playBar>

	<!-- page止 -->
	</view>

</template>


<script>
import { getToken } from "../../utils/auth"
import { sayHello } from "../../api/hello"
import { getPageByMusicName } from "../../api/music"
import { getPageByArtistName } from "../../api/artist"
import { playerStore } from "../../store/index"
// 页面组件
import  muscianBanner  from "../../components/index/musician-banner/index.vue"
import  srollableFrame  from "../../components/index/srollable-frame/index.vue"
import  musicianCard  from "../../components/index/musician-banner-component/musician-card/index.vue"
import  recommendMusicCard  from "../../components/index/srollable-frame-component/recommendMusic-card/index"
import  titleBanner  from "../../components/index/srollable-frame-component/title-banner/index"
import  lastplaymusicCard  from "../../components/index/lastplaymusic-card/index"  
import  playBar  from "../../components/index/play-bar/index"  
import  JKMusicList  from "../../components/common/JKMusicList/index"  






// 获取应用实例
const app = getApp();


export default {
	components:{
		muscianBanner,
		srollableFrame,
		musicianCard,
		recommendMusicCard,
		titleBanner,
		lastplaymusicCard,
		playBar,
		JKMusicList
	},
    data() {
        return {
    categoryBannerList:[{
      name:'说唱音乐',
      playTimes:'15K',
      image:require('../../images/recommend-playlist.png')
    },{
      name:'说唱音乐',
      playTimes:'15K',
      image:require('../../images/recommend-playlist.png')
    },{
      name:'说唱音乐',
      playTimes:'15K',
      image:require('../../images/recommend-playlist.png')
    },
  ],
    musicianBannerList:[{
      id:111,
      name:"黄渤",
      category:'流行音乐',
      image:require('../../images/musician-photo.png')
    },{
      id:222,
      name:"黄渤",
      category:'流行音乐',
      image:require('../../images/musician-photo.png')
    },{
      id:333,
      name:"黄渤",
      category:'流行音乐',
      image:require('../../images/musician-photo.png')
    },
    
  ],
    recommandMusicList:[{
      id:"111",
      name:"狂想曲",
      description:'释放心中的怒火',
      image:require('../../images/album.png')
    },{
      id:"111",
      name:"狂想曲",
      description:'释放心中的怒火',
      image:require('../../images/album.png')
    },{
      id:"111",
      name:"狂想曲",
      description:'释放心中的怒火',
      image:require('../../images/album.png')
    },
  ],
    lastPlayMusicList:[{
      name:"夜曲",
      album:"十一月的肖邦",
      artist:"周杰伦",
      cover:require('../../images/yequ.jpeg')
    },{
      name:"夜曲",
      album:"十一月的肖邦",
      artist:"周杰伦",
      cover:require('../../images/yequ.jpeg')
    }
    ],
    JKRecommandMusicList:null,
	JKRecommandArtistList:null,
    message:'hello world!',
    currentMusic:{},
    isPlay:false,
    playAnimState:"paused",
    
    playSongList:[],
    playSongIndex:0,
    showMusicList:false,
  };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad() {

		
		if(!getToken){
		  uni.switchTab({url:'/pages/login/index'})
		};
		//用于监听playerStore，详情在上面
		this.watchPlayerStoreListener()
	},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
		let data={pageNum:1,pageSize:10,searchWord:''};
		getPageByMusicName(data).then(res=>{
		  console.log(res)
		  this.setData({
		    'JKRecommandMusicList':res.data.records
		  })
		})
		//获取歌手的页面
		this.getArtistInitPage()
	},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

		
	},
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



  //更新页面使用的函数，会在navigator组件中使用(暂时无用)
  go_update(){
    let data={pageNum:1,pageSize:10,searchWord:''};
    getPageByMusicName(data).then(res=>{
      console.log(res)
      this.setData({
        'JKRecommandMusicList':res.data.records
      })
    })
  },
  debounce(fun,delay){
  
    let time
  
    return ()=>{
      let that=this
      let argus=arguments
  
      clearTimeout(time)
  
      time=setTimeout(
        ()=>{
         fun.apply(that,argus)
      }
      ,delay)
  
    }
  },
  //用于点击卡片时候触发的函数（页面绑定）(暂时被删除)(已经被迁移到recommendMusic-card组件里面去了)
  handleSongItemClick(event){
    let index=event.currentTarget.dataset.index
	console.log(index)
    playerStore.setState("playSongIndex",index)
  
    // playerStore.setState("playSongList",this.data.JKRecommandMusicList)
  
    //拿到item信息
    let musicItem=event.currentTarget.dataset.item;
    // //拿到当前的音乐列表
    // let currentPlayList=this.data.playSongList
    // //将当前的音乐放入到播放列表的首位
    // currentPlayList.unshift(musicItem)
    //   //点击这个item之后就把他放进我们的播放列表中
    // playerStore.setState("playSongList",currentPlayList)
    // playerStore.setState("playSongIndex",0)
    let payload={item:musicItem}
    playerStore.dispatch('addNewMusicToPlayList',payload)
    console.log(event)
  },
  //改变音乐的播放状态（页面绑定）(现在转移到component里面了)
  changeMusicState(){
    
    let isPlay = !this.data.isPlay
    playerStore.dispatch('changeMusicPlayState',isPlay)
  
  },
  //跳转到当前播放的音乐界面(页面绑定)(现在转移到component里面了)
  navigateToCurrentMusic(){
    wx.navigateTo({
      url:'/pages/music-player/detail?id='+this.data.currentMusic.id
    })
  },
  changeShowMusicListState(){
    let showMusicList=!this.data.showMusicList
  
    this.setData({
      showMusicList: showMusicList,
  
    })
  },
  //获取aritstPage
  getArtistInitPage(){
	  let data={pageNum:1,pageSize:10,searchWord:''};
	  getPageByArtistName(data).then(res=>{
	    console.log(res)
	    this.setData({
	      'JKRecommandArtistList':res.data.records
	    })
	  })
	  
  },
  //监听专区
  watchPlayerStoreListener(){
  
        //监听currentSong的信息
  playerStore.onStates(["music","isPlay"],({music,isPlay})=>{
          if(music !== undefined){
            this.setData({
              currentMusic:music
            })
          }
    
          if(isPlay !== undefined){
            this.setData({
              isPlay:isPlay,
              playAnimState:isPlay?"running":"paused"
            })
          }
  })
  //歌单相关变量监听
  playerStore.onStates(["playSongList","playSongIndex"],({playSongList,playSongIndex})=>{
    if(playSongList!== undefined&&playSongList !== null){   this.setData({playSongList:playSongList})}
    if(playSongIndex !== undefined&&playSongIndex !== null){   this.setData({playSongIndex:playSongIndex})}
  });
  
  
  },
    }
};
</script>

<style lang="scss">
@import '../../style/styleBySelf.scss';
@import '../../uni.scss';
.bg-cover{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(white,1);
  backdrop-filter: blur(30px);
}

.page{
  height: 100vh;
  width: 100vw;
  position: relative;
  font-family: "AppleGothic";

  .header{
    width: 100vw;
    height: 480rpx;
    background-color: $primary-color; 
    border-radius: 0 0 200rpx 0;
    overflow: hidden;
    position: relative;
    .header-bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 480rpx;
    }
    .user-box{
      opacity: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: absolute;
      height: 76rpx;
      top: 128rpx ;
      left: 50rpx;
      .avatar-box{
        background-color: #fff;
        width: 76rpx;
        height: 76rpx;
        line-height: 76rpx;
        text-align: center  ;
        border-radius: 76rpx;
        font-weight: bold;
        font-size: 34rpx;
        color: $text-acitve-color;
      }
  
      .notification-box{
        margin-left: 36rpx;
        position: relative;
       
        .bell-icon{
          width: 48rpx;
          height: 50rpx;
        }
        .dot-icon{
          position: absolute;
          right: -4rpx;
          top: -14rpx;
          width: 34rpx;
          height: 34rpx;
        }
        .dot-num{
          position: absolute;
          font-size: 18rpx;
          color: white;
          right: 8rpx;
          top: -10rpx;
        }
      }
  
    }
  }
  .category-banner-list{
    position: absolute;
    top: 274rpx;
    height: 440rpx;
  .big-container{
    position: relative;
    height: 440rpx;
    width: 100%;
  .container{
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 440rpx;
    .category-box{
      border-radius: 30rpx 30rpx 20rpx 20rpx;
      overflow: hidden;
      box-shadow: 0rpx 20rpx 150rpx 0rpx rgba(0,0,0,0.08);
      width: 280rpx;
      height: 440rpx; 
      margin-left: 40rpx;
      position: relative;
    image{
      max-width: 100%;
      max-height: 100%;
      display: block;

    }
    .title-container{
      position: absolute;
      top: 40rpx;
      left:30rpx;
      .name{
        font-size: 36rpx;
        color:#FFFFFF;
        line-height: 42rpx;
      }
      .playTimes{
        font-size: 28rpx;
        color:#FFFFFF;
        opacity:0.8;
      }
    }
    }
  }
  }
  }
  .trending-musician{
    margin-top:324rpx
  }
  .recommendMusicList{
    margin-top: 80rpx;
	
  }
  .recommendAlbumList{
    margin-top: 80rpx;
  }
  .recommendPodcastList{
    margin-top: 80rpx;
  }
  .lastPlayMusic{
    margin-top: 80rpx;
	padding-bottom: calc(var(--window-bottom));
    .lastplaymusic-list{
      display: flex;
      flex-direction: column;
      padding: 0 50rpx;
    }
  }
//播放工具栏的padding更优解决方案
//因为fix的时候，页面中不占位，所以我们写了一个与fix相同高度的relative填充该位置
.play-bar-placeholder{
  height: 44px;
}

// 播放工具栏
  .play-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    padding: 0 8px;
    background-color: #fafafa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -1px 5px rgba(0,0,0, 0.1);
    .left{
      flex: 1;
      display: flex;
      align-items: center;
      .cover{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        position: relative;
        top: -6px;
      }
      .cover-anim{
        //旋转10s 
        animation: coverRotate 16s linear infinite;
      }
      //旋转动画
      @keyframes coverRotate{
        from{
          transform: rotate(0deg);
        }
        to{
          transform: rotate(360deg);

        }
      }
      .name{
		font-size: 28rpx;
        margin-left: 10rpx;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .right{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .icon-play{
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
      

      .icon-playlist{
        width: 30px;
        height: 30px;
      }
    }
  }

}



</style>