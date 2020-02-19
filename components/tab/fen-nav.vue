<template>
	<view >
		<uni-nav-bar :fixed="true" :statusBar="true" @clickRight="sub">
					<block slot="left">
						<view class="u_dis_c a">
							<view class="iconfont icon-qiandao" style="color: #FF9625;"></view>
						</view>
					</block>
					<view class="u_dis_c b">
						<block v-for="(item,index) in tabBars" :key="item.id">
							<view class="u_dis_c d e" 
							:class="{'ac':tabIndex==index}"
							@click="zhuTi(index)">
								{{item.name}}
								<view class="c u_dis_c"></view>
							</view>
							
						</block>
					</view>
					
					<block slot="right">
						<view class="u_dis_c a">
							<view class="icon iconfont icon-bianji1"></view>
						</view>
					</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		props:{
			tabIndex:Number,
			tabBars:Array
		},
		data() {
			return {
				
			}
		},
		methods:{
			zhuTi(k){//点击头部导航切换
				this.$emit('zhuTi',k);
			},
			sub(){
				this.$emit('sub');
			}
		}
	}
</script>

<style scoped>
	.a,.b{
		/* border: 1px solid #000000; */
		width: 50%;
		height: auto;
		margin-left: 15upx;
		}
	.b{
		width: 100%;
	}
	.d{
		/* border: 1px solid #000000; */
		position: relative;
	}
	.ac .c{
		width: 58upx;
		height: 10upx;
		border-radius: 6upx;
		background-color: red;
		position: absolute;
		bottom: 10upx;
		left: auto;
	}
	.e{
		font-size: 30upx;
		font-weight: bold;
		padding: 20upx;
		color: #CCCCCC;
	}
	.ac{
		color: #000000;
	}
</style>
