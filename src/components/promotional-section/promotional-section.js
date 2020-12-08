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
    type: {
      type: [Number, String],
      value: "default",
    },
    gutter: {
      type: Number,
      value: 0,
    },
    col: {
      type: Number,
      value: 1,
    },
    activeList: {
      type: Array,
      value: [{
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
      }],
    },
  },
  data: {

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
  created() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {
    onProductClick(e) {
      const id = getId(e)
      const item = getItem(e)
      console.log(id, item)
    }
  }
});