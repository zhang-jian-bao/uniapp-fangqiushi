<template>
	<view class="fen_xiangQin">
		<!-- 我是分类详情页 -->
		<block v-for="(item,index) in list" :key="index">
			<fen-xQ :item='item' :index='index'></fen-xQ>
		</block>
		<!-- 选项卡类型的列表 -->
	<view class="a">
		<swiper-x @nav='nav' :tabBars='tabBars' :tabIndex='tabIndex'
		borderBottm="border-bottom:0" scrollWidth="width:50%"></swiper-x>
	</view>

		<!-- 列表渲染 -->
		<view class="fen_xiangQin_list">
			<block v-for="(items,index) in huaTiList" :key="index">
					<view class="a">
						<template v-if="tabIndex==index">
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
		
		
		
		<!-- 分享详情页结束 -->
	</view>
</template>

<script>
	import sl from '../../components/sl/sl.vue';
	import uniListCom from '../../components/uni-list-com/uni-list-com.vue'
	import swiperX from '../../components/tab/scroll-x.vue';
	import fenXQ from '../../components/com-list/fen_xQ.vue';
	export default {
		components:{
			fenXQ,swiperX,uniListCom,sl
		},
		data() {
			return {
				swiperheight:500,
				huaTiList:[
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
				tabIndex: 0,
				tabBars: [
					{
				    name: '默认',
				    id: 'moren'
				}, 
				{
				    name: '最新',
				    id: 'zuixin'
				}
				],
				list:[
					{
						img:'../../static/demo/demo2.jpg',
						title:'忆往昔，物是人非',
						tainum:567,
						todaynum:666,
						con:'当面试官问你，在电梯中遇到马云的时候，你会怎么做'
					}
				]
				// swiperheight:500
			}
		},
		onLoad() {
			
		},
		onPullDownRefresh() {//监听页面下拉刷新
			this.xl();
		},
		onReachBottom() {//上拉触底事件生命周期
			this.sl();
		},
		methods:{
			nav(k){//顶部导航
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
				
			},
			xl(){//下拉刷新，数据模拟
			//1、获取数据 2、赋值 3、关闭监听
				setTimeout(()=>{
					var arr=[
						{
							userImg:'../../static/demo/userpic/8.jpg',
							userName:'焚心',
							sex:0,//0代表男，1代表女
							age:25,
							isGuanZhu:false,
							title:'我是下拉刷新数据。。。',
							titlePic:'',
							video:false,
							share:false,
							path:'深圳 龙岗',
							sharenum:30,
							commentnum:37,
							goodnum:134//img是图片video视屏
							}
						];
						this.huaTiList[this.tabIndex].list=arr;
						uni.stopPullDownRefresh();//关闭下拉刷新
				},500)
				
				
			}
			
			
		}
	}
</script>

<style>
	/* .fen_xiangQin{
		width: 100%;
		height: 100%;
	} */
	/* page{
		height: 100%;
	} */
</style>
