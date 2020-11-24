import { getDatasetValue } from '../../utils/commom';

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
    tabs: {
      type: Array,
      value: [
        { name: '综合推荐', type: 'first'},
        { name: '销量', type: 'sales'},
        { name: '价格', type: 'price'},
        { name: '店铺', type: 'shop'},
        { name: '筛选', type: 'filter'},
      ] // []
    },
    active: {
      type: [String, Number],
      value: ''
    },
  },
  data: {
    filterPriceStatus: null // upper lower
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let first = this.data.tabs[0]
      this.setData({
        active: typeof first === 'object' ? first.type : first
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
      let type = getTabType(e);
      let index = getTabIndex(e);
      let active = this.data.active
      console.log(type, index);

      let filterPriceStatus = this.switchFilterPriceStatus(type)

      this.setData({
        active: type === 'filter' ? active : type,
        filterPriceStatus
      });
      this.triggerEvent('onChange', {type, index, filterPriceStatus});
    },
    // 切换价格排序方式
    switchFilterPriceStatus(type) {
      let filterPriceStatus = this.data.filterPriceStatus
      if (type === 'price') {
        if (!filterPriceStatus || filterPriceStatus === 'upper') {
          filterPriceStatus = 'lower' // 从小到大排
        } else {
          filterPriceStatus = 'upper' // 从大到小排
        }
        console.log(filterPriceStatus)
      }
      return filterPriceStatus
    }
    // bind:change="onChange"
  }

});