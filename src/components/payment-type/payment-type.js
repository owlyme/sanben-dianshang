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
    couponList: {
      type: Array,
      value: []
    },
    value: {
      type: [Number, String],
      value: 'wechat'
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    typeList: [{
      icon: 'iconicon_weixingzf1',
      color: '#41B035',
      text: '微信支付',
      value: 'wechat'
    },
    {
      icon: 'iconicon_zfb2',
      color: '#00ADEE',
      text: '支付宝支付',
      value: 'ali'
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
    onClick(e) {
      let { type, index } = getDataset(e)
      this.setData({
        value: type.value
      })
      this.customData = {
        value: type.value,
        type,
        index
      }
      // this.triggerEvent('onChange', {value: coupon.value, coupon, index})
    },
    confirm() {
      this.triggerEvent('onChange', this.customData)
    }
  }

});