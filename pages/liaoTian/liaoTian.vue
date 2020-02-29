<template>
	<view class="liaoTian">
		<!-- 聊天内容 -->
		<scroll-view scroll-y="true" :scroll-top="scrollTop"
		:scroll-with-animation="true" :style="{height:style.itemH+'px'}"
		id="scrollView">
			<block v-for="(item,key) in list" :key="key">
				<liao-tian-input-list :item="item" :index="key"></liao-tian-input-list>
			</block>
		</scroll-view>
		
		
		
		<!-- 用户输入框 -->
		<liao-tian-input @liaoTian_input="liaoTian_input"></liao-tian-input>
	</view>
</template>

<script>
	import time from '../../common/time.js';
	import liaoTianInput from '../../components/liaoTian-input/liaoTian-input.vue';
	import liaoTianInputList from '../../components/liaoTian-input/liaoTian-input-list.vue';
	export default {
		components:{
			liaoTianInput,liaoTianInputList
		},
		data() {
			return {
				list:[],
				scrollTop:0,
				style:{
					itemH:0,
					conH:0
				}
			}
		},
		onLoad() {
			console.log(time.gettime.gettime('1582002798'-'1582002700'));
			this.time();
			this.aa();
		},
		onReady() {
			this.bb();//只能在这里调用
		},
		methods:{
			bb(){
				let q=uni.createSelectorQuery();//获取节点
				q.select('#scrollView').boundingClientRect();
				q.selectAll('.aa').boundingClientRect();
				q.exec(res=>{
					console.log(JSON.stringify(res));
					res[1].forEach(v=>{
						//内容的高度等会所有的子节点的和
						this.style.conH+=v.height
					});
					//如果滚动的高度大于可视的高度
					if(this.style.conH>this.style.itemH){
						this.scrollTop=this.style.conH;//滚动的高度等于所有的子节点的高度的和
					}
				})
			},
			aa(){
				try{//动态获取页面高度
					const res=uni.getSystemInfoSync();
					this.style.itemH=res.windowHeight-uni.upx2px(140);
				}catch(e){}
			},
			time(){//聊天时间
				var arr=[
					{
						isme:false,
						img:'../../static/demo/demo66.jpg',
						type:'text',
						data:'哈哈，焚心~',
						time:'1582002700'
					},
					{
						isme:true,
						img:'../../static/demo/demo6.jpg',
						type:'img',
						data:'../../static/com/g.jpg',
						time:'1582002798'
					}
				];
				for (var i = 0; i < arr.length; i++) {
					// 有点问题，300s内不会显示时间，没啥用
					arr[i].gettiem=time.gettime.getChatTime(arr[i].time,i>0?arr[i-1].time:0);
				}
				this.list=arr;
			},
			liaoTian_input(k){//k为子组件传递过来的用户输入的数据
				var now=new Date().getTime();//获取当前的时间
				var obj={
					isme:true,//当前发送是自己发送，所以为true
					img:'../../static/demo/demo6.jpg',//头像
					type:'text',//目前只用来发文字
					data:k,//用户输入的值
					time:now,//当前的时间戳
					gettime:time.gettime.getChatTime(now,this.list[this.list.length-1].time)
				};
				this.list.push(obj);
				this.bb();
			}
		}
	}
</script>
	
<style>
	
</style>
