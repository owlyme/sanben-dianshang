// 全局app实例
const PageContent = {
  '0_0': {
    title: '未收到货物但物流显示已签收',
    list: [
      '1、APP会按照订单顺序为您尽快安排发货（预售订单以商品页面标注的发货时间为准），具体发货时间您可参考订单中的预计发货时间，快递达送时间视快递配送时间而定。 ',
      '2、大件及部分特殊商品具体发货情况请以实际商品页面恢复发货时间为准。 ',
      '3、由于仓库商品存放位置不同，一个订单中的商品可能会被拆分成多个包裹配送，不同的包裹配送时间略有不同。 ',
      '4、包裹发出后，系统会将物流信息更新至您的订单信息中，您可通过“个人中心-我的订单”追踪包裹物流进度。'
    ]
  }
};

Page({
  data: {
    pageName: '',
    detailTitle: '',
    detailList: []
  },
  onLoad(options) {
    // Do some initialize when page load.
    let typeIndex = options.type;

    let {list, title} = PageContent[typeIndex];
    this.setData({
      detailTitle: title,
      detailList: list
    });
  },

  customData: {}
});
