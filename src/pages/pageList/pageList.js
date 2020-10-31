// 全局app实例
import { Router } from '../../utils/sysApis';
import { getNodeData } from '../../utils/commom';


const getPageurl = getNodeData('url');

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
      'pages/serviceAgreement/serviceAgreement'
    ]
  },

  toPage(e) {
    let url = getPageurl(e);
    Router.push(`/${url}`);
  },
});
