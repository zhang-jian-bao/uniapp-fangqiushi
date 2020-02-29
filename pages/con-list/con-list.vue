<template>
	<!-- 首页详情页面 -->
	<view class="con-list">
		<!-- 头部列表 -->
		<block v-for="(v,i) in list" :key="i">
			<con-list :item="v" :index="i"></con-list>
		</block>
		<!-- 评论列表 -->
			<view class="uni-zui-xin">最新评论{{pinLun.cunt}}</view>
				<view class="uni-comment uni-pin-lun">
					<block v-for="(v,i) in pinLun.list" :key="i">
					<pin-lun :v='v' :k='i'></pin-lun>
				</block>
			</view>
			<!-- 用一个空的盒子站位，这样就不会到下面了 -->
			<view style="height: 200upx;"></view>
			<!-- 用户输入框 -->
			<liao-tian-input @liaoTian_input="liaoTian_input"></liao-tian-input>
			<!-- 点击右上角，分享 -->
			<share-list :isShare='isShare' @share='share'></share-list>
	</view>
</template>

<script>
	import shareList from '../../components/share-list/share-list.vue';
	import liaoTianInput from '../../components/liaoTian-input/liaoTian-input.vue';
	import pinLun from '../../components/pin-lun/pin-lun.vue';
	import conList from '../../components/uni-list-com/con-list.vue';
	import time from '../../common/time.js';
	export default {
		components:{
			conList,pinLun,liaoTianInput,shareList
		},
		data() {
			return {
				isShare:false,
				pinLun:{
					cunt:20,
					list:[]
				},
				list:[
					{
						userImg:'../../static/demo/userpic/6.jpg',
						userName:'焚心',
						sex:0,//0代表男，1代表女
						age:25,
						isGuanZhu:false,
						title:'我是标题，，，',
						titlePic:'../../static/demo/datapic/13.jpg',
						morePic:[
							'../../static/demo/datapic/13.jpg'
							// '../../static/demo/datapic/14.jpg',
							// '../../static/demo/datapic/15.jpg',
						],
						video:false,
						share:false,
						path:'深圳 龙岗',
						sharenum:30,
						commentnum:37,
						goodnum:134//img是图片video视屏
					}
				]
			}
		},
		onLoad(e) {
			var item=JSON.parse(e.item);//在转换为对象或数组
			console.log(item);
			this.title(item);//调用修改导航头部标题
			this.pin();//调用评论数据
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){//右上角菜单按钮
				console.log('菜单')
				this.isShare=!this.isShare;//点击显示，隐藏分享
			}
		},
		methods:{
			share(){//分享，点击黑色和取消隐藏
				this.isShare=false;
			},
			pin(){//评论数据
				var arr=[
					{//一级评论
						fid:0,
						id:1,
						userPic:'../../static/demo/demo66.jpg',
						userName:'焚心~',
						title:'哥是老中医，专治各种吹牛逼',
						time:'1582275786'
					},
					{//二级评论
						fid:1,
						id:1,
						userPic:'../../static/demo/demo66.jpg',
						userName:'焚心~',
						title:'哥是老中医，专治各种吹牛逼',
						time:'1582275786'
					},
					{//二级评论
						fid:1,
						id:2,
						userPic:'../../static/demo/demo66.jpg',
						userName:'焚心~',
						title:'哥是老中医，专治各种吹牛逼',
						time:'1582275786'
					}
				];
				for (var i = 0; i < arr.length; i++) {
					arr[i].time=time.gettime.gettime(arr[i].time);
				}
				this.pinLun.list=arr;
			},
			title(v){//修改内容页的导航头部标题
				uni.setNavigationBarTitle({
					title:v.title
				})
			},
			liaoTian_input(k){//点击输入内容，发送评论,k为传递过来的用户输入的内容
				var obj={//一级评论
						fid:0,
						id:1,
						userPic:'../../static/demo/demo66.jpg',
						userName:'焚心~',
						title:k,
						time:time.gettime.gettime(new Date().getTime())//获取当前时间并转换格式
					};
					this.pinLun.list.push(obj);
			}
		}
	}
</script>

<style>
	/*最新评论布局*/
	.uni-zui-xin{
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}

</style>
