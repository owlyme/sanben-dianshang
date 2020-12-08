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
    line: {
      type: Boolean,
      value: true,
    },
    title: {
      type: String,
      value: "标题",
    },
    size: {
      type: [Number],
      value: 1,
    },
    model: {
      type: String,
      value: "solid",
    },
    color: {
      type: String,
      value: "#111",
    },
  },
  data: {
    style: {},
  },

  // 生命周期函数
  created() {},
  attached() {
    this.init()
  },

  methods: {
    init() {
      this.setData({
        style: `border-color: ${this.color},border-width: 0 0 ${this.size}px 0;border-style: ${this.model};`
      })
    }
  }

});