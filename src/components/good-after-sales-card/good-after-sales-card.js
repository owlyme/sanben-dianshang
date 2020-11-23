import {Path, Router} from '../../router/index';

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    info: {
      type: Object,
      value: {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: '阿迪达斯',
        status: 1, //1 done 0undo
        goodPic:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        goodName: '鞋子',
        model: '褐色的',
        money: 50
      }
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {},

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
    viewShopDetail() {
      Router.push({
        url: Path.shopDetail,
        query: {
          id: this.data.info.id
        }
      })
    },
    action() {
      this.triggerEvent('onAction', this.data.info)
    }
  }

});