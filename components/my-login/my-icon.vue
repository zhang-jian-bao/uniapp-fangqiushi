<template>
	<view class="my-icon u_dis_s">
		<!-- 登录页面的三个登录图标，渲染的没有问题，在测试页面可以显示，在当前页面不显示 -->
		<block v-for="(value,key) in providerList" :key="key">
			<view class="my-icon-aa u_dis_c"
			 @click="tologin(value)" 
			 :class="['more-'+value.clss]">
				<view class="iconfont " :class="['icon-'+value.icon ]"></view>
			</view>
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 providerList: []
			}
		},
		onLoad() {
			this.icon_login();
		},
		methods:{
			icon_login(){//点击图标登录
				uni.getProvider({
				    service: 'oauth',
				    success: (result) => {
				        this.providerList = result.provider.map((value) => {
				            let providerName = '';
							let icon='';
							let clss='';
				            switch (value) {
				                case 'weixin':
				                    providerName = '微信登录';
									icon="weixin";
									clss="weixin";
				                    break;
				                case 'qq':
				                    providerName = 'QQ登录';
									icon="QQ";
									clss="qq";
				                    break;
				                case 'sinaweibo':
				                    providerName = '新浪微博登录';
									icon="xinlangweibo";
									clss="xinlangweibo";
				                    break;
				                case 'alipay':
				                    providerName = '支付宝登录';
									icon="";
									clss="";
				                    break;
				            }
				            return {
				                name: providerName,
				                id: value,
								icon:icon,
								clss:clss
				            }
				        });
				
				    },
				    fail: (error) => {
				        console.log('获取登录通道失败', error);
				    }
				});
			},
			tologin(provider) {//点击登录
				uni.login({
					provider: provider.id,
					// #ifdef MP-ALIPAY
					scopes: 'auth_user', //支付宝小程序需设置授权类型
					// #endif
					success: (res) => {
						console.log('login success:', res);
						// 更新保存在 store 中的登录状态
						console.log('登录保存到本地')
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			}
		}
	}
</script>

<style>
	/* 图标 */
	.my-icon{
		/* width: 100%; */
		height: 100upx;
		/* border: 1px solid #000000; */
		padding: 0 140upx;
	}
	.my-icon-aa{
		width: 100upx;
		height: 100upx;
		/* border: 1px solid #000000; */
		border-radius: 50%;
		color: #FFFFFF;
	}
	.my-icon-aa>view{
		font-size: 50upx;
	}
	.more-weixin{
		background-color: #2AD198;
	}
	.more-qq{
		background-color: #0A98D5;
	}
	.more-xinlangweibo{
		background-color: #ee5e5e;
	}
	.more-jinru{
		font-size: 30upx;
		margin: 20upx 0;
	}
	.more-jinru>view{
		color: #E5E5E5;
	}
	
</style>
