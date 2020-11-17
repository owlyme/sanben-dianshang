// 全局app实例
import { getNodeValue } from '../../utils/commom';
import PagePathes from '../../router/index'
import { Toast, Router } from '../../utils/sysApis';
import Base from '../../utils/base';
import {userLogin, getValidateCode} from '../../api/login';
let getPhoneNumber = getNodeValue('phone');
let getCode = getNodeValue('code');


Page({
  data: {
    sendCodeBtnDisabled: true,
    loginBtnDisabled: false,
    phone: '',
    code: null,
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
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
    getPhoneNumber = null
    getCode = null
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPhoneChange: function (e) {
    console.log(this.data, getPhoneNumber(e));

    let phone = getPhoneNumber(e);
    let sendCodeBtnDisabled = true;
    if (Base.isPhone(phone.phone)) {
      sendCodeBtnDisabled = false;
    }
    this.setData({
      ...phone,
      sendCodeBtnDisabled
    });
  },
  onCodeChange: function (e) {
    // console.log(this.data, getCode(e));
    this.setData({
      ...getCode(e)
    });
  },

  async verifyPhone() {
    let {phone, code} = this.data;
    
    if (this.validatoForm(phone, code)) {
      let formData = {phone, code};
      console.log(formData);
      this.setData({
        loginBtnDisabled: true
      });
      userLogin(formData);
      Router.refresh(PagePathes.index);

      this.setData({
        loginBtnDisabled: false
      });
    }
  },
  validatoForm (phone, code)  {
    let bool = true;
    if(!Base.isPhone(phone)){
      bool = false;
      Toast.show({
        title: '输入正确的手机号'
      });
    } else if (!code) {
      bool = false;
      Toast.show({
        title: '输入验证码'
      });
    } 
    return bool;
  },
  onGetCode() {
    console.log('send request');
    let {phone} = this.data;

    getValidateCode({
      phone
    });

  },
  onGetCodeDisable() {
    Toast.show({
      title: '输入正确的手机号'
    });
  },

  customData: {}
});
