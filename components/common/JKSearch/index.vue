<template>
    <view class="search-input">
        <image class="search-icon" src="/static/images/icons/search.svg"></image>
        <input v-model="valueClone" placeholder-class="placeholder" type="text" placeholder="检索音乐" @input="emptyCallback" />
        <image v-if="valueClone" @tap="clear" class="clear-icon" src="/static/images/icons/clear.svg"></image>
    </view>
</template>

<script>
// components/common/JKSearch/index.ts
export default {
    data() {
        return {};
    },
    /**
     * 组件的属性列表
     */
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        clear() {
            this.setData({
                valueClone: ''
            });
        },

        emptyCallback() {}
    },
    watch: {
        value: {
            handler: function (newVal, oldVal) {
                this.valueClone = newVal;
            },

            immediate: true
        }
    }
};
</script>
<style lang="scss">
@import '../../../style/styleBySelf.scss';

.search-input {
    margin-top: 180rpx;
    width: 650rpx;
    height: 100rpx;
    background-color: #fff;
    box-shadow: 0 20rpx 150rpx 0rpx rgba(0, 0, 0, 0.05);
    border-radius: 20rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 44rpx;
    box-sizing: border-box;
    .search-icon {
        width: 40rpx;
        height: 40rpx;
    }
    input {
        flex-grow: 1;
        padding: 0 24rpx;
        font-size: 32rpx;
        height: 36rpx;
        line-height: 36rpx;
        color: $text-acitve-color;
    }
    .placeholder {
        font-size: 32rpx;
        height: 36rpx;
        line-height: 36rpx;
        color: $placeholder-text-color;
    }
    .clear-icon {
        width: 32rpx;
        height: 32rpx;
    }
}
</style>
