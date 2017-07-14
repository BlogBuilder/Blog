<template>
    <!--<div class="row">-->
    <!--组件Demo-->
    <!--<my-component></my-component>-->
    <!--路由Demo-->


    <!--</div>-->


    <!-- Our Blog Grids -->
    <section class="content_section">
        <div class="content row_spacer">
            <div class="main_title centered upper">
                <h2><span class="line"><i class="ico-pencil2"></i></span>Less is More</h2>
            </div>
            <!-- All Content -->
            <div class="content_spacer clearfix">
                <!--<list></list>-->

                <transition>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>

                <sidebar></sidebar>
            </div>
            <!-- End All Content -->
        </div>
    </section>
    <!-- End Our Blog Grids -->
</template>
