// 全局app实例
import PagePathes from '../../router/index'
import {getDataset} from '../../utils/commom'
const App = getApp();


Page({
  data: {
    navHeight: App.globalData.navHeight,
    isEdit: false,
    isAll: false,
    activeIndex: null,
    goodList: [
      {
        id: 0,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,
        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 1,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,
        active: '双十一',
        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 3,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 4,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 5,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 6,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 7,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 8,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 9,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
      },
      {
        id: 2,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
        price: '200.00',
        saledNumber: 200,

        tags: ['hao', 'bucuo'],
        shopAddress: 131313
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
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  toManage() {
    this.setData({
      isEdit: !this.data.isEdit,
      activeIndex: null
    })
  },

  showCover(e) {
    if (this.data.isEdit) return;
    let {index, item} = getDataset(e)
    this.setData({
      activeIndex: index
    })
  },
  touchstart() {
    this.setData({
      activeIndex: null
    })
  },
  handleCencal(e) {
    let {index, item} = getDataset(e)
    console.log(item)
    this.data.goodList.splice(index, 1)
    this.setData({
      goodList: this.data.goodList,
      activeIndex: null
    })
  },
  selectSingle(e) {
    let {index, item} = getDataset(e)
    this.data.goodList[index].checked = !item.checked
    this.setData({
      goodList: this.data.goodList
    })
  },
  selectAll() {
    let {isAll, goodList} = this.data
    goodList.forEach(i => {
      i.checked = !isAll
    })
    this.setData({
      isAll: !isAll,
      goodList
    })

  },
  cancelAll() {
    let ids =  this.data.goodList.filter(i => i.checked).map(i => i.id);
    console.log(ids)
    this.toManage()
  },
  viewGoodDetail(e) {
    if (this.data.activeIndex !== null) return
    console.log(e)
  },
  customData: {
    longTab: false
  }
});
