import PagePathes from '../../router/index'
import { getDatasetValue } from '../../utils/commom';
const getId = getDatasetValue('id')
const getItem = getDatasetValue('item')
Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    level: {
      type: [Number, String],
      value: 1
    }
  },
  observers: {
    level: function() {
      this.init()
    }
  },
  data: {
    viptext: ''
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
  ready() {
    this.init()
  },
  methods: {
    init() {
      let text = {
        1: 'VIP会员',
        2: '白金VIP会员',
        3: '钻石VIP会员'
      }
      this.setData({
        viptext: text[this.data.level]
      })
    },
  }

});