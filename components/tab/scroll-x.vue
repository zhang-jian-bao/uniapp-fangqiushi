<template>
	<!-- <view class="uni-tab-bar"> -->
	       <scroll-view class="uni-swiper-tab" scroll-x
			:style="borderBottm">
	           <block v-for="(tab,index) in tabBars" :key="tab.id">
	               <view class="swiper-tab-list" :class="{'active' : tabIndex==index}"
					@click="tabb(index)"
					:style="scrollWidth">
	                   {{tab.name}} {{tab.num?tab.num:''}}
	               <view class="swiper-tab-line"></view>
	               </view>
	           </block>
	       </scroll-view>
	   <!-- </view> -->
</template>

<script>
	export default {
		props:{
			tabBars:Array,
			tabIndex:Number,
			borderBottm:{
				type:String,
				default:''
			},
			scrollWidth:{
				type:String,
				default:''
			}
		},
		methods:{
			tabb(index){//点击导航栏
				// this.tabIndex=index;
				this.$emit('nav',index);
			},
		}
	}
</script>

<style scoped>
	.uni-swiper-tab{
	        border-bottom: 1upx solid #EEEEEE;
	    }
	    .swiper-tab-list{
	        color: #969696;
	        font-weight: bold;
	    }
	    .uni-tab-bar .active{
	        color: #343434;
	    }
	    .active .swiper-tab-line{
	        border-bottom: 6upx solid #FEDE33;
	        width: 70upx;
	        margin: auto;
	        border-top: 6upx solid #FEDE33;
	        border-radius: 20upx;
	    }
</style>
