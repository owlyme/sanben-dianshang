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
    checked: true,
    showDrawer: false,
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
  toAgree() {
    this.setData({
      checked: !this.data.checked
    });
  },
  async login() {
    let {phone, code, checked} = this.data;
    
    if (this.validatoForm(phone, code, checked)) {
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
  validatoForm (phone, code, checked)  {
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
    } else if (!checked) {
      // bool = false;
      // Toast.show({
      //   title: '请同意服务协议与隐私政策'
      // });
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
  privacyPolicy() {
    this.setData({
      showDrawer: true
    })
  },
  closeDrawer() {
    this.setData({
      showDrawer: false
    })
  },

  customData: {}
});
