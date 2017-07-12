//============导入JS文件=============
import Vue from 'vue'
// import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'
import store from './store/store';
import router from './router/router'
import 'mod/jquery'
import 'bootstrap'
import 'mediaelement/'
import 'isotope-layout/dist/isotope.pkgd'

import './script/plugins'
import './script/functions'
//===========导入Vue组件==============
import App from './app.vue'
import Favlist from './components/Favlist.vue'


//==========导入CSS文件===============
import './style/index.css'
import 'bootstrap/dist/css/bootstrap.css'
// import './style/mediaelementplayer.css'
import 'mediaelement/build/mediaelementplayer.min.css'
import './style/magnific-popup.css'
import './style/animate.min.css'
import './style/icon-fonts.css'


import './less/style.less'

Vue.config.debug = true;//开启错误提示
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

//注册全局组件
Vue.component('my-component', Favlist);

// new Vue({
//     render: h => h(App),
//     store,
//     router
// }).$mount('#app');