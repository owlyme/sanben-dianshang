import { getDatasetValue } from '../../utils/commom';
const getTabName = getDatasetValue('name');
const getTabType = getDatasetValue('type');
const getTabIndex = getDatasetValue('index');

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
    tabs: {
      type: Array,
      value: [
        'tab 1',
        'tab 2',
        'tab 3',
        'tab 4',
      ] // [{ name: '',sub: ''}]
    },
    active: {
      type: [String, Number],
      value: ''
    },

  },
  data: {
    tarnslateY: 0
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let first = this.data.tabs[0]
      this.setData({
        active: typeof first === 'object' ? first.name : first
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
      let type = getTabType(e);
      let index = getTabIndex(e)
      this.setData({
        active: name,
        tarnslateY: index
      });
      console.log(name, type);
      this.triggerEvent('onChange', { name, type });
    }
    // bind:change="onChange"
  }

});