// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill';
import Vue from 'vue';
import AppLayout from './components/AppLayout';//import komponentu App layout

new Vue({
  el: "#app",
  render: (h)=> {
    // return h('div', 'centrum wsparcia')
    return h(AppLayout);
  }
})

