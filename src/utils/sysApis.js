const fomartStringParamToJson = key =>  param => typeof param === 'string' ? {[key]: param} : param;

// => {title: value}
const fomartTitleStringParamToJson = fomartStringParamToJson('title');
// => {url: value}
const fomartUrlStringParamToJson = fomartStringParamToJson('url');
// 提示框 统一配置
const duration = 2000;


export const Toast = {
  // title 文本最多显示 7 个汉字长度
  sucess: (param = {}) => wx.showToast({
    title: '成功',
    icon: 'success',
    duration,
    ...fomartTitleStringParamToJson(param)
  }),
  loading: (param = {}) => wx.showToast({
    title: '加载中···',
    icon: 'lodaing',
    duration,
    ...fomartTitleStringParamToJson(param)
  }),
  show: (param = {}) => wx.showToast({
    title: '提示',
    icon: 'none',
    duration,
    ...fomartTitleStringParamToJson(param)
  }),
  close: wx.hideToast
};

// 导航
export const Router = {
  // 调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码
  refresh: (param) => wx.reLaunch({...fomartUrlStringParamToJson(param)}),
  // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
  replace: (param) => wx.redirectTo({...fomartUrlStringParamToJson(param)}),
  // 不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层
  push: (param) => wx.navigateTo({...fomartUrlStringParamToJson(param)}),
  //
  switchTab: (param) => wx.switchTab({...fomartUrlStringParamToJson(param)}),
  // 返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
  back: (delta = 1) =>  wx.navigateBack({delta})
};


// Do something initial when launch.
export const setNavBarSize = (cb = f => f) => {
  let menuButtonObject = wx.getMenuButtonBoundingClientRect();
  wx.getSystemInfo({
    success: res => {
      //导航高度
      let statusBarHeight = res.statusBarHeight,
        navTop = menuButtonObject.top,
        navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
      // this.globalData.navHeight = navHeight;
      // this.globalData.navTop = navTop;
      // this.globalData.windowHeight = res.windowHeight;
      cb({
        navHeight,
        navTop,
        windowHeight: res.windowHeight,
      });


    },
    fail(err) {
      console.log(err);
    }
  });
};

export const boundingClientRect = async nodeId => {
  return new Promise((resolve) => {
    let query = wx.createSelectorQuery();
    query.select(nodeId).boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(function (res) {
      const {
        bottom,
        height,
        left,
        right,
        top,
        width,
      } = res[0];
      const {
        scrollHeight,
        scrollLeft,
        scrollTop,
        scrollWidth
      } = res[1];// 显示区域的竖直滚动位置
      resolve({
        target_bottom: bottom,
        target_height: height,
        target_left: left,
        target_right: right,
        target_top: top,
        target_width: width,
        viewport_scrollHeight: scrollHeight,
        viewport_scrollLeft: scrollLeft,
        viewport_scrollTop: scrollTop,
        viewport_scrollWidth: scrollWidth,
      });
    });
  });

};
