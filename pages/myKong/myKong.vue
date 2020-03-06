<template>
	<view class="my-kong">
		<!-- 我的空间布局  -->
		<!-- 点击右上角菜单按钮，显示 -->
		<my-kong-menu :show="show" @bigShow="bigShow"
		@beizhu="beizhu" @lahei="lahei"></my-kong-menu>
			<!-- 顶部背景图布局 -->
			<my-kong-one :userInfo="userInfo"></my-kong-one>
		<!-- 导航条 -->
		<view class="my-kong-nav u_dis_s u_dis">
			<block v-for="(cc,key) in nav_top" :key="key">
				<my-nav :nav='cc' :index='key'></my-nav>
			</block>
		</view>
		<!-- 中间的灰色条 -->
		<view style="height: 30upx; background-color: #EEEEEE;"></view>
		<!-- 导航条切换 -->
		<swiper-x @nav='nav' :tabBars='tabBars' 
		:tabIndex='tabIndex' scrollWidth="width:33.33%" borderBottm='border:none'></swiper-x>
		<!-- 详细列表渲染 -->
		<view class="my-kong-list">
			<block v-for="(items,index) in huaTiList" :key="index">
						<view class="a">
							<!-- 这个a很关键，没有的话，数据报错，有的话，渲染多了 -->
							<template v-if="tabIndex==0">
								<!-- 主页内容布局 -->
								<my-kong-zhu :userInfo="userInfo"></my-kong-zhu>
							</template>
							<template v-else-if="tabIndex==index">
								<!-- 渲染列表 -->
								<block v-for="(a,b) in items.list" :key="b">
									<uni-list-com :item="a" :index="b"></uni-list-com>
								</block>
								<!-- 渲染上拉加载 -->
								<sl :loadtext="items.loadtext"></sl>
							</template>
						</view>
			</block>
		</view>
		<!-- 结束布局 -->
	</view>
</template>

<script>
	import myKongMenu from '../../components/caoZuoMeun/my-kong-menu.vue'
	import sl from '../../components/sl/sl.vue';
	import uniListCom from '../../components/uni-list-com/uni-list-com.vue'
	import myKongZhu from '../../components/my-kong-one/my-kong-zhu.vue';
	import swiperX from '../../components/tab/scroll-x.vue';
	import myNav from '../../components/tab/my-nav.vue';
	import myKongOne from '../../components/my-kong-one/my-kong-one.vue'
	export default {
		components:{
			myKongOne, myNav,swiperX,myKongZhu,uniListCom,sl,myKongMenu
		},
		data() {
			return {
				show:false,
				tabIndex: 0,
				tabBars: [
					{
				    name: '主页',
				    id: 'zhuye'
				}, 
				{
				    name: '糗事',
				    id: 'qiushi'
				}, 
				{
				    name: '动态',
				    id: 'dongtai'
				}
				],
				userInfo:{
					userImg:'../../static/demo/demo66.jpg',
					bgImg:'../../static/demo/datapic/26.jpg',
					num:20,
					userName:'焚心~',
					sex:0,//0 为女 1为男
					age:20,
					isGuan:false,
					utime:'2020-02-27',
					id:123,
					xz:'1997-01-27',
					job:'IT',
					path:'宁夏-银川市-贺兰县',
					qg:'未婚'
				},
				nav_top:[//导航
					{name:'获赞',num:'10k'},
					{name:'关注',num:11},
					{name:'粉丝',num:12}
				],
				huaTiList:[
					{},
					{
						loadtext:'上拉加载更多',
						list:[
						{
							userImg:'../../static/demo/userpic/8.jpg',
							userName:'焚心',
							sex:0,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						},
						{
							userImg:'../../static/demo/userpic/6.jpg',
							userName:'焚心',
							sex:0,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'../../static/demo/datapic/13.jpg',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						},
						{
							userImg:'../../static/demo/userpic/6.jpg',
							userName:'焚心',
							sex:0,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'../../static/demo/datapic/13.jpg',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						},
						{
							userImg:'../../static/demo/userpic/5.jpg',
							userName:'焚心',
							sex:1,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'../../static/demo/datapic/13.jpg',
							video:{
								looknum:'20w',
								long:'4.28'
							},
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						}
						]
					},
					{
						loadtext:'上拉加载更多',
						list:[
						{
							userImg:'../../static/demo/userpic/8.jpg',
							userName:'焚心',
							sex:0,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是更新页面',
							titlePic:'',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						},
						{
							userImg:'../../static/demo/userpic/6.jpg',
							userName:'焚心',
							sex:1,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'../../static/demo/datapic/13.jpg',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						},
						{
							userImg:'../../static/demo/userpic/6.jpg',
							userName:'焚心',
							sex:0,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'../../static/demo/datapic/13.jpg',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						},
						{
							userImg:'../../static/demo/userpic/5.jpg',
							userName:'焚心',
							sex:1,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'../../static/demo/datapic/13.jpg',
							video:{
								looknum:'20w',
								long:'4.28'
							},
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						}
						]
					}
				],
			}
		},
		onReachBottom() {//上拉触底事件生命周期
			this.sl();
		},
		onNavigationBarButtonTap(e) {//监听导航栏 顶部按钮事件
			if(e.index==0){//点击菜单按钮
				this.show=!this.show;
			}
		},
		methods: {
			beizhu(){//清除缓存并隐藏
				console.log('备注');
				this.bigShow();
			},
			lahei(){//点击加糗友，隐藏，并跳转
				console.log("拉黑");
				this.bigShow();
			},
			bigShow(){//点击空白处，隐藏				this.show=false;
			},
			nav(k){//顶部导航,k为组件传递过来的值
				this.tabIndex=k;
			},
			sl(index){//上拉加载时
			
				if(this.huaTiList[this.tabIndex].loadtext!="上拉加载更多"){
					return false;//等于上拉加载触发方法，不等于就阻止触发
				}
				this.huaTiList[this.tabIndex].loadtext="加载中。。。";
				// if(this.guanZhu.list.length>8){//有点问题
					
				// 	return false;
				// }
				setTimeout(()=>{
					let obj={
							userImg:'../../static/demo/userpic/6.jpg',
							userName:'焚心',
							sex:0,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是标题，，，',
							titlePic:'../../static/demo/datapic/13.jpg',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
						};
					this.huaTiList[this.tabIndex].list.push(obj);
					this.huaTiList[this.tabIndex].loadtext="我是有底线的~";
				},500)
				
			}
		}
	}
</script>

<style>
	/* 静态导航条 */
	.my-kong-nav{
		position: relative;
		height: 200upx;
		background-color: #FFFFFF;
		border-radius: 30upx 30upx 0 0;
		margin-top: -20upx;
		z-index: 1000;
	}
</style>
