// 全局app实例
import {Path, Router} from '../../router/index';
import { debounce, isScrollUp } from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
const App = getApp();


Page({
  data: {
    scrollViewHeight: 600
  },
  onLoad() {
    // Do some initialize when page load.
  },
  async getDom() {
    let res = await boundingClientRect('#scroll-view');
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
  handleTeam() {
    Router.push(Path.distributionTeam)
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
  // 返回
  handleBack() {
    Router.back()
  },
  customData: {}
});
