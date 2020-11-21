
Page({
  data: {
    img: '/images/err/waiting.png',
    title: '敬请期待',
    text: '此页面即将开放'
  },
  onLoad(query) {
    // this.
    // 敬请期待
    // 此页面即将开放
    let content = {
      waiting: {
        img: '/images/err/waiting.png',
        title: '敬请期待',
        text: '此页面即将开放'
      },
      netErr: {
        img: '/images/err/net-err.png',
        title: '网络异常',
        text: '请检查网络连接'
      },
      sysErr: {
        img: '/images/err/sys-err.png',
        title: '系统错误',
        text: '请稍后刷新重试'
      },
      noData: {
        img: '/images/err/no-content.png',
        title: '暂无类容',
        text: '请逛逛后再来'
      }
    }

    // errType: "waiting" // net-err no-content sys-err
    this.setData({
      ...content[query.type || 'waiting']
    })
  },

  customData: {}
});
