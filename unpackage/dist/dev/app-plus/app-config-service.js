
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"Shop","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.6.4","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#000","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"/static/tabbar/home.png","selectedIconPath":"/static/tabbar/homing.png","text":"首页"},{"pagePath":"pages/class/class","iconPath":"/static/tabbar/class.png","selectedIconPath":"/static/tabbar/classing.png","text":"分类"},{"pagePath":"pages/shopping/shopping","iconPath":"/static/tabbar/shop.png","selectedIconPath":"/static/tabbar/shopping.png","text":"购物车"},{"pagePath":"pages/my/my","iconPath":"/static/tabbar/my.png","selectedIconPath":"/static/tabbar/mying.png","text":"我的"}],"selectedIndex":0,"shown":true},"locales":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"enablePullDownRefresh":true,"navigationBar":{"backgroundColor":"#ffffff","titleText":"百年奥莱","type":"default","buttons":[{"float":"left","fontSrc":"static/iconfont.ttf","text":"","fontSize":"27px"},{"float":"right","fontSrc":"static/iconfont.ttf","text":"","fontSize":"27px"}]},"isNVue":false}},{"path":"pages/class/class","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"enablePullDownRefresh":false,"scrollIndicator":"none","navigationBar":{"backgroundColor":"#ffffff","titleText":"","type":"default","searchInput":{"autoFocus":false,"align":"left","color":"#000","backgroundColor":"#f7f7f7","borderRadius":"15px","placeholder":"请输入关键字","placeholderColor":"#838383","disabled":true}},"isNVue":false}},{"path":"pages/shopping/shopping","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}},{"path":"pages/my/my","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"titleText":"","type":"default","style":"custom"},"isNVue":false}},{"path":"pages/search/search","meta":{"enablePullDownRefresh":false,"scrollIndicator":"none","navigationBar":{"backgroundColor":"#ffffff","titleText":"","type":"default","searchInput":{"autoFocus":true,"align":"left","color":"#000","backgroundColor":"#f7f7f7","borderRadius":"15px","placeholder":"请输入搜索内容","placeholderColor":"#838383","disabled":false},"buttons":[{"float":"right","text":"搜索","fontSize":"16px","width":"50px","color":"#636263"}]},"isNVue":false}},{"path":"pages/SearchResult/SearchResult","meta":{"enablePullDownRefresh":false,"scrollIndicator":"none","navigationBar":{"backgroundColor":"#ffffff","titleText":"","type":"default","searchInput":{"autoFocus":true,"align":"left","color":"#000","backgroundColor":"#f7f7f7","borderRadius":"15px","placeholder":"请输入搜索内容","placeholderColor":"#838383","disabled":false},"buttons":[{"float":"right","text":"筛选","fontSize":"16px","width":"50px","color":"#636263"}]},"isNVue":false}},{"path":"pages/details/details","meta":{"enablePullDownRefresh":false,"scrollIndicator":"none","navigationBar":{"titleText":"商品详情","type":"transparent","backgroundColor":"#ffffff","buttons":[{"type":"menu","color":"#ffffff","fontSize":"22px","text":""},{"type":"share","color":"#ffffff","fontSize":"22px","text":""}],"coverage":"132px"},"isNVue":false}},{"path":"pages/config/config","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"设置","type":"default"},"isNVue":false}},{"path":"pages/config-address/config-address","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"地址管理","type":"default"},"isNVue":false}},{"path":"pages/add-address/add-address","meta":{"enablePullDownRefresh":false,"scrollIndicator":"none","navigationBar":{"titleText":"添加地址","type":"default","backgroundColor":"#ffffff","buttons":[{"float":"right","text":"保存","fontSize":"16px","width":"50px","color":"#636263"}]},"isNVue":false}},{"path":"pages/my-order/my-order","meta":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ffffff","titleText":"我的订单","type":"default"},"isNVue":false}},{"path":"pages/confirm-order/confirm-order","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"确认订单","type":"default"},"isNVue":false}},{"path":"pages/peyment/peyment","meta":{"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"titleText":"","type":"default","style":"custom"},"isNVue":false}},{"path":"pages/payment-success/payment-success","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/login/login","meta":{"titleNView":false,"navigationBar":{"titleText":"","type":"default","style":"custom"},"isNVue":false}},{"path":"pages/login-phone/login-phone","meta":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ffffff","titleText":"输入手机号","type":"default"},"isNVue":false}},{"path":"pages/verification-code/verification-code","meta":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#ffffff","titleText":"输入验证码","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  