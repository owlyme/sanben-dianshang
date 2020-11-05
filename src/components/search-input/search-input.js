import { getInputValue } from '../../utils/commom';


Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    type: {
      type: String,
      value: 'default' // 根据页面名区分 例： indexPage, orderPage···
    }, 
    placeholder: {
      type: String,
      value: '搜索关键词'
    },
    address: {
      type: String,
      value: '杭州'
    },
    message: {
      type: [Number, Boolean],
      value: false
    }
  },
  data: {
    keywords: '',

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
    onInputValueChange(e) {
      let value = getInputValue(e);

      this.setData({
        keywords: value
      });
      this.valueChange(value);
    },
    clear() {
      this.setData({
        keywords: ''
      });
      this.valueChange('');
    },
    valueChange(data) {
      console.log('keyword', data);
      this.triggerEvent('onChange', data);
    },
    // index page actions
    // 点击地址
    onAddressClick(e) {
      console.log('点击地址', e)
    },
    // 调用扫一扫
    onScanClick(e) {
      console.log('调用扫一扫', e)
    },
    // 点击搜索
    onSearchClick(e) {
      console.log('点击搜索', e)
    },
    // 点击查看信息
    onMessageClick(e) {
      console.log('点击查看信息', e)
    },
  }
});