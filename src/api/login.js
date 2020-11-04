import {post, get} from '../utils/request';

export const Path = {
  login: '/login',
  getcode: '/getcode',
  logout: '/logout'
};

function format(res) {
  return res
}

export const userLogin = async (data) => {
  return post(Path.login, data).then(res => {
    return format(res)
  })
};

export const getValidateCode = async (data) => {
  return get(Path.getcode, data);
};

export const logout = async (data) => {
  return get(Path.logout, data);
};
