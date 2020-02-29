<template>
	<view class="my-login u_dis_b" @click="toMyKong">
		<image :src="userInfo.userPic"
		 mode="widthFix" lazy-load></image>
		 <view class="my-login-con">
		 	<view class="my-login-top">{{userInfo.userName}}</view>
			<view class="my-login-bottom u_dis">
				<view class="">总访客 {{userInfo.sunnum}} </view>
				<view class=""> 今日 {{userInfo.todynum}}</view>
			</view>
		 </view>
		 <view class="iconfont icon-jinru more-login"></view>
	</view>
</template>

<script>
	export default {
		props:{
			userInfo:Object
		},
		methods:{
			toMyKong(){
				this.$emit('myKong');
			}
		}
	}
</script>

<style>
	/* 登录后的样式 */
	.my-login{
		padding: 20upx 40upx;
	}
	.my-login>image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	.my-login-con{
		flex:1;
		/* border: 1upx solid #000000; */
		padding-left: 30upx;
	}
	.my-login-top{
		font-size: 40upx;
		font-weight: bold;
	}
	.my-login-bottom{
		color: #BEBEBE;
		font-size: 35upx;
	}
	.my-login-bottom>view{
		margin-right: 20upx;
	}
	.more-login{
		font-size: 40upx;
	}
	
</style>
