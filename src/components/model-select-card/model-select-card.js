import { Toast } from '../../utils/sysApis';

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
    types: {
      type: String,
      value: 'pay'
    },
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    clolorList: ['黑色黑色黑色黑色黑色', '黑色黑色黑色黑色黑色黑色黑色黑色黑色黑色黑色', '白色'],
    sizeList: ['小', '中', '大', '小', '中', '大', '小', '中', '大', '小', '中', '大', '小', '中', '大'],
    num: 10
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
    // 加入购物车
    addGoodToCart() {
      console.log('addGoodToCart')
      Toast.success('加入购物车')
      this.triggerEvent('onAdd')
    },
    // 立即付款
    pay() {
      console.log('pay')
      this.triggerEvent('onPay')
      // console.log(111)
      // uni.navigateTo({ //提交订单
      //   url: '/pages/view/order/confirmOrder'
      // })
    },
    onColorChange(e) {
      let { index, name } = e.detail
      console.log('onColorChange', index, name)
    },
    onSizeChange(e) {
      let { index, name } = e.detail
      console.log('onSizeChange', index, name)
    },
    onNumberChange(e) {
      console.log('onNumberChange', e)
    },
  }

});