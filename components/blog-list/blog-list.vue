<template>
	<view class="blog-list">
		<view class="blog-li" v-for="item in list" :key="item._id" @click="toDetail(item)">
			<!-- <image class="blog-img" :src="item.cover" mode="aspectFill"/> -->
			<image class="blog-img" :src="item.cover.url" mode="aspectFill"/>
			
			<view class="flex-item">
				<view class="blog-title u-line-2">{{item.title }}</view>
				<text class="blog-desc u-line-2">{{item.excerpt }} </text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			toDetail(item){
				this.$u.route({
					url: '/pages/detail/detail',
					params: {
						id: item._id
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.blog-list{
		background-color: #fff;
		
		.blog-li{
			display: flex;
			align-items: center;
			padding: 20rpx;
			border-bottom: 1rpx solid #eee;
			
			.blog-img{
				width: 160rpx;
				height: 160rpx;
				margin-right: 20rpx;
				border-radius: 12rpx;
			}
			
			.flex-item{
				flex: 1;
				
				.blog-title{
					font-size: 28rpx;
					margin-bottom: 12rpx;
					color: #333;
				}
				.blog-desc{
					font-size: 24rpx;
					color: #666;
				}
				
			}
		}
	}
</style>
