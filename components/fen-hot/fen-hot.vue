<template>
	<view class="huaTi-hot">
		<view class="huaTi-hot-top u_dis_b">
			<view class="huaTi-hot-top-left">
				热门分类
			</view>
			<view class="huaTi-hot-top-right u_dis" @click="huaTi_fen">
				更多<view 
				class="iconfont icon-jinru"></view>
			</view>
		</view>
		<view class="huaTi-hot-bottom u_dis">
			<block v-for="(item,key) in nav" 
			:key="key">
				<view>{{item}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			nav:Array
		},
		data() {
			return {
				
			}
		},
		methods:{
			huaTi_fen(){//点击更多，跳转到话题分类页面
				uni.navigateTo({
					url: '/pages/huaTi-fen/huaTi-fen'
				});
			}
		}
	}
</script>

<style>
	.huaTi-hot-bottom view{
		flex: 1;
		background-color: #EEEEEE;
		color: #CCCCCC;
		margin: 20upx 10upx;
		text-align: center;
		border-radius: 10upx;
	}
	.huaTi-hot-top-right{
		color: #EEEEEE;
	}
	.huaTi-hot{
		margin: 20upx 0;
		border-top: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
	}
</style>
