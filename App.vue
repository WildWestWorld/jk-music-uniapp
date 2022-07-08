<script>
import { loginWxApi } from './api/loginWx';
import { playerStore } from './store/index';
import { getToken } from './utils/auth'; // app.ts


     export default{
        globalData: {
            //是否在播放
            isMusicPlay: false,
            isSameMusic: false,
            //音乐ID
            musicId: '',
            // 当前播放歌单id
            musicListId: '',
            // 当前播放歌曲在歌单中的索引
            playingMusicIndex: 0,
            // 当前播放歌单
            playingMusicList: [],
            // 用户喜欢的歌曲列表(短时间多次请求喜欢列表会导致304缓存，所以请求一次后在本地进行操作)
            likeList: [],
            // 存放在musicList中请求到的列表id
            trackIdsList: [],
            //下面的暂时无用
            musicObject: null,
            musicPercent: 0,
            musicTotalTime: '00:00',
            musicCurrentTime: '00:00',
            //屏幕的信息
            screenWidth: 0,
            screenHeight: 0,
            deviceRadio: 0,
            //状态栏的信息，状态栏就是显示时间和电量的一个状态
            statusBarHeight: 0
        },

        //自定义函数区
        async loginWx() {
            //自定义函数，具体在api/loginWx里面
            const code = await loginWxApi();
            console.log(code);
        },

        onLaunch() {
            //获取当前手机的信息，例如屏幕的宽高
            const info = uni.getWindowInfo();
            this.globalData.screenHeight = info.screenHeight;
            this.globalData.screenWidth = info.screenWidth;
            this.globalData.statusBarHeight = info.statusBarHeight;
            this.globalData.deviceRadio = info.devicePixelRatio;
            console.log(info); //获取用户信息(暂时不需要，我们有写token)
            // this.loginWx()
            //获取store里面playSongList

            let playSongList = uni.getStorageSync('playSongList');
            console.log(playSongList);

            if (playSongList.length !== 0) {
                playerStore.setState('playSongList', playSongList);
				uni.$store.commit('setPlaySongList',playSongList)
                console.log(playSongList);
            }
        },

        onShow() {
            //getToken方法得到值是空的情况下
            //gettoken来自于utils/auth
            if (!getToken()) {
                uni.redirectTo({
                    url: '/pages/login/index'
                });
            } // let pages = getCurrentPages() //获取加载的页面
            // let  currentPage = pages[pages.length-1] //获取当前页面的对象
            // let url = currentPage.route //当前页面url
            // console.log(url)

            if (uni.getStorageSync('JK-token')) {
				let pages =getCurrentPages()
				let  currentPage = pages[pages.length-1] //获取当前页面的对象
				if(currentPage){
					let url = currentPage.route 
					console.log(url);
					//如果是登陆界面
					if(url == '/pages/login/index'){
						uni.navigateTo({
							url: '/pages/index/index'
						});
					}
				}

            } else {
                uni.redirectTo({
                    url: '/pages/login/index'
                }); // if(url !== 'pages/login/index'){
                //   wx.navigateTo({url:'/pages/login/index'})
                // }
            } //获取store里面playSongList
        },
		onHide(){
			// console.log('yinc');
			// if(uni.$store.state.music){
			// 	playerStore.dispatch('createNotification')
				
			// 	playerStore.dispatch('updateNotification')
			// 	playerStore.dispatch('watchNotificaiton')
			// }

		},
        onUnload() {
			uni.$store.dispatch('closeNotificaiton')
		}
    };
</script>
<style lang="scss">
/**app.wxss**/
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
}
page {
    font-family: 'Barlow,-apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif,AppleGothic' !important;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    box-sizing: border-box;
}
</style>
