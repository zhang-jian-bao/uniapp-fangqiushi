<template>
	<!-- 修改资料页面 -->
	<view class="my-edit">
		<view class="my-edit-list u_dis_b" @click="uimg">
			<view class="my-edit-name">头像</view>
			<view class="my-edit-con">
				<image :src="userPic" 
				mode="aspectFill" lazy-load></image>
			</view>
			<view class="iconfont icon-bianji1 more-bianji"></view>
		</view>
		<view class="my-edit-list u_dis_b">
			<view class="my-edit-name">昵称</view>
			<view class="my-edit-con"><input type="text" v-model="name" /></view>
			<view class="iconfont icon-bianji1 more-bianji"></view>
		</view>
		<view class="my-edit-list u_dis_b" @click="changeOne('sex')">
			<view class="my-edit-name">性别</view>
			<view class="my-edit-con">{{sex}}</view>
			<view class="iconfont icon-bianji1 more-bianji"></view>
		</view>
		<view class="my-edit-list u_dis_b">
			<view class="my-edit-name">生日</view>
			<view class="my-edit-con">1997-01-27</view>
			<view class="iconfont icon-bianji1 more-bianji"></view>
		</view>
		<view class="my-edit-list u_dis_b" @click="changeOne('qg')">
			<view class="my-edit-name">情感</view>
			<view class="my-edit-con">{{qg}}</view>
			<view class="iconfont icon-bianji1 more-bianji"></view>
		</view>
		<view class="my-edit-list u_dis_b" @click="changeOne('job')">
			<view class="my-edit-name">职业</view>
			<view class="my-edit-con">{{job}}</view>
			<view class="iconfont icon-bianji1 more-bianji"></view>
		</view>
		<view class="my-edit-list u_dis_b">
			<view class="my-edit-name">家乡</view>
			<view class="my-edit-con">宁夏</view>
			<view class="iconfont icon-bianji1 more-bianji"></view>
		</view>
		
		<button type="primary" class="btn">完成</button>
	</view>
</template>

<script>
	let sex=['不限','男','女'];
	let qg=['不限','未婚','已婚'];
	let job=['不限','教师','金融','法律','房地产','销售','服务类','IT'];
	export default {
		data() {
			return {
				userPic:'../../static/demo/demo6.jpg',
				name:'焚心~',
				sex:'不限',
				qg:'不限',
				job:'不限'
			}
		},
		methods:{
			uimg(){//点击从相册或拍照选择头像
				uni.chooseImage({
					count:1,//上传一张
					sizeType:['compressed'],//original 原图，compressed 压缩图，默认二者都有
					//sourceType:album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
					success(res){
						// console.log(res);//成功则返回图片的本地文件路径列表 tempFilePaths
						this.userPic=res.tempFilePaths;
					}
				})
			},
			//有问题，视图不更新
			changeOne(val){//单列如性别、情感、职业
			var arr=[];
				switch (val){
					case 'sex':
					arr=sex;
						break;
					case 'qg':
					arr=qg;
						break;
					case 'job':
					arr=job;
						break;
					default:
						break;
				}
				uni.showActionSheet({
					itemList:arr,
					success(res){
						var that=this;
						switch (val){
							case 'sex':
							that.sex=arr[res.tapIndex];
							console.log(that.sex);
								break;
							case 'qg':
							that.qg=arr[res.tapIndex];
								break;
							case 'job':
							that.job=arr[res.tapIndex];
								break;
							default:
								break;
						}
					}
				})
				console.log(this.sex)
				
			}
		}
	}
</script>

<style scoped>
	/* 列表样式 */
	.my-edit-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.my-edit-name{
		font-size: 40upx;
		color: #C0C0C0;
	}
	.my-edit-con{
		flex:1;
		text-align: right;
		padding-right: 20upx;
		font-size: 36upx;
	}
	.my-edit-con>image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	.more-bianji{
		color: #C0C0C0;
	}
	/* 按钮 */
	.btn{
		width: 80%;
		border: none;
		margin-top: 40upx;
		background-color: #F0AD4E;
		color: #000000;
	}
</style>
