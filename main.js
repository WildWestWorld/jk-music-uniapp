import App from './App';

// Api函数polyfill（目前为实验版本，如不需要，可删除！）';
import Polyfill from './polyfill/polyfill';
Polyfill.init();

// 全局mixins，用于实现setData等功能，请勿删除！';
import Mixin from './polyfill/mixins';

// #ifndef VUE3
import Vue from 'vue';
//挂载vuex
import Vuex from 'vuex';
Vue.use(Vuex)


// import musicianCard from './components/index/musician-banner-component/musician-card/index.vue'
import store from './store/index.js'

// uni.$store = playerStore


Vue.mixin(Mixin);
Vue.config.productionTip = false;
Vue.prototype.$store = store

uni.$store = store

// Vue.component('musician-card', musicianCard);

App.mpType = 'app';
const app = new Vue({
    ...App,
	 store,
	 Vuex
});
app.$mount(




);
// #endif


// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
    const app = createSSRApp(App);
    app.mixin(Mixin);
    return {
        app
    };
}
// #endif
