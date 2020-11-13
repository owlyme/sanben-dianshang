import PagePathes from '../../router/index'
import { getDatasetValue } from '../../utils/commom';
const getId = getDatasetValue('id')
const getItem = getDatasetValue('item')
// <!-- 积分  兑换 -->
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
        points: 200,
        price: 80,
        discountPrice: 180,
        name: 'Adidas阿迪达斯旗舰店官网外套男装新年秋季防风衣加绒运动夹克',
        saleNumber: 200,
        feature: [
          '首发',
          '包邮'
        ]
      }
    }
  },
  observers: {
    // goodList: function() {
    //   this.init()
    // }
  },
  data: {
    
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
  }

});