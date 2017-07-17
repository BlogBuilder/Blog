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

//===========导入Vue组件==============
import App from './app.vue'
import sideBar from './components/sidebar.vue'

//==========导入CSS文件===============
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './style/mediaelementplayer.css'
import 'mediaelement/build/mediaelementplayer.min.css'
import './style/magnific-popup.css'
import './style/animate.min.css'
import './style/icon-fonts.css'
import './style/pagination.css'

Vue.config.debug = true;//开启错误提示
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

//注册全局组件
Vue.component('sidebar', sideBar);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');

$(window).load(function () {
    _preLoad();
    _topSearchFunc();
    _backTop();
});

$(window).resize(function () {
    _topSearchFunc();
    return false;
});


function _preLoad() {
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
}

function getScreenWidth() {
    return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
}

function _topSearchFunc() {
    $(".top_search").each(function (index, element) {
        var top_search = $(this);
        top_search.submit(function (event) {
            event.stopPropagation();
            if (top_search.hasClass("small_top_search")) {
                top_search.removeClass("small_top_search");
                top_search.addClass("large_top_search");
                if (getScreenWidth() <= 315) {
                    top_search.siblings("#top_cart").animate({opacity: 0});
                }
                top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 0});
                return false;
            }

        });
        $(top_search).on("click touchstart", function (e) {
            e.stopPropagation();
        });
        $(document).on("click touchstart", function (e) {
            if (top_search.hasClass("large_top_search")) {
                top_search.removeClass("large_top_search");
                top_search.addClass("small_top_search");
                if (getScreenWidth() <= 315) {
                    top_search.siblings("#top_cart").animate({opacity: 1});
                }
                top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 1});
            }
        });
    });
    if (getScreenWidth() < 1190) {
        $("#navigation_bar").find(".top_search").addClass("small_top_search");
    } else {
        $("#navigation_bar").find(".top_search").removeClass("small_top_search");
    }
}

function _backTop() {
    var to_top_offset = 300,
        to_top_offset_opacity = 1200,
        scroll_top_duration = 900,
        $back_to_top = $('.hm_go_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > to_top_offset) {
            $back_to_top.addClass('hm_go_is-visible');
        } else {
            $back_to_top.removeClass('hm_go_is-visible hm_go_fade-out');
        }
        if ($(this).scrollTop() > to_top_offset_opacity) {
            $back_to_top.addClass('hm_go_fade-out');
        }
        return false;
    });
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
                //easing : "easeOutElastic"
            }, {queue: false, duration: scroll_top_duration, easing: "easeInOutExpo"}
        );
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30 && $("body").hasClass("site_boxed") && $("body").hasClass("header_on_side")) {
            $("#side_heder").addClass("start_side_offset");
        } else {
            $("#side_heder").removeClass("start_side_offset");
        }
    });
}
