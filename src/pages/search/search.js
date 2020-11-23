// 全局app实例
import { storageKeyMap, getLocalStorage, setLocalStorage, addKeywordsHistory } from '../../utils/localStorage';
import {Path, Router} from '../../router/index';
import { getDatasetValue } from '../../utils/commom'
const App = getApp();
const listType = getDatasetValue('type')


function getHistoryKeywordsList() {
  return getLocalStorage(storageKeyMap.keywords) || []
}

Page({
  data: {
    offsetTop: App.globalData.navHeight,
    historyList: getHistoryKeywordsList(),
    findedList: [
      1,2,3,4,5,6,7,
      '华为手机',
      '苹果手机',
      '吃不完的零食大礼包',
      '苹果手机',
      '吃不完的零食大礼包',
      '苹果手机',
      '吃不完的零食超大超大超大超大超大超大超大超大超大超',
    ],
    remindList: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,1,4,1,1,1,1,1,11,],
    keyword: '',
    fromPage: 'shop'
  },
  onLoad(e) {
    console.log('search onLoad', e, Router)
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
    this.setData({
      historyList: getHistoryKeywordsList(),
    })
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
  customData: {},
  
  // 输入框变化时
  onSearchInputChange(e) {
    let keyword = e.detail.keyword
    this.setData({keyword})
    //2 获取remindList
    
  },
  remind(e) {
    let keyword = e.currentTarget.dataset.item
    console.log(e, keyword)
    addKeywordsHistory(keyword)

    setTimeout(() => {
      this.setData({
        historyList: getHistoryKeywordsList()
      })
    }, 100)
    this.switchPage(e.detail.keyword)
  },
  deleteHistory() {
    setLocalStorage(storageKeyMap.keywords, [])
    this.setData({
      historyList: []
    })

  },
  onSearch(e) {
    console.log(e)
    setTimeout(() => {
      this.setData({
        historyList: getHistoryKeywordsList()
      })
    }, 100)
    this.switchPage(e.detail.keyword)
  },
  onKeywordChange(e) {
    console.log(e)

    let type = listType(e)
    if (type === 'finded') {
      addKeywordsHistory(e.detail.keyword)
    }

    setTimeout(() => {
      this.setData({
        historyList: getHistoryKeywordsList()
      })
    }, 100)

    this.switchPage(e.detail.keyword)
  },
  switchPage(goodName) {
    let url = ''
    let query= {
      goodName
    }
    if (Router.query.fromPage === 'shop') {
      // 店铺-商品列表
      url = Path.shopAllGood
    } else {
      // 商城-商品列表
      url = Path.categoryGoodList
    }

    Router.replace({
      url,
      query
    })
  }
});
