<template>
    <section class="content_section">
        <div class="row_spacer" style="height: 100vh;border: 1px dotted #e9e9e9 ">
            <div class="text-center">
                <img src="../../image/logo-dangGui.png" width="40%" height="40%"/>
            </div>
        </div>
        <div class="content row_spacer">
            <!--<div class="main_title centered upper">-->
                <!--<h2><span class="line"><i class="ico-pencil2"></i></span><img src="../../image/logo-sm.png"/></h2>-->
            <!--</div>-->
            <div class="content_spacer clearfix">
                <router-view></router-view>
                <sidebar></sidebar>
            </div>
        </div>
    </section>
</template>