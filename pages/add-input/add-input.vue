<template>
	<view class="example-body">
		<uni-nav-bar left-icon="arrowleft"
		@clickLeft="back" :statusBar="true" rightText="发布"  @clickRight="sub">
			<view class="u_dis_c" style="font-size: 16px; width: 100%;" @click="cen">
				{{yinsi}} <!--所有人可见-->
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行文本框 -->
		<view class="uni_textarea">
			<textarea v-model="text" placeholder="不想说点啥嘛~" />
		</view>
		<!-- 预览图片 -->
		<upload-img @upload="upload"></upload-img>
		<!-- //弹出公告层 -->
		<button @click="aa">点击爱</button>
		<uni-popup ref="showpopup">
			<view class="popup-content">
				<view class="popup-content-one u_dis_c">
					<image src="../../static/com/g.jpg" mode="widthFix"></image>
				</view>
				<view class="">1、涉及黄色，政治，广告及骚扰信息</view>
				<view class="">2、涉及人身攻击</view>
				<view class="">3、留联系方式，透漏他人隐私</view>
				<view class="">4、一经核实将被封禁，情节严重者永久封禁</view>
				<button type="primary" @click="hidePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
	</view>

</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	import uploadImg from '../../components/tu/upload-img.vue';
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default{
		components:{
			uniNavBar,uploadImg,uniPopup
		},
		data(){
			return{
				isBack:false,
				isPopup:true,
				list:['所有人可见','仅自己可见'],
				yinsi:'所有人可见',
				text:'',
				listImg:[]
			}
		},
		onBackPress() {//监听头部导航的返回箭头事件
			//如果多行文本为空并且图片为0时，阻止往下执行，否则，一个不为空，就往下执行
			if(!this.text&&this.listImg.length<1){return false};
			if(!this.isBack){//刚开始为false,取反，调用弹框，如果为true，取反，不执行
				this.baoCun();//调用保存模态框
				return true;//阻止头部导航箭头返回
			}
			
		},
		methods:{
			baoCun(){//保存模态框
				uni.showModal({
					title: '提示',
					content: '是否需要保存数据',
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm){//点击保存
							console.log("保存")
						}else if(res.cancel){
							console.log("不保存")
						}
						this.isBack=true;//弹出模态框时，让isback为true
						uni.navigateBack({
							delta: 1//返回上一页
						});
					}
				});
				
			},
			aa(){//点击发布，显示提示框
				this.$nextTick(() => {
					this.$refs.showpopup.open()
				})
			},
			//点击返回箭头
			back(){
				uni.navigateBack({
					delta: 1//返回上一页
				});
			},
			//点击头部导航中间的所有人可见
			cen(){
				uni.showActionSheet({
					itemList:this.list ,
					success: res => {
						// console.log(res);//通过下标获取数据
						this.yinsi=this.list[res.tapIndex];
					}
				});
			},
			//点击右边按钮，发布
			sub(){
				// uni.navigateTo({//点击发布跳转页面
				// 	url: '/pages/faBu/faBu'
				// });
				console.log('发布')
			},
			upload(arr){//子传父通信
				this.listImg=arr;
			},
			hidePopup(){//点击朕知道了，隐藏弹出层
				this.$refs.showpopup.close();
			}
		}
	}
</script>

<style>
	.popup-content {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			background-color: #fff;
			padding: 15px;
			font-size: 14px;
		}
	.popup-content-one image{
		width: 50%;
	}
	.popup-content button{
		background-color: yellow;
		color: #000000;
	}
</style>
