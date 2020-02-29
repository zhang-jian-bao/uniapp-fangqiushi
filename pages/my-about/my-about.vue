<template>
	<!-- 关于防糗百页面 -->
	<view class="my-about">
		<view class="my-about-log u_dis_c">
			<image src="../../static/demo/my-about.jpg" 
			mode="widthFix" lazy-load></image>
			<view >zhang 1.0.0</view>
		</view>
		
		<!-- 列表 -->
		<block v-for="(v,i) in list" :key="i">
			<my-list :v='v' :index='i'></my-list>
		</block>
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
						name:'新版本检测',
						type:'',
						url:''
					},
					{
						icon:'',
						class:'',
						name:'关于仿糗百用户协议',
						type:'',
						url:''
					}
				
				]
			}
		}
	}
</script>

<style>
	.my-about-log{
		flex-direction: column;
		padding: 20upx;
	}
	.my-about-log>image{
		width: 400upx;
	}
	.my-about-log>view{
		color: #BEBEBE;
	}
</style>
