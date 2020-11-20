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
      ] // [{ name: '',sub: ''}]
    },
    activeIndex: {
      type: [String, Number],
      value: 0 // tab index
    },
    type: {
      type: [String, Number],
      value: 1 // 1 , 2, pill
    },
    color: {
      type: String,
      value: '#ffffff'
    },
    activeColor: {
      type: String,
      value: '#ffffff'
    }
  },
  data: {},

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // let first = this.data.tabs[0]
      // this.setData({
      //   active: typeof first === 'object' ? first.name : first
      // });
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
        activeIndex: index
      });
      console.log(name, index);
      this.triggerEvent('onChange', {name, index});
    }

  }

});