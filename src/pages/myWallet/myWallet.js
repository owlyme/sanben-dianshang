// 全局app实例
import {Path, Router} from '../../router/index';
import {getDataset} from '../../utils/commom'


Page({
  data: {},
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
  handleWithdraw() {
    console.log('handleWithdraw, 需要做逻辑判断')
    Router.push({
      url: Path.withdraw,
    }) 
  },
  // ">兑换商品
  productsExchange() {
    console.log('productsExchange')
  }, 
  // 跳转
  handleNavigator(e){
    console.log(getDataset(e))
    switch (getDataset(e).type){
    case 'redPacket':
      // uni.navigateTo({
      //   url:'/pages/view/my/redPacket'
      // })
      break;
    case 'ticket':
      // uni.navigateTo({
      //   url:'/pages/view/my/discountCoupon'
      // })
      break;
    case 'bankCard':
      // uni.navigateTo({
      //   url:''
      // })
      break;
    default:
      break;
    }
  },
  handleBalance(){
    Router.push({
      url: Path.balanceDetail,
      query: {
        type: 'balance'
      }
    }) 
  },
  handlejifen() {
    console.log('handlejifen')
    Router.push({
      url: Path.balanceDetail,
      query: {
        type: 'points'
      }
    }) 
  },

  customData: {}
});
