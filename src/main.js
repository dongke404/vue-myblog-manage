// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import { getCookie } from "./utils/index"
import {
  Button, 
  Form,
  FormItem,
  Input
} from 'element-ui';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  let token = getCookie("token")
  if (!token && to.path !== '/login') {
    next('/login');
  } else {
    next()
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
