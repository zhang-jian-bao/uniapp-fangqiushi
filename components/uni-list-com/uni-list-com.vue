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
	@import '../../common/con-list.css';
</style>
