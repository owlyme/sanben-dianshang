import { Path, Router } from '../../router/index';
import { getDataset } from '../../utils/commom';


Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    data: {
      type: Object,
      value: {
        brandName: '阿迪达斯',
        logo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopList: [{
          shopName: '杭州大悦城店',
          remark: '11',
          couponName: '111',
          couponMoney: 300,
          shipping: 10,
          totalMoney: 0,
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
        },
        {
          shopName: '杭州大悦城店1',
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
        },
        ]
      }
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }

  },
  data: {
    show: false,
    isAllSelected: false,
    activeCoverIndex: '',
    couponList: [{
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
    },
    ]
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  created() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {
    init() {

    },
    // 预览商店首页
    viewShop() {
      Router.push({
        url: Path.shopIndex
      })
    },
    // 预览商店列表
    viewShopAll(e) {
      let dataset = getDataset(e)
      console.log('viewShop', dataset)
      Router.push({
        url: Path.shopAll
      })
    },
    onRemarkInput(e) {
      let { index, shop } = getDataset(e)
      let value = e.detail.value
      console.log('onRemarkInput', e, value)
      this.triggerEvent('onRemarkChange', {
        index,
        shop
      })
    },
    selectedExpressType(e) {
      let { index, shop } = getDataset(e)
      console.log('onRemarkInput', e)
      this.triggerEvent('onExpressChange', {
        index,
        shop
      })
    },
    selectCoupon(e) {
      let { index, shop } = getDataset(e)
      console.log('selectCoupon', e)
      this.triggerEvent('onCouponChange', {
        index,
        shop
      })
    }
  }

});