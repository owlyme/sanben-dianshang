import { Path, Router } from '../../router/index';
import { Toast } from "../../utils/sysApis"

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
    model: {
      type: String,
      value: "info", // group, seckill, appointment, bargain, lottery,
    },
    activeBtnText: {
      type: String,
      value: "",
    },
    feature: {
      type: Boolean,
      value: true,
    },
    showPrice: {
      type: Boolean,
      value: true,
    },
    showName: {
      type: Boolean,
      value: true,
    },
    deadLine: {
      type: Boolean,
      value: true,
    },
    flagUrl: {
      type: String,
      value: "",
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
  data: {
    modelText: {
      info: "",
      group: "去拼团",
      seckill: "马上秒",
      appointment: "预 约",
      bargain: "去参与",
      lottery: "去参与",
    },
    activeEndStyle: ''
  },

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
    },
    onActiveEnd() {
      let { deadLine, model } = this.data
      if (!deadLine || model === 'info' || model === 'group' || model === 'appointment') return;
      this.setData({
        activeEndStyle: "filter: grayscale(100%)"
      })
    },
    toActive() {
      if (this.data.activeEndStyle) {
        Toast.show('活动已结束！')
        console.log('活动到期')
      } else {
        this.triggerEvent('onActive', {
          type: this.data.model,
          data: this.data.goodInfo
        })
      }
    }
  }

});