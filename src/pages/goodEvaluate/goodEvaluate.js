// 全局app实例
import {Path, Router} from '../../router/index';
import { Toast } from '../../utils/sysApis';
const App = getApp();
Page({
  data: {
    tarbarOffsetTop: App.globalData.navHeight,
    evaluates: {
      totalNumber: 10,
      list: [
        {
          avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: '环保小能手',
          releaseTime: '2020-09-12 15:00:54',
          model: '黑/白色',
          content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
          pics: [
           
          ]
        },
        {
          avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: '环保小能手',
          releaseTime: '2020-09-12 15:00:54',
          model: '黑/白色',
          content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
          pics: [
           
          ]
        },
        {
          avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: '环保小能手',
          releaseTime: '2020-09-12 15:00:54',
          model: '黑/白色',
          content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
          pics: [
           
          ]
        },
        {
          avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: '环保小能手',
          releaseTime: '2020-09-12 15:00:54',
          model: '黑/白色',
          content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
          pics: [
           
          ]
        },
        {
          avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: '环保小能手',
          releaseTime: '2020-09-12 15:00:54',
          model: '黑/白色',
          content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
          pics: [
           
          ]
        },
        {
          avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: '环保小能手',
          releaseTime: '2020-09-12 15:00:54',
          model: '黑/白色',
          content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
          pics: [
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          ]
        },
        {
          avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          name: '环保小能手',
          releaseTime: '2020-09-12 15:00:54',
          model: '黑/白色',
          content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
          pics: [
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          ]
        }
      ]
    },
  },
  onLoad() {
    // Do some initialize when page load.
    
  },
  onReady() {

  },

  onShow() {
    // Do something when page show.
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
  onPageScroll(e) {
    // Do something when page scroll e.scrollTop
    // console.log(e)
    console.log(e.scrollTop)
  },

  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  toSearchPage() {
    Router.push({
      url: Path.search
    })
  },


  // 查看详情 店铺推荐 / 店铺
  viewShopIndex(e) {
    console.log('viewShopIndex', e);
    Router.push({
      url: Path.shopIndex
    })
  },
  // 客服
  toService(e) {
    console.log('viewShopIndex', e);
    Toast.show("客服下班了")
    // Router.push({
    //   url: Path.shopIndex
    // })
  },
  // 收藏 
  save(e) {
    console.log('viewShopIndex', e);
    Toast.success("收藏成功")
    // Router.push({
    //   url: Path.myCollection
    // })
  }
});
