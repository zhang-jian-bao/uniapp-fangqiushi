'use strict';
//分类页面话题的列表
const db=uniCloud.database();
exports.main = async (event, context) => {
  //event为客户端上传的参数
	var res=await db.collection('fen_hua').get();
	return res;
};
