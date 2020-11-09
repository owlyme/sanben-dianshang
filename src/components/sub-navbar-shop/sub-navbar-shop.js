import PagePathes from '../../router/index'
import { Router } from '../../utils/sysApis'

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    list: {
      type: Array,
      value: []
    },
    index: {
      type: Number,
      value: 0
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    navList: [
      {
        "name": "首页",
        path: PagePathes.shopIndex, 
        "icon": 'iconxiangqing-dianpu1',
        'selectedPic': 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        "name": "商品",
        path: PagePathes.shopAllGood, 
        "icon": 'icondianpuBarsTabBars2off',
      },
      {
        "name": "分类",
        path: PagePathes.shopGoodCatetory, 
        "icon": 'icondianpuBarsTabBars3off'
      },
      {
        "name": "设置",
        path: PagePathes.shopAll, 
        "icon": 'icondianpuBarsTabBars4off',
      }
    ]
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
    init() {
      
    },
    navChange(e) {
      console.log('navChange', e)
      let {name, index} = e.detail
      Router.push(this.data.navList[index].path)
    }
  }

});