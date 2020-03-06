export default{//如果用户没有登录，有些权限是不允许用户使用的
	//用户token
	token:true,
	//用户信息
	userinfo:false,
	//权限验证跳转Nocheck=true,
	navigate(options,type="navigateTo"){
		//权限验证
		if(!this.token){
		return	uni.navigateTo({url:'/pages/login/login'})
		}
		// if(!Nocheck){
		// 	if(!this.token) return;
		// }
		//跳转
		switch (type){
			case 'navigateTo':
				uni.navigateTo(options);
				break;
			case 'redirectTo':
				uni.redirectTo(options);
				break;
			case 'reLaunch':
				uni.reLaunch(options);
				break;
			case 'switchTab':
				uni.switchTab(options);
				break;
							
			default:
				break;
		}
		
	}
}