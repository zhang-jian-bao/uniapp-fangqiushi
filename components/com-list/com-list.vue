<template>
	<view class="huaTi-list u_dis_f" @click="fen_xiangQin($event)" :data-id='item.id'>
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
			fen_xiangQin(e){
				console.log(e.currentTarget.dataset.id);
				uni.navigateTo({//跳转到详情页，并传递当前的id值
					url:'/pages/fen_xiangQin/fen_xiangQin?id='+e.currentTarget.dataset.id
				})
				// this.$emit('xQ',e.currentTarget.dataset.id);
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
