
// 全局app实例
const App = getApp();

Page({
  data: {
    stickyOffsetTop: App.globalData.navHeight,
    showDrawer: false, // 右侧抽屉
    showNav: true,
    goodList: [
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
    ],
    pageStyleType: 'standard' // 竖 vertical，  水平 standard
  },
  onLoad(e) {
    console.log(e)
    // this.setData({
    //   pageStyleType: e.options.styleType || 'vertical'
    // })
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
 
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },
  onReachBottom() {
    console.log('onReachBottom')
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll (e) { 
    console.log(e)
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },

  onTypeChange(e) {
    console.log(e)
    let {filterPriceStatus, index, type} = e.detail
    
    if (type=== 'filter') {
      this.setData({
        showDrawer: true,
        showNav: false
      })
    }
  },
  onGoodClick(e) {
    console.log('onGoodClick', e)
  },

  onDrawerClose() {
    this.setData({
      showDrawer: false,
      showNav: true
    })
  },
  onConditionFilterReset(e) {
    console.log('onConditionFilterReset', e)
  },
  onConditionFilterMakeSure(e) {
    console.log('onConditionFilterMakeSure', e)
  },

  customData: {}
});
