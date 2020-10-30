import {get} from '../utils/request';

export const Path = {
  sign: '/api/sign',
  getSign: '/api/getSign',
};

export const sign = async (data) => {
  return get(Path.sign, data);
};
export const getSign = async (data) => {
  return get(Path.getSign, data);
};