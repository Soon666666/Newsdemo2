<template>
	
	 <mescroll-uni :ref="'mescrollRef'+i" @init="mescrollInit" height="100%" top="60" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @emptyclick="emptyClick">
		<blog-list :list="goods"></blog-list>
	</mescroll-uni>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import MescrollMoreItemMixin from "@/components/mescroll-uni/mixins/mescroll-more-item.js";
	import {apiSearch} from "@/api/mock.js"
	
	export default {
		mixins: [MescrollMixin,MescrollMoreItemMixin], 
		data() {
			return {
				downOption:{
					auto:false 
				},
				upOption:{
					auto:false 
				},
				goods: [] 
			}
		},
		props:{
			i: Number, 
			index: { 
				type: Number,
				default(){
					return 0
				}
			},
			tabs: { 
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			downCallback() {
				this.mescroll.resetUpScroll()
			},
			async upCallback(page) {
				let categoryId = this.tabs[this.i]._id;
				let res = await uniCloud.callFunction({
					name:'news', 
					data:{
						categoryId: categoryId,
						currentPage: page.num,
						pageSize: page.size
					}
				})
				console.log("返回数据",res.result.list);
				const curPageData = res.result.list;
				this.mescroll.endSuccess(curPageData.length);
				if(page.num == 1) this.goods = []; 
				this.goods=this.goods.concat(curPageData); 
			},
			emptyClick(){
				uni.showToast({
					title:'点击了按钮,具体逻辑自行实现'
				})
			}
		}
	}
</script>
