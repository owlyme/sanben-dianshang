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
    bgColor: {
      type: String,
      value: "#f67f79",
    },
    color: {
      type: String,
      value: "#fff",
    },
    content: {
      type: String,
      value: "", // 'srcoll'
    },
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {},



});