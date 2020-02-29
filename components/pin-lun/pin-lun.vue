<template>
	<view class="uni-comment-list" :class="{'uni-pin-lun-childer':(v.fid>0)}">
		<view class="uni-comment-face">
			<image :src="v.userPic" 
			mode="widthFix" lazy-load></image>
		</view>
		<view class="uni-comment-body">
			<view class="uni-comment-top">
				<text>{{v.userName}}</text>
			</view>
			<view class="uni-comment-content">
				{{v.title}}
			</view>
			<view class="uni-comment-date">
				<view >
					{{v.time}}
				</view>
				<view class="uni-comment-replay-btn">5回复</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			v:Object,
			k:Number
		}
	}
</script>

<style scoped>
	
	.uni-pin-lun{
		padding: 0 20upx;
	}
	.uni-pin-lun-childer{
		background-color: #EEEEEE;
		width: auto;
		padding: 20upx;
		margin: 0 0 0 72upx;
		border-bottom: 1px solid #CCCCCC;
		box-sizing: border-box;
	}
</style>
