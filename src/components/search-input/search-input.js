import { getInputValue, debounce } from '../../utils/commom';
import { Toast } from '../../utils/sysApis'
import { addKeywordsHistory } from '../../utils/localStorage';
import { Path, Router } from '../../router/index';
Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'default' // 根据页面名区分 例： indexPage, orderPage, searchPage···
    },
    placeholder: {
      type: String,
      value: '搜索关键词'
    },
    address: {
      type: String,
      value: '杭州'
    },
    message: {
      type: [Number, Boolean],
      value: false
    },
    textAlign: {
      type: String,
      default: 'left',
    },
    radius: {
      type: [Number, String],
      default: '18',
    },
  },

  data: {
    keyword: '',
    borderRadius: ''
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        borderRadius: `border-radius: ${this.data.radius}rpx`
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  created() {},
  ready() {
    this.debounceOnInputValueChange = debounce((e) => {
      this.onInputValueChange(e)
    }, 100)
  },
  moved() {},
  detached() {},

  methods: {
    onInputValueChange(e) {
      let value = getInputValue(e);
      this.setData({
        keyword: value
      });
      this.valueChange(value);
    },
    clear() {
      this.setData({
        keyword: '',
        value: ''
      });
      this.valueChange('');
    },
    valueChange(data) {
      console.log('keyword', data);
      this.triggerEvent('onChange', { keyword: data });
    },
    // index page actions
    // 点击地址
    onAddressClick(e) {
      console.log('点击地址', e)
    },
    // 调用扫一扫
    onScanClick(e) {
      console.log('调用扫一扫', e)
      this.triggerEvent('onScan')
    },
    // 点击搜索
    onSearchBtnClick(e) {
      console.log('点击搜索', e)
      this.triggerEvent('onSearchBtn', {})
    },
    // 点击查看信息
    onMessageClick(e) {
      Router.push(Path.message)
    },
    // 获取
    toGetResult() {
      let { keyword } = this.data
      if (keyword.trim()) {
        this.triggerEvent('onSearch', { keyword })
        addKeywordsHistory(keyword)
      }
    }
  }
});