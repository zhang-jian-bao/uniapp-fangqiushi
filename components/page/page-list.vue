<template>
	<view class="xiaoZhiTiao_list u_dis" @click="liaoTian">
			<image :src="item.img"
			 mode="widthFix" lazy-load></image>
			 <view class="xiaoZhiTiao_right">
			 	<view class="xiaoZhiTiao_top u_dis_b">
			 		{{item.title}}<view class="">{{item.timer}}</view>
			 	</view>
				<view class="xiaoZhiTiao_bottom u_dis_b">
					<view class="xiaoZhiTiao_bottom_one">
						{{item.content}}
					</view>
					<view >
						<template v-if="item.msgnum>0">
							<uni-badge class="uni-badge-left-margin"
							 :text="item.msgnum" type="error" />
						</template>
						</view>
				</view>
			 </view>
		
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue';
	export default {
		components:{
			uniBadge
		},
		props:{
			item:Object,
			index:Number
		},
		methods:{
			liaoTian(){//子调父传值，也可直接在子组件中修改，要在data中赋值item
				this.$emit('liaoTian');
			}
		}
	}
</script>

<style>
	.xiaoZhiTiao{
		width: 94%;
		height: 100%;
		padding: 0 20upx;
	}
	page{
		height: 100%;
	}
	.xiaoZhiTiao_list{
		height: auto;
		width: 100%;
		padding: 20upx 0;
		border-bottom: 1px solid #EEEEEE;
	}
	.xiaoZhiTiao_list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		flex-shrink: 0;/*图片不会受到挤压*/
		margin-right: 20upx;
	}
	.xiaoZhiTiao_right{
		flex: 1;
	}
	.xiaoZhiTiao_top{
		font-size: 36upx;
		font-weight: bold;
	}
	.xiaoZhiTiao_top>view:first-child{
		color: #999999;
	}
	.xiaoZhiTiao_bottom_one{
		/* border: 1px solid #000000; */
		width: 440upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
