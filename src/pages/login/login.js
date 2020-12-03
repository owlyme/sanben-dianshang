import { getNodeValue } from '../../utils/commom';
import { Path, Router } from '../../router/index';
import { Toast } from '../../utils/sysApis';
import Base from '../../utils/base';
import { storageKeyMap, setLocalStorage } from '../../utils/localStorage';
import { userLogin, getValidateCode } from '../../api/login';
let getPhoneNumber = getNodeValue('phone');
const App = getApp();

Page({
  data: {
    sendCodeBtnDisabled: true,
    loginBtnDisabled: false,
    phone: '',
    code: '',
    checked: true,
    showDrawer: false,
  },
  onLoad() {
    // Do some initialize when page load.
    App.globalData.isLogined = false
  },

  onUnload() {
    // Do something when page close.
    getPhoneNumber = null
  },

  onPhoneChange: function(e) {
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

  toAgree() {
    this.setData({
      checked: !this.data.checked
    });
  },
  async login() {
    let { phone, code, checked } = this.data;

    if (this.validatoForm(phone, code, checked)) {
      let formData = { phone, code };
      console.log(formData);
      this.setData({
        loginBtnDisabled: true
      });
      userLogin(formData).then(res => {
        if (res.code === 200) {
          // App.globalData.isLogined = true
          setLocalStorage(storageKeyMap.isLogined, true)
          setLocalStorage(storageKeyMap.userInfo, res.data || {})
          Router.refresh(Path.index);
        }
      });

      this.setData({
        loginBtnDisabled: false
      });
    }
  },
  validatoForm(phone, code, checked) {
    let bool = true;
    if (!Base.isPhone(phone)) {
      bool = false;
      Toast.show({
        title: '输入正确的手机号'
      });
    } else if (!code || this.codeFormApi != code) {
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
    let { phone } = this.data;

    getValidateCode({
      phone
    }).then(res => {
      if (res.code === 200) {
        this.codeFormApi = res.data.code
      }
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