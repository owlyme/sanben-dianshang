import PagePathes from '../../router/index'
import {Router} from "../../utils/sysApis"
import { debounce, isScrollUp } from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
const App = getApp();


Page({
  data: {
    tabBarList:[
      '待评价·2',
      '已评价·36'
    ],
    listTypeIndex: 0,
    list: [
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'adiddas',
        address: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        sales: 1,
        money: 5000
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'adiddas',
        address: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        sales: 1,
        money: 5000
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'adiddas',
        address: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        sales: 1,
        money: 5000
      },
      {
        shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        shopName: 'adiddas',
        address: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        sales: 1,
        money: 5000
      }
    ],
    evaluatedList: [
      {
        userAvatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        userName: 'adiddas',
        time: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        content: "使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创新结合体的出现，这些是当资源隐藏分散在各种文件夹、笔记本和幻灯片里时难以实现的",
        pics: [
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        ]
      },
      {
        userAvatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        userName: 'adiddas',
        time: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        content: "使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创新结合体的出现，这些是当资源隐藏分散在各种文件夹、笔记本和幻灯片里时难以实现的",
        pics: [
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        ]
      },
      {
        userAvatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        userName: 'adiddas',
        time: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        content: "使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创新结合体的出现，这些是当资源隐藏分散在各种文件夹、笔记本和幻灯片里时难以实现的",
        pics: [
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        ]
      },
      {
        userAvatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        userName: 'adiddas',
        time: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        content: "使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创新结合体的出现，这些是当资源隐藏分散在各种文件夹、笔记本和幻灯片里时难以实现的",
        pics: []
      },{
        userAvatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        userName: 'adiddas',
        time: 'hang zhou dian',
        goodName: 'Apple',
        goodPic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        model: '黑色',
        content: "使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创新结合体的出现，这些是当资源隐藏分散在各种文件夹、笔记本和幻灯片里时难以实现的",
        pics: []
      }
    ]
  },
  onLoad() {
    // Do some initialize when page load.
  },
  async getDom() {
    let res = await boundingClientRect('#scroll-view');
    console.log(res);
    let scrollViewHeight = App.globalData.screenHeight - res.target_top;
    this.setData({
      scrollViewHeight
    });
  },
  onReady() {
    // Do something when page ready.
    this.getDom();
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
  // 滚动操作
  scrollToUpper() {
    // debounce
    console.log('order list scrollToUpper');
  },
  scrollToLower() {
    // debounce
    console.log('order list scrollToLower');
  },
  onScroll(e) {
    let scrollTop = e.detail.scrollTop
    if (isScrollUp(e)){
      console.log('up')
    } else {
      console.log('down')
    }

    if (scrollTop > 10) {
      this.setData({
        waveBarVisible: true,
        pageBg2Visible: false,
      })
    } else {
      this.setData({
        waveBarVisible: false,
        pageBg2Visible: true,
      })
    }
  }, 
  async handleChange(e){
    console.log('handleScrolTo', e)
    this.setData({
      listTypeIndex: e.detail.index
    })
  },
  customData: {}
});
