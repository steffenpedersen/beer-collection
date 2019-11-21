import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    // URL will look "normal" 
    // instead of hash #
    mode: 'history'
});

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
