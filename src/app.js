import {setNavBarSize} from './utils/sysApis';
App({
  onLaunch() {
    // 设置导航栏尺寸
    setNavBarSize(({navHeight, navTop, windowHeight}) => {
      this.globalData.navHeight = navHeight;
      this.globalData.navTop = navTop;
      this.globalData.windowHeight = windowHeight;
      this.globalData.pageContainerHeight = windowHeight - navHeight;
    });
  },
  onShow() {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError() {
    // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  },
  onPageNotFound() {
    // 当要打开的页面并不存在时，会回调这个监听器
  },
  // 所有写在globalData的属性多需要枚举出来
  // Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
  globalData: Object.seal({
    userInfo: null,
    navHeight: 64, //
    navTop: 26,
    windowHeight: 667,
    pageContainerHeight: 643 // page-contaier组件使用 windowHeight - navHeight
  })
});
