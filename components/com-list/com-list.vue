<template>
	<view class="huaTi-list u_dis_f" @click="fen_xiangQin">
		<image 
		:src="item.img" 
		mode="widthFix" lazy-load></image>
		<view class="huaTi-list-right">
			<view class="">#{{item.title}}#</view>
			<view >
				{{item.con}}
			</view>
			<view class="u_dis">
				<view class="">
					动态 {{item.doscnum}}
					</view>
				<view class="">
					今日 {{item.todynum}}
					</view>
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
		methods:{
			fen_xiangQin(){
				this.$emit('xQ');
			}
		}
	}
</script>

<style>
	.huaTi-list-right>view:first-child{
		font-size: 30upx;
		color: #000000;
		/* border: 1px solid #000000; */
	}
	.huaTi-list-right{
		color: #CCCCCC;
		margin-left: 30upx;
		/* border: 1px solid #000000; */
	}
	.huaTi-list>image{
		width: 200upx;
		height: 200upx;
		border-radius: 20upx;
	}
	.huaTi-list{
		height: auto;
		padding:30upx;
		border-bottom: 1px solid #CCCCCC;
	}
</style>
