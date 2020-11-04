// 全局app实例
import { Router } from '../../utils/sysApis';
import { getDatasetValue } from '../../utils/commom';


const getPageurl = getDatasetValue('url');

Page({
  data: {
    pageList: [
      'pages/signIn/signIn',
      'pages/componentList/componentList',
      'pages/login/login',
      'pages/aboutUs/aboutUs',
      'pages/index/index',
      'pages/help/help',
      'pages/my/my',
      'pages/privacyPolicy/privacyPolicy',
      'pages/serviceAgreement/serviceAgreement',
      "pages/order/order",
      "pages/negotiationRecord/negotiationRecord",
    ]
  },

  toPage(e) {
    let url = getPageurl(e);
    Router.push(`/${url}`);
  },
});
