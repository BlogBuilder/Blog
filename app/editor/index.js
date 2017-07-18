//============导入JS文件=============
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/router'
import 'mod/jquery'
import 'bootstrap'
import 'mod/cookie'
import 'mod/slimscorll'
import 'mod/switch'
import 'mod/blockui'
import 'mod/theme'
import 'mod/layout'
import 'mod/layout_demo'
import 'mod/sidebar'
import 'mod/nav'
import 'mod/multiselect'
import 'mod/validate'
import 'mod/valudate_additional'
import 'mod/fileinput'
import 'mod/select'
import 'mod/ajaxFileUpload'
import 'wangeditor'
import 'mod／utils'
import 'mod/pagination'
//===========导入Vue组件==============

import Top from './coponents/Top.vue'
import Container from './coponents/Container.vue'
import Footer from './coponents/Footer.vue'



//==========导入CSS文件===============
import 'style/font_sans'
import 'style/font_awesome'
// import 'style/iziDemo'
import 'style/line_icon'
import 'style/bootstrap'
import 'style/switch'

import 'style/iziToast'
import 'style/iziModal'

import 'style/component'
import 'style/plugins'

import 'style/layout'
import 'style/theme'
import 'style/custom'
import 'style/multiselect'
import 'style/fileinput'
import 'style/select'
import 'style/pagination'

Vue.config.debug = true;//开启错误提示
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


new Vue({
    el: '#header',
    render: h => h(Top)
});

new Vue({
    el: '#container',
    router,
    render: h => h(Container)
});

new Vue({
    el: '#footer',
    render: h => h(Footer)
});
