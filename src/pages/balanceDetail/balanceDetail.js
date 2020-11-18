const detailList = [
  {
    reason: '退款',
    time: '2020-10-19 15:27:10',
    money: 200
  },
  {
    reason: '退款',
    time: '2020-10-19 15:27:10',
    money: 200
  },
  {
    reason: '退款',
    time: '2020-10-19 15:27:10',
    money: 200
  },
  {
    reason: '退款',
    time: '2020-10-19 15:27:10',
    money: 200
  }
]
Page({
  data: {
    pageType: null,
    pageName: "余额明细", // 积分明细
    detailList: []
  },
  onLoad(options) {
    // Do some initialize when page load.
    let pageName = ''

    if (options.type === 'balance') {
      pageName = "余额明细"
    } else {
      pageName = "积分明细"
    }

    this.setData({
      pageName,
      pageType: options.type
    })
    this.getDetail()
  },

  onShow() {
    // Do something when page show.
  },

  onReachBottom() {
    console.log('onReachBottom')
  },

  getDetail () {
    if (this.data.pageType === 'balance') {
      this.getBalanceDetailList()
    } else {
      this.getPointsDeetailList()
    }
  },
  getBalanceDetailList() {
    this.setData({
      detailList: detailList
    })
  },
  getPointsDeetailList() {
    this.setData({
      detailList: detailList
    })
  },
  customData: {}
});
