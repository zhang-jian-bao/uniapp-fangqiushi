'use strict';
//分类页面数据渲染
const db=uniCloud.database();
exports.main = async (event, context) => {
  
	var res=await db.collection('guanZhu').get();
	return res;
  
};
