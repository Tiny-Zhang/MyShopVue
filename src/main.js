import Vue from 'vue'
import ElementUI from 'element-ui';   //导入element-ui
import 'element-ui/lib/theme-chalk/index.css';   //导入element-ui  css
import App from './App.vue'     //总视图
import router from './router'   //导入路由  也可以写 router.js
import store from './store'     //数据仓库

Vue.config.productionTip = false

Vue.use(ElementUI);  //全局引入ElementUI

//把视图、路由绑定起来
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
