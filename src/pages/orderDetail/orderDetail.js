// 全局app实例
import { Path, Router } from '../../router/index';
import { getDataset } from '../../utils/commom';
import { statusTextMap, statusIconMap } from '../../app.const'
const Order = {
  shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
  address: '杭州大悦城店',
  shopName: '杭州大悦城店',
  remark: '11',
  couponName: '111',
  couponMoney: 300,
  shipping: 10,
  totalMoney: 0,
  totalPayMoney: 0,
  status: 6,
  orderList: [{
      id: 12,
      number: 12,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      model: '红白字母',
      price: 10,
      totalPrice: 120,
      name: '阿迪达斯官网 adidas 5T Nec…'
    },
    {
      id: 12,
      number: 12,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      model: '红白字母',
      price: 10,
      totalPrice: 120,
      name: '阿迪达斯官网 adidas 5T Nec…'
    }
  ]
};

Page({
  data: {
    order: {},
    address: {
      name: '反转',
      phone: 12345678915,
      address_name: '北京市海淀区苏家坨乡前沙涧村15号'
    },
    others: {
      remark: '请发韵达快递，快递请多包装几层，不要用袋子包装，容易破，不安全。',
      orderCoderNumber: '199541233588888',
      orderTime: '2020-10-12 15:00:54',
      paymentTime: '2020-10-12 15:00:54',
      paymentType: '微信支付',
      deliveryMethod: '韵达快递'
    },
    options: [{
      title: '派送中',
      desc: '杭州转运中心火车东站站点  韵达派件员：徐迪 电话：13705102211  正在为您派件',
      time: '2018-11-11 15:00:04',
      status: 5
    }]
  },
  onLoad() {
    this.getOrder()
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
  getOrder() {
    let {
      couponMoney,
      shipping,
      orderList,
      status
    } = Order

    let totalMoney = orderList.reduce((acc, item) => acc + item.price * item.number, 0);
    Order.totalMoney = totalMoney;
    Order.totalPayMoney = totalMoney + shipping - couponMoney;

    this.setData({
      order: Order,
      statusText: statusTextMap[status] || '',
      statusIcon: statusIconMap[status] || ''
    })
  },
  // 分享

  // 去往地址页面
  setAddress() {
    console.log('setAddress')
      //
  },
  toLogisticsDetails() {
    Router.push({
      url: Path.logisticsDetails,
      query: {
        id: 1
      }
    })
  },
  // 设置备注
  remarkChange(e) {
    console.log('remarkChange', e, getDataset(e), e.detail)
  },
  // 查看更多
  viewMore() {
    console.log('viewMore')
  },
  // 加入购物车  
  addToGoodCart() {
    console.log('addToGoodCart')
  },
  // 查看物流 
  viewLogistics() {
    console.log('viewLogistics')
  },
  // 确认收货 
  confirmReceipt() {
    console.log('confirmReceipt')
  },
  waitDeliver() {
    console.log('waitDeliver')
  },
  putInCart() {
    console.log('putInCart')
  },
  modifyAddress() {
    console.log('modifyAddress')
  },
  toPay() {
    console.log('toPay')
  },
  makeSure() {
    console.log('makeSure')
  },
  deleteOrder() {
    console.log('deleteOrder')
  },
  customData: {
    orderIndex: null,
    shopIndex: null,
  }
});