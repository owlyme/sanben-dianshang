// 全局app实例
import { Toast } from '../../utils/sysApis';
import { Router} from '../../router/index';

import Base from '../../utils/base';
import { getValidateCode} from '../../api/login';

Page({
  data: {
    sendCodeBtnDisabled: false,
    buttonDisabled: false,
    phone: '',
    code: null,
    titleText: '',
    phoneNumText: ''
  },
  onLoad(options) {
    // Do some initialize when page load.
    let {type, phone} = options
    this.pageType = type
    let titles = {
      verfyId: '验证手机号',
      bank: '验证银行预留手机号',
      merchant: '验证手机号'
    }
    this.setData({
      phoneNumText: (phone || '').replace(/(\d{3})(\d{4})(\d+)/, '$1****$3'),
      titleText: titles[type],
      phone
    })
  },

  onPhoneChange: function (e) {
    let sendCodeBtnDisabled = true;
    let phone = this.data.phone
    if (!phone || !Base.isPhone(phone)) {
      sendCodeBtnDisabled = false;
    }
    this.setData({
      sendCodeBtnDisabled
    });
  },

  async verifyPhone() {
    let {phone, code} = this.data;
    if (this.validatoForm(phone, code)) {
      let formData = {phone, code};
      console.log(formData);
      this.afterVerifyPhoneSuccess()
    }
  },
  afterVerifyPhoneSuccess() {
    // 针对不同页面的处理可能不同
    // 更具 this.pageType 做判断
    let params = null;

    switch(this.pageType) {
      case 'verfyId':
        params = {
          ok: 'ok'
        }
        break;
      case 'bank':
        params = {
          ok: 'ok'
        }
        break;
      case 'merchant':
        params = {
          ok: 'ok'
        }
        break;
    }

    Router.back(1, params)
  },

  validatoForm (phone, code)  {
    let bool = true;
    if(!phone || !Base.isPhone(phone)){
      bool = false;
      Toast.show({
        title: '输入正确的手机号'
      });
    } else if (!code ) {
      bool = false;
      Toast.show({
        title: '输入验证码'
      });
    } else if (code !== this.messageCode) {
      bool = false;
      Toast.show({
        title: '输入正确的验证码'
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
    this.messageCode = "aaaa"
  },
  onGetCodeDisable() {
    Toast.show({
      title: '输入正确的手机号'
    });
  },
  

  customData: {}
});
