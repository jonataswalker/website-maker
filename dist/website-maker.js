/*!
 * website-maker - v1.0.0
 * A (Vue + Bulma) Website Boilerplate
 * https://github.com/jonataswalker/website-maker
 * Built: Thu Mar 16 2017 08:48:14 GMT-0300 (-03)
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("vue")):"function"==typeof define&&define.amd?define(["vue"],n):n(e.Vue)}(this,function(e){"use strict";e="default"in e?e.default:e;var n=new e({template:'<div id="app">Yo {{ counter }} seconds.</div>',data:{counter:0},created:function(){var e=this;setInterval(function(){e.counter+=1},1e3)}});"undefined"!=typeof window?document.addEventListener("DOMContentLoaded",function(){console.log("DOMContentLoaded"),n.$mount("#app")}):module.exports=n});