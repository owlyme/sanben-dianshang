import { Path, Router } from '../../router/index';

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
    color: {
      type: String,
      value: "#333"
    },
    linkColor: {
      type: String,
      value: "#999"
    },
    bgColor: {
      type: String,
      value: "none",
    },
    title: {
      type: String,
      value: "这是标题", // 'srcoll'
    },
    more: {
      type: String,
      value: "查看详情", // 'srcoll'
    },
    link: {
      type: String,
      value: "", // 'srcoll'
    },
    src: {
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
    toPage() {
      if (!this.data.link) return
      Router.push(this.data.link)
    }
  }

});