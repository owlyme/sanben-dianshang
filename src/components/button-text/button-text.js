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
    type: {
      type: String,
      value: 'default' // default , warn ,ghost
    },
    width: {
      type: Number,
      value: 72 // px 需要 * 2 =》 rpx
    },
    height: {
      type: Number,
      value: 32 // px 需要 * 2 =》 rpx
    },
    fontSize: {
      type: Number,
      value: 16 // px 需要 * 2 =》 rpx
    }
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

  methods: {}

});