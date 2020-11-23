import { Path, Router } from '../../router/index';
import { getDataset, throttle } from '../../utils/commom'
const App = getApp();

Page({
  data: {
    offsetTop: App.globalData.navHeight,
    stickied: false,
    avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    nickName: '用户199514sdffefe',
    message: 22,
    moreList: [
      {
        path: Path.myAddress,
        pic: '/images/mine/services/1.png',
        text: '收货地址'
      },
      {
        path: Path.help,
        pic: '/images/mine/services/3.png',
        text: '帮助中心'
      },
      {
        path: Path.feedBack,
        pic: '/images/mine/services/4.png',
        text: '意见反馈'
      },
      {
        path: Path.aboutUs,
        pic: '/images/mine/services/5.png',
        text: '关于我们'
      }
      ,{
        path: Path.certification,
        pic: '/images/mine/services/6.png',
        text: '实名认证'
      }
      ,{
        path: Path.merchantIndex,
        pic: '/images/mine/services/7.png',
        text: '成为商家'
      },
      {
        path: 'onlineService',
        pic: '/images/mine/services/2.png',
        text: '在线客服'
      },
    ],
  },
  onLoad() {
    // Do some initialize when page load.

    this.throttleSwitchTopStyle = throttle(this.switchTopStyle)
  },
 
  onShow() {
    // Do something when page show.
  },
  toMyFollowePage() {
    console.log('viewMyQrcode')
    Router.push(Path.myFocus)
  },
  toMyStorepage() {
    Router.push(Path.myCollection)
  },
  toMyCouponPage() {
    Router.push(Path.myCoupon)
  },
  toRedPackagePage() {
    Router.push(Path.myRedPackage)
  },
  onPageScroll(e) {
    // Do something when page scroll
    console.log(e.scrollTop)
    
    this.throttleSwitchTopStyle(e.scrollTop)
  },
  switchTopStyle(scrollTop) {
    let stickied = this.data.stickied
    if (!stickied && scrollTop > 7 ) {
      this.setData({
        stickied: true
      })
    } else if(stickied && scrollTop <= 7) {
      this.setData({
        stickied: false
      })
    }
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  toSignPage() {
    Router.push(Path.signIn)
  },
  toMessagePage() {
    Router.push(Path.message)
  },
  toMyWalletPage() {
    // Router.push
    console.log('toMyWalletPage')
    Router.push({
      url: Path.myWallet
    })
  },
  toDistributionPage() {
    console.log('toDistributionPage')
    Router.push({
      url: Path.distributionTeam
    })
  },
  toIncomeDetailPage() {
    console.log('toIncomeDetailPage')
    Router.push({
      url: Path.distributionIncome
    })
  },
  viewMyQrcode() {
    console.log('viewMyQrcode')
  },
  toPersonalInfoPage() {
    Router.push(Path.personalInfo)
  },
  // 前往订单页面
  viewOrder(e) {
    console.log(getDataset(e).type)
    Router.push({
      url: Path.order,
      query: {
        orderPageType: getDataset(e).type
      }
    })
  },
  viewOrderWaitingEvaluate(e) {
    Router.push({
      url: Path.orderWaitingEvaluate,
      query: {
        orderPageType: getDataset(e).type
      }
    })
  },
  viewOrderDetail() {
    Router.push({
      url: Path.orderD
    })
  },
  // 售后
  afterSale() {

  },
  // 更多服务
  onServiceClick(e) {
    console.log(getDataset(e))
    Router.push(getDataset(e).path)
  },
  customData: {}
});
