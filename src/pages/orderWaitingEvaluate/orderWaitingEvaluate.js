import { boundingClientRect } from '../../utils/sysApis';
const App = getApp();

Page({
  data: {
    waveBarVisible: false,
    pageBg2Visible: true,
    scrollViewHeight: 400,
    orderList: [{
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'name',
        shopAddress: 'address',
        goodList: [{
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name me name',
            remark: 'remark'
          },
          {
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name',
            remark: 'remark'
          },
          {
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name me name',
            remark: 'remark'
          },
          {
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'name',
            remark: 'remark'
          },
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
        goodList: [{
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
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'name',
        shopAddress: 'address',
        goodList: [{
          pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: 'name me name',
          remark: 'remark'
        }],
        totalNumber: 6,
        price: 600,
        status: 1,
        id: 2
      }
    ],

  },
  onLoad() {
    // Do some initialize when page load.

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
    let scrollViewHeight = App.globalData.screenHeight - res.target_top;
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
    console.log('order list scrollToUpper');
  },
  scrollToLower() {
    // debounce
    console.log('order list scrollToLower');
  },
  onScroll(e) {

  },
  // 订单操作
  async viewMore(e) {

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