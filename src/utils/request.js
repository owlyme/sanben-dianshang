import ENV from '../env';

const {host}=  ENV;

export const get = (url,data) => {
  return new Promise((resolve,reject) => {
    wx.request({
      method: 'get',
      url: host + url,
      data: data,
      header: {'content-type': 'application/json'},
      success: (res) =>{
        // 调用接口成功
        resolve(res);
      },
      fail: (err) => {
        // 调用接口失败
        reject(err);
      }
    });
  });
};

export const post = (url,data) => {
  return new Promise((resolve,reject) => {
    wx.request({
      method: 'post',
      url: host + url,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) =>{
        // 调用接口成功
        resolve(res);
      },
      fail: (err) => {
        // 调用接口失败
        reject(err);
      }
    });
  });
};

export const postFormdate = (url,data) => {
  return new Promise((resolve,reject) => {
    wx.request({
      method: 'post',
      url: host + url,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) =>{
        // 调用接口成功
        resolve(res);
      },
      fail: (err) => {
        // 调用接口失败
        reject(err);
      }
    });
  });
};

export const uploadFile = (url,data) => {
  let {filePath, ...other} = data;
  return new Promise((resolve,reject) => {
    wx.uploadFile({
      url: host + url, //仅为示例，非真实的接口地址
      filePath,
      name: 'file',
      formData: {
        ...other
      },
      success: (res) =>{
        // 调用接口成功
        resolve(res);
      },
      fail: (err) => {
        // 调用接口失败
        reject(err);
      }
    });
  });
};


