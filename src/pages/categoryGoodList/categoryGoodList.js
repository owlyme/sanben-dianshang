import { Path, Router } from '../../router/index';
// 全局app实例
const App = getApp();

Page({
  data: {
    stickyOffsetTop: App.globalData.navHeight,
    showDrawer: false, // 右侧抽屉
    showNav: true,
    keyword: '',
    goodList: [{
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,
      tags: ['hao', 'bucuo'],
      shopAddress: '杭州杭州杭州杭州'
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,
      active: '双十一',
      tags: ['hao', 'bucuo'],
      shopAddress: '杭州杭州杭州杭州'
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
    pageStyleType: 'standard', // 竖 vertical，  水平 standard
    tabType: 'first',
    shopList: [{
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '阿迪达斯三叶草旗舰店',
      followNumber: 148,
      rate: 7,
      phoneNumber: '13156521718',
      address: 111111,
      products: [{
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
      name: '阿迪达斯三叶草旗舰店',
      followNumber: 148,
      rate: 7,
      phoneNumber: '13156521718',
      address: 111111,
      products: [{
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
      name: '阿迪达斯三叶草旗舰店',
      followNumber: 148,
      rate: 7,
      phoneNumber: '13156521718',
      address: 111111,
      products: [{
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
  onLoad(e) {
    console.log(e)
    // this.setData({
    //   pageStyleType: e.options.styleType || 'vertical'
    // })
    // Do some initialize when page load.
    console.log(Router.query)
    this.setData({
      keyword: Router.query.goodName
    })
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
  onPageScroll(e) {
    console.log(e)
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  topSearchPage(e) {
    Router.push({
      url: Path.search,
      query: {

      }
    })
  },
  onClear() {
    console.log('onClear')
    this.setData({
      keyword: ''
    })
  },

  onTypeChange(e) {
    console.log(e)
    let { filterPriceStatus, index, type } = e.detail
    let { showDrawer, showNav, tabType } = this.data

    tabType = type
    if (type === 'filter') {
      this.setData({
        showDrawer: true,
        showNav: false
      })
      return
    } else if (type === 'shop') {
      tabType = type
      // Router.push(Path.mallShop)
    }

    this.setData({
      showDrawer,
      showNav,
      tabType
    })
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

  toCartPage(e) {
    console.log('toCartPage', e)
    Router.push({
      url: Path.goodCart
    })
  },

  customData: {}
});