<template>
	<view class="sl">
		{{loadtext}}
	</view>
</template>

<script>
	export default{
		props:{
			loadtext:String
		}
	}
</script>

<style scoped>
	.sl{
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		background-color: #EEEEEE;
	}
	
</style>
