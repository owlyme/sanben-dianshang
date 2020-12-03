// 全局app实例
import { Router, Path } from '../../router/index';
import { debounce, isScrollUp, throttle} from '../../utils/commom';
import { Toast, boundingClientRect } from '../../utils/sysApis';
import { getIndexInfo, getIndexGoodList, getCategories } from '../../api/index';
const App = getApp();

const goodListTypes = {
  0: 'special',
  1: 'rank',
  2: 'category'
}

Page({
  data: {
    stickyBaseOffsetTop: 60, //吸顶距离基础偏移量
    stickySearchInputOffsetTop: 60, // 搜索栏吸顶距离高度
    stickyTabbarOffsetTop: 60, // tab-bar吸顶距离高度
    stickyTabbarInitTop: 800, // 页面渲染时tab-bar的距离页顶的距离
    stickyTabbarBackground: 'none',
    backTopValue: false,
    interval: 3000,
    duration: 500,
    scrollViewHeight: 400,

    customPosition: '杭州', // 用户当前位置
    bannerList: [],
    goodProducts: [],
    priceReduction: [],
    newProducts: [],
    productsNews: {},
    goodList: [],
    goodListTypeListTab: [
      {
        name: '精选',
        sub: '为您推荐',
      },
      {
        name: '排行',
        sub: '人气商品',
      },
      {
        name: '分类',
        sub: '琳琅满目',
      }
    ],
    goodListType: goodListTypes[0],
    categoryList: [
      // { type: '1', name: '2222'},
      // { type: '1', name: '23'},
      // { type: '1', name: '24442'},
      // { type: '1', name: '2266622'},
      // { type: '1', name: '2444222'},
    ],
    specalAcitve: {
      id: 12,
      pic: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    }
  },
  onLoad() {
    // Do some initialize when page load.
    this.onPageScrollthrottle = throttle((scrollTop) => {
      this.switchStickyStyle(scrollTop);
      this.switchBackTop(scrollTop);
    }, 200)
    setTimeout(() => {
      this.getDom()
    }, 10)
    this.getIndexInfo()
    this.getGoodList(goodListTypes[0])
    this.getGoodList(goodListTypes[1])
    this.getGoodList(goodListTypes[2])
  },
  getIndexInfo() {
    getIndexInfo().then(res => {
      if (res.code === 200) {
        let {bannerList, customPosition, goodProducts, priceReduction, 
          newProducts, productsNews}  = res.data
        this.setData({
          customPosition,
          bannerList,
          goodProducts,
          priceReduction,
          newProducts,
          productsNews,
        })
      }
    })
  },
  getGoodList(type, category) {
    let goodListType = type || this.data.goodListType
    getIndexGoodList({
      type: goodListType,
      category,
    }).then(res => {
      if (res.code === 200) {
        let goodList = []
        let {
          spcealGoodList = [],
          rankGoodList = [],
          categoryGoddList = []
        }  = this.customData

        switch(goodListType) {
          case goodListTypes[0]: 
            goodList = this.customData.spcealGoodList = spcealGoodList.concat(res.data)
            break;
          case goodListTypes[1]: 
            goodList = this.customData.rankGoodList = rankGoodList.concat(res.data)
            break;
          case goodListTypes[2]: 
            goodList = this.customData.categoryGoddList = categoryGoddList.concat(res.data)
            break;
        }

        this.setData({
          goodList: goodList
        })
      }
    }) 
  },
  async getDom(a) {
    let navHeight = App.globalData.navHeight
    let sticky = await boundingClientRect('#sticky-b');
    let search = await boundingClientRect('#search-b');
    
    let stickyBaseOffsetTop = navHeight
    let stickySearchInputOffsetTop = stickyBaseOffsetTop
    let stickyTabbarOffsetTop = stickySearchInputOffsetTop + search.target_height
    let stickyTabbarInitTop = sticky.target_top

    this.setData({
      stickyBaseOffsetTop,
      stickySearchInputOffsetTop,
      stickyTabbarOffsetTop,
      stickyTabbarInitTop
    });
  },
  switchStickyStyle(pageScrollTop) {
    let { stickyBaseOffsetTop, stickyTabbarInitTop, stickySearchInputOffsetTop} = this.data
    this.setData({
      stickyTabbarBackground: pageScrollTop > stickyTabbarInitTop - stickySearchInputOffsetTop - stickyBaseOffsetTop? '#ffffff' : 'none'
    });
  },
  onShow() {
    // Do something when page show.
  },
  onAddressClick() {
    console.log('onAddressClick')
  }, 
  onReachBottom() {
    this.getGoodList()
  },
  onShareAppMessage() {},
  onPageScroll (e) { 
    this.onPageScrollthrottle(e.scrollTop)
  },
  // 调用扫一扫
  onScan(e) {
    console.log('调用扫一扫', e)
    wx.scanCode({
      success: (res) => {
        let {result, scanType} = res
        switch(scanType) {
        case 'ENV_13': 
          console.log('scanType', scanType, result)
          break;
        case 'QR_CODE': 
          console.log('scanType', scanType, result)
          break;
        }
        Toast.success('扫一扫成功')
      },
      fail: () => {
        Toast.show('扫码失败')
      }
    })
  },
  // 点击搜索
  onSearchBtn(e) {
    console.log('点击搜索', e)
    Router.push(Path.search)
  },

  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  },
  onGoodListTypeChange(e) {
    let index = e.detail.index
    let goodListType = goodListTypes[index]
    let goodList = []
    let {
      spcealGoodList = [],
      rankGoodList = [],
      categoryGoddList = []
    }  = this.customData

    switch(goodListType) {
      case goodListTypes[0]: 
        goodList = spcealGoodList
        break;
      case goodListTypes[1]: 
        goodList = rankGoodList
        break;
      case goodListTypes[2]: 
        goodList = categoryGoddList
        this.getCategories()
        break;
    }

    this.setData({
      goodListType,
      goodList: goodList
    })
  },
  getCategories() {
    if(this.data.categoryList.length > 0) return; 
    getCategories().then(res  => {
      if (res.code === 200) {
        this.setData({
          categoryList: res.data
        })
      }
    })
  },
  onCategoryChange(e) {
    console.log(e)
    let {category} = e.detail

    getIndexGoodList({
      type: goodListTypes[1],
      category,
    }).then(res => {
      if (res.code === 200) {
        this.customData.categoryGoddList = res.data
        this.setData({
          goodList: this.customData.categoryGoddList
        })
      }
    }) 
  },

  viewGood(e){
    console.log('sign good', e);
  },

  switchBackTop(pageScrollTop) {
    let backTopValue = pageScrollTop > 400 ? true : false
    this.setData({
      backTopValue: backTopValue
    })
  },
  // 滚动到顶部
  backTop() {
    // 控制滚动
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  customData: {
    spcealGoodList: [],
    rankGoodList: [],
    categoryGoddList: [],
  }
});
