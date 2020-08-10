import Vue from 'vue';
import App from '@/frontend/App.vue';
import vuetify from '@/frontend/plugins/vuetify';
import router from '@/frontend/router';
import store from '@/frontend/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
