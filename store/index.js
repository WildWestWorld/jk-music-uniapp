import { backgroundAudioManager, playerStore } from './player-store';
import { parseLyric, debounce, throttle } from './parse-lyric';
export { backgroundAudioManager, playerStore, parseLyric, debounce, throttle };


import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        hasLogin: false, // 登录状态
        userInfo: {}, // 用户信息
		
		music:null,
		formatTime:'00:00',
		currentTime:'00:00',
		totalTime:0,
		value: 0,
		isSliderDrag:false,
		isPlay: false,
		lycArray:[],
		currentLycIndex:0,
		toLyc:'',
		isDoubleLanguage:false,
		playSongList:[],
		playSongIndex:0,
		playModeIndex: 0,
		
		currentSong: null,
		isChangeMusic:false,
		isFirstPlay: true,
		isCreateNotification:false
    },
    mutations: {
        setHasLogin(state, value){
            state.hasLogin = value
            console.log(state.hasLogin)
        },
		setMusic(state,value){
			state.music=value
			console.log('vuexMusic',state.music);
		},
		setFormatTime(state,value){
			state.formatTime=value
			console.log('vuexFormatTime',state.formatTime);
		},
		setValue(state,value){
			state.value=value
			console.log(state.value);
		},
		setCurrentTime(state,value){
			state.currentTime=value
			console.log(state.currentTime);
		},
		setTotalTime(state,value){
			state.totalTime=value
			console.log(state.totalTime);
		},
		setIsSliderDrag(state,value){
			state.isSliderDrag=value
			console.log(state.isSliderDrag);
		},
		setIsPlay(state,value){
			state.isPlay=value
			console.log(state.isPlay);
		},
		setLycArray(state,value){
			state.lycArray=value
		},
		setCurrentLycIndex(state,value){
			state.currentLycIndex=value
		},
		setToLyc(state,value){
			state.toLyc=value
		},
		setIsDoubleLanguage(state,value){
			state.isDoubleLanguage=value
		},
		setPlaySongList(state,value){
			state.playSongList=value
		},
		setPlaySongIndex(state,value){
			state.playSongIndex=value
		},
		setIsChangeMusic(state,value){
			state.isChangeMusic=value
		},
		setPlayModeIndex(state,value){
			state.playModeIndex=value
		},
		setIsFirstPlay(state,value){
			state.isFirstPlay=value
		},
		setIsCreateNotification(state,value){
			state.isCreateNotification=value
		}
    },
    actions: {},
    getters: {}
})