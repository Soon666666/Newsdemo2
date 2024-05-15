<template>
	<view class="content">
		  <!-- mescroll 区域 -->
		 
		<view v-if="content">
			<view class="news-title">{{title}}</view>
			 <!-- 显示封面图 -->
			<image v-if="cover" class="cover-img" :src="cover" mode="aspectFill" />
			<view>{{content}}</view>
			<u-parse :html="content"></u-parse>
		</view>
		<mescroll-empty v-else></mescroll-empty>
		
	</view>
</template>

<script>
	import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty.vue';
	export default {
		components: {
			MescrollEmpty
		},
		data() {
			return {
				title:"",
				content:"",
				cover:","
			}
		},
		onLoad(options) {
			options.id&&this.getDetails(options.id);
		},
		methods: {
			async getDetails(id) {
				let res = await uniCloud.callFunction({
					name:'newsDetail',
					data:{
						id: id
					}
				});
				console.log(res);
				const data = res.result.data;
				if(data.length){
					this.title = data[0].title;
					this.content = data[0].content;
					 // 如果新闻数据中包含封面图的 URL，则赋值给 cover
					        if (data[0].cover && data[0].cover.url) {
					          this.cover = data[0].cover.url;
					        }
				}
			}
		}
	}
</script>

<style lang="scss" scope>
.news-title{
	font-size: 55rpx;
	 font-weight: bold; /* 设置粗体 */
	  text-align: center; /* 居中对齐 */
}
.content {
	padding: 30rpx;
	font-size: 32rpx;
	line-height: 1.8;
	.article-title{
		font-size: 48rpx;
		margin-bottom: 30rpx;
	}
	p {
		
	}
	.cover-img {
	
	  // width: auto;
	  // height: auto;
	  
	   
		object-fit: cover; /* 等比例缩放并填充 */
	  border-radius: 12rpx;
	  
	}
}
</style>
