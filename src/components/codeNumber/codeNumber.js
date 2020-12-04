const CodeBtnText = '发送验证码';
let timer = null;

Component({
  options: {
    styleIsolation: 'apply-shared',
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],

  properties: {
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    timerCount: {
      type: [Number],
      value: 60
    }
  },
  data: {
    sendCodeBtnDisabled: false,
    sendCodeBtnText: CodeBtnText,
  },

  // 生命周期函数
  lifetimes: {
    attached: function() {
      this.cacheTimerCount = this.data.timerCount
    }
  },
  // 生命周期函数
  methods: {
    getCode() {
      if (this.data.disabled) {
        this.triggerEvent('onDisableClick');
        return;
      }
      if (!timer) {
        // 60s 倒计时
        let sendCodeBtnText = `${--this.data.timerCount}s后重新获取`;
        this.setData({
          sendCodeBtnText,
          sendCodeBtnDisabled: true
        });
        timer = setInterval(() => {
          // 同时切换文字
          sendCodeBtnText = `${--this.data.timerCount}s后重新获取`;
          this.setData({
            sendCodeBtnText,
          });
          if (this.data.timerCount <= 0) {
            this.setData({
              sendCodeBtnText: CodeBtnText,
              sendCodeBtnDisabled: false,
              disabled: false,
              timerCount: this.cacheTimerCount
            });
            clearInterval(timer);
            timer = null
          }
        }, 1000);

        // 出发事件
        // 调用获取短信验证码接口
        this.triggerEvent('onGetCode');
      }
    },
    onGetCodeDisable() {

    }
  }

});