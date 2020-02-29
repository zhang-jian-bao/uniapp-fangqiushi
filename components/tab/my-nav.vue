<template>
	<view class="my-nav-one">
		<view >{{nav.num}}</view>
		<view class="my-nav-te">{{nav.name}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			nav:Object,
			index:Number
		}
	}
</script>

<style>
	.my-nav-one{
		text-align: center;
	}
	
	.my-nav-te{
		color: #B2B2B2;
	}
</style>
