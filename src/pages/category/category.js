import  Path  from '../../router/index'
import { Toast, boundingClientRect } from '../../utils/sysApis';
const App = getApp();
Page({
  data: {
    scrollViewHeight: 400,
    categoryList: [
      {
        type: '',
        name: '女装'
      },
      {
        type: '',
        name: '男装'
      },
      {
        type: '',
        name: '鞋靴'
      },
      {
        type: '',
        name: '美妆护肤'
      },{
        type: '',
        name: '个护清洁'
      },
      {
        type: '',
        name: '箱包'
      },{
        type: '',
        name: '电脑办公'
      },
      {
        type: '',
        name: '生活旅行'
      },{
        type: '',
        name: '鲜花'
      },
      {
        type: '',
        name: '宠物'
      },
      {
        type: '',
        name: '女装'
      },
      {
        type: '',
        name: '男装'
      },
      {
        type: '',
        name: '鞋靴'
      },
      {
        type: '',
        name: '美妆护肤'
      },{
        type: '',
        name: '个护清洁'
      },
      {
        type: '',
        name: '箱包'
      },{
        type: '',
        name: '电脑办公'
      },
      {
        type: '',
        name: '生活旅行'
      },{
        type: '',
        name: '鲜花'
      },
      {
        type: '',
        name: '宠物'
      },
    ],
    bannerList: [
      {
        id: 12,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: 'adidas'
      },
      {
        id: 13,
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: 'adidas'
      }
    ],
    goodList: [
      {
        title: '分类标题',
        list: [
          {
            id: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          },
          {
            id: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          },
          {
            id: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          },
          {
            id: 13,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          },
          {
            id: 14,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          }
        ] 
      },
      {
        title: '分类标题2',
        list: [
          {
            id: 12,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          },
          {
            id: 13,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          },
          {
            id: 14,
            pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
            name: 'adidas'
          }
        ] 
      }
    ]
  },
  onLoad() {
    // Do some initialize when page load.
    this.getDom()
  },
  async getDom() {
    let res = await boundingClientRect('#category-box');
    let scrollViewHeight = App.globalData.screenHeight - res.target_top;
    this.setData({
      scrollViewHeight
    });
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
  topSearchPage(e) {
    Router.push({
      url: Path.search,
      query: {
       
      }
    })
  },
  // 分类滚动操作
  categoryScrollToLower() {

  },
  categoryScrollToUpper() {

  },
  onCategoryScroll() {

  },
  onCategoryChange(e) {
    console.log(e)
  },
  // 商品滚动操作
  goodScrollToLower() {

  },
  goodScrollToUpper() {
    
  },
  onGoodScroll() {
      
  },

  onSwiperClick(e) {
    console.log('onSwiperClick',e)
  },
  onGoodClick(e) {
    console.log('onGoodClick',e)
    let detail = e.detail
    console.log(Path, Path.categoryGoodList)
    Router.push(Path.categoryGoodList)
  }

});
