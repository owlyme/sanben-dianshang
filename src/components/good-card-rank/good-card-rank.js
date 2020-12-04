import { Path, Router } from '../../router/index';

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
    goodInfo: {
      type: Object,
      value: {
        id: 0,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,
        active: '双十一',
        tags: ['hao', 'bucuo']
      }
    },
    prevent: {
      type: Boolean,
      value: false
    }
  },
  data: {},

  methods: {
    viewGoodDetail(e) {
      if (!this.data.prevent) {
        Router.push({
          url: Path.goodDetail
        })
      } else {
        this.triggerEvent('onClick', {...this.data.goodInfo })
      }
    },
    toShopIndexPage() {
      Router.push({
        url: Path.shopIndex
      })
    }
  }

});