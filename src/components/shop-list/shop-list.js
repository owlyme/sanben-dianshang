import { getDatasetValue } from '../../utils/commom';
import {Path, Router} from '../../router/index';

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
      value: [
        {
          pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: "阿迪达斯三叶草旗舰店",
          followNumber: 148,
          rate: 7,
          phoneNumber: '13156521718',
          address: 111111,
          isFocus: 0, // 0 未关注，11 已关注 
          products: [
            {
              id: 1,
              pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            },
            {
              id: 1,
              pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            },
            {
              id: 1,
              pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            },
          ],
          totalShopNumber: 207,
          sameCityShopNumber: 20
        },
      ]
    },
    type: {
      type: String,
      value: '' // 目前在分类列表页 和 我的关注页 面用到
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
        url: Path.shopIndex
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
        url: Path.goodDetail
      })
    },
    toShopList(e) {
      console.log('toShopList', e);
      let {shop} = e.currentTarget.dataset
      Router.push({
        url: Path.shopAll
      })
    }
  }
});