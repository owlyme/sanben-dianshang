import PagePathes from '../../router/index'
import { getDatasetValue, getNodeValue } from '../../utils/commom';
const getConditions = getDatasetValue('condition')
const getMiniPrice= getNodeValue('miniPrice')
const getMaxPrice= getNodeValue('maxPrice')

const App = getApp();

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    stickyOffsetTop: {
      type: [Number, String],
      value: App.globalData.navHeight
    },
    conditions: {
      type: Array,
      value: [
        {
          title: '分类标题',
          list: [
            {
            id: 12,
            name: 'adidas'
           },
           {
            id: 1,
            name: 'adidas'
           },
           {
            id: 2,
            name: 'adidas'
           },
           {
            id: 13,
            name: 'adidas'
           },
           {
            id: 14,
            name: 'adidas'
           }
          ] 
        },
        {
          title: '分类标题2',
          list: [
            {
            id: 12,
            name: 'adi da da da das'
           },
           {
            id: 13,
            name: 'adidas'
           },
           {
            id: 14,
            name: 'adidas'
           }
          ] 
        }
      ]
    }
  },
  observers: {
    conditions: function() {
      this.init()
    }
  },
  data: {
    scrollViewHeight: App.globalData.windowHeight,
    btnHeight: 60,
    conditionList: [],
    selectedMap: {},
    miniPrice: null,
    maxPrice: null
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
  ready() {},
  moved() {},
  detached() {},

  methods: {
    init() {
      let {conditions, } = this.data

      this.setData({
        conditionList: conditions.map(i => ({...i}))
      })
    },
    onConditionClick(e) {
      let selectedMap = this.data.selectedMap
      let condition = getConditions(e)
      console.log(condition)
      let key = condition.id
      if (selectedMap[key]) {
        delete selectedMap[key]
      } else {
        selectedMap[key] = condition
      }

      this.setData({
        selectedMap
      })
    },
    onMiniPriceChange(e) {
      let mini = getMiniPrice(e)
      this.setData({
        ...mini
      })
    },
    onMaxPriceChange(e) {
      let max = getMaxPrice(e)
      console.log(max)
      this.setData({
        ...max
      })
    },
    onReset(e) {
      this.setData({
        selectedMap: {},
        miniPrice: null,
        maxPrice: null
      })
      this.triggerEvent('onReset')
    },
    onSure(e) {
 
      let { 
        selectedMap,
        miniPrice,
        maxPrice
      } = this.data
     
      console.log(selectedMap,
        miniPrice,
        maxPrice)
      this.triggerEvent('onSure', {
        selectedMap,
        miniPrice,
        maxPrice
      })
    },
  }

});