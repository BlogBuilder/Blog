<template>
    <div>
        <!--回到顶部-->
        <a href="javascript:;" class="hm_go_top"></a>.
    </div>
</template>
<script type="es6">
    module.exports = {
        mounted(){
            let me = this;
            me._backTop();
        },
        methods: {
            _backTop(){
                let to_top_offset = 300,
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
                    scrollTo(0);
                });

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 30 && $("body").hasClass("site_boxed") && $("body").hasClass("header_on_side")) {
                        $("#side_heder").addClass("start_side_offset");
                    } else {
                        $("#side_heder").removeClass("start_side_offset");
                    }
                });
            }
        }
    };
</script>