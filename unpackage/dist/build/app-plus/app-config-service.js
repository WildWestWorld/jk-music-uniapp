
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/index","pages/search/index","pages/lib/index","components/index/musician-banner/index","pages/play-list/detail","pages/music-player/detail"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"捷凯音乐","navigationBarTextStyle":"black","navigationStyle":"custom"},"tabBar":{"custom":false,"color":"#7A869A","selectedColor":"#105DFB","borderStyle":"white","list":[{"iconPath":"static/images/explore.png","selectedIconPath":"static/images/explore-active.png","pagePath":"pages/index/index","text":"首页"},{"iconPath":"static/images/searchV2.png","selectedIconPath":"static/images/searchV2-active.png","pagePath":"pages/search/index","text":"搜索"},{"iconPath":"static/images/libV2.png","selectedIconPath":"static/images/libV2-active.png","pagePath":"pages/lib/index","text":"音乐库"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"捷凯音乐","compilerVersion":"3.4.7","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/login/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/search/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/lib/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/components/index/musician-banner/index","meta":{},"window":{"component":true}},{"path":"/pages/play-list/detail","meta":{},"window":{}},{"path":"/pages/music-player/detail","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});