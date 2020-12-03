import { post, get } from '../utils/request';

export const getAllCategories = async(data) => {
  return get('/getAllCategories', data);
};

export const getCategoryGoodList = async(data) => {
  return get('/getCategoryGoodList', data);
};

export const getBannerList = async(data) => {
  return get('/getBannerList', data);
};