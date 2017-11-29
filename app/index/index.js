//============导入全局JS文件=============
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/router'
import 'mod/jquery'
import 'bootstrap'

//============导入JS组件=============
import 'mediaelement/'
import './script/jquery.pagination'
import 'jquery.easing'
import './script/plugin'
import './script/js-utils'
import NProgress from 'nprogress'
import '../global/plugins/snippet/sh_javascript.min'
import '../global/plugins/snippet/jquery.snippet'

//===========导入Vue组件==============
import App from './app.vue'
import sideBar from './components/common/container/sidebar.vue'
import Header from './components/common/header.vue'
import Container from './components/common/container.vue'
import Footer from './components/common/footer.vue'

import Overlay from './components/common/overlay.vue'

//==========导入CSS文件===============

import './style/index.css'
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './style/mediaelementplayer.css'
import 'mediaelement/build/mediaelementplayer.min.css'
import './style/magnific-popup.css'
import './style/animate.min.css'
import './style/icon-fonts.css'
import './style/pagination.css'
import 'nprogress/nprogress.css'
import '../global/plugins/snippet/jquery.snippet.css'
import './style/preload.css'

import './style/typo.css'


window.NProgress = NProgress;
Vue.config.debug = true;//开启错误提示

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

//注册全局组件
Vue.component('sidebar', sideBar);
Vue.component('content-component', Container);  //正文部分Container
Vue.component('footer-component', Footer); //页面顶部Header
Vue.component('header-component', Header); //页面底部Footer
Vue.component('overlay-component', Overlay); //页面悬浮层Overlay


new Vue({
    render: h => h(App),
    router
}).$mount('#app');


//百度统计代码，勿删
let _hmt = _hmt || [];
(function () {
    let hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?f2fe63740c9029388d85bf8cc1e56dc6";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
