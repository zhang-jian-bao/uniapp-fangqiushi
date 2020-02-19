<template>
	<view  class="aa">
		<view class="u_dis_c liaoTian-time" v-if="item.gettiem">{{item.gettiem}}</view>
					<view class="liaoTian-con u_dis_f "
					 :class="{'liaoTian-con-me':item.isme}">
						<image v-if="!item.isme" :src="item.img"
						mode="widthFix" lazy-load></image>
						<view class="liaoTian-aa">
							<view v-if="item.type=='text'">
								{{item.data}}
							</view>
							<image v-if="item.type=='img'" :src="item.data" 
							mode="widthFix" lazy-load></image>
						</view>
						<image v-if="item.isme" :src="item.img" mode=""></image>
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
			
		}
	}
</script>

<style scoped>
	.liaoTian-time{
			font-size: 30upx;
			padding: 20upx 0;
			color: #CCCCCC;
		}
		.liaoTian-con{
			padding:20upx;
		}
		.liaoTian-con>image{
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
			flex-shrink: 0;/*防止图片被压缩*/
		}
		.liaoTian-aa{
			position: relative;
			/* background-color: #FFFFFF; */
			border: 1upx solid #CCCCCC;
			margin-right: 100upx;
			border-radius: 20upx;
			padding: 20upx;
			margin-left: 30upx;
		}
		.liaoTian-aa:after{
			position: absolute;
			top: 30upx;
			left: -30upx;
			right: 0;
			width: 0;
			height: 0;
			content: '';
			border: 16upx solid #CCCCCC;
			border-color: transparent #CCCCCC transparent transparent;
		}
		.liaoTian-aa>text{
			position: absolute;
			
		}
		.liaoTian-con-me{
			justify-content: flex-end;
		}
		.liaoTian-con-me .liaoTian-aa{
			margin-right: 30upx;
			margin-left: 100upx;
			border: 1upx solid #0A98D5;
			
		}
		.liaoTian-con-me .liaoTian-aa:after{
			left: auto;
			right: -30upx;
			border-color: transparent transparent transparent  #007AFF ;
		}
		.liaoTian-aa>image{
			max-width: 200upx;
			max-height: 200upx;
		}
</style>
