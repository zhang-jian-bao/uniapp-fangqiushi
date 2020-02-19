import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.prototype.isLogin=function(url,type){//封装全局的登录
	var userId=uni.getStorageSync('userId');
	var userMa=uni.getStorageSync('userMa');
	var userName=uni.getStorageSync('userName');
	var userLog=uni.getStorageSync('userLog');
	if(userId==''||userName==''||userMa==''){
		return false;
	}
	return [userId,userMa,userLog,userName];
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
