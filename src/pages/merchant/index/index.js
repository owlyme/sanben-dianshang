import { Path, Router } from '../../../router/index';

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
  applyTeamStore() {
    Router.push({
      url: Path.merchantApply,
      query: {
        type: 'enterprise'
      }
    })
  },
  applyPersionStore() {
    Router.push({
      url: Path.merchantApply,
      query: {
        type: 'personal'
      }
    })

  },
});