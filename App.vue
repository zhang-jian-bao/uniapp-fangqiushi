<script>
	export default {
		onLaunch: function() {
			//网络监听（用户目前断网，切换WiFi）
			this.lib.NetWork.On();
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/com.css';
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import "./common/uni.css";
	/*引入阿里图标iconfont*/
	@import "./common/iconfont.css";
	/* 引入外部动画库 */
	@import "./common/animate.min.css";
</style>
