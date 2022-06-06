<template>
    <!-- components/common/JKButton/index.wxml -->

    <view class="JK-button">
        <button :class="type" :hover-class="'hover-' + type" :style="width ? 'width:' + width : ''">
            <image v-if="icon" class="icon" :src="'../../../images/' + icon + '.svg'"></image>
            <slot></slot>
        </button>
    </view>
</template>

<script>
// components/common/JKButton/index.ts
export default {
    data() {
        return {};
    },
    /**
     * 组件的属性列表
     */
    options: {
        styleIsolation: 'isolated'
    },
    props: {
        width: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'primary'
        },
        icon: {
            type: String,
            default: null
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {}
};
</script>
<style lang="scss">
@import '../../../style/styleBySelf.scss'; /* components/common/JKButton/index.wxss */

.JK-button {
    .primary {
        border-radius: 20rpx;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0;
        text-align: center;
        vertical-align: middle;
        -webkit-appearance: none;
        -webkit-text-size-adjust: 100%;
        height: 88rpx;
        background: $primary-color;
        color: white;
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

    .svg {
        background-color: $info-color;
        border-radius: 20rpx;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0;
        text-align: center;
        vertical-align: middle;
        -webkit-appearance: none;
        -webkit-text-size-adjust: 100%;
        height: 88rpx;
        color: white;
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

    .icon {
        width: 48rpx;
        height: 48rpx;
    }
}
.hover-primary {
    background: $primary-color;
    opacity: 0.8;
}
.hover-svg {
    background: $text-color;
    opacity: 0.8;
}
</style>
