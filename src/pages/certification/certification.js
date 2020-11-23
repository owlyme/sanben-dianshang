import {Path, Router} from '../../router/index';
import {chooseImage, Toast} from '../../utils/sysApis';
import { getDataset } from '../../utils/commom';
import Base from '../../utils/base';

const App = getApp();
Page({
  data: {
    showSuccessDrawer: false,
    showNav: true,
    applyStatus: 'applying',
    name: '',
    idNumber: '',
    phone: '',
    frontofIDCard: '',
    endofIDCard: '',
  },
  onLoad() {
    // Do some initialize when page load.
  },
  onShow() {
    this.onPageBack()
  },
  onPageBack() {
    let param = Router.getParams()
    console.log(param)
    if (param.ok) {
      this.open()
    }
  },
   // 上传
  handleUpload(e){
    chooseImage().then(res => {
      console.log(res)
      if (getDataset(e).type === 'front') {
        this.setData({
          frontofIDCard: res
        });
      } else {
        this.setData({
          endofIDCard: res
        });
      }

    });
  },
  validatoForm (name, idNumber, phone, frontofIDCard, endofIDCard)  {
    let bool = true;
    if(!name){
      bool = false;
      Toast.show({
        title: '请输入身份证真实姓名'
      });
    } else if(!idNumber  || !Base.isIdNumber(idNumber)){
      bool = false;
      Toast.show({
        title: '请输入身份证号码'
      });
    } else if(!phone || !Base.isPhone(phone)){
      bool = false;
      Toast.show({
        title: '输入正确的手机号'
      });
    } else if(!frontofIDCard){
      bool = false;
      Toast.show({
        title: '请上传身份证正面'
      });
    } else if (!endofIDCard) {
      bool = false;
      Toast.show({
        title: '请上传身份证背面'
      });
    }
    return bool;
  },
  submit() {
    let { name, idNumber, phone, frontofIDCard, endofIDCard } = this.data
    if (this.validatoForm(name, idNumber, phone, frontofIDCard, endofIDCard)) {
      console.log(this.data)
    } 
    Router.push({
      url: Path.verifyBankPhoneNumber,
      query: {
        type: 'verfyId',
        phone: phone
      }
    })
  },

  open() {
    this.setData({
      showSuccessDrawer: true,
      showNav: false
    })
  },

  onSuccessDrawerClose() {
    this.setData({
      showSuccessDrawer: false,
      showNav: true
    })
    Router.back()
  },

  customData: {}
});
