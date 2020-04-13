'use strict';
const db=uniCloud.database();
//这是读取首页上滑加载数据的
exports.main = async (event, context) => {
  const res=await db.collection('fen_sl').get();
  return res;
};
