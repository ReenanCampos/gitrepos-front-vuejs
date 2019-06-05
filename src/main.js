import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import InfiniteLoading from 'vue-infinite-loading';
import Multiselect from 'vue-multiselect'

Vue.component('InfiniteLoading', InfiniteLoading);
Vue.component('multiselect', Multiselect)

new Vue({
  el: '#app',
  render: h => h(App)
})

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.prototype.$http = window.axios;



