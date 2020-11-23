
import {Path, Router} from '../../router/index';
import { getDatasetValue } from '../../utils/commom';


const getPageurl = getDatasetValue('url');

Page({
  data: {
    pageList: Object.values(Path)
  },

  toPage(e) {
    let url = getPageurl(e);
    Router.push(url);
  },
});
