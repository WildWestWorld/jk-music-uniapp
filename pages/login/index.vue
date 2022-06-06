<template>
    <view class="page">
        <view class="login-form">
            <view class="header">
                <view :class="isLogin ? 'tab active' : 'tab'" @tap="navigetorToLogin">登录</view>
                <view :class="isLogin ? 'tab' : 'tab active'" @tap="navigetorToRegister">注册</view>
            </view>

            <view class="content">
                <view class="title">{{ isLogin ? '登录' : '注册' }}</view>
                <view class="title-tips">{{ isLogin ? '嗨，你好！欢迎登录捷凯音乐' : '尊敬的用户，你好！欢迎注册捷凯音乐' }}</view>

                <view class="form-item">
                    <view class="label">{{ isLogin ? '用户名' : '注册用户名(至少4位)' }}</view>
                    <input v-model="username" :placeholder="isLogin ? '请输入用户名' : '请输入注册用户名'" @input="emptyFunctionForModel" placeholder-class="placeholder-style" />
                </view>

                <view class="form-item" v-if="!isLogin">
                    <view class="label">{{ isLogin ? '昵称' : '注册昵称(至少2位)' }}</view>
                    <!-- placeholder-class：placeholder的样式 -->
                    <input v-model="nickname" placeholder="请输入注册昵称" @input="emptyFunctionForModel()" placeholder-class="placeholder-style" />
                </view>

                <view class="form-item">
                    <view class="label">{{ isLogin ? '密码' : '注册密码(至少6位)' }}</view>
                    <!-- placeholder-class：placeholder的样式 -->
                    <input
                        password
                        v-model="password"
                        :placeholder="isLogin ? '请输入密码' : '请输入注册密码'"
                        @input="emptyFunctionForModel"
                        placeholder-class="placeholder-style"
                    />
                </view>
                <view class="forget-password" v-if="isLogin">忘记密码？</view>
				<button type="primary" @tap="onLogin()" v-if="isLogin">登录</button>
				<button type="primary" @tap="onRegister()" v-if="!isLogin">注册</button>
				
                <!-- <button type="primary" @tap="parseEventDynamicCode(isLogin ? 'onLogin' : 'onRegister')">{{ isLogin ? '登录' : '注册' }}</button> -->

                <view class="register-area" v-if="isLogin" @tap="navigetorToRegister">
                    没有账号？
                    <view class="register">立即注册</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import { login, register } from '../../api/user'; // pages/login/index.ts

export default {
    data() {
        return {
            username: '',
            password: '',
            nickname: '',
            isLogin: true
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad() {
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
        // 自定义函数区
        //用于拿到token
        onLogin() {
            console.log(this.isLogin);
            login({
                username: this.username,
                password: this.password
            }).then((res) => {
                console.log(res);

                if (res) {
                    if (!res.code || res.statusCode === 200) {
                        uni.showToast({
                            title: '登录成功'
                        });
                        uni.setStorageSync('JK-token', res);
                        uni.switchTab({
                            url: '/pages/index/index'
                        });
                    } else {
                        uni.showToast({
                            title: '登录失败',
                            icon: 'error'
                        });
                    }
                }
            });
        },

        onRegister() {
            console.log(this.isLogin);
            let user = null;
            user = {
                username: this.username,
                password: this.password,
                nickname: this.nickname
            };
            register(user).then((res) => {
                console.log(res);

                if (res) {
                    uni.showToast({
                        title: '注册成功'
                    }); //  this.data.isLogin=true;
                    //跳转到login页面

                    this.navigetorToLogin();
                }

                if (res.message) {
                    uni.showToast({
                        title: res.message,
                        icon: 'error'
                    });
                }
            });
        },

        //自定义函数，用于model双向绑定出现的warning 没有什么具体的含义
        emptyFunctionForModel() {},

        //注册切换
        navigetorToRegister() {
            this.setData({
                isLogin: false,
                username: '',
                password: '',
                nickname: ''
            });
        },

        //登录切换
        navigetorToLogin() {
            this.setData({
                isLogin: true,
                username: '',
                password: '',
                nickname: ''
            });
        }
    }
};
</script>
<style lang="scss">
@import '../../style/styleBySelf.scss';
@import '../../style/vantTheme.scss'; /*导入自定义的style数据*/
/*导入自定的vant的元素style*/
.page {
    width: 100vw;
    height: 100vh;
    background-color: $primary-color;
    display: flex;
    position: relative;
    font-family: 'AppleGothic';
    .login-form {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 85vh;
        background-color: #fff;
        border-radius: 30rpx 30rpx 0 0;
        overflow: hidden;
        .header {
            width: 100%;
            display: flex;
            flex-direction: row;
            line-height: 88rpx;
            height: 88rpx;
            .tab {
                flex: 1;
                text-align: center;
                overflow: hidden;
                font-size: 14px;
                font-weight: 400;
                color: $text-color;
                border-bottom: 4rpx solid #fff;
                &.active {
                    color: $text-acitve-color;
                    border-bottom-color: $primary-color;
                }
            }
        }
        .content {
            padding: 0 70rpx;
            .title {
                margin-top: 84rpx;
                font-size: 48rpx;
                color: #002251;
                letter-spacing: 0;
                font-weight: 500;
                margin-bottom: 14rpx;
            }
            .title-tips {
                height: 20px;
                font-size: 14px;
                color: #7a869a;
                line-height: 20px;
                margin-bottom: 70rpx;
            }

            .form-item {
                margin-bottom: 50rpx;
                .label {
                    margin-top: 10rpx;
                    height: 26rpx;
                    font-size: 28rpx;
                    color: #c1c7c0;
                    font-weight: 400;
                    margin-bottom: 28rpx;
                }
                input {
                    width: 100%;
                    height: 88rpx;
                    opacity: 0.75;
                    background-color: #f2f4f7;
                    box-shadow: inset 0px 2rpx 4rpx 0px rbga(0, 0, 0, 0.04);
                    border-radius: 30rpx;
                    padding: 0 0 0 32rpx;

                    .placeholder-style {
                        height: 100%;
                        opacity: 0.5;
                        color: #7a869a;
                        font-weight: 400;
						display: flex;
						align-items: center;
						
                    }
                }
            }
            .forget-password {
                font-size: 28rpx;
                color: #0041c4;
                font-weight: 400;
                margin-bottom: 48rpx;
            }
            button {
                height: 88rpx;
                background-color: #0041c4;
                border-radius: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
                color: #fff;
            }
            .register-area {
                margin-top: 70rpx;
                width: 100%;
                display: flex;
                text-align: center;
                justify-content: center;
                color: #7a869a;
                .register {
                    color: #0041c4;
                }
            }
        }
    }
}
</style>
