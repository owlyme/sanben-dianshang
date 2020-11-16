import {logout} from '../../api/login';
import { getNodeValue } from '../../utils/commom';
import {showActionSheet, chooseImage} from '../../utils/sysApis';
const getPhoneNumber = getNodeValue('phone');
const getNickName = getNodeValue('nickName');
// 全局app实例
const app = getApp();
console.log(app);

Page({
  data: {
    nickName: '三牛牛牛',
    sex: '男',
    phone: '13156521718',
    avatar: 'https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_300x300.jpg',
    hobbies: '跑跑'
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onSelectedAvatar() {
    chooseImage().then(res => {
      this.setData({
        avatar: res
      });
    });
  },
  onPhoneChange: function (e) {
    console.log(this.data, getPhoneNumber(e));
    let phone = getPhoneNumber(e);
    this.setData({
      ...phone
    });
  },
  onNickNameChange: function (e) {
    console.log(this.data, getNickName(e));
    let nickName = getNickName(e);
    this.setData({
      ...nickName
    });
  },
  onSelectedSex() {
    showActionSheet({
      itemList: ['男', '女']
    }).then(res => {
      this.setData({
        sex: res
      });
    });
  },
  selectHobby() {
    console.log('selectHobby')
  },

  logout() {
    logout();
  },
  customData: {}
});
