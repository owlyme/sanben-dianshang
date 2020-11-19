
Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    options: {
      type: Array,
      value: []
    },
    statusIcon: {
      type: Object,
      value: {
        // 1: "icongouwuche-duoxuanqi-xuanze3",
        // 2: "iconyiqujian-wancheng2",
        // 3: "iconpaisongzhong-wancheng1",
        // 4: "iconyunshuzhong-wancheng12",
        // 5: "iconyilanjian-wancheng2",
        // 6: "iconyifahuo-wancheng2",
        // 7: "iconyixiadan-wancheng2",
        1: "./images/order.png",
        1.5: "./images/unpicked.png",
        2: "./images/picked.png",
        2.5: "./images/undelivered.png",
        3: "./images/delivered.png",
        3.5: "./images/untransit.png",
        4: "./images/transited.png",
        4.5: "./images/unpicked.png",
        5: "./images/picked.png",
        5.5: "./images/unshipped.png",
        6: "./images/shipped.png",
        7: "./images/done.png",
      }
    }
  },
  observers: {
    options: function() {
      this.init()
    }
  },
  data: {
    list : []
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.init()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  created() {},
  ready() {
    
  },
  moved() {},
  detached() {},

  methods: {
    init() {
      this.setData({
        list: this.data.options.map(i =>(
          {
            ...i,
            formatDesc: i.desc.replace(/(\d{11})/g, '<span style="color: #FF3232">$1</span>')
          }
        ))
      })
    },
  }

});