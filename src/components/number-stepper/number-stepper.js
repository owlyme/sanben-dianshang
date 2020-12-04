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
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    num: {
      type: Number,
      value: 1
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    // num:1,
    minusStatus: 'disable'
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

  methods: {
    init() {

    },
    /*点击减号*/
    bindMinus: function() {
      var num = this.data.num;
      if (num > 1) {
        num--;
      }
      var minusStatus = num > 1 ? 'normal' : 'disable';
      this.setData({
        num: num,
        minusStatus: minusStatus
      })
      this.onChange(num)
    },
    /*点击加号*/
    bindPlus: function() {
      var num = this.data.num;
      num++;
      var minusStatus = num > 1 ? 'normal' : 'disable';
      this.setData({
        num: num,
        minusStatus: minusStatus
      })
      this.onChange(num)
    },
    /*输入框事件*/
    bindManual: function(e) {
      var num = e.detail.value;
      var minusStatus = num > 1 ? 'normal' : 'disable';
      this.setData({
        num: num,
        minusStatus: minusStatus
      })
      this.onChange(num)
    },
    onChange(num) {
      this.triggerEvent('onChange', num)
    }
  }

});