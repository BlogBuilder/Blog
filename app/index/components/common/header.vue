<template>
    <header id="site_header" style="position: fixed;top: 0;width: 100%">
        <div id="navigation_bar-sticky-wrapper" class="sticky-wrapper">
            <div id="navigation_bar">
                <div class="content">
                    <div id="logo">
                        <a href="/list">
                            <img src="../../image/logo_d2.png" alt="Logo">
                        </a>
                    </div>

                    <div class="top-socials box_socials f_right hidden-xs">
                        <a href="//github.com/qulongjun" target="_blank">
                            <span class="soc_name">Github</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-github6"></i>
                        </a>
                        <a href="//www.linkedin.com/in/qulongjun" target="_blank">
                            <span class="soc_name">LinkedIn</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-linkedin2"></i>
                        </a>
                        <a href="//cv.qulongjun.cn" target="_blank">
                            <span class="soc_name">Resume</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-user3"></i>
                        </a>
                        <a href="tel:17717567217" target="_blank">
                            <span class="soc_name">Phone</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-phone"></i>
                        </a>
                        <a href="mailto:Longjun.qu@cootek.cn">
                            <span class="soc_name">Email</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-email"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style type="text/css">
    #navigation_bar .content {
        min-height: 76px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width: 768px) {
        #logo {
            margin: 0 auto;
        }
    }
</style>
<script type="es6">
    module.exports = {
        mounted(){
            let me = this;
            me._initPlugins();
            $(window).resize(function () {
                me._initPlugins();
                return false;
            });
        },
        methods: {
            _initPlugins(){
                if ($.isFunction($.fn.sticky)) {
                    let $navigation_bar = $("#navigation_bar");
                    $navigation_bar.unstick();
                    let mobile_menu_len = $navigation_bar.find(".mobile_menu").length;
                    let side_header = $(".header_on_side").length;
                    if (mobile_menu_len === 0 && side_header === 0) {
                        $navigation_bar.sticky({
                            topSpacing: 0,
                            className: "sticky_menu",
                            getWidthFrom: "body"
                        });
                    } else {
                        $navigation_bar.unstick();
                    }
                }
            }
        }
    };
</script>