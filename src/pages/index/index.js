// 全局app实例
import { debounce, isScrollUp, throttle} from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
const App = getApp();

const goodListTypes = {
  0: 'special',
  1: 'rank',
  2: 'category'
}

Page({
  data: {
    stickyBaseOffsetTop: 60, //吸顶距离基础偏移量
    stickySearchInputOffsetTop: 60, // 搜索栏吸顶距离高度
    stickyTabbarOffsetTop: 60, // tab-bar吸顶距离高度
    stickyTabbarInitTop: 800, // 页面渲染时tab-bar的距离页顶的距离
    stickyTabbarBackground: 'none',
    backTopValue: false,
    interval: 3000,
    duration: 500,
    scrollViewHeight: 400,
    bannerList: [
      'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    ],
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
    goodListTypeListTab: [
      {
        name: '精选',
        sub: '为您推荐',
      },
      {
        name: '排行',
        sub: '人气商品',
      },
      {
        name: '分类',
        sub: '琳琅满目',
      }
    ],
    goodListType: '',
    categoryList: [
      { type: '1', name: '2222'},
      { type: '1', name: '23'},
      { type: '1', name: '24442'},
      { type: '1', name: '2266622'},
      { type: '1', name: '2444222'},
    ],
    specalAcitve: {
      id: 12,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    },
    list: [{
      "text": "对话",
      "iconPath": "../../images/tabbar_icon_chat_default.png",
      "selectedIconPath": "../../images/tabbar_icon_chat_active.png",
      dot: true
    },
    {
      "text": "设置",
      "iconPath": "../../images/tabbar_icon_setting_default.png",
      "selectedIconPath": "../../images/tabbar_icon_setting_active.png",
      badge: 'New'
    }]
  },
  onLoad() {
    // Do some initialize when page load.
    this.getDom()
    this.onPageScrollthrottle = throttle((scrollTop) => {
      this.switchStickyStyle(scrollTop);
      this.switchBackTop(scrollTop)
    }, 200)
  },
  onReady() {
    // Do something when page ready.
   
  },
  async getDom() {
    let navHeight = App.globalData.navHeight
    let sticky = await boundingClientRect('.sticky-b');
    let search = await boundingClientRect('.search-b');
    
    let stickyBaseOffsetTop = navHeight
    let stickySearchInputOffsetTop = stickyBaseOffsetTop
    let stickyTabbarOffsetTop = stickySearchInputOffsetTop + search.target_height
    let stickyTabbarInitTop = sticky.target_top

    this.setData({
      stickyBaseOffsetTop,
      stickySearchInputOffsetTop,
      stickyTabbarOffsetTop,
      stickyTabbarInitTop
    });
  },
  switchStickyStyle(pageScrollTop) {
    let { stickyBaseOffsetTop, stickyTabbarInitTop, stickySearchInputOffsetTop} = this.data
    this.setData({
      stickyTabbarBackground: pageScrollTop > stickyTabbarInitTop - stickySearchInputOffsetTop - stickyBaseOffsetTop? '#ffffff' : 'none'
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
    console.log('Do something when page reach bottom.')
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll (e) { 
    this.onPageScrollthrottle(e.scrollTop)
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  onGoodListTypeChange(e) {
    let index = e.detail.index
    this.setData({
      goodListType: goodListTypes[index]
    })
    console.log(e)
  },
  onCategoryChange(e) {
    console.log(e)
  },

  viewGood(e){
    console.log('sign good', e);
  },

  switchBackTop(pageScrollTop) {
    let backTopValue = pageScrollTop > 400 ? true : false
    this.setData({
      backTopValue: backTopValue
    })
  },
  // 滚动到顶部
  backTop() {
    // 控制滚动
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  customData: {}
});
