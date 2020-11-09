import PagePathes from '../../router/index'
import { Router } from '../../utils/sysApis'
// 全局app实例
const App = getApp();

Page({
  data: {
    stickyOffsetTop: App.globalData.navHeight,
    showNav: true,
    shopInfo: {
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: "阿迪达斯三叶草旗舰店",
      focusNumber: 148,
      rate: 7,
      phoneNumber: '13156521718',
      address: 111111
    },

  
    list:[
      {
        title: '分类标题',
        list: [
          {
          id: 12,
          name: 'adidas'
         },
         {
          id: 1,
          name: 'adidas'
         },
         {
          id: 2,
          name: 'adidas'
         },
         {
          id: 13,
          name: 'adidas'
         },
         {
          id: 14,
          name: 'adidas'
         }
        ] 
      },
      {
        title: '分类标题2',
        list: [
          {
          id: 12,
          name: 'adi da da da das'
         },
         {
          id: 13,
          name: 'adidas'
         },
         {
          id: 14,
          name: 'adidas'
         }
        ] 
      }
    ]
    
  },
  onLoad(e) {
   
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
 
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },
  onReachBottom() {
    console.log('onReachBottom')
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll (e) { 
    console.log(e)
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },

  onTypeChange(e) {
    console.log(e)
    let {filterPriceStatus, index, type} = e.detail
    
  },
  onGoodClick(e) {
    console.log('onGoodClick', e)
  },

  navChange(e) {
    console.log('navChange', e)
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.shopInfo.phoneNumber //仅为示例，并非真实的电话号码
    })
  },
  viewMoreShop(e) {
    console.log('viewMoreShop', e)
  },

  onCategoryClick(e) {
    console.log('onCategoryClick', e)
  },


  customData: {}
});
