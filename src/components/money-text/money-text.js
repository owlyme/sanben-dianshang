
Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    number: {
      type: [Number, String],
      value: 0.00
    },
    showDecimal: {
      type: Boolean,
      value: true
    },
    plane: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#FF3232'
    },
    moneySize: {
      type: Number,
      value: 12
    },
    numberSize: {
      type: Number,
      value: 16
    }
  },
  data: {
    intPart: 0,
    decimalParg: '00'
  },

  // 生命周期函数
  created() {},
  attached() {
    let [intPart, decimalParg] = String(this.data.number || 0).split('.');

    this.setData({
      intPart,
      decimalParg
    });
  },
  ready() {},
  moved() {},
  detached() {

  },

  methods: {}
});