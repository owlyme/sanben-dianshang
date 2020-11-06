// 全局app实例
import { Router } from '../../utils/sysApis';
import PagePathes from '../../router/index'
import { getDatasetValue } from '../../utils/commom';


const getPageurl = getDatasetValue('url');

Page({
  data: {
    pageList: Object.values(PagePathes)
  },

  toPage(e) {
    let url = getPageurl(e);
    Router.push(url);
  },
});
