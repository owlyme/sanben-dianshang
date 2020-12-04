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
    activeList: {
      type: Array,
      value: [{
          pic: '/images/worthBuying/evaluation.png',
          title: '超值评测',
          text: '大V实物评测'
        },
        {
          pic: '/images/worthBuying/activitives.png',
          title: '专享活动',
          text: '超值活动来啦'
        },
        {
          pic: '/images/worthBuying/articles.png',
          title: '优享文章',
          text: '看看这篇文章'
        },
        {
          pic: '/images/worthBuying/videos.png',
          title: '好物视频',
          text: '全方位鉴赏'
        }
      ]
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
  }

});