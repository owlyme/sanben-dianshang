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
      value: "horizontal", // vertical horizontal
    },
    activeBtnText: {
      type: String,
      value: "",
    },
    showName: {
      type: Boolean,
      value: true,
    },
    flagUrl: {
      type: String,
      value: "",
    },
    goodInfo: {
      type: Object,
      value: {
        id: 0,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        points: 12
      }
    },
    goodNameellipsisOne: {
      type: Boolean,
      value: true
    }
  },
  data: {},

  // 生命周期函数
  created() {},
  attached() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {}

});