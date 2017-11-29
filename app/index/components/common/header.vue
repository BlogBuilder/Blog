<template>
    <header id="site_header" style="position: fixed;top: 0;width: 100%">
        <div id="navigation_bar-sticky-wrapper" class="sticky-wrapper">
            <div id="navigation_bar">
                <div class="content">
                    <div id="logo">
                        <a href="/list">
                            <img src="../../image/logo-with-icon.png" alt="Enar Logo">
                        </a>
                    </div>
                    <!-- Top Search -->
                    <form class="top_search clearfix small_top_search" onkeydown="if(event.keyCode==13)return false;">
                        <div class="top_search_con">
                            <input type="text" class="s" id="githubSearch" placeholder="Github Search ...">
                            <span class="top_search_icon"><i class="ico-search4"></i></span>
                            <input type="submit" class="top_search_submit">
                        </div>
                    </form>
                    <!-- End Top Search -->
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </header>
</template>

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
            getScreenWidth(){
                return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
            },
            _initPlugins(){
                let me = this;
                $(".top_search").each(function (index, element) {
                    let top_search = $(this);
                    top_search.submit(function (event) {
                        event.stopPropagation();
                        if (top_search.hasClass("small_top_search")) {
                            top_search.removeClass("small_top_search");
                            top_search.addClass("large_top_search");
                            if (me.getScreenWidth() <= 315) {
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
                            if (me.getScreenWidth() <= 315) {
                                top_search.siblings("#top_cart").animate({opacity: 1});
                            }
                            top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 1});
                        }
                    });
                });
                if (me.getScreenWidth() < 1190) {
                    $("#navigation_bar").find(".top_search").addClass("small_top_search");
                } else {
                    $("#navigation_bar").find(".top_search").removeClass("small_top_search");
                }

                $("#githubSearch").keydown(function (e) {
                    if (e.keyCode === 13) {
                        const value = e.target.value;
                        window.open("https://github.com/search?utf8=%E2%9C%93&q=" + value);
                    }
                })


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