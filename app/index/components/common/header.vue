<template>
    <header id="site_header">
        <div id="navigation_bar-sticky-wrapper" class="sticky-wrapper">
            <div id="navigation_bar">
                <div class="content">
                    <div id="logo">
                        <a href="/list">
                            <img class="logo_dark" src="../../image/logo-dark.png" alt="Enar Logo">
                            <img class="logo_light" src="../../image/logo-light.png" alt="Enar Logo">
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