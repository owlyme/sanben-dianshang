Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {

    circle: {
      type: Boolean,
      value: false
    },
    info: {
      type: Object,
      value: {
        pic: "https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg",
        title: "分销小助手",
        type: 'article', // article image text
        source: 0, // 1 官方 2 店铺 
        content: '您好，小糖已为您发货了，请小主关注…',
        time: '2020/10/22',
        nums: 9
      }
    }
  },
  data: {
    typeText: {
      image: '「图片」',
      article: '「分享文章」'
    }

  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // 「图片」 image
      // 「分享文章」 article
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  created() {},
  ready() {},
  moved() {},
  detached() {},

  methods: {}

});