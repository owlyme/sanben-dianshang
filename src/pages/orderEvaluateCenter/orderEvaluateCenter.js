// 全局app实例
import {Path, Router} from '../../router/index';
import { getDataset } from '../../utils/commom';
const App = getApp();

Page({
  data: {
    globalData: App.globalData.navHeight,
    description: {
      0: '非常差',
      1: '差',
      2: '比较差',
      3: '好',
      4: '比较好',
      5: '非常好',
    },
    goodList: [
      {
        id: 1,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,
        rate: 4,
        desc: '',
        pics: ['https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg'],
        anonymous: true,
        model: 'xiao 褐色',
        tags: ['hao', 'bucuo']
      },
      {
        id: 3,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,
        rate: 4,
        desc: '',
        pics: [],
        anonymous: true,
        model: 'xiao 褐色',
        active: '双十一',
        tags: ['hao', 'bucuo']
      },
      {
        id: 4,
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,
        rate: 4,
        desc: '',
        pics: [],
        anonymous: true,
        model: 'xiao 褐色',
        tags: ['hao', 'bucuo']
      }
    ],
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  onRateChange(e) {
    debugger
    let index = getDataset(e).index
    console.log(e)
    let goodList = this.data.goodList
    goodList[index].rate = e.detail.rate
    
    this.setData({
      goodList
    })
  },
  onDescChange(e) {
    let index = getDataset(e).index
    console.log(e)
    let goodList = this.data.goodList
    goodList[index].desc = e.detail.value

    this.setData({
      goodList
    })
  },
  onUploadPicChange(e) {
    let index = getDataset(e).index
    console.log(e)
    let goodList = this.data.goodList
    goodList[index].pics = e.detail

    this.setData({
      goodList
    })
  },
  setAnonymous(e) {
    let index = getDataset(e).index
    console.log(e)
    let goodList = this.data.goodList
    goodList[index].anonymous = !goodList[index].anonymous

    this.setData({
      goodList
    })
  },
  submit() {
    let goodList = this.data.goodList
    console.log(goodList)
    Router.push({
      url: Path.payOrEvaluateSuccessful,
      query: {
        pageType: "evaluate"
      }
    })
  },
  customData: {}
});
