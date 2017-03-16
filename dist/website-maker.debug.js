/*!
 * website-maker - v1.0.0
 * A (Vue + Bulma) Website Boilerplate
 * https://github.com/jonataswalker/website-maker
 * Built: Thu Mar 16 2017 08:48:14 GMT-0300 (-03)
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(factory(global.Vue));
}(this, (function (Vue) { 'use strict';

Vue = 'default' in Vue ? Vue['default'] : Vue;

var app = new Vue({
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
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    app.$mount('#app');
  });
} else {
  module.exports = app;
}

})));
