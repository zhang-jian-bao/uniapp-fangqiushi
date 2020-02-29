<template>
	<view class="my-login">
<!-- 登录页面 -->		
		<!-- 顶部导航栏的状态、站位 -->
		<uni-status-bar bgColor="#ffe933"></uni-status-bar>
		<!-- 导航栏下的背景图 -->
		<view class="my-login-nav-img">
			<image src="../../static/login-img.jpg" 
			mode="widthFix" lazy-load></image>
		</view>
		<!-- 返回上一页图标 -->
		<view class="iconfont icon-guanbi" @click="back"></view>
		<!-- 登录框布局 -->
		<template v-if="!zh">
			<view class="my-login-input">
				<view class="my-login-input-one">
				<input type="text" placeholder="昵称/手机号/邮箱" v-model="userName"/>
				</view>
				<view class="my-login-input-two u_dis">
					<input type="text" placeholder="请输入密码" v-model="userPassword"/>
					<view >忘记密码？</view>
				</view>
			</view>
		</template>
		<!-- 点击验证码登录 -->
		<template v-else>
			<view class="my-login-yzm">
				<view class="my-login-yzm-one u_dis_b">
					<view class="my-login-yzm-one-num">+86</view>
					<input type="text" placeholder="请输入手机号码" v-model="phone"/>
				</view>
				<view class="my-login-yzm-one u_dis_b">
					<input type="text" placeholder="请输入验证码" v-model="yzm"/>
					<view class="my-login-yzm-two" @click="setTime">
					{{setTimer<1?'获取验证码':setTimer+'s'}}
					</view>
				</view>
			</view>
		</template>
		<!-- 登录按钮 -->
		<button  class="btn" :class="{'disable':disable}"
		 :disabled="disable" @click="sub" :loading="loading">登录</button>
		 <!-- 登录方式切换 -->
		 <view class="my-login-yan u_dis_c"  @click="yzm_one">
			 {{zh?'账号密码登录':'验证码登录'}}<view class="iconfont icon-jinru"></view>
		</view>
		<!-- 第三方登录 -->
		<view class="my-login-three u_dis_c">————第三方登录————</view>
			<!-- 图标 -->
		<my-icon></my-icon>
		<!-- 协议 -->
		<view class="my-login-zhu u_dis_c">注册即代表您同意
		<view >《仿糗事百科用户协议》</view>
		</view>
	</view>
</template>

<script>
	import myIcon from '../../components/my-login/my-icon.vue';
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue';
	export default {
		components:{
			uniStatusBar,myIcon
		},
		data(){
			return{
				zh:false,
				disable:true,
				loading:false,
				userName:'',//昵称/手机号/邮箱
				userPassword:'',//密码
				phone:'',//手机号
				yzm:'',//验证码
				setTimer:0
			}
		},
		watch:{//监听属性
			userName(val){//监听昵称、手机号、邮箱输入框的内容
				this.che();
				console.log(val)
			},
			userPassword(val){//监听密码的输入框的内容
				this.che();
			},
			phone(val){//监听手机号输入框的内容
				this.che();
			},
			yzm(val){//监听验证码输入框的内容
				this.che();
			}
			
		},
		methods:{
			isPhone(){//封装验证手机号的正则
				var phone=/^1[3456789]\d{9}$/;
				return phone.test(this.phone);
			},
			setTime(){//点击获取验证码
				if(this.setTimer>0){//当点击获取验证码后，在点击显示提示
					uni.showToast({
						title:'不能重复获取',
						icon:'none'
					})
					return false;
				}
				if(!this.isPhone()){//调用手机号正则
					uni.showToast({
						title:'手机号码格式不对',
						icon:'none'
					})
					return false;
				}
				this.setTimer=60;
				let tt=setInterval(()=>{
					this.setTimer--;
					if(this.setTimer<1){//当到0s的时候
						clearInterval(tt);//清除定时器
						this.setTimer=0;//赋值为0
					}
				},1000)
			},
			back(){//点击返回上一页
				uni.navigateBack({
					delta:1
				})
			},
			sub(){//登录
				if(!this.isPhone()){//调用手机号正则
					uni.showToast({
						title:'手机号码格式不对',
						icon:'none'
					})
					return false;
				}
			},
			che(){
				if((this.userName&&this.userPassword)||(this.phone&&this.yzm)){
					this.disable=false;//有值的时候，按钮变色
					return false;
				}
				this.disable=true;
			},
			init(){//初始化，让点击验证码时，输入框的值为空
				this.userName='';
				this.userPassword='';
				this.phone='';
				this.yzm='';
			},
			yzm_one(){//点击验证码登录，显示布局
				this.init();//调用，切换时触发
				this.zh=!this.zh;
			}
		}
	}
</script>

<style scoped>
	/* 验证码登录框布局 */
	.my-login-yzm{
		padding: 20upx;
	}
	.my-login-yzm-one{
		border-bottom: 1upx solid #EEEEEE;
	}
	.my-login-yzm-one>input{
		flex:1;
		padding: 20upx 20upx;
	}
	.my-login-yzm-two{
		background-color: #EEEEEE;
		color: #BEBEBE;
		padding: 10upx 10upx;
		border-radius: 10upx;
	}
	.my-login-yzm-one-num{
		font-size: 40upx;
		font-weight: bold;
	}
	/* 注册协议 */
	.my-login-zhu{
		margin: 30upx 0;
		color: #BEBEBE;
	}
	.my-login-zhu>view{
		color: #007AFF;
	}
	/* 第三方登录布局 */
	.my-login-three{
		color: #BEBEBE;
		margin-bottom: 30upx;
	}
	/* 验证码登录布局 */
	.my-login-yan{
		margin: 20upx;
	}
	/* 登录按钮布局 */
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
	/* 登录input框布局 */
	.my-login-input{
		padding: 20upx;
	}
	.my-login-input input{
		flex: 1;
		padding: 20upx 0;
	}
	.my-login-input-two{
		border-top: 1upx solid #EEEEEE;
		border-bottom: 1upx solid #EEEEEE;
	}
	/* 左上角X图标布局 */
	.icon-guanbi{
		position: fixed;
		left: 40upx;
		top: 80upx;
		font-size: 40upx;
		font-weight: bold;
	}
	/* 导航栏下的图片 */
	.my-login-nav-img>image{
		width: 100%;
	}
</style>
