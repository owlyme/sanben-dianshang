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
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: [{
        "name": "首页",
        "icon": 'iconxiangqing-dianpu1',
        'selectedPic': 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_30'
      }],

    },
    active: {
      type: [String, Number],
      value: ''
    },
    type: {
      type: [String, Number],
      value: 1 // 1 , 2
    },
  },
  data: {},

  // 生命周期函数
  lifetimes: {
    attached: function() {

    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },


  methods: {
    onClick(e) {
      let name = getTabName(e);
      let index = getTabIndex(e);
      setTimeout(() => {
        this.setData({
          active: name
        });
      }, 500)

      this.triggerEvent('onChange', { name, index });
    }
  }
});