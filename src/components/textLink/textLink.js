import { Router } from '../../router/index';

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    url: { // 属性名
      type: String,
      value: ''
    },
    text: { // 属性名
      type: String,
      value: '连接文字'
    }
  },
  data: {},
  // 生命周期函数

  methods: {
    onClick() {
      if (this.data.url) {
        console.log(this.data.url);
        Router.push(this.data.url);
      }
      this.triggerEvent('onClick')
    },
  }

});