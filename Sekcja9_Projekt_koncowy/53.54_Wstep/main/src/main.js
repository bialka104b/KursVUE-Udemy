// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import App from './App'

import 'babel-polyfill';
import Vue from 'vue'

new Vue({
  el: "#app",
  render: (h)=> {
    return h('div', 'centrum wsparcia')
  }
})

