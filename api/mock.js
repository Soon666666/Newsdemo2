import goods from "./goods.js";
import goodsEdit from "./goods-edit.js";

export function apiNewList(pageNum, pageSize) {
	return new Promise((resolute, reject)=>{
		setTimeout(function() {
			try {
				let list = [];
				if (!pageNum) {
					let id=new Date().getTime();
					let newObj = {
						id:id,
						title: "【新增新闻" + id + "】 标题",
						content: "新增新闻的内容"
					};
					list.push(newObj);
				} else {
					for (let i = 0; i < pageSize; i++) {
						let upIndex = (pageNum - 1) * pageSize + i + 1;
						let newObj = {
							id:upIndex,
							title: "【新闻" + upIndex + "】 标题标题标题标题标题",
							content: "内容内容内容内容内容内容内容内容内容"
						};
						list.push(newObj);
					}
					console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
				}
				resolute(list);
			} catch (e) {
				reject(e);
			}
		}, 1000)
	})
}

export function apiGoods(pageNum, pageSize, isGoodsEdit) {
	return new Promise((resolute, reject)=>{
		setTimeout(()=> {
			try{
				let data = isGoodsEdit ? goodsEdit : goods;
				let list=[];
				for (let i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
					if(i==data.length) break;
					list.push(data[i]);
				}
				console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
				resolute(list);
			} catch (e) {
				reject(e);
			}
		},1000)
	})
}

export function apiSearch(pageNum, pageSize, keyword) {
	return new Promise((resolute, reject)=>{
		setTimeout(()=> {
			try{
				let list = []
				if (!keyword || keyword == "全部") {
					for (let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
						if (i === goods.length) break
						list.push(goods[i])
					}
				} else{
					if(keyword=="母婴") keyword="婴"; 
					for (let i = 0; i < goods.length; i++) {
						if (goods[i].goodName.indexOf(keyword) !== -1) {
							list.push(goods[i])
						}
					}
				}
				console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length+", keyword="+keyword);
				resolute(list);
			} catch (e) {
				reject(e);
			}
		},1000)
	})
}

export function apiWeiboList(pageNum, pageSize) {
	return new Promise((resolute, reject)=>{
		setTimeout(function() {
			try {
				let list = [];
				if(!pageNum){
					let id=new Date().getTime();
					let newObj={id:id, title:"【新增微博"+id+"】 新增微博", content:"新增微博的内容,新增微博的内容"};
					list.push(newObj);
				}else{
					for (let i = 0; i < pageSize; i++) {
						let upIndex=(pageNum-1)*pageSize+i+1;
						let newObj={id:upIndex, title:"【微博"+upIndex+"】 标题标题标题标题标题标题", content:"内容内容内容内容内容内容内容内容内容内容"};
						list.push(newObj);
					}
					console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
				}
				resolute(list);
			} catch (e) {
				reject(e);
			}
		}, 2000)
	})
}

export function apiMsgList(pageNum, pageSize) {
	return new Promise((resolute, reject)=>{
		setTimeout(function() {
			try {
				let list = [];
				for (let i = 0; i < pageSize; i++) {
					let msgId = (pageNum - 1) * pageSize + i + 1;
					let newObj = {
						id: msgId,
						title: "【消息" + msgId + "】",
						content: "内容: 下拉获取聊天记录"
					};
					if(pageNum>=5 && i>=3){}else{
						list.unshift(newObj);
					}
				}
				console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
				resolute(list);
			} catch (e) {
				reject(e);
			}
		}, 1000)
	})
}