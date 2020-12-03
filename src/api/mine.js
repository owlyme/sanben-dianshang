import {post, get} from '../utils/request';

/**
 * 
 * @param {userId: id} data 
 */
export const getMyInfo = async (data) => {
  return get('/getMyInfo', data);
};


/**
 * 
 * @param {userId: id} data 
 */
export const getOrderSummary = async (data) => {
  return get('/getOrderSummary', data);
};