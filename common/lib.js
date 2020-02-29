//网络监听
const NetWork={
	//网络状态
	isConnect:false,//声明一个状态为false
	On(){
		//获取当前网络状态
		uni.getNetworkType({//官网中的方法
			success(res) {//如果不等于 none，当前状态为true，不提示，否则提示用户，连接网络
				if(res.networkType!=='none'){this.isConnect=true;return false;}
				uni.showToast({
					icon:'none',
					title:'请先连接网络'
				})
			}
		})
		//监听网络状态变化
		uni.onNetworkStatusChange((res)=>{//当前是否有网络连接，当用户点击使用WiFi时，可监听到
			this.isConnect=res.isConnected;//让当前用户是否联网，等于这个状态，连接true，没连接false
			if(!res.isConnected){//如果没有连接，就提示用户，请链接网络，在app.vue中，全局检测
				uni.showToast({
					title:'您目前处于断网状态',
					icon:'none'
				})
			}
		})
	}
}
//APP更新//在官网搜索热更新问题==>uni-app 整包升级/更新方案==》客户端实现复制就好了
//==》在app.vue中，全局检测
const Update=function(){
	  //#ifdef APP-PLUS  
	    var server = "https://www.example.com/update"; //检查更新地址  
	    var req = { //升级检测数据  
	        "appid": plus.runtime.appid,  
	        "version": plus.runtime.version  
	    };  
	    uni.request({  
	        url: server,  
	        data: req,  
	        success: (res) => {  
	            if (res.statusCode == 200 && res.data.status === 1) {  
	                uni.showModal({ //提醒用户更新  
	                    title: "更新提示",  
	                    content: res.data.note,  
	                    success: (res) => {  
	                        if (res.confirm) {  
	                            plus.runtime.openURL(res.data.url);  
	                        }  
	                    }  
	                })  
	            }  
	        }  
	    })  
	    //#endif  
}
import config from './config.js';
export default{
	NetWork,
	Update
}