import { getDatasetValue } from '../../utils/commom';
const getId = getDatasetValue('id')
const getItem = getDatasetValue('item')
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
        id: 1,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        type: 0, // 0平台， 1店铺
        typeText: '平台礼品券',
        remindText: ' 部分个人护理商品',
        expired: '2020-12-30 23:59:59',
        status: 1, // 1 待领取 2 待使用  3 已使用 4 已失效
        couponMoney: 50,
        availableMoney: 200,
        remark: '仅适用于本店铺；限时购、特价等特惠商品，新品及详情页标注不可用券的商品除外。'
      }
    }
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
    showRemark() {
      this.setData({
        hiddenRemark: !this.data.hiddenRemark
      })
    }
  }

});