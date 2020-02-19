<template>
	<view class="a">
		<!-- #ifdef MP-WEIXIN -->
		<button type="primary" open-type="getUserInfo" @getuserinfo='getUserInfo'>
			微信登录
		</button>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a:'',
				b:''
			}
		},
		methods:{
			getUserInfo(e){
				console.log(e);
				if(e.detail.iv==''){//用户点击拒绝授权
					uni.switchTab({
						url:'../index/index',
						success(res) {
							console.log('用户拒绝授权')
						}
					})
				}else{
						this.a=e.detail;
				var userName=uni.setStorageSync('userId',e.detail.userInfo.nickName);
				var userLog=uni.setStorageSync('userId',e.detail.userInfo.avatarUrl);
				this.login();
				}
			
			},
			login(){
				uni.login({
					success(res1) {
						console.log(res1);//===>code
						uni.request({
							url:'https://api.it120.cc/zhangjianbao/user/wxapp/login',
							method:'POST',
							data:{
								code:res1.code
							},
							success(res2) {
								console.log(res2);//-->如果没有注册，就获取不到数据
								if(res2.data.code==10000){
									this.zhuCe();
									return false;
								}else if(res2.data.code==0){
									// var openid=uni.setStorageSync('userId',e.detail.userInfo.nickNam);
									// var userName=uni.setStorageSync('userId',e.detail.userInfo.nickNam)
								}
							}
						})
					}
				})
			},
			zhuCe(){//注册
				uni.login({
					success(res) {
						uni.request({
							url:'https://api.it120.cc/zhangjianbao/user/wxapp/register/complex',
							method:'POST',
							data:{
								iv:this.a.iv,
								encryptedData:this.a.encryptedData,
								code:res.code
							},
							success(res1) {
								console.log(res1);
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
</style>
