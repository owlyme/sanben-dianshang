import { getDataset } from '../../utils/commom';

Component({
  options: {
    styleIsolation: 'apply-shared',
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
      value: ''
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {},

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
      let { coupon, index } = getDataset(e)
      this.setData({
        value: coupon.value
      })
      this.customData = {
        value: coupon.value,
        coupon,
        index
      }
      // this.triggerEvent('onChange', {value: coupon.value, coupon, index})
    },
    confirm() {
      this.triggerEvent('onChange', this.customData)
    }
  }

});