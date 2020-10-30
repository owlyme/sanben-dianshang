// components/navbar/index.js
import { Router } from '../../utils/sysApis';

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
    pageName:String,
    showNav: {
      type: Boolean,
      value: true
    },
    bgColor:{
      type: String,
      value: 'linear-gradient(270deg, #FF9846 0%, #FF3232 100%)'
    },
    iconColor:{
      type: String,
      value: '#000'
    },
    titleColor: {
      type: String,
      value: '#fff'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop
      });
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    _navBack: function () {
      // wx.navigateBack({
      //   delta: 1
      // });
      Router.back(1);
    },
    //回主页
    _toIndex: function () {
      Router.switchTab('pages/index/index');
      // wx.switchTab({
      //   url: '/pages/tabBar/index/index'
      // });
    },
  }
});
