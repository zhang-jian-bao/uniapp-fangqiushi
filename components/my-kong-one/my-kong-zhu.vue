<template>
	<!-- 我的空间下的主页信息 -->
	<view class="my-kong-zhu animated fadeInLeft fast">
		<view class="my-kong-zhu-item">
			<view class="">账号信息</view>
			<view class="">糗龄：{{aa}}</view>
			<view class="">糗百id:{{userInfo.id}}</view>
		</view>
		<view class="my-kong-zhu-item">
			<view class="">个人信息</view>
			<view class="">星座：{{bb}}</view>
			<view class="">职业:{{userInfo.job}}</view>
			<view class="">故乡：{{userInfo.path}}</view>
			<view class="">情感:{{userInfo.qg}}</view>
		</view>
	</view>
</template>

<script>
	import t from '../../common/time.js';
	export default {
		props:{
			userInfo:Object
		},
		computed:{//计算属性
			aa(){//糗龄
				return t.gettime.sumAge(this.userInfo.utime);
			},
			bb(){//星座
				return t.gettime.getHroscope(this.userInfo.xz);
			}
		}
	}
</script>

<style scoped>
		/* 主页信息布局 */
		.my-kong-zhu-item{
			padding: 40upx;
			font-size: 34upx;
			color: #CCCCCC;
			border-bottom: 1upx solid #CCCCCC;
		}
		.my-kong-zhu-item>view:first-child{
			font-size: 40upx;
			font-weight: bold;
			color: #000000;
		}
		
	
</style>
