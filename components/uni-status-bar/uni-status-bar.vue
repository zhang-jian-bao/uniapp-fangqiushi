<template>
	<view :style="{ height: statusBarHeight,background:bgColor }" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		props:{
			bgColor:{
				type:String,
				default:''//有值的时候传，没有值为空
			}
			
		},
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		}
	}
</script>

<style scoped>
	.uni-status-bar {
		width: 750rpx;
		height: 20px;
		/* height: var(--status-bar-height);
 */
	}
</style>