import  {Path, Router } from '../../router/index'
import { Toast, boundingClientRect } from '../../utils/sysApis';
import { getAllCategories, getCategoryGoodList, getBannerList } from "../../api/category"
const App = getApp();
Page({
  data: {
    scrollViewHeight: 400,
    categoryList:[],
    bannerList: [],
    goodList: []
  },
  onLoad() {
    // Do some initialize when page load.
    this.getDom()
    this.getAllCategories()
    this.getCategoryGoodList()
    this.getBannerList()
  },
  async getDom() {
    let res = await boundingClientRect('#category-box');
    let scrollViewHeight = App.globalData.screenHeight - res.target_top;
    this.setData({
      scrollViewHeight
    });
  },
  getAllCategories() {
    getAllCategories().then(res => {
      if (res.code === 200) {
        this.setData({
          categoryList: res.data
        })
      }
    }) 
  },
  getCategoryGoodList() {
    getCategoryGoodList().then(res => {
      if (res.code === 200) {
        this.setData({
          goodList: res.data
        })
      }
    }) 
  },
  getBannerList() {
    getBannerList().then(res => {
      if (res.code === 200) {
        this.setData({
          bannerList: res.data
        })
      }
    }) 
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
