// main.js: Vue应用的入口文件，负责初始化Vue实例和挂载根组件
import Vue from 'vue';
import App from './App.vue';

// 禁用生产提示
Vue.config.productionTip = false;

// 创建并挂载Vue实例
new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount('#app'); 