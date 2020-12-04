Component({
  options: {
    styleIsolation: 'apply-shared',
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
    info: {
      type: Object,
      value: {
        status: 0, // 0 未使用 1 已使用 2 已失效 
        activeName: '新人特惠红包', // 0平台， 1店铺
        limit: '限平台实物商品',
        expired: '2020-12-30 23:59:59',
        money: 50,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      }
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    hiddenRemark: true
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
    showRemark() {
      this.setData({
        hiddenRemark: !this.data.hiddenRemark
      })
    }
  }

});