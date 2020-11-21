const fomartStringParamToJson = key =>  param => typeof param === 'string' ? {[key]: param} : param;
// => {title: value}
const fomartTitleStringParamToJson = fomartStringParamToJson('title');
// => {url: value}
const fomartUrlStringParamToJson = fomartStringParamToJson('url');
// url 添加 '/' 开头
const fomartUrlStringParamToJsonAndStartWithSlash = (arg) => {
  let config = fomartUrlStringParamToJson(arg) 
  if (!config.url) {
    console.error('请检查app.json文件以及router/index.js文件')
    return Toast.show('当前路劲不存在')
  } else if (config.url.indexOf('/') !== 0) {
    config.url = '/' + config.url
  } 
  return config
}
// 提示框 统一配置
const duration = 2000;

export const Toast = {
  // title 文本最多显示 7 个汉字长度
  success: (param = {}) => wx.showToast({
    title: '成功',
    icon: 'success',
    // image: '/images/toast/success.png',
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

export const Modal = (props ={}) => {
  wx.showModal({
    title: '提示',
    confirmText:'确定',
    confirmColor: '#FF3232',
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    },
    ...props
  })
};

// 导航
export const Router = {
  getQueryorParam(param) {
    let {query, params, ...other} = fomartUrlStringParamToJsonAndStartWithSlash(param);
    if (query && typeof query === 'object') {
      other.url = Object.keys(query).reduce((acc, key) => `${acc}${key}=${query[key]}&`, `${other.url}?`)
    }
    this.query = query || {};
    this.params = params || {};
    this.currentPath = other.url;
    return other
  },
  // 调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码
  refresh(param) {
    let config = this.getQueryorParam(param)
    wx.reLaunch({...config})
  },
  // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
  replace(param) {
    let config = this.getQueryorParam(param)
    wx.redirectTo({
      ...config,
      fail: (e) => {
        if (e.errMsg === 'navigateTo:fail can not navigateTo a tabbar page') {
          wx.switchTab({
            ...config
          })
        }
      }
    })
  },
  // 不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层
  push(param) {
    let config = this.getQueryorParam(param)

    wx.switchTab({
      ...config,
      fail: () => {
        wx.navigateTo({
          ...config,
        })
      }
    })
  },
  //
  switchTab (param) {
    let config = this.getQueryorParam(param)
    wx.switchTab({...config})
  },
  // 返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
  back(delta = 1) {
    wx.navigateBack({delta})
  } 
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

      cb({
        navHeight,
        navTop,
        windowHeight: res.windowHeight,
        screenHeight: res.screenHeight,
        navBarHeight: res.screenHeight - res.windowHeight
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

export const showActionSheet = ({
  itemList = [],
  itemColor = '#000000',
  formart = f => f
}) => {
  return new Promise((resolve, reject) => {
    let list = itemList.map(i => formart(i));
    wx.showActionSheet({
      itemList: list,
      itemColor,
      success: (res) => {
        console.log(res.tapIndex);
        let selectedItem = itemList[res.tapIndex];
        resolve(selectedItem, res.tapIndex);
      },
      fail (res) {
        reject(res.errMsg);
        // Toast.show();
      }
    });
  });
};


export const chooseImage = (props) => {
  let defaultPorps = {
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
  };
  let {count, sizeType, sourceType} = props ? {...defaultPorps, ...props} : defaultPorps;

  return new Promise((resolve) => {
    wx.chooseImage({
      count,
      sizeType,
      sourceType,
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        let pathes = count === 1 ? tempFilePaths[0] : tempFilePaths;
        resolve(pathes);
      }
    });
  });
};