<template>
    <div class="content_block col-md-9 f_left" style="min-height: 100vh">
        <div class="hm_blog_list clearfix" style="margin-top: 50px;">
            <template v-for="item in articleList">
                <div class="blog_grid_block clearfix">
                    <div class="feature_inner" v-if="item.type==1">
                        <div class="feature_inner_corners">
                            <div class="feature_inner_btns">
                                <a href="javascript:;" class="expand_image"><i class="ico-maximize"></i></a>
                            </div>
                            <div class="porto_galla">
                                <template v-for="img in item.materials">
                                    <a :href="img.material+'?imageView2/0/q/75|watermark/1/image/aHR0cDovL2Nkbi5xdWxvbmdqdW4uY24vYmxvZ19pY29fZ3JleS5wbmc=/dissolve/50/gravity/SouthEast/dx/10/dy/10|imageslim'"
                                       class="feature_inner_ling">
                                        <img :src="img.material+'?imageMogr2/auto-orient/thumbnail/x250/interlace/1/blur/1x0/quality/75|watermark/1/image/aHR0cDovL2Nkbi5xdWxvbmdqdW4uY24vYmxvZ19pY29fZ3JleS5wbmc=/dissolve/30/gravity/SouthEast/dx/10/dy/10|imageslim'"
                                             alt="gallery photos"
                                             style="width: 100%;height: 200px;min-height: 200px;">
                                    </a>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="feature_inner" v-if="item.type==2">
                        <div class="feature_inner_corners">
                            <div class="feature_inner_btns">
                                <a href="javascript:;" class="expand_image"><i class="ico-maximize"></i></a>
                            </div>
                            <a :href="item.materials.material+'?imageView2/0/q/75|watermark/1/image/aHR0cDovL2Nkbi5xdWxvbmdqdW4uY24vYmxvZ19pY29fZ3JleS5wbmc=/dissolve/50/gravity/SouthEast/dx/10/dy/10|imageslim'"
                               class="feature_inner_ling"
                               data-rel="magnific-popup">
                                <img :src="item.materials.material+'?imageMogr2/auto-orient/thumbnail/x250/interlace/1/blur/1x0/quality/75|watermark/1/image/aHR0cDovL2Nkbi5xdWxvbmdqdW4uY24vYmxvZ19pY29fZ3JleS5wbmc=/dissolve/30/gravity/SouthEast/dx/10/dy/10|imageslim'"
                                     alt="photo"
                                     style="width: 100%;height: 200px;min-height: 200px;">
                            </a>
                        </div>
                    </div>

                    <div class="feature_inner" v-if="item.type==3">
                        <div class="feature_inner_corners">
                            <video controls style="width: 100%">
                                <source :src="item.materials.material" type="video/mp4">
                            </video>
                        </div>
                    </div>

                    <div class="feature_inner" v-if="item.type==4">
                        <div class="self_hosted_container">
                            <audio class="hosted_audio" id="audio_player_2" width="100%" preload="metadata"
                                   controls="controls">
                                <source :src="item.materials.material"
                                        :type="item.audio_type"/>

                            </audio>
                        </div>
                    </div>


                    <div class="blog_grid_con">
                        <h6 class="title"><a href="javascript:;">{{item.title}}</a></h6>
                        <span class="meta">
									<span class="meta_part">
											<i class="ico-clock7"></i>
											<span>{{item.create_time}}</span>
									</span>
									<span class="meta_part hidden-xs">
											<i class="ico-comment-o"></i>
											<span>{{item.comment_num}} Comments</span>
									</span>
									<span class="meta_part">
										<i class="ico-folder-open-o"></i>
										<span>
											<a href="javascript:;">{{item.category.name}}</a>
										</span>
									</span>

								</span>
                        <p class="desc">{{item.summary}}</p>

                        <router-link class="btn_a" :to="'/article/'+item.id">
                            <span>
										<i class="in_left ico-angle-right"></i>
										<span>查看详情</span>
										<i class="in_right ico-angle-right"></i>
									</span>
                        </router-link>
                    </div>
                </div>
            </template>
        </div>
        <!-- End blog List -->
        <!-- Pagination -->
        <div class="pagination" style="width: 100%;margin-top: 50px;">
            <div class="M-box front" style="margin-top:10px; "></div>
        </div>
        <!-- End Pagination -->
    </div>
    <!-- End Content Block -->

