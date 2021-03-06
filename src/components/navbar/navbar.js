// components/navbar/index.js
import { Path, Router } from '../../router/index';
import ENV from '../../env';

const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ['custom-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    pageName: String,
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
      value: '#000'
    },
    titleColor: {
      type: String,
      value: '' // #fff #333333
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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showComponentList: ENV.env === 'development',
    computedTheme: {}
  },
  lifetimes: {
    attached: function() {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop
      });
      this.setTheme();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 设置导航主题
    setTheme() {
      let { titleColor, backIcon, theme } = this.data;
      let style = {};
      if (theme === 'dark') {
        style = {
          titleColor: '#333333',
          backIcon: 'iconfanhui2',
          backIconColor: '#333333'
        };
      } else {
        style = {
          titleColor: '#ffffff',
          backIcon: 'iconfanhui2',
          backIconColor: '#ffffff'
        };
      }

      if (titleColor) {
        style.titleColor = titleColor;
      }
      if (backIcon) {
        style.backIcon = backIcon;
      }

      this.setData({
        computedTheme: style
      });
    },
    //回退
    _navBack: function() {
      let backType = this.data.backType;
      if (backType === 'pageBack') {
        Router.back(1);
      } else {
        this.triggerEvent('back')
      }
    },
    //回主页
    _toIndex: function() {
      Router.switchTab(Path.index);
      // wx.switchTab({
      //   url: '/pages/tabBar/index/index'
      // });
    },
    toComponentList() {
      Router.push(Path.componentList);
    },
    toPageList() {
      console.log(Path)
      Router.push(Path.pageList);
    }
  }
});