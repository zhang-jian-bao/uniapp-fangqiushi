<template>
	<view class="uni-common-list u_dis_f animated fadeInLeft fast">
		<!-- 头像 -->
		<image :src="item.userImg"
		 mode="widthFix" lazy-load></image>
		 <!-- 右边区域 -->
		 <view class="un-common-list-right">
		 	<view class="un-common-list-right-one u_dis_b">
				<view class="un-common-list-right-two u_dis">
					<view>{{item.userName}}</view>
					<view class="uni-one u_dis">
						<view class="iconfont" 
						:class="item.sex==0?'icon-nan':'icon-nv'"></view>
						{{item.age}}
					</view>
				</view>
				<view class="uni-one uni-two u_dis"
				 v-show="!isGuanZhu" @click="guanZhu">
					<view class="iconfont icon-zengjia"></view>
					关注
				</view>
			</view>
			<!-- 标题 -->
			<view class="uni-three">{{item.title}}</view>
			<!-- 分享样式 -->
			<view class="uni-share" v-if="item.share">
				<image :src="item.share.shareImg"
				 mode="widthFix" lazy-load></image>
				 <view>{{item.share.title}}</view>
			</view>
			<!-- 图片 -->
			<view class="uni-four u_dis_c">
				<image :src="item.titlePic" 
				mode="widthFix" lazy-load v-if="item.titlePic">
				</image>
				<template v-if="item.video">
					<view class="uni-play iconfont icon-bofang"></view>
					<view class="uni-play-num">
					{{item.video.looknum}}次播放{{item.video.long}}
					</view>
				</template>
			</view>
			<!-- 最下面一行 -->
			<view class="un-common-list-right-three u_dis_fb">
				<view class="uni-free u_dis">
					<view class="">{{item.path}}</view>
				</view>
				<view class="uni-six u_dis">
					<view class="uni-six-one u_dis">
						<view class="iconfont icon-zhuanfa"></view>
						{{item.sharenum}}
					</view>
					<view class="uni-six-one u_dis">
						<view class="iconfont icon-xiaoxi"></view>
						{{item.commentnum}}
					</view>
					<view class="uni-six-one u_dis">
						<view class="iconfont icon-ccdbaa"></view>
						{{item.goodnum}}
					</view>
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
		data() {
			return {
				isGuanZhu:this.item.isGuanZhu
			}
		},
		methods:{
			//点击关注
			guanZhu(){
				this.isGuanZhu=true;
			uni.showToast({
				title: '关注成功',
				icon:'success'
			});
			}
		}
	}
</script>

<style scoped>
	.uni-share{
			padding: 30upx 0;
			display: flex;
			align-items: center;
			background-color: #EEEEEE;
			border-radius: 20upx;
		}
		.uni-share>image{
			width: 200upx;
			margin-right: 30upx;
			border-radius: 14upx;
		}
		.uni-four{
			position: relative;
		}
		.uni-play{
			position: absolute;
			font-size: 100upx;
			color: #FFFFFF;
		}
		.uni-play-num{
			position: absolute;
			right: 20upx;
			bottom: 10upx;
			background:rgba(0,0,0,.8);
			width: auto;
			padding: 10upx 20upx;
			border-radius: 30upx;
			color: #FFFFFF;
			font-size: 20upx;
		}
		.uni-common-list{
			padding:20upx 20upx;
			height: auto;
		}
		.uni-common-list>image{
			width: 100upx;
			height: 100upx;
			border-radius: 50%; 
		}
		.un-common-list-right{
			width: 80%;
			padding: 0 20upx;
			/* border: 1px solid #000000; */
			border-bottom: 1upx solid #CCCCCC;
		}
		.un-common-list-right-two>view:first-child{
			color: #CCCCCC;
			font-size: 40upx;
			margin-right: 20upx;
		}
		.uni-one{
			width: auto;
			padding: 0 20upx;
			background-color: #007AFF;
			color: #FFFFFF;
			border-radius: 60upx;
		}
		.uni-one>view:first-child{
			margin-right: 10upx;
			font-size: 20upx;
		}
		.uni-two{
			background-color: #CCCCCC;
			border-radius: 0;
			color: #000000;
			float: right;
		}
		.uni-three{
			height: auto;
			font-size: 40upx;
		}
		.uni-four>image{
			width: 100%;
		}
		.un-common-list-right-three{
			font-size: 30upx;
			color: #CCCCCC;
			height: 80upx;
		}
		.uni-free{
			color: #CCCCCC;
		}
		.uni-free>view:first-child{
			margin-right: 10upx;
		}
		.uni-six-one{
			margin-left: 10upx;
		}
		.uni-six-one>view:first-child{
			margin-right: 10upx;
		}
</style>
