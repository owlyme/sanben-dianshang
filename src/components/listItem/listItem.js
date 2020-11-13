Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    label: { // 属性名
      type: String,
      value: ''
    },
    showlabelBorder: {
      type: Boolean,
      value: false
    },
    border: {
      type: Boolean,
      value: true
    },
    textAlign: {
      type: String,
      value: 'right' // left right
    },
    iconfont: {
      type: String,
      value: 'icondingdan-dianpu-gengduo' // left right
    }
  },
  data: {},

  // 生命周期函数
  created() {},
  attached() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {
    onLableClick() {
      this.triggerEvent('onLableClick');
    },
    onClick() {
      this.triggerEvent('onClick');
    }
  }

});