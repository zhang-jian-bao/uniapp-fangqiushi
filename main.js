import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
// Vue.prototype.isLogin=function(url,type){//封装全局的登录
// 	var userId=uni.getStorageSync('userId');
// 	var userMa=uni.getStorageSync('userMa');
// 	var userName=uni.getStorageSync('userName');
// 	var userLog=uni.getStorageSync('userLog');
// 	if(userId==''||userName==''||userMa==''){
// 		return false;
// 	}
// 	return [userId,userMa,userLog,userName];
// }
import config from './common/config.js';//前面要加个./
import lib from './common/lib.js';//全局配置接口
Vue.prototype.config=config;
Vue.prototype.lib=lib;

import User from './common/user.js';//封装接口
Vue.prototype.User=User;
App.mpType = 'app'

const app = new Vue({
    ...App,
	config,
	lib
})
app.$mount()
