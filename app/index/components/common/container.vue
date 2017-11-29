<template>
    <section class="content_section">
        <div class="row_spacer hidden-xs" style="height: 100vh;border: 1px dotted #e9e9e9 ">
            <div class="text-center" style="position: relative;top: 50%;transform: translateY(-50%);">
                <img src="../../image/logo-dangGui.png" width="40%" height="40%"
                     style="max-width: 100%;max-height: 100%;"/>
            </div>
        </div>
        <div class="content row_spacer">
            <div class="content_spacer clearfix">
                <router-view></router-view>
                <sidebar></sidebar>
            </div>
        </div>
    </section>
</template>