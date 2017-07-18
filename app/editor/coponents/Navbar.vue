<template>
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="true" data-auto-scroll="true"
            data-auto-speed="400"
            data-slide-speed="400" style="padding-top: 20px">
            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
            <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
            <li class="sidebar-toggler-wrapper hide">
                <div class="sidebar-toggler">
                    <span></span>
                </div>
            </li>
            <!-- END SIDEBAR TOGGLER BUTTON -->
            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
            <li class="sidebar-search-wrapper">
                <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
                <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
                <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
                <form class="sidebar-search  sidebar-search-bordered" method="GET">
                    <a href="javascript:;" class="remove">
                        <i class="icon-close"></i>
                    </a>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="搜索功能...">
                        <span class="input-group-btn">
                                            <a href="javascript:;" class="btn submit">
                                                <i class="icon-magnifier"></i>
                                            </a>
                                        </span>
                    </div>
                </form>
                <!-- END RESPONSIVE QUICK SEARCH FORM -->
            </li>
            <li class="nav-item start active">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-home"></i>
                    <span class="title">Dashboard</span>
                </a>
            </li>
            <li class="heading">
                <h3 class="uppercase">Blog</h3>
            </li>
            <li class="nav-item" >
                <a href="javascript:;" class="nav-link nav-toggle" >
                    <i class="icon-diamond"></i>
                    <span class="title">文章管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/article/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建新文章</span>
                        </a>
                    </router-link>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">文章信息维护</span>
                        </a>
                    </li>
                    <router-link :to="{ path: '/article/list' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">文章列表</span>
                        </a>
                    </router-link>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">属性设置</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">数据汇总</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-diamond"></i>
                    <span class="title">分类管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">创建新分类</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">分类信息维护</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">分类列表</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">回收站</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-diamond"></i>
                    <span class="title">标签管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">创建新标签</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">标签信息维护</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">标签列表</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">回收站</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-diamond"></i>
                    <span class="title">评论管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">评论审核</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">收藏评论</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">过滤设置</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">隐藏评论</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a href="javascript:;" class="nav-link ">
                            <span class="title">评论设置</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- END SIDEBAR MENU -->
        <!-- END SIDEBAR MENU -->
    </div>
</template>