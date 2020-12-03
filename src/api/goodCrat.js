import {post, get} from '../utils/request';
/**
 * @param {userId: id} data 
 */
export const getGoodCratList = async (data) => {
  return get('/getGoodCratList', data);
};
// 删除
/**
 * @param {ids: [id]} data 
 */
export const deleteGoodInCart = async (data) => {
  return post('/deleteGoodInCart', data);
};
// 收藏
/**
 * @param {ids: [id]} data 
 */
export const saveGood = async (data) => {
  return post('/saveGood', data);
};
// 获取店铺优惠券
/**
 * @param {shopId: valu} data 
 */
export const getShopCouponList = async (data) => {
  return get('/getShopCouponList', data);
};

