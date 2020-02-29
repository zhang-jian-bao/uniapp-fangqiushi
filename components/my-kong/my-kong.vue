<template>
	<view class="my-kong-top u_dis_c">
		<!-- 头部背景图的布局 -->
		<image :src="bg" 
		mode="scaleToFill" lazy-load @click="chengbgImg"></image>
		<view class="my-kong-top-one">
			<image :src="userInfo.userImg"
			 mode="widthFix" lazy-load></image>
			 <view class="my-kong-top-two u_dis_c">
			 	<view >{{userInfo.userName}}</view>
				<view class="u_dis my-kong-top-two-sex">
					<view class="iconfont " 
					:class="[userInfo.sex==0?'icon-nv':'icon-nan']"></view>
					{{userInfo.age}}
				</view>
			 </view>
			 <view class="my-kong-top-three u_dis_c" @click="isG">
				 <view class="iconfont" :class="[isGuan?'':'icon-zengjia']"></view>
				 {{isGuan?'已关注':'关注'}}
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			userInfo:Object
		},
		data() {
			return {
				isGuan:this.userInfo.isGuan
			}
		},
		computed:{//计算属性
			bg(){
				return '../../static/demo/datapic/'+this.userInfo.num+'.jpg';
			}
		},
		methods: {
			isG(){//点击关注，显示已关注
				this.isGuan=!this.isGuan;
			},
			chengbgImg(){//点击背景，换图片
				// this.num < 30 ? this.num++ :20;
				// var a=this.num;
				if(this.userInfo.num<30){
					this.userInfo.num++
				}else{
					this.userInfo.num=20;
				}
				console.log(this.userInfo.num)
			}
		}
	}
</script>

<style scoped>
	/* 头部布局 */
	.my-kong-top{
		position: relative;
		width: 100%;
		height: 560upx;
		overflow: hidden;
	}
	.my-kong-top>image{
		width: 100%;
		height: 560upx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.my-kong-top-one{
		position: absolute;
		left: auto;
		top: 140upx;
		/* width: 400upx;
		height:200upx; */
		/* border: 1upx solid #000; */
	}
	.my-kong-top-one>image{
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
	}
	.my-kong-top-two>view:first-child{
		/* margin-left: 60upx; */
		font-size: 40upx;
		color: #FFFFFF;
	}
	.my-kong-top-two-sex{
		padding:0upx 16upx;
		background-color: #4CA2FF;
		text-indent: 4upx;
		border-radius: 50upx;
		color: #FFFFFF;
		border: 1upx solid #FFFFFF;
		font-size: 20upx;
		margin-left: 20upx;
	}
	.my-kong-top-two-sex>view:first-child{
		font-size: 20upx;
	}
	.my-kong-top-three{
		background-color: #FEDE33;
		/* padding: 4upx; */
		border-radius: 10upx;
		margin-top: 30upx;
		height: 60upx;
		line-height: 60upx;
	}
</style>
