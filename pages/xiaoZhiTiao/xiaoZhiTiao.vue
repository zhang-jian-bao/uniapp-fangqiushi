<template>
	<view class="xiaoZhiTiao">
		<!-- 点击+ 显示菜单 -->
		<caoZuoMeun :show="show" @bigShow="bigShow"
		@jiaQiuYou="jiaQiuYou" @clearHuanCun="clearHuanCun"></caoZuoMeun>
		<!-- 列表渲染 -->
		<block v-for="(item,index) in list" :key="index">
		<page-list :item="item" :index="index"
		@liaoTian="liaoTian"></page-list>
	</block>
		<!-- 上拉加载 -->
		<sl :loadtext="loadtext"></sl>
	</view>
</template>

<script>
	import caoZuoMeun from '../../components/caoZuoMeun/caoZuoMeun.vue';
	import sl from '../../components/sl/sl.vue'
	import pageList from '../../components/page/page-list.vue';
	export default {
		components:{
			pageList,sl,caoZuoMeun
		},
		data() {
			return {
				show:false,
				loadtext:'上拉加载更多',
				list:[
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"焚心？何为焚心，我的痛苦，你不懂！",
						msgnum:2
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'14:50',
						content:"世人笑我太疯癫，我笑世人看不穿",
						msgnum:0
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"哥是老中医，专治各种吹牛逼！",
						msgnum:63
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"哥是老中医，专治各种吹牛逼！",
						msgnum:66
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"精神小伙精神在！",
						msgnum:60
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"玩归玩，闹归闹，不要跟哥开玩笑",
						msgnum:6
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"哥是老中医，专治各种吹牛逼！",
						msgnum:40
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"精神小伙精神在！",
						msgnum:20
					},
					{
						img:'../../static/demo/demo66.jpg',
						title:'焚心~',
						timer:'13:50',
						content:"玩归玩，闹归闹，不要跟哥开玩笑",
						msgnum:6
					}
				]
			}
		},
		onReachBottom() {//监听页面触底上拉加载事件
			this.sl();
		},
		onPullDownRefresh() {//监听页面下拉刷新
			this.xl();
		},
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0://左边按钮
					uni.navigateTo({//跳转到好友页面
						url:'/pages/myFriend/myFriend'
					})
					break;
				case 1://右边按钮
					this.show=true;//显示
					break;
				default:
					break;
			}
		},
		methods:{
			//点击跳转到聊天页面
			liaoTian(){
				uni.navigateTo({
					url:'/pages/liaoTian/liaoTian'
				})
			},
			clearHuanCun(){//清除缓存并隐藏
				console.log('清除缓存');
				this.bigShow();
			},
			jiaQiuYou(){//点击加糗友，隐藏，并跳转
				console.log("加糗友");
				this.bigShow();
			},
			bigShow(){//点击空白处，隐藏
				this.show=false;
			},
			xl(){
				//1、获取数据 2、赋值 3、自动关闭下拉刷新
				setTimeout(()=>{
					var list=[
						{
							img:'../../static/demo/demo66.jpg',
							title:'焚心~',
							timer:'13:50',
							content:"哥是老中医，专治各种吹牛逼！",
							msgnum:20
						},
						{
							img:'../../static/demo/demo66.jpg',
							title:'焚心~',
							timer:'13:50',
							content:"精神小伙精神在！",
							msgnum:40
						},
						{
							img:'../../static/demo/demo66.jpg',
							title:'焚心~',
							timer:'13:50',
							content:"玩归玩，闹归闹，不要跟哥开玩笑",
							msgnum:80
						}
					];
					this.list=list;
					uni.stopPullDownRefresh();//关闭下拉刷新
				},2000)
			},
			sl(){//上拉加载时
			
				if(this.loadtext!="上拉加载更多"){
					return false;//等于上拉加载触发方法，不等于就阻止触发
				}
				this.loadtext="加载中。。。";
				// if(this.guanZhu.list.length>8){//有点问题
					
				// 	return false;
				// }
				setTimeout(()=>{
					let obj={
							img:'../../static/demo/demo66.jpg',
							title:'焚心~',
							timer:'13:50',
							content:"玩归玩，闹归闹，不要跟哥开玩笑",
							msgnum:6
						};
					this.list.push(obj);
					this.loadtext="我是有底线的~";
				},500)
				
			}
		}
	}
</script>

<style>

</style>
