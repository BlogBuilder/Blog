<template>
    <div>
        <!--进入页面预加载-->
        <div id="preloader">
            <div class="spinner">
                <div class="sk-dot1"></div>
                <div class="sk-dot2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        </div>
        <!--联系我-->
        <div id="popup-dialog-box" class="zoom-anim-dialog mfp-hide small-dialog">
            <section class="content_section">
                <div class="content contract">
                    <div class="rows_container clearfix">
                        <div class="col-md-12">
                            <h2 class="title1 upper"><i class="ico-pencil5"></i>Contact ME</h2>
                            <div class="contact_details_row clearfix">
						<span class="icon">
							<i class="ico-location5"></i>
						</span>
                                <div class="c_con">
                                    <span class="c_title">Address</span>
                                    <span class="c_detail">
								<span class="c_name">Company :</span>
								<span class="c_desc"><a href="http://j.map.baidu.com/MbrKL" target="_blank">No.2007, HongMei Road - ShangHai, China</a></span>
							</span>
                                    <span class="c_detail">
								<span class="c_name">Home :</span>
								<span class="c_desc"><a href="http://j.map.baidu.com/tqp79" target="_blank">NO.333, LaiFang Road - ShangHai, China</a></span>
							</span>
                                </div>
                            </div>

                            <div class="contact_details_row clearfix">
						<span class="icon">
							<i class="ico-bubble4"></i>
						</span>
                                <div class="c_con">
                                    <span class="c_title">Phone Numbers</span>
                                    <span class="c_detail">
								<span class="c_name">Mobile Phone :</span>
								<span class="c_desc"><a href="tel:17717567217"
                                                        target="_blank">（+86）177-1756-7217</a></span>
							</span>
                                </div>
                            </div>

                            <div class="contact_details_row clearfix">
						<span class="icon">
							<i class="ico-paperplane"></i>
						</span>
                                <div class="c_con">
                                    <span class="c_title">Email Address</span>
                                    <span class="c_detail">
								<span class="c_name">Company :</span>
								<span class="c_desc"><a href="mailto:Longjun.qu@cootek.cn" target="_blank">Longjun.qu@cootek.cn</a></span>
							</span>
                                    <span class="c_detail">
								<span class="c_name">Personal :</span>
								<span class="c_desc"><a href="mailto:qulongjun12@163.com" target="_blank">qulongjun12@163.com</a></span>
							</span>
                                </div>
                            </div>

                            <div class="contact_details_row clearfix">
						<span class="icon">
							<i class="ico-pen2"></i>
						</span>
                                <div class="c_con">
                                    <span class="c_title">Other Datails</span>
                                    <span class="c_detail">
								<span class="c_name">Resume :</span>
								<span class="c_desc"><a href="http://cv.qulongjun.cn" target="_blank">http://cv.qulongjun.cn</a></span>
							</span>
                                </div>
                            </div>
                        </div><!-- Grid -->
                    </div>
                </div>
            </section>
        </div>
        <!--回到顶部-->
        <a href="javascript:;" class="hm_go_top"></a>
    </div>
</template>
<script type="es6">
    module.exports = {
        mounted(){
            let me = this;
            $('#preloader').fadeOut('slow', function () {
                $(this).remove();
            });
            me._backTop();
            me._contractMe();
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
                    $('body,html').animate({
                            scrollTop: 0,
                            //easing : "easeOutElastic"
                        }, {queue: false, duration: scroll_top_duration, easing: "easeInOutExpo"}
                    );
                });

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 30 && $("body").hasClass("site_boxed") && $("body").hasClass("header_on_side")) {
                        $("#side_heder").addClass("start_side_offset");
                    } else {
                        $("#side_heder").removeClass("start_side_offset");
                    }
                });
            },
            _contractMe(){
                $('.popup-with-zoom-anim').magnificPopup({
                    type: 'inline',
                    fixedContentPos: true,
                    fixedBgPos: true,
                    overflowY: 'auto',
                    closeBtnInside: true,
                    preloader: false,
                    midClick: true,
                    removalDelay: 300,
                    width: 'auto',
                    mainClass: 'my-mfp-zoom-in'
                });
            }
        }
    };
</script>