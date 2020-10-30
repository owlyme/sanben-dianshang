import { getNodeData } from '../../utils/commom';
// 全局app实例
// const app = getApp();
// console.log(app);
const getSignData = getNodeData('sign');

Page({
  data: {
    signedDays: 22,
    currentDay: (new Date).getDay(),
    weekDayList: [
      {
        dayText: '周一',
        day: 1,
        status: 0, // 0: 未签到， 1: 已签到
        score: 10
      },
      {
        dayText: '周二',
        day: 2,
        status: 1, // 0: 未签到， 1: 已签到
        score: 10
      },
      {
        dayText: '周三',
        day: 3,
        status: 1, // 0: 未签到， 1: 已签到
        score: 10
      },
      {
        dayText: '周四',
        day: 4,
        status: 1, // 0: 未签到， 1: 已签到
        score: 10
      },
      {
        dayText: '周五',
        day: 5,
        status: 1, // 0: 未签到， 1: 已签到
        score: 10
      },
      {
        dayText: '周六',
        day: 6,
        status: 0, // 0: 未签到， 1: 已签到
        score: 10
      },
      {
        dayText: '周日',
        day: 7, // 0
        status: 0, // 0: 未签到， 1: 已签到
        score: 10,
      }
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
  toSign(e) {
    let signData = getSignData(e);
    console.log(signData);
  },
  customData: {}
});
