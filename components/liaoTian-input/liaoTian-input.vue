<template>
	<view class="liaoTian-send u_dis">
		<input type="text" placeholder="请输入要发送的内容" v-model="text"/>
		<view class="icon iconfont icon-fabu" @click="liaoTiao_input"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods:{
			liaoTiao_input(){
				this.$emit('liaoTian_input',this.text);
				this.text='';
			}
		}
	}
</script>

<style>
	.liaoTian-send{
		height: 140upx;
		padding: 0 20upx;
		position: fixed;
		z-index: 2000;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid #EEEEEE;
	}
	.liaoTian-send>input{
		flex: 1;
		height: 70upx;
		border: 1upx solid #EEEEEE;
		border-radius: 60upx;
		padding-left: 20upx;
		margin-right: 20upx;
	}
	.liaoTian-send>view{
		width: 80upx;
		font-size: 50upx;
	}
</style>
