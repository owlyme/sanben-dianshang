// 全局app实例
import { Path, Router } from '../../router/index';
import { debounce, isScrollUp, throttle, getDatasetValue } from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
const App = getApp();
const getModelCardType = getDatasetValue('type');
let onPageScrollthrottle = null;
Page({
  data: {
    tarbarOffsetTop: App.globalData.navHeight,
    modelCardType: 'add', // add 加入购物车, pay 立 即 购 买
    topPartStyle: {
      bg: 'rgba(244, 245, 246, 0)',
      tabbarOpactiy: 0,
      tabbarBlock: 'none'
    },

    showModelSelectDialog: false,
    orderType: [
      '商品',
      '评价',
      '详情',
      '推荐'
    ],
    goodDetail: {
      displayPicList: [{
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        video: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      },
      {
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },

      {
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      {
        pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      },
      ],
      priceList: [
        // 不同规格有不同的价格
      ],
      name: 'Adidas阿迪达斯旗舰店官网外套男装新年秋季防风衣加绒运动夹克',
      tags: ['hao', 'bucuo', 'heheda'],
      sales: 200, // 销量
      shopLogo: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      shopName: '阿迪达斯三叶草旗舰店',
      rate: 4,
      followNumber: 188,
      profile: '<p style="color:red">富文本富文本富文本富文本富文本<img src="https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg" /></p>',
    },
    evaluates: {
      totalNumber: 10,
      list: [{
        avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '环保小能手',
        releaseTime: '2020-09-12 15:00:54',
        model: '黑/白色',
        content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
        pics: [

        ]
      },
      {
        avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '环保小能手',
        releaseTime: '2020-09-12 15:00:54',
        model: '黑/白色',
        content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
        pics: [
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        ]
      },
      {
        avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        name: '环保小能手',
        releaseTime: '2020-09-12 15:00:54',
        model: '黑/白色',
        content: '使用设计工具的好处在于，当这些项目材料同时呈现，能够帮助我们进行模式识别，并促进更多创…',
        pics: [
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
          'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
        ]
      }
      ]
    },
    currentPrice: 199,
    goodList: [{
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,
      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,
      active: '双十一',
      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,

      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,

      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,

      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,

      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,

      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,
      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,

      tags: ['hao', 'bucuo']
    },
    {
      id: 0,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
      name: '肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴肖优秀真皮细高跟过膝瘦腿弹力靴',
      price: '200.00',
      saledNumber: 200,

      tags: ['hao', 'bucuo']
    }
    ],
    type: '', //类型
    current: 0,
    scrollTop: 0, //滚动高度
    showModal: false, //弹出显示隐藏

    showVideo: false,
    goodsData: {
      videos: 'https://fzdz.soft.haoyangsoft.com/uploads/system/videos/20200813/6c819d24ee6868aee33e150c4333329b.mp4',
      imgList: ['/static/logo.png',
        'http://img10.360buyimg.com/n1/jfs/t1/86401/35/12206/357766/5e43b59cE5a7aa4dd/0753be765166c195.jpg',
        'http://img11.360buyimg.com/n1/jfs/t1/74434/3/6892/331750/5d512febE54e891c4/0096ad20c3c20d23.jpg'
      ],
    }
  },
  onLoad() {
    // Do some initialize when page load.
    onPageScrollthrottle = null;
  },
  onReady() {
    // Do something when page ready.
    onPageScrollthrottle = throttle((scrollTop) => {
      this.switchTabbarStyle(scrollTop);
    }, 200)

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
  onShareTimeline() {

  },
  onPageScroll(e) {
    // Do something when page scroll
    // console.log(e)
    this.customData = {
      ...this.customData,
      currentScrollTop: e.scrollTop
    }
    onPageScrollthrottle(e.scrollTop);

  },
  switchTabbarStyle(pageScrollTop) {
    // pageScrollTop === 0 opacity:0
    // pageScrollTop === 300 opacity:1
    let top = pageScrollTop > 300 ? 300 : pageScrollTop;
    let precent = (top / 300).toFixed(2);
    let topPartStyle = {
      bg: `rgba(244, 245, 246, ${precent})`,
      tabbarOpactiy: precent,
      tabbarBlock: top > 10 ? 'block' : 'none'
    }
    this.setData({
      topPartStyle
    })

  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  toSearchPage() {
    Router.push({
      url: Path.search
    })
  },
  toGoodCartPage() {
    Router.push({
      url: Path.goodCart
    })
  },
  async handleScrolTo(e) {
    console.log('handleScrolTo', e)

    let index = e.detail.index
    let offsetTop = App.globalData.navHeight
    let scrollTop = 0
    let tabbarHeight = 36 // 通过css 样式得到
    const {
      currentScrollTop,
      // evaluateScrollTop,
      // productDetailsScrollTop,
      // recommendScrollTop
    } = this.customData

    if (index === 1) {
      let evaluate = await boundingClientRect('#evaluate');
      scrollTop = currentScrollTop + evaluate.target_top;
    } else if (index === 2) {
      let productDetails = await boundingClientRect('#product-details');
      scrollTop = currentScrollTop + productDetails.target_top;
    } else if (index === 3) {
      let recommend = await boundingClientRect('#recommend');
      scrollTop = currentScrollTop + recommend.target_top;
    }
    scrollTop = scrollTop - offsetTop - tabbarHeight
    wx.pageScrollTo({
      scrollTop,
      duration: 300
    });
  },
  // 视频播放
  setShowVideo(showVideo, isH5) { //操作视频
    this.showVideo = true
    if (isH5 == true) {

    }
  },
  // 视频显示
  hideShow() {
    this.showVideo = false
  },
  // 弹出曾隐藏
  onhide() {
    this.showModal = false
  },

  viewGood(e) {
    console.log('sign good', e);
  },
  // 领券
  getCoupon(e) {
    console.log('getCoupon', e);
  },
  // 商品评价 查看全部 
  viewMoreEvaluate(e) {
    console.log('viewMoreEvaluate', e);


    Router.push({
      url: Path.goodEvaluate
    })
  },
  evaluatesBack() {
    this.setData({

      pageOverHidden: false
    })
  },
  // 查看详情 店铺推荐 / 店铺
  viewShopIndex(e) {
    console.log('viewShopIndex', e);
    Router.push({
      url: Path.shopIndex
    })
  },
  // 客服
  toService(e) {
    console.log('viewShopIndex', e);
    Toast.show('客服下班了')
    // Router.push({
    //   url: Path.shopIndex
    // })
  },
  // 收藏 
  save(e) {
    console.log('viewShopIndex', e);
    Toast.success('收藏成功')
    // Router.push({
    //   url: Path.myCollection
    // })
  },
  // 
  onCloseDialog(e) {
    console.log('onCloseDialog', e);
    this.setData({
      showModelSelectDialog: false
    })
  },
  openModelSelectDialog(e) {
    console.log('openModelSelectDialog', e);

    this.setData({
      showModelSelectDialog: true,
      modelCardType: getModelCardType(e)
    })
  },

  onAddGoodToCart(e) {
    console.log('onAddGoodToCart', e)
  },
  onPay(e) {
    console.log('onPay', e)
  },

  customData: {

  }
});