import Vue from 'vue';

const app = new Vue({
  template: '<div id="app">Yo {{ counter }} seconds.</div>',
  data: {
    counter: 0
  },
  created: function () {
    var vm = this;
    setInterval(function () {
      vm.counter += 1;
    }, 1000);
  }
});

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    app.$mount('#app');
  });
} else {
  module.exports = app;
}
