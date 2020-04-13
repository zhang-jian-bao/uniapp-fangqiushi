<template>
	<view class="aa">
		<!-- 头部导航自定义 -->
		<fen-nav :tabIndex="tabIndex" :tabBars="tabBars" 
		@zhuTi='zhuTi' @sub='sub'></fen-nav>
		
		<!-- 导航跟列表渲染 -->
		<view class="uni-tab-bar">
		            <swiper class="swiper-box" 
					:style="{height:swiperheight+'px'}" 
					:current="tabIndex" @change="tabChange">
		                <swiper-item>
		                   <scroll-view scroll-y class="list animated fadeInLeft"
						   @scrolltolower="sl()">
		                           <!-- 列表内容 -->
		                           <block v-for="(item,key) in aa.list" :key="key">
		                           	<uni-list-com :item="item" 
									:index="key"></uni-list-com>
		                           </block>
								   <!-- 上拉加载刷新 -->
								   <sl :loadtext="aa.loadtext"></sl>
		                    </scroll-view>
						
		                </swiper-item>
						<swiper-item>
						   <scroll-view scroll-y class="list animated fadeInLeft ">
						           <!-- 列表内容 -->
						        <view class="huaTi">
									<!-- 搜索框 -->
						        	<view class="huaTi-search">
						        		<input type="text" 
										placeholder="搜索内容"
										placeholder-class="iconfont icon-sousuo huaTi-search-one"/>
						        	</view>
									<!-- 轮播图 -->
									<swiper :indicator-dots="true" 
									:autoplay="true" :interval="3000" 
									:duration="1000" indicator-color="#cccccc"
									indicator-active-color="red">
									<block
									v-for="(item,index) in huaTi.swiper"
									:key="index">
										<swiper-item class="huaTi-banner">
											<image :src="item.url" 
											mode="scaleToFill" lazy-load></image>
										</swiper-item>
										</block>
									
									</swiper>
									<!-- 热门分类 -->
									<fen-hot :nav="huaTi.hot"></fen-hot>
									<!-- 最新列表 -->
									<view class="huaTi-news">
										<view>最近更新</view>
										<block v-for="(item,index) in huaTi.list"
										:key="index">
											<com-list :item="item" 
											:index="index" @xQ='xQ'>
											</com-list>
										</block>
										
									</view>
						        </view>
						    </scroll-view>
						
						</swiper-item>
		            </swiper>
		        </view>
	</view>
</template>

