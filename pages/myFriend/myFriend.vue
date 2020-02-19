<template>
	<view class="myFriend">
		<!-- 导航栏 -->
		<scroll-x @nav='nav' :tabBars='tabBars' :tabIndex='tabIndex'
		borderBottm="border-bottom:0" scrollWidth="width:33%"></scroll-x>
		<!-- 列表渲染 -->
		<view class="uni-tab-bar">
		            <swiper class="swiper-box" 
					:style="{height:swiperheight+'px'}" 
					:current="tabIndex" @change="tabChange">
		                <swiper-item v-for="(items,index) in newslist" :key="index">
		                    <scroll-view scroll-y class="list animated fadeInLeft "
							 @scrolltolower="sl(index)">
		                           <template v-if="items.list.length>0">
		                           	<!-- 图文列表 -->
		                           <block v-for="(item,kk) in items.list"
									:key="kk">
		                           		<my-friend-list :item="item" 
										:index="kk"></my-friend-list>
		                           </block>
		                           	<!-- 上拉加载刷新 -->
		                           	<sl :loadtext="items.loadtext"></sl>
		                           </template>
								   <template v-else>
									   <!-- 没有数据时，显示图片提示啥也没有 -->
									   <Tu></Tu>
								   </template>
		                    </scroll-view>
		                </swiper-item>
		            </swiper>
		        </view>
		
	</view>
</template>

<script>
	import sl from '../../components/sl/sl.vue';
	import Tu from '../../components/tu/tu.vue';
	import myFriendList from '../../components/com-list/my-friend-list.vue';
	import scrollX from '../../components/tab/scroll-x.vue';
	export default {
		components:{
			scrollX,myFriendList,Tu,sl
		},
		data() {
			return {
				swiperheight:500,
				newslist:[
					{
						loadtext:'上拉加载更多',
						list:[
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:true
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:1,//0为男 1位女
								age:20,
								isGuanZhu:false
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:false
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:true
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:1,//0为男 1位女
								age:20,
								isGuanZhu:false
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:true
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:1,//0为男 1位女
								age:20,
								isGuanZhu:false
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:true
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:1,//0为男 1位女
								age:20,
								isGuanZhu:false
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:1,//0为男 1位女
								age:20,
								isGuanZhu:false
							}
						]
				},
				{
						loadtext:'上拉加载更多',
						list:[
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:true
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:1,//0为男 1位女
								age:20,
								isGuanZhu:false
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:false
							}
						]
				},
				{
						loadtext:'上拉加载更多',
						list:[
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:true
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:1,//0为男 1位女
								age:20,
								isGuanZhu:false
							},
							{
								img:"../../static/demo/topicpic/13.jpeg",
								title:'焚心~',
								sex:0,//0为男 1位女
								age:20,
								isGuanZhu:false
							}
						]
				}
				],
				tabIndex: 0,
				tabBars: [
					{
				    name: '互关',
				    id: 'huguan',
					num:10
				}, 
				{
				    name: '关注',
				    id: 'guanzhu',
					num:20
				}, 
				{
				    name: '粉丝',
				    id: 'fensi',
					num:30
				},
				]
			}
		},
		onNavigationBarButtonTap(e) {//监听导航取消按钮
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
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
			})
		},
		methods:{
			nav(k){//顶部导航
				this.tabIndex=k;
			},
			sl(index){//上拉加载时
			console.log(this.newslist[index].loadtext)
				if(this.newslist[index].loadtext!="上拉加载更多"){
					return false;//等于上拉加载触发方法，不等于就阻止触发
				}
				this.newslist[index].loadtext="加载中。。。";
				setTimeout(()=>{
					let obj={
						img:"../../static/demo/topicpic/13.jpeg",
						title:'焚心~',
						sex:1,//0为男 1位女
						age:20,
						isGuanZhu:false
					};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext="我是有底线的~";
				},500)
				
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
