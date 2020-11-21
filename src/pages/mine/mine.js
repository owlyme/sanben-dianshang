// 全局app实例
import { Router } from '../../utils/sysApis'
import PagePathes from '../../router/index'
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
        path: PagePathes.myAddress,
        pic: '/images/mine/services/1.png',
        text: '收货地址'
      },
      {
        path: 'onlineService',
        pic: '/images/mine/services/2.png',
        text: '在线客服'
      },
      {
        path: PagePathes.help,
        pic: '/images/mine/services/3.png',
        text: '帮助中心'
      },
      {
        path: PagePathes.feedBack,
        pic: '/images/mine/services/4.png',
        text: '意见反馈'
      },
      {
        path: PagePathes.aboutUs,
        pic: '/images/mine/services/5.png',
        text: '关于我们'
      }
      ,{
        path: 'authentication',
        pic: '/images/mine/services/6.png',
        text: '实名认证'
      }
      ,{
        path: 'merchant',
        pic: '/images/mine/services/7.png',
        text: '成为商家'
      }
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
  },
  toMyStorepage() {
    Router.push(PagePathes.myCollection)
  },
  toMyCouponPage() {
    Router.push(PagePathes.myCoupon)
  },
  toRedPackagePage() {
    Router.push(PagePathes.myRedPackage)
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
    Router.push(PagePathes.signIn)
  },
  toMessagePage() {
    Router.push(PagePathes.message)
  },
  toMyWalletPage() {
    // Router.push
    console.log('toMyWalletPage')
    Router.push({
      url: PagePathes.myWallet
    })
  },
  toDistributionPage() {
    console.log('toDistributionPage')
    Router.push({
      url: PagePathes.distributionTeam
    })
  },
  toIncomeDetailPage() {
    console.log('toIncomeDetailPage')
    Router.push({
      url: PagePathes.distributionIncome
    })
  },
  viewMyQrcode() {
    console.log('viewMyQrcode')
  },
  toPersonalInfoPage() {
    Router.push(PagePathes.personalInfo)
  },
  // 前往订单页面
  viewOrder(e) {
    console.log(getDataset(e).type)
    Router.push({
      url: PagePathes.order,
      query: {
        orderPageType: getDataset(e).type
      }
    })
  },
  viewOrderWaitingEvaluate(e) {
    Router.push({
      url: PagePathes.orderWaitingEvaluate,
      query: {
        orderPageType: getDataset(e).type
      }
    })
  },
  viewOrderDetail() {
    Router.push({
      url: PagePathes.orderD
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
