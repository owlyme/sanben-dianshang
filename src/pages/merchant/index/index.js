import PagePathes from '../../../router/index'
import { Router } from '../../../utils/sysApis';

const App = getApp();
Page({
  data: {},
  onLoad() {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  applyTeamStore(){
    Router.push({
      url: PagePathes.merchantApply,
      query: {
        type: 'enterprise'
      }
    })
  },
  applyPersionStore(){
    Router.push({
      url: PagePathes.merchantApply,
      query: {
        type: 'personal'
      }
    })
   
  },
});
