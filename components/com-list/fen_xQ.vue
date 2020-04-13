<template>
	<view >
		<view class="fen_xiangQin_nav">
					<image :src="item.img" 
					mode="aspectFill" lazy-load></image>
				</view>
				<view class="fen_xiangQin_top">
					<view class="fen_xiangQin_top_one u_dis">
						<image :src="item.img" 
						mode="widthFix" lazy-load></image>
						<view >#{{item.title}}#</view>
					</view>
					<view class="fen_xiangQin_top_two u_dis">
						<view class="">动态 {{item.doscnum}}</view>
						<view class="">今日 {{item.todynum}}</view>
					</view>
					<view class="fen_xiangQin_top_three">
						{{item.con}}
					</view>
				</view>
	</view>
			
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				
			}
		},
	}
</script>

<style scoped>
	.fen_xiangQin_nav{
			width: 100%;
			height: 400upx;
			position: relative;
			overflow: hidden;
			border: 1px solid #000000;
		}
		.fen_xiangQin_nav>image{
			width: 100%;
			position: absolute;
			filter: blur(10px);
		}
		.fen_xiangQin_top{
			height: auto;
			padding:0 20upx;
			position: relative;
		}
		.fen_xiangQin_top_one>image{
			width: 150upx;
			height: 150upx;
			margin-top: -75upx;
		}
		.fen_xiangQin_top_one>view{
			font-size: 40upx;
			font-weight: bold;
			margin-left: 40upx;
			fiex:1;
		}
		.fen_xiangQin_top_two{
			padding: 20upx 0 20upx;
			height: auto;
		}
		.fen_xiangQin_top_two>view{
			font-size: 32upx;
			margin-right: 20upx;
			color: #CCCCCC;
		}
		.fen_xiangQin_top_three{
			font-size: 36upx;
			color: #CCCCCC;
		}
</style>
