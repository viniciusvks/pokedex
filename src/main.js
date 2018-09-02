import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

Vue.filter('weight', function (value) {
    return `${(parseFloat(value)/10).toFixed(1)}Kg`
});

Vue.filter('height', function (value) {
    return `${(parseFloat(value)*0.0254).toFixed(2)}m`
});

new Vue({

  el: '#app',
  router: router,
  store: store,
  render: h => h(App),

});