</template>
<style>

</style>

<script type="es6">

    import plyr from 'plyr'
    import 'plyr/dist/plyr.css'
    module.exports = {
        data(){
            return {
                articleList: [],
                currentPage: 1,
                condition: "",
                rowCount: 10
            }
        },
        mounted(){
            let me = this;
            me._initTotal();
        },
        watch: {
            '$route': '_queryList'
        },
        methods: {
            _initTotal(){
                let me = this;
                showPreLoader();
                let query = me.$route.query;
                me.condition = jQuery.param(query);
                me._fetchData();
            },
            _fetchData(){
                let me = this;
                me.$http.get("/api/article/list", {
                    params: {
                        rowCount: 5,
                        currentPage: me.currentPage,
                        condition: me.condition
                    }
                }).then(response => {
                    const data = response.data;
                    me.articleList = data.results;
                    jQuery(".M-box").pagination({
                        pageCount: data.totalPage,
                        count: 1,
                        nextContent: '<i class="ico-arrow-right4"></i>',
                        prevContent: '<i class="ico-arrow-left4"></i>',
                        current: me.currentPage,
                        callback: function (data) {
                            me.currentPage = data.getCurrent();
                            me._initTotal();
                            scrollTo(0);
                        }
                    });
                    me.$nextTick(() => {
                        me._initPlugins();
                        hidePreLoader();
                    })
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            _queryList(){
                let me = this;
                me.currentPage = 1;
                me._initTotal();
            },
            _initPlugins(){
                let me = this;
                me._initGallery();
                me._initStandard();
                plyr.setup();
                $('.expand_image').each(function (index, element) {
                    $(this).click(function () {
                        $(this).parent().siblings("a").click();
                        $(this).parent().siblings(".porto_galla").find("a:first").click();
                        $(this).parent().siblings(".embed-container").find("a").click();
                        return false;
                    });
                });
            },
            _initGallery(){
                //图集图片轮播组件
                $(".porto_galla").data('owlCarousel') && $(".porto_galla").data('owlCarousel').destroy();
                $(".porto_galla").owlCarousel({
                    direction: "ltr",
                    slideSpeed: 900,
                    autoPlay: 3000,
                    autoHeight: false,
                    items: 1,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsTabletSmall: false,
                    itemsMobile: false,
                    stopOnHover: true,
                    navigation: true,
                    pagination: true,
                    navigationText: [
                        "<span class='enar_owl_p'><i class='ico-angle-left'></i></span>",
                        "<span class='enar_owl_n'><i class='ico-angle-right'></i></span>"],
                });

                //图集图片展开组件
                $('.porto_galla').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                    removalDelay: 500,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass = /*this.st.el.attr('data-effect')*/ "mfp-zoom-in";
                        }
                    },
                    closeOnContentClick: true,
                    midClick: true,
                    retina: {
                        ratio: 1,
                        replaceSrc: function (item, ratio) {
                            return item.src.replace(/\.\w+$/, function (m) {
                                return '@2x' + m;
                            });
                        }
                    }
                });

            },
            _initStandard(){
                $(".magnific-popup, a[data-rel^='magnific-popup']").magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

                    zoom: {
                        enabled: true,
                        duration: 300,
                        easing: 'ease-in-out',
                        // The "opener" function should return the element from which popup will be zoomed in
                        // and to which popup will be scaled down
                        // By defailt it looks for an image tag:
                        opener: function (openerElement) {
                            // openerElement is the element on which popup was initialized, in this case its <a> tag
                            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                            return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                    }

                });
            }
        }
    }
</script>