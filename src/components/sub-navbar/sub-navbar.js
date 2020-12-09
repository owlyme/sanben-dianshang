import { getDatasetValue } from '../../utils/commom';
import { Path, Router } from '../../router/index';
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
          name: "首页",
          icon: "iconxiangqing-dianpu1",
          activePic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
          path: ""
        },
        {
          name: "商品",
          icon: "icondianpuBarsTabBars2off",
          activePic: "",
          path: ""

        },
        {
          name: "分类",
          icon: "icondianpuBarsTabBars3off",
          activePic: "",
          path: ""

        }
      ]
    },
    activeIndex: {
      type: [String, Number],
      value: ''
    },
    type: {
      type: [String, Number],
      value: 1 // 1 , 2
    },
    prevent: {
      type: Boolean,
      value: false
    }
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
          activeIndex: index
        });
      }, 500)
      this.triggerEvent('onChange', { name, index });

      if (!this.data.prevent && this.data.list[index].path) {
        Router.push(this.data.list[index].path)
      }
    }
  }
});