import {post, get} from '../utils/request';

export const Path = {
  login: '/api/login',
  getcode: '/api/getcode',
  logout: '/api/logout'
};

export const userLogin = async (data) => {
  return post(Path.login, data);
};

export const getValidateCode = async (data) => {
  return get(Path.getcode, data);
};

export const logout = async (data) => {
  return get(Path.logout, data);
};
