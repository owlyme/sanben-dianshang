// 全局app实例
const app = getApp();
console.log(app);

Page({
  data: {
    shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    shopName: '阿迪达斯品牌店',
    updateTime: '2020-09-13 15:00:54',
    customerAvatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    customerNickName: '用户19951458888',
    organizer: 1,
    time: '2020-09-13 15:00:54',
    reason: '不想要了',
    orderStatus: 0,
    money: 40,
    applicationTime: '2020-09-12 15:00:54'
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
