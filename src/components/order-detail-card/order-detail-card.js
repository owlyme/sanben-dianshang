import PagePathes from '../../router/index'
import {Router} from '../../utils/sysApis'
import { getDataset } from '../../utils/commom';


Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    data: {
      type: Object,
      value: {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        address: '杭州大悦城店',
        shopName: '杭州大悦城店',
        remark: '11',
        couponName: '111',
        couponMoney: 300,
        shipping: 10,
        totalMoney: 0,
        totalPayMoney: 0,
        orderList: [
          {
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
      }
    }
  },
  observers: {},
  data: {
  },

  methods: {
    init() {
      
    },
    // 预览商店首页
    viewShop() {
      Router.push({
        url: PagePathes.shopIndex
      })
    },
    addToGoodCart(e) {
      this.triggerEvent('onAddToGoodCart', {
        good: getDataset(e).item
      })
    },
    viewLogistics(e) {
      this.triggerEvent('onViewLogistics', {
        good: getDataset(e).item
      })
    }
  }

});