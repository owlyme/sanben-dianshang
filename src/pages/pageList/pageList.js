import { Router } from '../../router/index';
import { getDatasetValue } from '../../utils/commom';


const getPageurl = getDatasetValue('url');

Page({
  data: {
    'navbarPageName': 'nihao',
    'navbarShowNav': true,
    'navbarBgColor': '#540909',
    'navbarTitleColor': '',
    'navbarTheme': 'light',
    'navbarBackIcon': 'iconfanhui2',
    'navbarBackType': 'pageBack'
  },

  toPage(e) {
    let url = getPageurl(e);
    Router.push(url);
  },
});