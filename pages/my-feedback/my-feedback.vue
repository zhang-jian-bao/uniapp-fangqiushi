<template>
	<!-- 意见反馈页面 -->
	<view class="my-feedback">
		<uni-collapse :accordion="true">
			<uni-collapse-item v-for="item in accordion" :key="item.id" :title="item.title" :show-animation="item.animation">
				<text class="content">{{ item.content }}</text>
			</uni-collapse-item>
		</uni-collapse>
		
		
		<button type="primary" class="btn" >完成</button>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
	export default {
		components:{
			 uniCollapse, uniCollapseItem
		},
		data() {
			return {
				accordion: [{
						id: 0,
						title: '客服什么时候上线？',
						content: '11111',
						animation: true
					},
					{
						id: 1,
						title: '忘记账号/昵称/密码怎么办？',
						content: '22222',
						animation: true
					},
					{
						id: 2,
						title: '怎么搜索/查找/关注/取关用户？',
						content: '3333',
						animation: true
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
