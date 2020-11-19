// 全局app实例
import PagePathes from '../../router/index'
import { getDataset } from '../../utils/commom';

const setTargetShopData = (orderList, currentOrderIndex, currentShopIndex, newData = {}) => {
  let currentOrder = orderList[currentOrderIndex].shopList[currentShopIndex]
  currentOrder = Object.assign(currentOrder, newData)
  orderList[currentOrderIndex].shopList[currentShopIndex] = currentOrder
  return orderList
}

const app = getApp();
 
const OrderList = [
  {
    brandName: '阿迪达斯',
    logo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    shopList: [
      {
        shopName: '杭州大悦城店',
        remark: "11",
        couponName: '111',
        couponMoney: 300,
        shipping: 10,
        totalMoney: 0,
        orderList: [
          {
            id: 1,
            number: 10,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 20,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…',
            status: 1
          },
          {
            id: 2,
            number: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 10,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…',
            status: 0
          }
        ]
      },
      {
        shopName: '杭州大悦城店1',
        remark: "11",
        couponName: '111',
        couponMoney: 300,
        shipping: 10,
        totalMoney: 0,
        orderList: [
          {
            id: 3,
            number: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 10,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…'
          },
          {
            id: 4,
            number: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 10,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…'
          }
        ]
      },
    ]
  },
  {
    brandName: '阿迪达斯',
    logo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    shopList: [
      {
        shopName: '杭州大悦城店',
        orderList: [
          {
            id: 5,
            number: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 10,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…'
          },
          {
            id: 6,
            number: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 10,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…'
          }
        ]
      },
      {
        shopName: '杭州大悦城店1',
        orderList: [
          {
            id: 8,
            number: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 10,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…'
          },
          {
            id: 9,
            number: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            model: '红白字母',
            price: 10,
            totalPrice: 120,
            name: '阿迪达斯官网 adidas 5T Nec…'
          }
        ]
      },
    ]
  }
];
Page({
  data: {
    dialog: {
      header: '' ,
      show: false,
      type: ''
    },
    orderList: [],
    address:{
		  name:'反转',
		  phone: 12345678915,
		  address_name:'北京市海淀区苏家坨乡前沙涧村15号'
    },
    couponList: [
      {
        value: 200,
        text: "满2000减100"
      },
      {
        value: 200,
        text: "满2000减100"
      },
      {
        value: 200,
        text: "满2000减100"
      },{
        value: 0,
        text: "不使用优惠"
      }
    ]
  },
  onLoad() {
    // Do some initialize when page load.
    setTimeout(() => {
      this.setData({
        orderList: OrderList
      })
    }, 10);
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
  // 去往地址页面
  setAddress() {
    //
  },
  // 设置备注
  remarkChange(e) {
    console.log('remarkChange', e, getDataset(e), e.detail)
  },
  // 选择快递
  selectedExpress(e) {
    console.log('selectedExpress', e, getDataset(e), e.detail)

    let dialog = {
      header: '配送方式' ,
      show: true,
      type: 'express'
    }
    this.setData({
      dialog
    }) 
  },
  // 选择优惠卷
  selectCoupon(e) {
    console.log('selectCoupon', e, getDataset(e), e.detail)

    this.customData = {
      currentOrderIndex: getDataset(e).index,
      currentShopIndex: e.detail.index,
    }

    let dialog = {
      header: '店铺优惠' ,
      show: true,
      type: 'coupon'
    }
    this.setData({
      dialog
    }) 
  },
  onCouponSelected(e) {
    console.log('selectCoupon', e)
    let {currentOrderIndex,currentShopIndex }  = this.customData
    let {coupon} = e.detail
    let { orderList } = this.data

    this.setData({
      orderList: setTargetShopData(orderList, currentOrderIndex, currentShopIndex, {
        couponName: coupon.text,
        couponMoney: coupon.value,
      })
    })

    this.onCloseDialog()
  },
  // 提交订单
  submit(e) {
    console.log('selectCoupon', e)
    let dialog = {
      header: '选择支付方式' ,
      show: true,
      type: 'pay'
    }
    this.setData({
      dialog
    }) 
  },
  onPaymentTypeSelected(e) {
    console.log('onPaymentTypeSelected', e)
    this.onCloseDialog()
  },
  onCloseDialog() {
    let dialog = {
      header: '' ,
      show: false,
      type: ''
    }
    this.setData({
      dialog
    }) 
  },
  customData: {
    orderIndex: null,
    shopIndex: null,
  }
});
