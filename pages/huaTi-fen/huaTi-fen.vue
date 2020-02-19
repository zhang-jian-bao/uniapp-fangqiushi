<template>
	<!-- 首页页面 -->
	<view class="index">
		<!-- 顶部导航 -->
		<swiper-x @nav='nav' :tabBars='tabBars' :tabIndex='tabIndex'></swiper-x>
		<!-- 列表 渲染循环block-->
		<view class="uni-tab-bar">
		            <swiper class="swiper-box" 
					:style="{height:swiperheight+'px'}" 
					:current="tabIndex" @change="tabChange">
		                <swiper-item v-for="(items,index) in newslist" :key="index">
		                    <scroll-view scroll-y class="list animated fadeInLeft "
							 @scrolltolower="sl(index)">
		                           <template v-if="items.list.length>0">
		                           	<!-- 图文列表 -->
		                           	<block v-for="(item,key) in items.list"
		                           	 :key="key">
		                           		<com-list :item="item" 
										:index="key" @xQ=xQ></com-list>
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
		
		
		
		
		<!-- 首页页面结束 -->
	</view>
</template>

<script>
	import comList from '../../components/com-list/com-list.vue';
	import swiperX from '../../components/tab/scroll-x.vue';
	import sl from '../../components/sl/sl.vue';
	import Tu from '../../components/tu/tu.vue';
	export default {
		components:{
			swiperX,sl,Tu,comList
		},
		data() {
			return {
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
								img:'../../static/demo/topicpic/11.jpeg',
								title:'淘宝记录簿',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/12.jpeg',
								title:'白天拍照啦',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/13.jpeg',
								title:'亲身经历的灵异事件',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/14.jpeg',
								title:'你是我的小可爱',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/15.jpeg',
								title:'你是我的小坏蛋',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							}
						]
					},
					{
						loadtext:'上拉加载更多',
						list:[
							{
								img:'../../static/demo/topicpic/11.jpeg',
								title:'淘宝记录簿',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/12.jpeg',
								title:'白天拍照啦',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/13.jpeg',
								title:'亲身经历的灵异事件',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/14.jpeg',
								title:'你是我的小可爱',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/15.jpeg',
								title:'你是我的小坏蛋',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							}
						]
					},
					{
						loadtext:'上拉加载更多',
						list:[
							{
								img:'../../static/demo/topicpic/11.jpeg',
								title:'淘宝记录簿',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/12.jpeg',
								title:'白天拍照啦',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/13.jpeg',
								title:'亲身经历的灵异事件',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/14.jpeg',
								title:'你是我的小可爱',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/15.jpeg',
								title:'你是我的小坏蛋',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/14.jpeg',
								title:'你是我的臭妹妹',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							},
							{
								img:'../../static/demo/topicpic/15.jpeg',
								title:'你是我的小裕平',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
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
			})
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
			xQ(){//点击跳转到详情页
				uni.navigateTo({
					url:'/pages/fen_xiangQin/fen_xiangQin'
				})
			},
			sl(index){//上拉加载时
			console.log(this.newslist[index].loadtext)
				if(this.newslist[index].loadtext!="上拉加载更多"){
					return false;//等于上拉加载触发方法，不等于就阻止触发
				}
				this.newslist[index].loadtext="加载中。。。";
				// if(this.newslist[index].list.length>8){//有点问题
				// 	this.newslist[index].loadtext="我是有底线的~";
				// 	return false;
				// }
				setTimeout(()=>{
					let obj={
								img:'../../static/demo/topicpic/12.jpeg',
								title:'白天拍照啦',
								con:'120斤到150斤，我的反转人生',
								doscnum:577,
								todynum:720
							};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext="我是有底线的~";
				},3000)
				
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
