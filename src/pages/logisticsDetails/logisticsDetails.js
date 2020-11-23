
const App = getApp();
Page({
  data: {
    options:[
      {
        title:'已签收',
        desc:'您的快递已签收，签收人：尧璐。如有疑问请电联',
        time:'2018-11-11 15:00:04',
        status:7
      },   
      {
        title:'待取件',
        desc:'您的快递已存至「菜鸟驿站1068店」（1024时代超市旁）。如有疑问请电联：',
        time:'2018-11-11 15:00:04',
        status:6
      }, 
      {
        title:'派送中',
        desc:'杭州转运中心火车东站站点  韵达派件员：徐迪 电话：13705102211  正在为您派件',
        time:'2018-11-11 15:00:04',
        status:5
      },
        
      {
        title:'运输中',
        desc:'深圳城北转运中心公司 已发出，下一站 广州转运中心公司',
        time:'2018-11-11 15:00:04',
        status:4
      },
      {
        title:'运输中',
        desc:'深圳城北转运中心公司 已发出，下一站 广州转运中心公司',
        time:'2018-11-11 15:00:04',
        status:3.5
      },   
      {
        title:'运输中',
        desc:'深圳城北转运中心公司 已发出，下一站 广州转运中心公司',
        time:'2018-11-11 15:00:04',
        status:3.5
      },  {
        title:'已揽件',
        desc:'深圳城北转运中心公司 已收件',
        time:'2018-11-11 15:00:04',
        status:3
      },
      {
        title:'已发货',
        desc:'包裹正在等待揽收',
        time:'2018-11-11 15:00:04',
        status:2
      },
      {
        title:'已下单',
        desc:'商品已下单',
        time:'2018-11-11 15:00:04',
        status:1
      },        
    ]
  },

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

  customData: {}
});
