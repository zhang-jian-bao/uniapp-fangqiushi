<template>
	<view class="myFriend-list u_dis">
		<image :src="item.img" mode="widthFix"
		lazy-load></image>
		<view class="myFriend-list-middle">
			<view class="myFriend-list-name">
				{{item.title}}
			</view>
			<view class="myFriend-list-sex u_dis"
			:style="{background:item.sex==0?'blue':'pink'}">
				<view class="iconfont ac"
				:class="[item.sex==0?'icon-nan':'icon-nv']"></view>
				{{item.age}}
			</view>
		</view>
		<!-- <view class="iconfont icon-xuanze"></view> -->
		<view class="iconfont ic"
		:class="item.isGuanZhu?'icon-xuanze':'icon-zengjia1'"
		:style="{color: item.isGuanZhu?'green':' #FFB400'}"></view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
	.myFriend-list{
		padding:20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.myFriend-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.myFriend-list-middle{
		flex: 1;
	}
	.myFriend-list-sex{
		width: 80upx;
		height: 40upx;
		line-height: 40upx;
		border-radius: 60upx;
		background: #007AFF;
		padding: 0 10upx;
		color: #FFFFFF;
	}
	.ac{
		margin-right: 10upx;
	}
	.myFriend-list-name{
		font-size: 36upx;
		font-weight: bold;
	}
	.ic{
		color: #FFB400;
	}
</style>
