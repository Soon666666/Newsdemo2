'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('news')
	let total = await collection.where({category_id : event.categoryId}).count()
	let start = (event.currentPage-1) * event.pageSize
	let res = await collection.where({category_id : event.categoryId}).orderBy('date','desc').skip(start).limit(event.pageSize).get();
	return {
	  total: total.total,
	  list: res.data
	}
};
