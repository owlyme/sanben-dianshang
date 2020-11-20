import PagePathes from '../../../router/index'
import { chooseImage, Router, Toast} from '../../../utils/sysApis';
import { getDataset } from '../../../utils/commom';
import Base from '../../../utils/base';
const App = getApp();
Page({
  data: {
    showSuccessDrawer: false,
    showNav: true,
    pageType: 'enterprise', // enterprise, personal'
    
    applyStatus: 'success', // appling fail success
    companyType: '', 
    name: '',
    idNumber: '',
    phone: '',
    email: '',
    frontofIDCard: '',
    endofIDCard: '',
    licenseCard: ''
  },
  onLoad(option) {
    // Do some initialize when page load.
    this.setData({
      pageType: option.type
    })
  },
  
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onPageBack() {
    let param = Router.getParams()
    console.log(param)
    if (param.ok) {
      // 调用申请接口
      // 修改 applyStatus 状态
      // 提示
      this.openDrawer()
    }
  },
 
   // 上传
   handleUpload(e){
    chooseImage().then(res => {
      console.log(res)
      let type = getDataset(e).type 
      if (type === 'front') {
        this.setData({
          frontofIDCard: res
        });
      } else if (type === 'end') {
        this.setData({
          endofIDCard: res
        });
      } else if (type==='license') {
        this.setData({
          licenseCard: res
        });
      }
    });
  },

  validatoForm (name, idNumber, phone, email, frontofIDCard, endofIDCard, licenseCard)  {
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
    } else if(!email || !Base.isEmail(email)){
      bool = false;
      Toast.show({
        title: '请输入邮箱地址'
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
    }  else if (this.data.pageType === 'enterprise' && !licenseCard) {
      bool = false;
      Toast.show({
        title: '请上传营业执照'
      });
    }
    return bool;
  },
  submit() {
    let { name, idNumber, phone, email, frontofIDCard, endofIDCard, licenseCard } = this.data
    if (this.validatoForm(name, idNumber, phone, email, frontofIDCard, endofIDCard, licenseCard)) {
      console.log(this.data)
      Router.push({
        url: PagePathes.verifyBankPhoneNumber,
        query: {
          type: 'merchant',
          phone: phone
        }
      })
    } 
   
  },

  openDrawer() {

    this.setData({
      showSuccessDrawer: true,
      showNav: false
    })
  },
  closeDrawer() {
    this.setData({
      showSuccessDrawer: false,
      showNav: true
    })
  },
  onSuccessDrawerClose() {
    this.closeDrawer()
    Router.back()
  },

  unRecivedEmail() {
    this.closeDrawer()
  },
  applayAgain() {
    this.closeDrawer()
  }
});
