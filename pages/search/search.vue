<template>
	<view class="search">
		<template v-if="arr.length>0">
			<!-- 搜索列表 -->
			<block v-for="(item,key) in arr"
			 :key="key">
				<index-list :item="item" :index="key">
				</index-list>
			</block>
			<!-- 上拉加载刷新 -->
			<sl :loadtext="loadtext"></sl>
		</template>
		<template v-else-if="isSearch">
			<!-- 没有数据时，显示图片提示啥也没有 -->
			<Tu></Tu>
		</template>
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue';
	import sl from '../../components/sl/sl.vue';
	import Tu from '../../components/tu/tu.vue';
	export default{
		components:{
			indexList,sl,Tu
		},
		data() {
			return {
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
				],
				arr:[],
				isSearch:false,
				searchText:''
			}
			
		},
		methods:{
			search(){//搜索框，搜索事件，通过key关键字来搜索
				uni.showLoading({//显示加载框
					title:'加载中。。。'
				});
				setTimeout(()=>{
					for(var i=0;i<this.list.length;i++){//循环有数据的列表
						if(this.list[i].title.includes(this.searchText)){
							//里面要是有搜索输入的字，就返回这条数据
							this.arr.push(this.list[i]);//用一个新的数组去保存数据
							this.isSearch=false;//让图片为false隐藏
						}else{//否则没有的话，就让this.arr为空，并且isSearch为true，显示图片
							this.arr=[];
							this.isSearch=true;
						}
					}
					uni.hideLoading();//隐藏加载框
				},1000)
				
			}
		},
		onPullDownRefresh() {//监听用户下拉动作
			this.search()
			uni.stopPullDownRefresh();//停止当前页面下拉刷新
		},
		//监听头部导航的原生按钮事件
		onNavigationBarButtonTap(e) {
			console.log(e);//当头部导航有多个按钮的时候，我们通过下标的判断来写代码
			if(e.index==0){//当前取消按钮的下标为0
				uni.navigateBack({
					delta: 1//返回上一页
				});
			}
		},
		onNavigationBarSearchInputChanged(e) {//监听原生导航栏搜索框输入的变化事件
			console.log(e.text);
			if(e.text){this.searchText=e.text;}
			// if(e.text){this.search(e.text);}
		},
		onNavigationBarSearchInputConfirmed(e) {//监听导航栏搜索框，软键盘点击搜索事件
			console.log(e.text);
			if(e.text){this.search();}
		},
		onReachBottom() {//页面上拉触底事件
				if(this.loadtext!="上拉加载更多"){
					return false;//等于上拉加载触发方法，不等于就阻止触发
				}
				this.loadtext="加载中。。。";
				setTimeout(()=>{
					let obj={
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
					};
					this.list.push(obj);
					this.loadtext="我是有底线的~";
				},500)
		}
	}
</script>

<style>
</style>
