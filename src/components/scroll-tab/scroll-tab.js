import { getDatasetValue } from '../../utils/commom';

const getTabName = getDatasetValue('name');
const getTabCategory = getDatasetValue('category');

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
        { type: '1', name: '2222'},
        { type: '1', name: '23'},
        { type: '1', name: '24442'},
        { type: '1', name: '2266622'},
        { type: '1', name: '2444222'},
        { type: '1', name: '2777222'},
        { type: '1', name: '2288822'},
        { type: '1', name: '227722'},
        { type: '1', name: '28888222'},
        { type: '1', name: '2299989822'},
        { type: '1', name: '228989822'},
      ] // [{ type: '', name: ''}]
    },
    active: {
      type: [String, Number],
      value: ''
    },
  },
  data: {},

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let first = this.data.tabs[0]
      this.setData({
        active:  first.name
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
      let category = getTabCategory(e);
      this.setData({
        active: name
      });
      console.log(name, category);
      this.triggerEvent('onChange', {name, category});
    }
    // bind:change="onChange"
  }

});