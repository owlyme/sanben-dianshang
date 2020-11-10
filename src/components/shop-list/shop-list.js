import { getDatasetValue } from '../../utils/commom';
import PagePathes from '../../router/index'
import { Router } from '../../utils/sysApis'

const getGoodData = getDatasetValue('good');
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
    }
  },

  observers: {
   
  },
  data: {
    oddIndexOfgoodList:[],
    evenIndexOfgoodList: []
  },

  // 生命周期函数
  created() {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行

    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  ready() {
   
  },

  methods: {
    init() {
      
    },
    entryShop(e) {
      console.log('entryShop', e);
      let {shop} = e.currentTarget.dataset

      Router.push({
        url: PagePathes.shopIndex
      })
    },
    onClick(e) {
      let good = getGoodData(e);
      console.log('good list', good);
      this.triggerEvent('onGoodClick', good);
    },
    onProductClick(e) {
      console.log('onProductClick', e);
      let {shop, product} = e.currentTarget.dataset
      Router.push({
        url: PagePathes.goodDetail
      })
    },
    toShopList(e) {
      console.log('toShopList', e);
      let {shop} = e.currentTarget.dataset
      Router.push({
        url: PagePathes.shopAll
      })
    }
  }
});