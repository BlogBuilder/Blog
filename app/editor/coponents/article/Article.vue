<template>
    <div>
        <!-- BEGIN PAGE HEADER-->
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <a href="#">文章管理</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>创建新文章</span>
                </li>
            </ul>
        </div>

        <!-- END PAGE BAR -->
        <!-- BEGIN PAGE TITLE-->
        <h1 class="page-title"> 文章管理
            <small>／ Article</small>
        </h1>
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <router-view transition transition-mode="out-in"></router-view>
    </div>
</template>