<script>
	import comList from '../../components/com-list/com-list.vue';
	import fenHot from  '../../components/fen-hot/fen-hot.vue';
	import sl from '../../components/sl/sl.vue';
	import fenNav from '../../components/tab/fen-nav.vue';
	import uniListCom from '../../components/uni-list-com/uni-list-com.vue';
	// import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components:{
			uniListCom,fenNav,sl,fenHot,comList
		},
		data() {
			return {
				swiperheight:500,
				tabIndex: 0,
				tabBars: [
					{name: '主题',id:'guanZhu'},
					{name: '话题',id:'huaTi'}
				],
				// huaTi:{
				// 	swiper:[
				// 		{url:'../../static/demo/banner1.jpg'},
				// 		{url:'../../static/demo/banner2.jpg'},
				// 		{url:'../../static/demo/banner1.jpg'}
				// 	],
				// 	hot:['最新','游戏','情感','打卡','故事','喜爱'],
				// 	list:[
				// 		{
				// 			img:'../../static/demo/topicpic/11.jpeg',
				// 			title:'淘宝记录簿',
				// 			con:'120斤到150斤，我的反转人生',
				// 			doscnum:577,
				// 			todynum:720
				// 		},
				// 		{
				// 			img:'../../static/demo/topicpic/12.jpeg',
				// 			title:'白天拍照啦',
				// 			con:'120斤到150斤，我的反转人生',
				// 			doscnum:577,
				// 			todynum:720
				// 		},
				// 		{
				// 			img:'../../static/demo/topicpic/13.jpeg',
				// 			title:'亲身经历的灵异事件',
				// 			con:'120斤到150斤，我的反转人生',
				// 			doscnum:577,
				// 			todynum:720
				// 		}
				// 	]
				// },
				huaTi:'',
				aa:''
				// guanZhu:{
				// 	loadtext:'上拉加载更多',
				// 	list:[
				// 		{
				// 			userImg:'../../static/demo/userpic/8.jpg',
				// 			userName:'焚心',
				// 			sex:0,//0代表男，1代表女
				// 			age:25,
				// 			isGuanZhu:false,
				// 			title:'我是标题，，，',
				// 			titlePic:'',
				// 			video:false,
				// 			share:false,
				// 			path:'深圳 龙岗',
				// 			sharenum:30,
				// 			commentnum:37,
				// 			goodnum:134//img是图片video视屏
				// 		},
				// 		{
				// 			userImg:'../../static/demo/userpic/6.jpg',
				// 			userName:'焚心',
				// 			sex:0,//0代表男，1代表女
				// 			age:25,
				// 			isGuanZhu:false,
				// 			title:'我是标题，，，',
				// 			titlePic:'../../static/demo/datapic/13.jpg',
				// 			video:false,
				// 			share:false,
				// 			path:'深圳 龙岗',
				// 			sharenum:30,
				// 			commentnum:37,
				// 			goodnum:134//img是图片video视屏
				// 		},
				// 		{
				// 			userImg:'../../static/demo/userpic/5.jpg',
				// 			userName:'焚心',
				// 			sex:1,//0代表男，1代表女
				// 			age:25,
				// 			isGuanZhu:false,
				// 			title:'我是标题，，，',
				// 			titlePic:'../../static/demo/datapic/13.jpg',
				// 			video:{
				// 				looknum:'20w',
				// 				long:'4.28'
				// 			},
				// 			share:false,
				// 			path:'深圳 龙岗',
				// 			sharenum:30,
				// 			commentnum:37,
				// 			goodnum:134//img是图片video视屏
				// 		},
				// 		{
				// 			userImg:'../../static/demo/userpic/9.jpg',
				// 			userName:'焚心',
				// 			sex:1,//0代表男，1代表女
				// 			age:24,
				// 			isGuanZhu:false,
				// 			title:'我是标题，，，',
				// 			titlePic:'',
				// 			video:false,
				// 			share:{
				// 				title:'我是分享标题',
				// 				shareImg:'../../static/demo/datapic/14.jpg'
				// 			},
				// 			path:'深圳 龙岗',
				// 			sharenum:30,
				// 			commentnum:37,
				// 			goodnum:134//img是图片video视屏
				// 		}
				// 	]
				// }
				
			}
		},
		onLoad() {
			//参数1 为返回的路径 参数2 为返回路由的类型1为redirecTo 2为switchTo
			// var login=this.isLogin('/pages/fen/fen',2);
			// if(!login){//如果没有登录，就跳转到登录页
			// 	uni.redirectTo({
			// 		url:'/pages/login/login'
			// 	})
			// }
			//列表渲染需要动态的获取页面的高度
			  uni.getSystemInfo({
			    success:(res)=>{
					//获取到当前手机屏幕的总高度-导航的高度100upx，自动转为px
			        let height = res.windowHeight-uni.upx2px(100)
			        this.swiperheight = height;
			    },
			});
			//获取分类数据列表，云函数
			uniCloud.callFunction({
				name:'fen',
				success: (res) => {
					
					this.aa=res.result.data[0];
					// console.log(this.aa);
				},fail: (msg) => {
					console.log('分类页面数据列表读取失败');
				},complete: () => {
					console.log('分类页面数据列表成功、失败都可以运行');
				}
			})
			//获取话题列表
			uniCloud.callFunction({
				name:'fen_hua',
				success: (res) => {
					console.log(res.result.data[0].huaTi);
					this.huaTi=res.result.data[0].huaTi;
				},fail: () => {
					console.log("话题列表失败");
				}
			})
			
		},
		methods:{
			xQ(){
				uni.navigateTo({
					url:'/pages/fen_xiangQin/fen_xiangQin'
				})
			},
			sl(index){//上拉加载时
			console.log(this.aa.loadtext)
				if(this.aa.loadtext!="上拉加载更多"){
					return false;//等于上拉加载触发方法，不等于就阻止触发
				}
				this.aa.loadtext="加载中。。。";
				uniCloud.callFunction({
					name:'fen_sl',
					success: (res) => {
						// console.log(res.result.data[0].list);
							res.result.data[0].list.forEach(v=>{
								this.aa.list.push(v);
							})
							this.aa.loadtext="我是有底线的~";
						
					},fail: () => {
						console.log('上华加载失败');
					}
				})
				// if(this.guanZhu.list.length>8){//有点问题
					
				// 	return false;
				// }
				// setTimeout(()=>{
					// let obj={
					// 		userImg:'../../static/demo/userpic/6.jpg',
					// 		userName:'焚心',
					// 		sex:0,//0代表男，1代表女
					// 		age:25,
					// 		isGuanZhu:false,
					// 		title:'我是标题，，，',
					// 		titlePic:'../../static/demo/datapic/13.jpg',
					// 		video:false,
					// 		share:false,
					// 		path:'深圳 龙岗',
					// 		sharenum:30,
					// 		commentnum:37,
					// 		goodnum:134//img是图片video视屏
					// 	};
				// 	this.guanZhu.list.push(obj);
				// 	this.guanZhu.loadtext="我是有底线的~";
				// },500)
				
			},
			zhuTi(k){//点击头部导航切换
				this.tabIndex=k;//k是传递过来的值
			},
			sub(){//点击头部导航右边的编辑图标，跳转到发布页面
				uni.navigateTo({//调用组件传递过来的方法名
					url: '/pages/add-input/add-input'
				});
			},
			tabChange(e){//滑动列表页面时，顶部导航一起动
				console.log(e.detail.current);//当前列表的下标
				this.tabIndex=e.detail.current;
			}
		}
	}
</script>

<style>
	
	/* 话题整体页面布局 */
	.huaTi{
		padding: 20upx;
	}
	.huaTi-search{
		background-color: #EEEEEE;
		height: auto;
		border-radius: 20upx;
	}
	.huaTi-search>input{
		height: 80upx;
		text-align: center;
		line-height: 80upx;
	}
	.huaTi-search-one{
		color: #CCCCCC;
		font-size: 40upx;
	}
	.huaTi-banner{
		margin-top: 20upx;
	}
	.huaTi-banner>image{
		width: 100%;
	}
	
</style>
