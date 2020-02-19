<template>
	<view class="aa">
		我是搜索页
	</view>
</template>

<script>
	export default{
		//监听头部导航的原生按钮事件
		onNavigationBarButtonTap(e) {
			console.log(e);//当头部导航有多个按钮的时候，我们通过下标的判断来写代码
			if(e.index==0){//当前取消按钮的下标为0
				uni.navigateBack({
					delta: 1//返回上一页
				});
			}
		}
	}
</script>

<style>
</style>
