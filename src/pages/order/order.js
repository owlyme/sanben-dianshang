// 全局app实例
import { debounce } from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
const App = getApp();

Page({
  data: {
    scrollViewHeight: 400,
    orderType: [
      '全部',
      '待付款',
      '待发货',
      '待收货',
      '待评价'
    ],
    orderList: [
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'name',
        shopAddress: 'address',
        goodList: [
          {
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name me name',
            remark: 'remark'
          },
          {
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name',
            remark: 'remark'
          }
        ],
        totalNumber: 6,
        price: 600,
        status: 0,
        id: 0
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'name',
        shopAddress: 'address',
        goodList: [
          {
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name me name',
            remark: 'remark'
          },
          {
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name',
            remark: 'remark'
          }
        ],
        totalNumber: 6,
        price: 600,
        status: 1,
        id: 1
      }
    ]
  },
  onLoad() {
    // Do some initialize when page load.
    this.getDom();
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    console.log(res);
    let scrollViewHeight = App.globalData.windowHeight - res.target_top;
    this.setData({
      scrollViewHeight
    });
  },
  onKeyWordChange(e) {
    console.log(e.detail)
  },
  onSeleteType(e) {
    console.log(e.detail)
  },
  // 滚动操作
  scrollToUpper() {
    // debounce
    console.log('sign good scrollToUpper');
  },
  scrollToLower() {
    // debounce
    console.log('sign good scrollToLower');
  },
  // 订单操作
  viewMore(e) {
    console.log(e)
  }, 
  putInCart(e) {
    console.log(e)
  }, 
  modifyAddress(e) {
    console.log(e)
  }, 
  toPay(e) {
    console.log(e)
  }, 
  makeSure(e) {
    console.log(e)
  }, 
  deleteOrder(e) {
    console.log(e)
  }, 

  
  
  customData: {}
});
