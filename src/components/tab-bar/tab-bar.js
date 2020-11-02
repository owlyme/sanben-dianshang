import { getDatasetValue } from '../../utils/commom';

const getTabName = getDatasetValue('name');
const getTabIndex = getDatasetValue('index');

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    tabs: {
      type: Array,
      value: [
        'tab 1',
        'tab 2',
        'tab 3',
        'tab 4',
      ]
    },
    active: {
      type: [String, Number],
      value: ''
    }
  },
  data: {},

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        active: this.data.tabs[0]
      });
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
    onClick(e) {
      let name = getTabName(e);
      let index = getTabIndex(e);
      this.setData({
        active: name
      });
      console.log(name, index);
      this.triggerEvent('onChange', {name, index});
    }
    // bind:change="onChange"
  }

});