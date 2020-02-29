<template>
	<!-- 修改密码页面 -->
	<view class="my-sheZhi-password">
		<input type="text" placeholder="请输入旧密码" password v-model="oldpassword" @blur='check'/>
		<input type="text" placeholder="请输入新密码" password v-model="newpassword" @blur='check'/>
		<input type="text" placeholder="请再次输入确认密码" password
		 v-model="rennewpassword" @blur='check'/>
		<button type="primary" class="btn" :class="{'disable':disable}"
		 :disabled="disable" @click="sub" :loading="loading">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassword: '',
				newpassword:'',
				rennewpassword:'',
				disable:true,
				loading:false
			}
		},
		watch:{//监听属性
			oldpassword(val){
				console.log(val);
				this.wa();
			},
			newpassword(val){
				this.wa();
			},
			rennewpassword(val){
				this.wa();
			}
		},
		methods:{
			wa(){//监听input框内容是否为空
				if(this.oldpassword==''||this.newpassword==""||this.rennewpassword==''){
					this.disable=true;
					return false;
				}else if(this.newpassword!==this.rennewpassword){
					this.disable=true;
					return false;
				}
				this.disable=false;
			},
			check(){//输入框判断
				//输入框都等于空
				if(this.oldpassword==''){
					uni.showToast({
						title: '请输入旧密码',
						icon:'none'
					});
					return false;
				}
				if(this.newpassword==''){
					uni.showToast({
						title: '请输入新密码',
						icon:'none'
					});
					return false;
				}
				if(this.rennewpassword==''){
					uni.showToast({
						title: '请输入确认密码',
						icon:'none'
					});
					return false;
				}
				//判断新密码两次输入的是否一致
				if(this.newpassword!==this.rennewpassword){
					uni.showToast({
						title: '两次密码输入不一致',
						icon:'none'
					});
					return false;
				}
			},
			sub(){//提交
				this.loading=true;
				this.disable=true;
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
