import PagePathes from '../../router/index'
import { Router } from '../../utils/sysApis'
// 全局app实例
const App = getApp();
let allShop = [
  {
    type: 1,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店11",
    address: 111111
  },
  {
    type: 1,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店122",
    address: 111111
  },
  {
    type: 2,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店2233",
    address: 111111
  },
  {
    type: 2,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店44",
    address: 111111
  },
  {
    type: 2,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店11",
    address: 111111
  },
  {
    type: 2,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店122",
    address: 111111
  },
  {
    type: 2,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店2233",
    address: 111111
  },
  {
    type: 2,
    pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    name: "阿迪达斯三叶草旗舰店44",
    address: 111111
  },
]

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
    // shopoKeyword: '',
    shopInSameCityList: [],

    shopInAllPlaceList: [],
    
    navActiveIndex: 0
  },
  onLoad(e) {
    this.filterShopList()
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

  onShopNameChange(e) {
    console.log('onShopNameChange', e.detail.keyword)
    let keyword =  e.detail.keyword
    // this.setData({
    //   shopoKeyword: keyword
    // })
    this.filterShopList(keyword)
  },
  filterShopList(keyword) {
    let shopInSameCityList = []
    let shopInAllPlaceList = []

    allShop.forEach(shop => {
      if (!keyword || ~shop.name.indexOf(keyword)) {
        if(shop.type === 1) {
          // 同城
          shopInSameCityList.push(shop)
        } 
        shopInAllPlaceList.push(shop)
      }
      
    });

    this.setData({
      shopInSameCityList,
      shopInAllPlaceList
    })
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.shopInfo.phoneNumber //仅为示例，并非真实的电话号码
    })
  },

  shopItemClick(e) {
    console.log('shopItemClick', e)
    Router.push(PagePathes.shopDetail) 
  },
  customData: {}
});
