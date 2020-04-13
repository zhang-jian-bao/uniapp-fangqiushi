<template>
	<!-- 首页页面 -->
	<view class="index">
		<!-- 如果不是APP端就显示自定义导航栏，在微信小程序中显示 自定义导航栏-->
		<!-- #ifndef APP-PLUS -->
		<uni-nav-bar :shadow="false" :border="false" style="z-index: 9999;"
		@clickLeft="clickLeft" @clickRight="clickRight">
			<block slot="left">
				<view class="iconfont icon-qiandao" style="font-size: 22px;
				color: #ff9619;margin-left: 20upx;"></view>
			</block>
			<view style="display: flex;justify-content: center;align-items: center;
			border-radius: 10px;margin-left: -46upx;height: 60upx;margin-top: 12upx;
			color: #CCCCCC;background-color: #F7F7F7;flex: 1;" @click="openSearch">
				<view class="iconfont icon-sousuo" style="margin-right: 6upx;"></view>
				搜索糗事
			</view>
			
			<block slot="right">
				<view class="iconfont icon-bianji1" style="font-size: 22px;
				color: #000000;"></view>
			</block>
		</uni-nav-bar>
		<!-- #endif -->
		
		
		<!-- 顶部导航 -->
		<swiper-x @nav='nav' :tabBars='tabBars' :tabIndex='tabIndex'></swiper-x>
		<!-- 列表 渲染循环block-->
		<view class="uni-tab-bar">
		            <swiper class="swiper-box" 
					:style="{height:swiperheight+'px'}" 
					:current="tabIndex" @change="tabChange">
					<!-- list是后台数据，本地数据是newslist -->
		                <swiper-item v-for="(items,index) in list" :key="index">
		                    <scroll-view scroll-y class="list animated fadeInLeft "
							 @scrolltolower="sl(index)">
		                           <template v-if="items.list.length>0">
		                           	<!-- 图文列表 -->
		                           	<block v-for="(item,key) in items.list"
		                           	 :key="key">
		                           		<index-list :item="item" :index="key">
		                           		</index-list>
		                           	</block>
		                           	<!-- 上拉加载刷新 -->
		                           	<sl  :loadtext="items.loadtext"></sl>
		                           </template>
								   <template v-else>
									   <!-- 没有数据时，显示图片提示啥也没有 -->
									   <Tu></Tu>
								   </template>
		                    </scroll-view>
		                </swiper-item>
		            </swiper>
		        </view>
		
		
		
		
		<!-- 首页页面结束 -->
	</view>
</template>

