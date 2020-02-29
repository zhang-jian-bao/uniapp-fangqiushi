<template>
	<view >
		<!-- 一个大的透明的div,点击空白处，隐藏 -->
		<view class="xiaoZhiTiao-show" v-show="show" @click="bigShow"></view>
		<!-- 点击右上角显示 -->
		<view class="xiaoZhiTiao_fiexd animated fadeInRight fast" v-show="show">
			<view class="xiaoZhiTiao_fiexd_top u_dis" hover-class="ac"
			@click="lahei">
				<view class="iconfont icon-sousuo ic"></view>
				拉黑
			</view>
			<view class="xiaoZhiTiao_fiexd_bottom u_dis" hover-class="ac"
			@click="beizhu">
				<view class="iconfont icon-qingchu ic"></view>
				备注
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		methods:{
			bigShow(){//大的隐藏
				this.$emit('bigShow');
			},
			lahei(){//加糗友
				this.$emit('lahei');
			},
			beizhu(){//清除缓存
				this.$emit('beizhu');
			}
		}
	}
</script>

<style>
	.xiaoZhiTiao-show{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		/* background:#FF0000; */
		z-index: 1000;
	}
	.xiaoZhiTiao_fiexd{
		position: fixed;
		right: 0;
		top: 180upx;
		width: 300upx;
		height: auto;
		padding: 0 20upx;
		z-index: 2000;
		background: #FFFFFF;
		box-shadow: 1upx 1upx 20upx 1upx #EEEEEE;
		font-size: 40upx;
		font-weight: bold;
	}
	.xiaoZhiTiao_fiexd_top,.xiaoZhiTiao_fiexd_bottom{
		height: 80upx;
		line-height: 80upx;
	}
	.ac{
		background: #EEEEEE;
	}
	.ic{
		margin-right: 40upx;
	}
</style>
