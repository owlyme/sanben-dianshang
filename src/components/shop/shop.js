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
    shopInfo: {
      type: Object,
      value: {
        name: "商店名称",
        focused: true,
        rate: 4,
        followNumber: 111,
        phone: "11111111111",
        address: "浙江杭州",
      }
    },
    showFocused: {
      type: Boolean,
      value: true,
    },
    showContact: {
      type: Boolean,
      value: true,
    },
  },
  observers: {

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
    makePhoneCall() {
      wx.makePhoneCall({
        phoneNumber: this.data.shopInfo.phone //仅为示例，并非真实的电话号码
      })
    },
  }

});