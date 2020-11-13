const App = getApp();

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],
  // externalClasses:['customerClass'],
  properties: {
    useThemeBg: {
      type: Boolean,
      value: true
    },
    pageName:String,
    showNav: {
      type: Boolean,
      value: true
    },
    bgColor: {
      type: String,
      value: 'linear-gradient(270deg, #FF9846 0%, #FF3232 100%)'
    },
    iconColor: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: ''
    },
    theme: {
      type: String,
      value: 'light' // dark, light
    },
    backIcon: {
      type: String,
      value: ''
    },
    backType: {
      type: String,
      value: 'pageBack' // pageBack, actionBack
    },
    backgroundFixed: {
      type: Boolean,
      value: true
    },
    navZindex: {
      type: [Number, String],
      value: 20
    }
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

  methods: {
    back() {
      this.triggerEvent('back')
    }
  }

});