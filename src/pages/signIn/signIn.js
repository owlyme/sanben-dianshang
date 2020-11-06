import { getDatasetValue, debounce } from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
import { sign, getSign } from '../../api/sign';
// 全局app实例
const App = getApp();
// console.log(app);
const getSignData = getDatasetValue('sign');
const List = [
  {
    id: 0,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
    price: '200.00',
    saledNumber: 200,

    tags: ['hao', 'bucuo']
  },
  {
    id: 0,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
    price: '200.00',
    saledNumber: 200,
    active: '双十一',
    tags: ['hao', 'bucuo']
  },
  {
    id: 0,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
    price: '200.00',
    saledNumber: 200,

    tags: ['hao', 'bucuo']
  },
  {
    id: 0,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
    price: '200.00',
    saledNumber: 200,

    tags: ['hao', 'bucuo']
  }
];
const weekDayListTemp = [
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
    status: 0, // 0: 未签到， 1: 已签到
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
    status: 0, // 0: 未签到， 1: 已签到
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
];
Page({
  data: {
    signedDays: 22,
    currentDay: 0,
    weekDayList: [],
    goodList: [],
    scrollViewHeight: 400
  },
  onLoad() {
    this.setWeekDaysListText();
    this.getSignInfo();
    this.getDom();

    setTimeout(() => {
      this.setData({
        goodList: List
      })
    }, 2000) 
  },
  // 设置显示文字
  setWeekDaysListText() {
    let currentDay = (new Date).getDay() || 7;
    let weekDayList = weekDayListTemp.map(i => ({
      ...i,
      dayText: currentDay === i.day ? '今天' : i.dayText
    }));
    this.setData({
      weekDayList,
      currentDay
    });
  },
  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    console.log(res);
    let scrollViewHeight = App.globalData.windowHeight - res.target_top;
    this.setData({
      scrollViewHeight
    });
  },
  // 获取签到详情
  getSignInfo() {
    getSign().then(() => {

    });
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onReachBottom() {
    console.log('bottom');
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  toSign(e) {
    let signData = getSignData(e);
    // dayText: "周三", day: 3, status: 1, score: 10
    let { currentDay } = this.data;
    // currentDay = currentDay || 7;
    if (currentDay > signData.day) {
      Toast.show('不可以补签！');
    } else if (currentDay < signData.day) {
      Toast.show('未到签到时间！');
    } else if (currentDay === signData.day) {
      if (signData.status) {
        Toast.show('您已签到！');
      } else {
        this.postSign(signData);
      }
    }
  },
  postSign(data) {
    sign().then(res => {
      Toast.sucess('签到成功！');
      // 修改状态
      let {weekDayList} = this.data;
      weekDayList[data.day - 1].status = 1;
      this.setData({
        weekDayList
      });
    });
  },
  scrollToUpper() {
    // debounce
    console.log('sign good scrollToUpper');
  },
  scrollToLower() {
    // debounce
    console.log('sign good scrollToLower');
  },
  viewGood(e){
    console.log('sign good', e);
  },
  customData: {}
});
