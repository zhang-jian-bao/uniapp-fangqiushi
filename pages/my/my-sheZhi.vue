<template>
	<view >
		<!-- 设置页面 -->
		<block v-for="(v,i) in list" :key="i">
			<my-list :v='v' :index='i'></my-list>
		</block>
		<button class="btn">退出登录</button>
	</view>
</template>

<script>
	import myList from '../../components/uni-list-com/my-list.vue';
	export default {
		components:{
			myList
		},
		data() {
			return {
				list:[//列表
					{
						icon:'',
						class:'',
						name:'账号与安全',
						type:'navigateTo',
						url:'/pages/my/my-sheZhi-password'
					},
					{
						icon:'',
						class:'',
						name:'绑定邮箱',
						type:'navigateTo',
						url:'/pages/my/my-email'
					},
					{
						icon:'',
						class:'',
						name:'资料编辑',
						type:'navigateTo',
						url:'/pages/my-edit/my-edit'
					},
					{
						icon:'',
						class:'',
						name:'小纸条',
						type:'',
						url:''
					},
					{
						icon:'',
						class:'',
						name:'清除缓存',
						type:'clear',
						url:''
					},
					{
						icon:'',
						class:'',
						name:'意见反馈',
						type:'navigateTo',
						url:'/pages/my-feedback/my-feedback'
					},
					{
						icon:'',
						class:'',
						name:'关于糗百',
						type:'navigateTo',
						url:'/pages/my-about/my-about'
					}
				]
			}
		},
	}
</script>

<style scoped>
	.btn{
		width: 80%;
		border: none;
		margin-top: 40upx;
		background-color: #F0AD4E;
		color: #000000;
	}
</style>
