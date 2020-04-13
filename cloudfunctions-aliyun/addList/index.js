'use strict';
const db=uniCloud.database();
//这是读取首页上滑加载数据的
exports.main = async (event, context) => {
  const ress=await db.collection('addList').get();
  return ress;
};
