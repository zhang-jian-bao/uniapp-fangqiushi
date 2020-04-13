'use strict';
//这是读取首页数据列表的
const db=uniCloud.database();//引用数据库
exports.main = async (event, context) => {
  // //event为客户端上传的参数
  // console.log('event : ' + event)
  // //返回数据给客户端
  // return event
	const res=await db.collection('newsList').get();
	return res;
	
};
