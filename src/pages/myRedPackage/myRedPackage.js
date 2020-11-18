// 全局app实例
import { debounce, isScrollUp } from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
const App = getApp();
const RedBag = [
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  },
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  },
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  },
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  },
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  },
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  },
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  },
  {
    status: 0, // 0 未使用 1 已使用 2 已失效 
    activeName: '新人特惠红包', // 0平台， 1店铺
    limit: '限平台实物商品',
    expired: '2020-12-30 23:59:59',
    money: 50,
    remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
  }
]
Page({
  data: {
    scrollTop: 0,
    scrollViewHeight: 400,
    orderType: [
      '未使用',
      '已使用',
      '已失效'
    ],
    redBag: []
    
  },
  onLoad() {
    // Do some initialize when page load.
    setTimeout(() => {
      this.getCouponList()
    })
  },
  onReady() {
    // Do something when page ready.
    this.getDom();
  },
  onShow() {
    // Do something when page show.
  },
  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    console.log(res);
    let scrollViewHeight = App.globalData.screenHeight - res.target_top;
    this.setData({
      scrollViewHeight
    });
  },

  onSeleteType(e) {
    console.log(e.detail)
    this.customData.couPonType = e.detail.index
    this.getCouponList()
    this.setData({
      scrollTop: 0
    })
  },
  // 滚动操作
  scrollToUpper() {
    // debounce
    console.log('order list scrollToUpper');
  },
  scrollToLower() {
    // debounce
    console.log('order list scrollToLower');
  },
  onScroll(e) {
    let scrollTop = e.detail.scrollTop
    if (isScrollUp(e)){
      console.log('up')
    } else {
      console.log('down')
    }
  }, 

  onCouponClick(e) {
    console.log('onCouponClick', e)
  },
  // 获取数据
  getCouponList() {
    // this.customData.couPonType
    let redBag = RedBag
    this.setData({
      redBag
    })
  },
  
  customData: {
    couPonType: 1,
    unuseList: [],
    useedList: [],
    loseEfficacyList: []
  }
});
