<template>
	<!-- 修改密码页面 -->
	<view class="my-sheZhi-password">
		<input type="text" placeholder="请输入邮箱账号" v-model="email" @blur='check'/>
		<input type="text" placeholder="请输入密码" password v-model="password" @blur='check'/>
		<button type="primary" class="btn" :class="{'disable':disable}"
		 :disabled="disable" @click="sub" :loading="loading">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:'',
				password: '',
				disable:true,
				loading:false
			}
		},
		watch:{//监听属性
			password(val){
				console.log(val);
				this.wa();
			},
			email(val){
				this.wa();
			}	
		},
		methods:{
			wa(){//监听input框内容是否为空
				if(this.password==''||this.email==""){
					this.disable=true;
					return false;
				}
				// 验证邮箱正则
				let em=/^([A-Za-z0-9_\+\.])+\@([A-Za-z0-9_\+\.])+\.([A-Za-z]{2,4})$/;
					if(!em.test(this.email)){//如果不为true
						uni.showToast({
							title: '请输入正确的邮箱格式',
							icon:'none'
						});
						this.disable=true;
						return false;
					}
				this.disable=false;
			},
			check(){//输入框判断
				//输入框都等于空
				if(this.email==''){
					uni.showToast({
						title: '请输入邮箱账号',
						icon:'none'
					});
					return false;
				}
				// 验证邮箱正则
				// let em=/^([A-Za-z0-9_\+\.])+\@([A-Za-z0-9_\+\.])+\.([A-Za-z]{2,4})$/;
				// if(!em.test(this.email)){//如果不为true
				// 	uni.showToast({
				// 		title: '请输入正确的邮箱格式',
				// 		icon:'none'
				// 	});
				// 	return false;
				// }
				if(this.password==''){
					uni.showToast({
						title: '请输入密码',
						icon:'none'
					});
					return false;
				}
				
			},
			sub(){//提交
				this.loading=true;
				this.disable=true;
				// if(!this.check()){
				// 	this.loading=true;
				// 	this.disable=true;
				// 	return false
				// };
				setTimeout(()=>{
					uni.showToast({
						title: '提交成功',
						icon:'success'
					});
					this.loading=false;
					this.disable=false;
				},2000)
			}
		}
	}
</script>

<style scoped>
	.my-sheZhi-password>input{
		width: 80%;
		padding: 20upx 20upx;
		margin: 0 auto;
		border-bottom: 1upx solid #EEEEEE;
	}
	.btn{
		width: 80%;
		border: none;
		margin-top: 40upx;
		background-color: #F0AD4E;
		color: #000000;
	}
	.disable{
		background-color: #CCCCCC;
		color: #7A7A7A;
	}
</style>

