import PagePathes from '../../router/index'
import { Toast, boundingClientRect, Router } from '../../utils/sysApis';

const App = getApp();
Page({
  data: {
    scrollViewHeight: 600,
    list: [
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 1, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2021/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 2, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
      {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注您好，小糖已为您发货了，请小主关注',
        time: '2020/10/22',
        nums: 9
      },
    ]
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
    this.getDom();
  },

  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    let scrollViewHeight = App.globalData.screenHeight - res.target_top;
    this.setData({
      scrollViewHeight
    });
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
