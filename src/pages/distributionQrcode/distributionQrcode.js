// 全局app实例
import {Path, Router} from '../../router/index';

const app = getApp();
 

Page({
  data: {
    name: 'asdfasfaf',
    level: '一级分销',
    avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    qrcode: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg'
  },
  onLoad() {
    // Do some initialize when page load.
  },
  handleTeam() {
    Router.push(Path.distributionTeam)
  },
  // 返回
  handleBack() {
    Router.back()
  },
  
  customData: {}
});
