import { getDatasetValue } from '../../utils/commom';
const getCouponItem = getDatasetValue('item');
const getCouponId = getDatasetValue('id');
// 全局app实例
const App = getApp();

Page({
  data: {
    stickyOffsetTop: App.globalData.navHeight,
    couponList: [
      {
        id: 1,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        type: 0, // 0平台， 1店铺
        typeText: '平台礼品券',
        remindText: ' 部分个人护理商品',
        expired: '2020-12-30 23:59:59',
        status: 1, // 1 待领取 2 待使用
        couponMoney: 50,
        availableMoney: 200,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      },
      {
        id: 2,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        type: 0, // 0平台， 1店铺
        typeText: '平台礼品券',
        remindText: '部分个人护理商品',
        expired: '2020-12-30 23:59:59',
        status: 1, // 1 待领取 2 待使用
        couponMoney: 50,
        availableMoney: 200,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      },
      {
        id: 1,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        type: 0, // 0平台， 1店铺
        typeText: '平台礼品券',
        remindText: ' 部分个人护理商品',
        expired: '2020-12-30 23:59:59',
        status: 1, // 1 待领取 2 待使用
        couponMoney: 50,
        availableMoney: 200,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      },
      {
        id: 2,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        type: 0, // 0平台， 1店铺
        typeText: '平台礼品券',
        remindText: '部分个人护理商品',
        expired: '2020-12-30 23:59:59',
        status: 1, // 1 待领取 2 待使用
        couponMoney: 50,
        availableMoney: 200,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      },
      {
        id: 1,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        type: 0, // 0平台， 1店铺
        typeText: '平台礼品券',
        remindText: ' 部分个人护理商品',
        expired: '2020-12-30 23:59:59',
        status: 1, // 1 待领取 2 待使用
        couponMoney: 50,
        availableMoney: 200,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      },
      {
        id: 2,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        type: 0, // 0平台， 1店铺
        typeText: '平台礼品券',
        remindText: '部分个人护理商品',
        expired: '2020-12-30 23:59:59',
        status: 1, // 1 待领取 2 待使用
        couponMoney: 50,
        availableMoney: 200,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
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

  onCouponClick(e) {
    let item = getCouponItem(e)
    let id = getCouponId(e)
    console.log(item, id )
  },
  customData: {}
});
