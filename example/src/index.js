import Vue from 'vue'
import App from './App'
import vueWatermark from '../../src'

const DEFAULT_CONFIG = {
  zIndex: 1000,
  font: '16px microsoft yahei',
  color: 'rgba(0,0,0,0.05)',
  content: 'Hello World',
  rotate: 20,
  width: 100,
  height: 100,
  repeat: true
}

Vue.config.productionTip = false
Vue.use(vueWatermark, DEFAULT_CONFIG)

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount("#app")
