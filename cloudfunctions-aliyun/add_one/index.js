'use strict';

//云函数可以添加数据到数据库（在当前文件中将name值为固定值张三）
//将name值为event.a通过客户端传参，可以直接添加数据到云函数和数据库中
const db=uniCloud.database();
exports.main = async (event, context) => {
  return new Promise((resolve,reject)=>{
	  db.collection('add').add({
		  data:{
			  name:event.a,
			  age:event.b
		  }
	  }).then(res=>{
		  resolve(res);
	  }).catch(e=>{
		  reject(e+'失败');
	  })
  })
};
