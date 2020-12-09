import { Path, Router } from '../../router/index';
const NavList = [{
    'name': '首页',
    path: Path.shopIndex,
    'icon': 'iconxiangqing-dianpu1',
  },
  {
    'name': '商品',
    path: Path.shopAllGood,
    'icon': 'icondianpuBarsTabBars2off',
  },
  {
    'name': '分类',
    path: Path.shopGoodCatetory,
    'icon': 'icondianpuBarsTabBars3off'
  },
  {
    'name': '门店',
    path: Path.shopAll,
    'icon': 'icondianpuBarsTabBars4off',
  }
]

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
    indexImage: {
      type: String,
      value: ''
    },
    index: {
      type: Number,
      value: 0
    }
  },
  observers: {
    indexImage: function() {
      this.init()
    }
  },
  data: {
    navList: []
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.init()
    },
  },

  methods: {
    init() {
      let navList = NavList.slice()
      navList[0].activePic = this.data.indexImage
      this.setData({
        navList
      })
    },
    navChange(e) {
      console.log('navChange', e)
      let { name, index } = e.detail
      Router.replace(this.data.navList[index].path)
    }
  }
});