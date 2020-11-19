// 全局app实例
import PagePathes from '../../router/index'
import { Router } from '../../utils/sysApis';
const app = getApp();
 

Page({
  data: {
    bankName: '建设银行',
    bankCardTailCode: '',
    bankCardCode: '46645454654',

    money: 40,

    step: 2,
    shopLogo:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    shopName: '阿迪达斯',
    good: {
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '鞋子',
      model: '黑色',
    },
    reason: '不想要了',
    receiptStatus: 1, // 1 . 0
    applicationTime: '2020-09-12 15:00:54',
    codeNumber: '797979798789997etw',
  },
  onLoad() {
    // Do some initialize when page load.
    let bankCardCode = this.data.bankCardCode
    this.setData({
      bankCardTailCode: bankCardCode.substr(bankCardCode.length -4)
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
  cancel() {
    console.log('cancel')
  },
  toNegotiationRecord() {
    Router.push({
      url: PagePathes.negotiationRecord,
      query: {
        id: this.data.id
      }
    })
  },
  customData: {}
});
