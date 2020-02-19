<template>
	<view class="index-list">
		<view class="index-list1 u_dis_b">
			<view class="index-list1-left u_dis" style="color: #CCCCCC;">
				<image :src="item.pic" mode="widthFix" lazy-load></image>
				{{item.name}}
			</view>
			<view class="index-list1-right u_dis" v-show="!isGuanZhu" @click="guanZhu">
				<view class="index-list1-right_one"><view class="iconfont icon-zengjia"></view>
				关注</view>
				<!-- <view class="iconfont icon-guanbi" style="color: #CCCCCC;"></view> -->
			</view>
		</view>
		<view class="index-list2">
			{{item.title}}
		</view>
		<view class="index-list3 u_dis">
			<image :src="item.titlePic" mode="widthFix" lazy-load></image>
			<template v-if="item.type=='video'">
				<view class="iconfont icon-bofang"></view>
				<view >{{item.paly}}次播放{{item.lang}}</view>
			</template>
		</view>
		<view class="index-list4 u_dis_b">
			<view class="index-list4-left">
				<view class="index-list4-left_one u_dis" :class="infonum.index==1?'active':''" @click="caoZuo('ding')"><view class="iconfont icon-icon_xiaolian-mian">
				</view>{{infonum.ding}}</view>
				<view class="index-list4-left_one u_dis" :class="infonum.index==2?'active_one':''"  @click="caoZuo('cai')"><view class="icon iconfont icon-kulian"></view>{{infonum.cai}}</view>
			</view>
			<view class="index-list4-left">
				<view class="index-list4-left_one u_dis"><view class="iconfont icon-xiaoxi"></view>{{item.ping}}</view>
				<view class="index-list4-left_one u_dis"><view class="iconfont icon-zhuanfa"></view>{{item.share}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				isGuanZhu:this.item.isGuanZhu,
				infonum:this.item.infonum
			}
		},
		methods:{
			guanZhu(){//点击关注，隐藏，isGuanZhu 为true
				this.isGuanZhu=true;
				uni.showToast({//弹框
					title:'关注成功',
					icon:'success'
				})
			},
			caoZuo(type){//点击顶和踩的操作
				switch (type){
					case 'ding':
					if(this.infonum.index==1){//只执行一次
						return false;
					}
					this.infonum.ding++;
					if(this.infonum.index==2){//只执行一次
						this.infonum.cai--;
					}
					this.infonum.index=1;
						break;
					case 'cai':
					if(this.infonum.index==2){//只执行一次
						return false;
					}
					this.infonum.cai++;
					if(this.infonum.index==1){//只执行一次
						this.infonum.ding--;
					}
					this.infonum.index=2;
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style scoped>
		.index-list{
			padding: 30upx;/*5px*/
			height: auto;
			border-bottom: 1px solid #CCCCCC;
		}
		.index-list1{
			height: 80upx;
			/* border: 1px solid #000; */
		}
	
		.index-list1-left>image{
			width: 60upx;
			height: 60upx;
			border-radius: 50%;
			margin-right: 10upx;
		}
	
		.index-list1-right_one{
			display: flex;
			width: auto;
			height: 60upx;
			line-height: 60upx;
			padding: 0 8upx;
			margin-right: 4upx;
			/* border: 1px solid #000; */
			background-color: #eeeeee;
			font-weight: bold;
		}
		.index-list2{
			height: 80upx;
			line-height: 80upx;
			font-size: 36upx;
		}
		.index-list3{
			position: relative;
			height: auto;
			justify-content: center;/*可以直接居中加弹性盒子*/
	/* 		border: 1px solid #000000; */
		}
		.index-list3>view:nth-child(2){
			position: absolute;
			color: #FFFFFF;
			font-size: 100upx;
		}
		.index-list3>view:nth-child(3){
			position: absolute;
			width: auto;
			padding: 0 15upx;
			background:rgba(0,0,0,.5);
			border-radius: 20upx;
			bottom: 10upx;
			right: 10upx;
			color: #FFFFFF;
		}
		.index-list3>image{
			width: 100%;
			border-radius: 12upx;
		}
		.index-list4{
			height: 80upx;
			color: #CCCCCC;
		}
		.index-list4-left{
			display: flex;
		}
		.index-list4-left_one{
			margin-right:20upx;
		}
		.index-list4-left_one>view:first-child{
			margin-right: 10upx;
		}
		.active{
			color: #FFB400;
		}
		.active_one{
			color: red;
		}
</style>
