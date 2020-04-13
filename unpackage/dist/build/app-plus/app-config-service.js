
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/fen/fen","pages/xiaoZhiTiao/xiaoZhiTiao","pages/my/my","pages/search/search","pages/add-input/add-input","pages/huaTi-fen/huaTi-fen","pages/login/login","pages/fen_xiangQin/fen_xiangQin","pages/myFriend/myFriend","pages/liaoTian/liaoTian","pages/con-list/con-list","pages/my/my-sheZhi","pages/my/my-sheZhi-password","pages/my/my-email","pages/my-edit/my-edit","pages/my-feedback/my-feedback","pages/my-about/my-about","pages/myKong/myKong"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#ffffff"},"tabBar":{"color":"#ccc","selectedColor":"#FEE42A","borderStyle":"black","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","iconPath":"/static/icon/index_one.png","selectedIconPath":"/static/icon/index.png","text":"糗事"},{"pagePath":"pages/fen/fen","iconPath":"/static/icon/fen_one.png","selectedIconPath":"/static/icon/fen.png","text":"动态"},{"pagePath":"pages/xiaoZhiTiao/xiaoZhiTiao","iconPath":"/static/icon/liao_one.png","selectedIconPath":"/static/icon/liao.png","text":"小纸条"},{"pagePath":"pages/my/my","iconPath":"/static/icon/my_one.png","selectedIconPath":"/static/icon/my.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"糗事","compilerVersion":"2.6.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","scrollIndicator":"none","titleNView":{"searchInput":{"align":"center","placeholder":"搜索糗事","backgroundColor":"#F7F7F7","borderRadius":"12px","placeholderColor":"#cccccc","disabled":"true"},"buttons":[{"color":"#FF9625","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/fen/fen","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":"false"}},{"path":"/pages/xiaoZhiTiao/xiaoZhiTiao","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"小纸条","animationType":"slide-in-left","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","animationType":"slide-in-left","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","type":"menu"}]}}},{"path":"/pages/search/search","meta":{},"window":{"enablePullDownRefresh":true,"animationType":"slide-in-bottom","bounce":"none","scrollIndicator":"none","titleNView":{"autoBackButton":"false","searchInput":{"align":"left","placeholder":"搜索糗事","backgroundColor":"#F7F7F7","borderRadius":"12px","placeholderColor":"#cccccc"},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":"false"}},{"path":"/pages/huaTi-fen/huaTi-fen","meta":{},"window":{"navigationBarTitleText":"话题分类","bounce":"true"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录页","animationType":"slide-in-bottom","bounce":"none","scrollIndicator":"none","titleNView":false}},{"path":"/pages/fen_xiangQin/fen_xiangQin","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"我是分类详情页","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/myFriend/myFriend","meta":{},"window":{"animationType":"slide-in-left","bounce":"none","scrollIndicator":"none","titleNView":{"autoBackButton":"false","searchInput":{"align":"left","placeholder":"搜索糗事","backgroundColor":"#F7F7F7","borderRadius":"12px","placeholderColor":"#cccccc","disabled":"true"},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/liaoTian/liaoTian","meta":{},"window":{"navigationBarTitleText":"聊天页","animationType":"slide-in-bottom","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/con-list/con-list","meta":{},"window":{"navigationBarTitleText":"内容页","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/my/my-sheZhi","meta":{},"window":{"navigationBarTitleText":"设置页","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/my/my-sheZhi-password","meta":{},"window":{"navigationBarTitleText":"修改密码","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/my/my-email","meta":{},"window":{"navigationBarTitleText":"绑定邮箱","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/my-edit/my-edit","meta":{},"window":{"navigationBarTitleText":"修改资料","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/my-feedback/my-feedback","meta":{},"window":{"navigationBarTitleText":"意见反馈","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/my-about/my-about","meta":{},"window":{"navigationBarTitleText":"关于访糗百","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/myKong/myKong","meta":{},"window":{"navigationBarTitleText":"我的空间","bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});