<template>
    <view>
    	<me-tabs v-model="tabIndex" :tabs="tabs" :fixed="true" :tab-width="130"></me-tabs>
    	<swiper :style="{height: height}" :current="tabIndex" @change="swiperChange">
    		<swiper-item v-for="(tab,i) in tabs" :key="i">
    			<mescroll-item ref="mescrollItem" :i="i" :index="tabIndex" :tabs="tabs"></mescroll-item>
    		</swiper-item>
    	</swiper>
    	
    </view>
</template>

<script>
    import MescrollItem from "./mescroll-swiper-item.vue";
    
    export default {
    	components: {
    		MescrollItem
    	},
    	data() {
    		return {
    			height: "400px", 
    			tabs: [],
    			tabIndex: 0 
    		}
    	},
    	onLoad() {
    		this.height = uni.getSystemInfoSync().windowHeight + 'px'
    		this.getCategoryMenu()
    	},
    	methods: {
    		swiperChange(e){
    			this.tabIndex = e.detail.current
    		},
    		async getCategoryMenu(){
    			let res = await uniCloud.callFunction({
    				name:'category', 
    				data:{type: 'get'} 
    			})
    			this.tabs = res.result.data;
    		}
    	}
    }
</script>

<style lang="scss">
.publish-button{
	position: fixed;
	display: flex;
	bottom: calc(30rpx + var(--window-bottom));
	right: 30rpx;
	width: 64rpx;
	height: 64rpx;
	align-items: center;
	justify-content: center;
	background-color: #d81e06;
	border-radius: 50rpx;
	box-shadow: 0 0 20rpx rgba(0,0,0,.4);
}
</style>

