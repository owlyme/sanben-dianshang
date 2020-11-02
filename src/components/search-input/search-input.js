import { getInputValue, getDatasetValue } from '../../utils/commom';


Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    placeholder: {
      type: String,
      value: '搜索关键词'
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
    }
  }

});