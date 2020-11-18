import PagePathes from '../../router/index'
import { Router } from '../../utils/sysApis';
import { getDataset } from "../../utils/commom"
Page({
  data: {
    list: [
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: '阿迪达斯',
        status: 0, //1 done 0undo
        goodPic:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        goodName: '鞋子',
        model: '褐色的',
        money: 50
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: '阿迪达斯',
        status: 1, //1 done 0undo
        goodPic:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        goodName: '鞋子',
        model: '褐色的',
        money: 50
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: '阿迪达斯',
        status: 1, //1 done 0undo
        goodPic:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        goodName: '鞋子',
        model: '褐色的',
        money: 50
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: '阿迪达斯',
        status: 1, //1 done 0undo
        goodPic:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        goodName: '鞋子',
        model: '褐色的',
        money: 50
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: '阿迪达斯',
        status: 1, //1 done 0undo
        goodPic:  'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        goodName: '鞋子',
        model: '褐色的',
        money: 50
      }
    ]
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
  onAction(e) {
    console.log(e)
    let data  = e.detail
    if (data.status ==1) {
      console.log('onAction delete')
    }  else {
      console.log('onAction reset')
    }
  },
  viewDetail(e) {
    let { item } = getDataset(e)
    Router.push({
      url: PagePathes.orderAfterSalesDetail,
      query: {
        id: item.id
      }
    })
  },
  customData: {}
});
