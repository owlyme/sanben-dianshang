import {Path, Router} from '../../router/index';
import { getDatasetValue } from '../../utils/commom';
const getHelpType = getDatasetValue('index');
const AllTypeList = {
  0: {
    title: '物流问题',
    list: [
      '发货时效',
      '催促物流',
      '修改收货地址',
      '能否延迟发货',
      '快递配送',
      '未收到货物但物流显示已签收'
    ]
  }
};

Page({
  data: {
    typeIndex: 0,
    pageName: '',
    helpTypeList: []
  },
  onLoad(options) {
    console.log(options); //打印当前页面的参数
    let typeIndex = options.type;

    let {title, list} = AllTypeList[typeIndex];
    this.setData({
      pageName: title,
      helpTypeList: list,
      typeIndex
    });
  },
  onReady() {
    // Do something when page ready.
  },
  onHelp(e) {
    console.log(e);
    let detailIndex = getHelpType(e);
    let url = `${Path.helpTypeDetail}?type=${this.data.typeIndex}_${detailIndex}`;
    Router.push(url);
  },

  customData: {}
});
