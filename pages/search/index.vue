<template>
    <view class="page">
        <header-background-image></header-background-image>
        <JKSearch></JKSearch>
    </view>
</template>

<script>
import headerBackgroundImage from '../../components/play-list/header-background-image/index';
import JKSearch from '../../components/common/JKSearch/index';
import {mapState} from 'vuex'
// pages/search/index.ts
export default {
    components: {
        headerBackgroundImage,
        JKSearch
    },
    data() {
        return {};
    },
	computed:{
		...mapState(['music'])
	},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
		console.log(this.$store.state.hasLogin);
		console.log(this.$store.state.music);
	},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
		this.$store.commit('setHasLogin',true)
		console.log(this.$store.state.music);
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
    methods: {}
};
</script>
<style lang="scss">
.page {
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'AppleGothic';
}
</style>
