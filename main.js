import Vue from 'vue/dist/vue.common.js';

import Example from './Example.vue';

Vue.component('example', Example);

let App = new Vue({
    el: "#app"
});