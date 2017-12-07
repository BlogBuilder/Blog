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
                        <a href="#" target="_blank">
                            <span class="soc_name">Facebook</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-facebook4"></i>
                        </a>
                        <a href="#" target="_blank">
                            <span class="soc_name">Twitter</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-twitter4"></i>
                        </a>
                        <a href="#" target="_blank">
                            <span class="soc_name">Google+</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-google-plus"></i>
                        </a>
                        <a href="skype:#?call">
                            <span class="soc_name">Skype</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-skype"></i>
                        </a>
                        <a href="#" target="_blank">
                            <span class="soc_name">Picassa</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-picassa"></i>
                        </a>
                        <a href="#" target="_blank">
                            <span class="soc_name">Vimeo</span>
                            <span class="soc_icon_bg"></span>
                            <i class="ico-vimeo"></i>
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