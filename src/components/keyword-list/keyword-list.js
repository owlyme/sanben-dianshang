import PagePathes from '../../router/index'
import { getDatasetValue } from '../../utils/commom';
const getKeyword = getDatasetValue('keyword')


Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    list: {
      type: Array,
      value: []
    },
    showMore: {
      type: Boolean,
      value: true
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
    onItemClick(e) {
      let keyword = getKeyword(e)
      this.triggerEvent('onChange', {keyword})
    },
    onMoreClick() {
      this.setData({
        showMore: false
      })
    }
  }
});