'use strict';
//点击关注，将当前的状态添加到数据库中
const db=uniCloud.database();
exports.main = async (event, context) => {
  return new Promise((resolve,reject)=>{
	  db.collection('newsList').doc('5e76bfd3b55acf004d8c7708').remove({
		  data:{
				// isGuanZhu:event.a
			}
	  }).then(res=>{
		  resolve(res);
	  }).catch(msg=>{
		  reject(msg);
	  })
  })
};
