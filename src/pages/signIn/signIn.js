import { boundingClientRect } from '../../utils/sysApis';

// 全局app实例
const App = getApp();
//  
const List = [{
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
Page({
  data: {
    goodList: [],
    scrollViewHeight: 400
  },
  onLoad() {


    this.getDom();

    setTimeout(() => {
      this.setData({
        goodList: List
      })
    }, 2000)
  },
  // 设置显示文字

  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    let scrollViewHeight = App.globalData.screenHeight - res.target_top;
    this.setData({
      scrollViewHeight
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

  scrollToUpper() {
    // debounce
    console.log('sign good scrollToUpper');
  },
  scrollToLower() {
    // debounce
    console.log('sign good scrollToLower');
  },
  viewGood(e) {
    console.log('sign good', e);
  },
  customData: {}
});