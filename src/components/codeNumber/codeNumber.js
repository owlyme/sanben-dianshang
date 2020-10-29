const CodeBtnText = '发送验证码';
let timerCount = 60;
let timer = null;

Component({
  options: {
    styleIsolation: 'apply-shared',
    //  https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {},
  data: {
    sendCodeBtnDisabled: false,
    sendCodeBtnText: CodeBtnText,
  },

  // 生命周期函数
  methods: {
    getCode() {
      if (!timer) {
        console.log(60);
        // 调用获取短信验证码接口

        // 60s 倒计时
        let sendCodeBtnText = `${--timerCount}s后重新获取`;
        this.setData({
          sendCodeBtnText,
          sendCodeBtnDisabled: true
        });
        timer = setInterval(() => {
          // 同时切换文字
          sendCodeBtnText = `${--timerCount}s后重新获取`;
          this.setData({
            sendCodeBtnText,
          });
          if (timerCount < 0) {
            this.setData({
              sendCodeBtnText: CodeBtnText,
              sendCodeBtnDisabled: false
            });
            clearInterval(timer);
          }

        }, 1000);

        // 出发事件

        this.triggerEvent('onGetCode');
      }
    },
  }

});