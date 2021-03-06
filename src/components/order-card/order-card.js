import { statusTextMap } from '../../app.const'
import { Path, Router } from '../../router/index';
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
    goodInfo: {
      type: Object,
      value: {
        // shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        // shopName: 'name',
        // shopAddress: 'address',
        // goodList: [
        //   {
        //     pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        //     name: 'name me name',
        //     remark: 'remark'
        //   },
        //   {
        //     pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        //     name: 'name',
        //     remark: 'remark'
        //   }
        // ],
        // totalNumber: 6,
        // price: 600,
        // status: 0,  
        // id: 0
      }
    }
  },
  data: {
    statusText: '待付款'
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
  created() {
    let goodInfo = this.data
    this.setData({
      statusText: statusTextMap[goodInfo.status] || ''
    })
  },
  ready() {},
  moved() {},
  detached() {},

  methods: {
    toLogisticsDetails() {
      Router.push({
        url: Path.logisticsDetails,
        query: {
          id: 1
        }
      })
    },
    viewMore() {
      this.triggerEvent('viewMore')
    },
    putInCart() {
      this.triggerEvent('putInCart')
    },
    waitDeliver() {
      this.triggerEvent('waitDeliver')
    },
    modifyAddress() {
      this.triggerEvent('modifyAddress')
    },
    toPay() {
      this.triggerEvent('toPay')
    },
    makeSure() {
      this.triggerEvent('makeSure')
    },
    deleteOrder() {
      this.triggerEvent('deleteOrder')
    }
  }
});