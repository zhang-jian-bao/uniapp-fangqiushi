'use strict';
const db=uniCloud.database();
exports.main = async (event, context) => {
  //event为客户端上传的参数
  db.collection('add').add({//这是通过客户端添加数据到云函数中，没有在数据库显示
	  data:{
		  name:event.a,
		  age:event.b
	  }
  })
  console.log('event : ' + event)
  //返回数据给客户端
  return event
};
