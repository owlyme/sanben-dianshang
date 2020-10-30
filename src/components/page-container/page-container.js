const App = getApp();

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    pageName:String,
  },
  data: {
    navHeight: App.globalData.navHeight, //
    pageContainerHeight: App.globalData.pageContainerHeight
  },

  // 生命周期函数
  created() {},
  attached() {

    this.setData({
      navHeight: App.globalData.navHeight,
      pageContainerHeight: App.globalData.pageContainerHeight
    });
  },
  ready() {},
  moved() {},
  detached() {},

  methods: {}

});