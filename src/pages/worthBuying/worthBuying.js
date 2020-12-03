// 全局app实例
import { getIndexGoodList } from "../../api/index"
import { getBannerList } from "../../api/category"
const App = getApp();

Page({
  data: {
    stickyOffsetTop: App.globalData.navHeight,
    goodList: [],
    bannerList: [],
    activeList: [
      {
        pic: '/images/worthBuying/evaluation.png',
        title: '超值评测',
        text: '大V实物评测'
      },
      {
        pic: '/images/worthBuying/activitives.png',
        title: '专享活动',
        text: '超值活动来啦'
      },
      {
        pic: '/images/worthBuying/articles.png',
        title: '优享文章',
        text: '看看这篇文章'
      },
      {
        pic: '/images/worthBuying/videos.png',
        title: '好物视频',
        text: '全方位鉴赏'
      }
    ]
  },
  onLoad() {
    // Do some initialize when page load.
    this.getBannerList()
    this.getIndexGoodList()
  },
  getIndexGoodList(type = "add") {
    getIndexGoodList().then(res => {
      if (res.code === 200) {
        this.setData({
          goodList: type === 'add' ?
             this.data.goodList.concat(res.data || []) : 
             (res.data || [])
        })

        if (type === 'refresh') {
          wx.stopPullDownRefresh()
        }
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
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
    this.getIndexGoodList('refresh')
  },
  onReachBottom() {
    console.log('onReachBottom')
    this.getIndexGoodList()
  },


  onSwiperClick(e) {
    console.log('onSwiperClick',e)
  },
  onActiveClick(e) {
    console.log('onActiveClick',e)
  },
  viewGood(e){
    console.log('viewGood', e);
  },
  customData: {}
});
