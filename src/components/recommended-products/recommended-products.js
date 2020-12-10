import { getDatasetValue } from '../../utils/commom';
const getId = getDatasetValue('id')
const getItem = getDatasetValue('item')
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
    goodProducts: {
      type: Array,
      value: [{
        id: 1,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        id: 2,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      }
      ]
    },
    priceReduction: {
      type: Array,
      value: [{
        id: 1,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        id: 2,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      }
      ]
    },
    newProducts: {
      type: Array,
      value: [{
        id: 1,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        id: 2,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        id: 3,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        id: 4,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      ]
    },
    productsNews: {
      type: Object,
      value: {
        title: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别。',
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      }
    }
  },
  data: {},

  methods: {
    onProductClick(e) {
      let id = getId(e);
      let item = getItem(e);
      console.log(id, item)
    }
  }

});