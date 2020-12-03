import {post, get} from '../utils/request';

export const Path = {
  indexInfo: '/indexInfo',
  indexGoodList: '/indexGoodList',
};

export const getIndexInfo = async (data) => {
  return get(Path.indexInfo, data);
};

export const getIndexGoodList = async (data) => {
  return get(Path.indexGoodList, data);
};

// 活动推荐
export const getRecommendedActive = async (data) => {
  return get('/getRecommendedActive', data);
};

// 分类
export const getCategories = async (data) => {
  return get('/getCategories', data);
};





