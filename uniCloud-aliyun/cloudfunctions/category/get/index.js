const db = uniCloud.database()

exports.get = async (event) => {
  	const collection = db.collection('category')
	return await collection.get()
};
