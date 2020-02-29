<template>
	<!-- 我的列表封装组件 -->
	<view class="my-list u_dis_b"  hover-class="active" @click="togin">
		<view class="u_dis" >
			<view class="iconfont" v-if="v.icon"
			:class="['icon-'+v.icon,'more-'+v.class]"></view>
			<view class="">{{v.name}}</view>
		</view>
		<view class="iconfont icon-jinru more-left"></view>
	</view>
</template>

<script>
	export default {
		props:{
			v:Object,
			index:Number
		},
		methods:{
			togin(){//点击跳转页面
			console.log('点击')
				switch (this.v.type){
					case 'navigateTo'://点击跳到修改密码页
						uni.navigateTo({
							url:this.v.url
						})
						break;
					case 'clear'://点击清除缓存
						uni.showModal({
							title:'提示',
							content:'确定要清除缓存吗？',
							confirmText:'清除缓存',
							success(res) {
								if(res.confirm){//点击确定
									uni.showToast({
										title:'清除成功',
										icon:"success"
									})
								}else if(res.cancel){//取消
									console.log('取消清除缓存')
								}
							}
						})
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style scoped>
	/* 列表 */
	.my-list{
		padding: 20upx 40upx;
		font-size: 40upx;
		height: 80upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.more-liulan,.more-keyboard{
		color: #0A98D5;
		margin-right: 20upx;
	}
	.more-left{
		color: #E5E5E5;
	}
	.more-huiyuanvip{
		margin-right: 20upx;
		color: #F0AD4E;
	}
	.active{
		background-color: #EFEFF4;
	}
</style>
