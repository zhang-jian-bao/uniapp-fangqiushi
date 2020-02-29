<template>
	<view class="my">
		<template v-if="!isLogin">
			<!-- 未登录时的页面 -->
			<view class="my-top u_dis_c">登录仿糗事 体验更多精彩</view>
			<!-- 图标 -->
			<my-icon></my-icon>
			<!-- 跳转登录 -->
			<view class="u_dis_c more-jinru" @click="login">
				账号密码登录
				<view class="iconfont icon-jinru "></view>
			</view>
		</template>
		<template v-else>
			<!-- 登录后的页面 -->
			<my-login :userInfo='userInfo' @myKong='myKong'></my-login>
		</template>
		<!-- 导航 -->
		<view class="my-nav u_dis_s">
			<block v-for="(nav,key) in nav" :key="key">
				<my-nav :nav='nav' :index='key'></my-nav>
			</block>
			
		</view>
		<!-- 广告位 -->
		<view class="my-img">
			<image src="../../static/demo/demo8.jpg" 
			mode="widthFix" lazy-load></image>
		</view>
		<!-- 列表 -->
		<block v-for="(v,i) in list" :key="i">
			<my-list :v='v' :index='i'></my-list>
		</block>
		
	
	</view>
</template>

<script>
	import myIcon from '../../components/my-login/my-icon.vue';
	import myLogin from '../../components/my-login/my-login.vue';
	import myNav from '../../components/tab/my-nav.vue';
	import myList from '../../components/uni-list-com/my-list.vue';
	export default {
		components:{
			myList,myNav,myLogin,myIcon
		},
		data() {
			return {
				isLogin:false,//登录状态的切换
				userInfo:{//登陆用户信息
					userPic:'../../static/demo/topicpic/11.jpeg',
					userName:'焚心~',
					sunnum:0,
					todynum:0
				},
				nav:[//导航
					{name:'糗事',num:0},
					{name:'动态',num:0},
					{name:'评论',num:0},
					{name:'收藏',num:0}
				],
				list:[//列表
					{
						icon:'liulan',
						class:'liulan',
						name:'浏览历史',
						type:'',
						url:''
					},
					{
						icon:'huiyuanvip',
						class:'huiyuanvip',
						name:'糗百认证',
						type:'',
						url:''
					},
					{
						icon:'keyboard',
						class:'keyboard',
						name:'糗百认证',
						type:'',
						url:''
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {//监听原生导航按钮
			if(e.index==0){
				console.log("设置");
				this.User.navigate({
					url:'/pages/my/my-sheZhi'
				})
				
			}
		},
		methods:{
			login(){//点击跳转到登录页面
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			myKong(){
				uni.navigateTo({//点击跳转到我的空间
					url:'/pages/myKong/myKong'
				})
			}
		}
	}

</script>

<style>
	
	/* 头部 未登录的样式 */
	.my-top{
		font-size: 30upx;
		padding: 20upx 0;
	}
	.my-nav{
		font-size: 40upx;
	}
	
	/* 广告位 */
	.my-img{
		text-align: center;
		padding: 0 20upx;
		margin: 20upx 0;
	}
	.my-img>image{
		border-radius: 20upx;
	}
	
</style>
