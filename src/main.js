import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



//vant
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Tab, Tabs } from 'vant';
import { Tag } from 'vant';

Vue.use(Tag);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
//rem 适配
require("./assets/commonjs/rem.js")

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
