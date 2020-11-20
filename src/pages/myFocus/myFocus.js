import PagePathes from '../../router/index'
import { Router } from '../../utils/sysApis';

const App = getApp();
Page({
  data: {
    shopList: [
      {
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: "阿迪达斯三叶草旗舰店",
        followNumber: 148,
        rate: 7,
        phoneNumber: '13156521718',
        address: 111111,
        isFocus: 1,
        products: [
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
        ],
        totalShopNumber: 207,
        sameCityShopNumber: 20
      },
      {
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: "阿迪达斯三叶草旗舰店",
        followNumber: 148,
        rate: 7,
        phoneNumber: '13156521718',
        address: 111111,
        isFocus: 1,
        products: [
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
        ],
        totalShopNumber: 207,
        sameCityShopNumber: 0
      },
      {
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: "阿迪达斯三叶草旗舰店",
        followNumber: 148,
        rate: 7,
        phoneNumber: '13156521718',
        address: 111111,
        isFocus: 1,
        products: [
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
          {
            id: 1,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          },
        ],
        totalShopNumber: 207,
        sameCityShopNumber: 20
      },
    ]
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  customData: {}
});
