import Vue from 'vue';

const app_ = new Vue({
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

export { app_ };
