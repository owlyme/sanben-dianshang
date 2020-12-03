import { getRecommendedActive } from '../../api/index';
Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {

  },
  data: {
    time: "2020-12-06 00:00:00",
    activeList: [
      // {
      //   id: 1,
      //   price: 20,
      //   pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      // },
      // {
      //   id: 2,
      //   price: 120,
      //   pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      // },
      // {
      //   id: 3,
      //   price: 20,
      //   pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      // },
      // {
      //   id: 4,
      //   price: 120,
      //   pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      // },
      // {
      //   id: 5,
      //   price: 20,
      //   pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      // },
      // {
      //   id: 6,
      //   price: 120,
      //   pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      // }
    ],
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      getRecommendedActive().then(res  => {
        if (res.code === 200) {
          this.setData({
            time: res.data.time,
            activeList: res.data.activeList
          })
        }
      })
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
    onProductClick() {

    }
  }

});