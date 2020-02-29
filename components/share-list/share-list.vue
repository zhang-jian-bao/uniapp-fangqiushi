<template>
	<!-- 分享组件 -->
	<!-- <view class="animated fadeIn fast" > -->
		<view class="uni-more-share animated fadeIn fast" @click="togin"  v-if="isShare">
			<view class="uni-more-share-body">
				<view class="uni-more-share-top u_dis_c">分享到</view>
				<view class="uni-more-share-con">
					<scroll-view scroll-x class="scrollX">
						<!-- 有点问题 循环不出来-->
						<block v-for="(v,i) in providerList" :key="i">
							<view class="uni-more-share-icon u_dis_c"
							 hover-class="active" @click="share(v)">
								<view class="icon iconfont "
								:class="['icon-'+v.zicon ,'more-'+v.zclass]"></view>
								<view class="">{{v.name}}</view>
							</view>
						</block>
						
							<view class="uni-more-share-icon u_dis_c"
							 hover-class="active" >
								<view class="icon iconfont icon-QQ more-qq"></view>
								<view class="">qq好友</view>
							</view>
							<view class="uni-more-share-icon u_dis_c"
							 hover-class="active" >
								<view class="icon iconfont icon-weixin more-weixin"></view>
								<view class="">微信</view>
							</view>
						<!-- 	<view class="uni-more-share-icon u_dis_c"
							 hover-class="active" >
								<view class="icon iconfont icon-xinlangweibo
								 more-xinlangweibo"></view>
								<view class="">新浪微博</view>
							</view>
							<view class="uni-more-share-icon u_dis_c"
							 hover-class="active" >
								<view class="icon iconfont icon-QQ more-qq"></view>
								<view class="">qq好友</view>
							</view> -->
						
					</scroll-view>
				</view>
				<view class="uni-more-share-top u_dis_c" hover-class="active"
				@click="aa" @click.stop="togin">取消</view>
			</view>
		</view>
	<!-- </view> -->
</template>

<script>
	export default {
		props:{
			isShare:Boolean
		},
		data() {
			return {
				title: 'share',
				shareText: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
				href:"https://uniapp.dcloud.io",
				image: '',
				shareType:1,//1文字 2图片 0图文 5小程序
				providerList: []
			}
		},
		onLoad() {
			uni.getProvider({
				service: 'share',
				success: (e) => {
					console.log('success', e);
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '微信好友',
									id: 'weixin',
									zicon:'weixin',
									zclass:'weixin',
									sort:0
								})
								data.push({
									name: '朋友圈',
									id: 'weixin',
									zicon:'weixin',
									zclass:'weixin',
									type:'WXSenceTimeline',
									sort:1
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '新浪微博',
									id: 'sinaweibo',
									zicon:'xinlangweibo',
									zclass:'xinlangweibo',
									sort:2
								})
								break;
							case 'qq':
								data.push({
									name: 'QQ好友',
									id: 'qq',
									zicon:'QQ',
									zclass:'qq',
									sort:3
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content:'获取分享通道失败',
						showCancel:false
					})
				}
			});
		},
		methods:{
			aa(){
				this.$emit('share')
			},
			togin(){//分享
				this.$emit('share')
			},
			async share(e) {
				console.log('分享通道:'+ e.id +'； 分享类型:' + this.shareType);
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'分享内容不能为空',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'分享图片不能为空',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('分享操作结束!')
					}
				}
				
				switch (this.shareType){
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.href = 'https://uniapp.dcloud.io';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id:'gh_33446d7f7a26',
							path:'/pages/tabBar/component/component',
							webUrl:'https://uniapp.dcloud.io',
							type:0
						};
						break;
					default:
						break;
				}
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'https://uniapp.dcloud.io';
					shareOPtions.title = '欢迎体验uniapp';
				}
				uni.share(shareOPtions);
			},
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => {// 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if(file.size > 20480) {// 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content:'分享图片太大,需要请重新选择图片!',
										showCancel:false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content:'分享图片太大,需要请重新选择图片!',
							showCancel:false
						})
					});
				})
			}
		}
	}
</script>

<style scoped>
		/* 分享布局 */
		.uni-more-share{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background:rgba(0,0,0,.5);
			z-index: 10000;
		}
		.uni-more-share-body{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: auto;
			background-color: #FFFFFF;
			padding:0 20upx;
			z-index: 14000;
		}
		.uni-more-share-top{/*分享到和取消布局*/
			font-size: 40upx;
			font-weight: bold;
			padding: 20upx 0;
		}
		.uni-more-share-con{
			border-bottom: 1upx solid #EEEEEE;
			/* border-top: 1upx solid #EEEEEE; */
			padding: 20upx 0;
		}
		.scrollX{/*横向滑动布局*/
			display: flex;
			flex-wrap: nowrap;
			width: 100%;
			height: 100%;
			/* align-items: center; */
			line-height:150upx;
		}
		.uni-more-share-icon{
			width: 25%;
			height: 100%;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		.uni-more-share-icon>view:first-child{
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
			border: 1upx solid #EEEEEE;
			font-size: 50upx;
			color: #FFFFFF;
		}
		.uni-more-share-icon>view:last-child{
			color: #7a7a7a;
		}
		.active{
			background-color: #EFEFF4;
		}
		.more-weixin{
			background-color: #2ad198;
		}
		.more-qq{
			background-color: #4a73ba;
		}
		.more-xinlangweibo{
			background-color: #ee5e5e;
		}
	
</style>
