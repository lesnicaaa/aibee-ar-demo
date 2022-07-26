import Vue from 'vue'
import router from './router';
import App from './App.vue';
import 'lib-flexible'
import './styles/main.css'
import "./styles/common.css";

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
