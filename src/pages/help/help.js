import { getDatasetValue } from '../../utils/commom';
import { Router } from '../../utils/sysApis';
import PagePathes from '../../router/index'
const getHelpItem = getDatasetValue('helpitem');
const getHelpType = getDatasetValue('index');

Page({
  data: {
    helpList: [
      '物流问题',
      '支付问题',
      '订单问题',
      '账号管理问题',
      '售后问题',
      '安全问题'
    ],
    helpItemList: [
      '物流问题',
      '质量问题',
      '客服问题',
      '问题'
    ],
    keywords: ''
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onKeywordChange(e) {
    console.log(e);
    this.setData({
      keywords: e.detail.keyword
    });
  },
  onHelpItemClick(e) {
    let item = getHelpItem(e);
    console.log(item);
    this.triggerEvent('onSelectHelp', item);
  },

  onHelp(e) {
    console.log(e);
    let typeIndex = getHelpType(e);
    let url = `${PagePathes.helpTypeList}?type=${typeIndex}`;
    // "pages/helpTypeList/helpTypeList",
    // "pages/helpTypeDetail/helpTypeDetail",
    Router.push(url);
  },

  customData: {}
});
