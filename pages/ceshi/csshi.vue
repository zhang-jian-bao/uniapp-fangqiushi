<template>
	<view class="a">
		<block v-for="(item,index) in huaTiList" :key="index">
			<view class="a">
				<block v-for="(a,b)  in item.list" :key="b">
					<uni-list-com :item="a" :index="b"></uni-list-com>
				</block>
			</view>
		</block>
	</view>
</template>

<script>
	import uniListCom from '../../components/uni-list-com/uni-list-com.vue'
	export default {
		components:{
			uniListCom
		},
		data() {
			return {
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
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