<script>
	// #ifndef  APP-PLUS
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	// #endif
	import indexList from '../../components/index/index-list.vue';
	import swiperX from '../../components/tab/scroll-x.vue';
	import sl from '../../components/sl/sl.vue';
	import Tu from '../../components/tu/tu.vue';
	export default {
		components:{
			indexList,swiperX,sl,Tu,
			// #ifndef  APP-PLUS
			uniNavBar
			// #endif
		},
		data() {
			return {
				list:[],
				tabIndex: 0,
				tabBars: [
					{
				    name: '关注',
				    id: 'guanzhu'
				}, 
				{
				    name: '推荐',
				    id: 'tuijian'
				}, 
				{
				    name: '体育',
				    id: 'tiyu'
				}, 
				{
				    name: '热点',
				    id: 'redian'
				}, 
				{
				    name: '财经',
				    id: 'caijing'
				}, 
				{
				    name: '娱乐',
				    id: 'yule'
				}, 
				{
				    name: '军事',
				    id: 'junshi'
				}, 
				{
				    name: '历史',
				    id: 'lishi'
				}, 
				{
				    name: '本地',
				    id: 'bendi'
				},
				],
				newslist:[
					{
						loadtext:'上拉加载更多',
						list:[
							{
								pic:'../../static/demo/userpic/12.jpg',
								name:'昵称',
								isGuanZhu:false,
								title:'我是标题',
								titlePic:'../../static/demo/datapic/11.jpg',
								type:'img',//img图文 video视屏
								paly:'20w',
								lang:'02:17',
								infonum:{
									index:0,//0 为没有操作 1为顶加1 2为踩一下
									ding:10,
									cai:10
								},
								ping:34,
								share:17
							},
							{
								pic:'../../static/demo/userpic/12.jpg',
								name:'昵称',
								isGuanZhu:true,
								title:'我是标题',
								titlePic:'../../static/demo/datapic/11.jpg',
								type:'video',//img图文 video视屏
								paly:'20w',
								lang:'02:17',
								infonum:{
									index:1,//0 为没有操作 1为顶加1 2为踩一下
									ding:10,
									cai:10
								},
								ping:34,
								share:17
							},
							{
								pic:'../../static/demo/userpic/12.jpg',
								name:'昵称',
								isGuanZhu:false,
								title:'我是标题',
								titlePic:'../../static/demo/datapic/11.jpg',
								type:'video',//img图文 video视屏
								paly:'20w',
								lang:'02:17',
								infonum:{
									index:2,//0 为没有操作 1为顶加1 2为踩一下
									ding:10,
									cai:10
								},
								ping:34,
								share:17
							}
						]
					},
					{
						loadtext:'上拉加载更多',
						list:[
							{
								pic:'../../static/demo/userpic/12.jpg',
								name:'昵称',
								isGuanZhu:false,
								title:'我是标题',
								titlePic:'../../static/demo/datapic/11.jpg',
								type:'img',//img图文 video视屏
								paly:'20w',
								lang:'02:17',
								infonum:{
									index:0,//0 为没有操作 1为顶加1 2为踩一下
									ding:10,
									cai:10
								},
								ping:34,
								share:17
							},
							{
								pic:'../../static/demo/userpic/12.jpg',
								name:'昵称',
								isGuanZhu:true,
								title:'我是标题',
								titlePic:'../../static/demo/datapic/11.jpg',
								type:'video',//img图文 video视屏
								paly:'20w',
								lang:'02:17',
								infonum:{
									index:1,//0 为没有操作 1为顶加1 2为踩一下
									ding:10,
									cai:10
								},
								ping:34,
								share:17
							},
							{
								pic:'../../static/demo/userpic/12.jpg',
								name:'昵称',
								isGuanZhu:false,
								title:'我是标题',
								titlePic:'../../static/demo/datapic/11.jpg',
								type:'video',//img图文 video视屏
								paly:'20w',
								lang:'02:17',
								infonum:{
									index:2,//0 为没有操作 1为顶加1 2为踩一下
									ding:10,
									cai:10
								},
								ping:34,
								share:17
							}
						]
					},
					{
						loadtext:'上拉加载更多',
						list:[]
					},
					{
						loadtext:'上拉加载更多',
						list:[]
					},
					{
						loadtext:'上拉加载更多',
						list:[]
					},
					{
						loadtext:'上拉加载更多',
						list:[]
					}
				],
				swiperheight:500
				
			}
		},
		onLoad() {
			//列表渲染需要动态的获取页面的高度
			  uni.getSystemInfo({
			    success:(res)=>{
					//获取到当前手机屏幕的总高度-导航的高度100upx，自动转为px
			        let height = res.windowHeight-uni.upx2px(100)
			        this.swiperheight = height;
			    },
			});
			//读取后台列表数据
			uniCloud.callFunction({
				name:'index',//云函数名称
				success: (res) => {
					// console.log(res);
					const list=res.result.data[0].newsList;
					// console.log(list);
					this.list=list;
				},fail: (msg) => {
					console.log(msg);
				},
				complete: (m) => {
					console.log('在执行');
				}
			});
			// uniCloud.callFunction({//通过客户端添加数据到云函数中，不能到数据库中
			// 	name:'add',//云函数名称
			// 	data:{
			// 		a:'王五',
			// 		b:18
			// 	},
			// 	success: (res) => {
			// 		console.log(res);
					
			// 	},fail: (msg) => {
			// 		console.log(msg);
			// 	},
			// 	complete: (m) => {
			// 		console.log('在执行');
			// 	}
			// });
			// uniCloud.callFunction({//通过客户端添加数据到云函数中，再到到数据库中
			// 	name:'add_one',//云函数名称
			// 	data:{
			// 		a:'小坏蛋111',
			// 		b:18
			// 	},
			// 	success: (res) => {
			// 		console.log(res);
					
			// 	},fail: (msg) => {
			// 		console.log(msg);
			// 	},
			// 	complete: (m) => {
			// 		console.log('在执行');
			// 	}
			// });
		},
		//点击搜索框，跳转搜索页面
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '/pages/search/search'
			});
		},
		//监听头部导航的左右按钮事件，用下标来判断
		onNavigationBarButtonTap(e) {
			console.log(e);
			switch (e.index){
				case 0:
					break;
				case 1:
					uni.navigateTo({
						url: '/pages/add-input/add-input'
					});
					break;
				default:
					break;
			}
		},
		methods: {
			// #ifndef  APP-PLUS
				clickLeft(){//左边的点击事件
					console.log('签到按钮')
				},
				clickRight(){//点击编辑按钮
					uni.navigateTo({
						url: '/pages/add-input/add-input'
					});
				},
				openSearch(){//点击搜索框
					uni.navigateTo({
						url: '/pages/search/search'
					});
				},
			// #endif
			sl(index){//上拉加载时
			// console.log(this.newslist[index].loadtext)
				// if(this.newslist[index].loadtext!="上拉加载更多"){
				// 	return false;//等于上拉加载触发方法，不等于就阻止触发
				// }
				// this.newslist[index].loadtext="加载中。。。";
				// if(this.newslist[index].list.length>8){//有点问题
				// 	this.newslist[index].loadtext="我是有底线的~";
				// 	return false;
				// }
				if(this.list[index].loadtext!="上拉加载更多"){
					return false;//等于上拉加载触发方法，不等于就阻止触发
				}
				this.list[index].loadtext="加载中。。。";
				
				// setTimeout(()=>{
					// let obj={
					// 	pic:'../../static/demo/userpic/12.jpg',
					// 	name:'昵称',
					// 	isGuanZhu:true,
					// 	title:'我是标题',
					// 	titlePic:'../../static/demo/datapic/11.jpg',
					// 	type:'video',//img图文 video视屏
					// 	paly:'20w',
					// 	lang:'02:17',
					// 	infonum:{
					// 		index:1,//0 为没有操作 1为顶加1 2为踩一下
					// 		ding:10,
					// 		cai:10
					// 	},
					// 	ping:34,
					// 	share:17
					// };
					// this.newslist[index].list.push(obj);
					uniCloud.callFunction({
						name:'addList',
						success: (res) => {
							console.log(res);
							const obj=res.result.data[0];
							this.list[index].list.push(obj);
							this.list[index].loadtext="我是有底线的~";
						}
					});
					
				// },500)
				
			},
			nav(k){//顶部导航
				this.tabIndex=k;
			},
			tabChange(e){//滑动列表页面时，顶部导航一起动
				console.log(e.detail.current);//当前列表的下标
				this.tabIndex=e.detail.current;
			}
		}
	}
</script>

<style>

</style>
