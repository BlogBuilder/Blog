<template>
    <div class="content_block col-md-9 f_left">
        <div class="hm_blog_full_list hm_blog_list clearfix">
            <template v-for="article in articleList">
                <template v-if="article.type==1">
                    <div class="blog_grid_block clearfix">
                        <div class="post_format_con">
								<span>
									<a href="javascript:;">
										<i class="ico-gallery"></i>
									</a>
								</span>
                        </div>
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                                <div class="porto_galla">
                                    <template v-for="item in article.materials">
                                        <a :href="item.material" class="feature_inner_ling">
                                            <img :src="item.material" alt="gallery photos">
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="blog_grid_con">
                            <h6 class="title"><a href="javascript:;">{{article.title}}</a></h6>
                            <span class="meta">
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-clock7"></i>
											<span>{{article.create_time}}</span>
										</a>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-comment-o"></i>
											<span>{{article.comment_num}} Comments</span>
										</a>
									</span>
									<span class="meta_part">
										<i class="ico-folder-open-o"></i>
										<span>
												<a href="javascript:;">{{article.category.name}}</a>
										</span>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-user5"></i>
											<span>{{article.author}}</span>
										</a>
									</span>
								</span>
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="javascript:;" @click="viewDetails(article)">
									<span>
										<i class="in_left ico-angle-right"></i>
										<span>查看详情</span>
										<i class="in_right ico-angle-right"></i>
									</span>
                            </a>
                        </div>
                    </div>


                </template>

                <template v-if="article.type==2">

                    <div class="blog_grid_block clearfix">
                        <div class="post_format_con">
								<span>
									<a href="javascript:;">
										<i class="ico-pencil4"></i>
									</a>
								</span>
                        </div>
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                                <a :href="article.materials.material" class="feature_inner_ling"
                                   data-rel="magnific-popup">
                                    <img :src="article.materials.material" alt="photo">
                                </a>
                            </div>
                        </div>
                        <div class="blog_grid_con">
                            <h6 class="title"><a href="javascript:;">{{article.title}}</a></h6>
                            <span class="meta">
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-clock7"></i>
											<span>{{article.create_time}}</span>
										</a>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-comment-o"></i>
											<span>{{article.comment_num}} Comments</span>
										</a>
									</span>
									<span class="meta_part">
										<i class="ico-folder-open-o"></i>
										<span>
											<a href="javascript:;">{{article.category.name}}</a>
										</span>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-user5"></i>
											<span>{{article.author}}</span>
										</a>
									</span>
								</span>
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="javascript:;" @click="viewDetails(article)">
									<span>
										<i class="in_left ico-angle-right"></i>
										<span>查看详情</span>
										<i class="in_right ico-angle-right"></i>
									</span>
                            </a>
                        </div>
                    </div>

                </template>

                <template v-if="article.type==3">

                    <div class="blog_grid_block clearfix">
                        <div class="post_format_con">
								<span>
									<a href="javascript:;">
										<i class="ico-video-camera"></i>
									</a>
								</span>
                        </div>
                        <div class="feature_inner">
                            <!--<div class="feature_inner_corners">-->
                                <!---->

                            <!--</div>-->
							<video controls style="width: 100%" id="js-player">
								<source :src="article.materials.material" type="video/mp4">
							</video>
                        </div>
                        <div class="blog_grid_con">
                            <h6 class="title"><a href="javascript:;">{{article.title}}</a></h6>
                            <span class="meta">
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-clock7"></i>
											<span>{{article.create_time}}</span>
										</a>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-comment-o"></i>
											<span>{{article.comment_num}} Comments</span>
										</a>
									</span>
									<span class="meta_part">
										<i class="ico-folder-open-o"></i>
										<span>
											<a href="javascript:;">{{article.category.name}}</a>
										</span>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-user5"></i>
											<span>{{article.author}}</span>
										</a>
									</span>
								</span>
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="javascript:;" @click="viewDetails(article)">
									<span>
										<i class="in_left ico-angle-right"></i>
										<span>查看详情</span>
										<i class="in_right ico-angle-right"></i>
									</span>
                            </a>
                        </div>
                    </div>

                </template>

                <template v-if="article.type==4">

                    <div class="blog_grid_block clearfix">
                        <div class="feature_inner">
                            <div class="self_hosted_container">
                                <audio class="hosted_audio" id="audio_player_1" width="100%" preload="metadata"
                                       controls="controls">
                                    <source :src="article.materials.material"
                                            :type="article.audio_type"/>

                                </audio>
                            </div>
                        </div>
                        <div class="blog_grid_con">
                            <h6 class="title"><a href="javascript:;">{{article.title}}</a></h6>
                            <span class="meta">
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-clock7"></i>
											<span>{{article.create_time}}</span>
										</a>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-comment-o"></i>
											<span>{{article.comment_num}} Comments</span>
										</a>
									</span>
									<span class="meta_part">
										<i class="ico-folder-open-o"></i>
										<span>
											<a href="javascript:;">{{article.category.name}}</a>
										</span>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-user5"></i>
											<span>{{article.author}}</span>
										</a>
									</span>
								</span>
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="javascript:;" @click="viewDetails(article)">
									<span>
										<i class="in_left ico-angle-right"></i>
										<span>查看详情</span>
										<i class="in_right ico-angle-right"></i>
									</span>
                            </a>
                        </div>
                    </div>

                </template>

                <template v-if="article.type==5">

                    <div class="blog_grid_block format_quote clearfix">
                        <div class="post_format_con">
								<span>
									<a href="javascript:;">
										<i class="ico-quote-right"></i>
									</a>
								</span>
                        </div>
                        <div class="feature_inner">
                            <a href="javascript:;" class="quote_con">
                                <span>{{article.summary}}</span>
                                <span class="quote_author">{{article.quote_author}}</span>
                            </a>
                        </div>
                        <div class="blog_grid_con">
								<span class="meta">
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-clock7"></i>
											<span>{{article.create_time}}</span>
										</a>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-comment-o"></i>
											<span>{{article.comment_num}} Comments</span>
										</a>
									</span>
									<span class="meta_part">
										<i class="ico-folder-open-o"></i>
										<span>
												<a href="javascript:;">{{article.category.name}}</a>
										</span>
									</span>
									<span class="meta_part">
										<a href="javascript:;">
											<i class="ico-user5"></i>
											<span>{{article.author}}</span>
										</a>
									</span>
								</span>
                            <a class="btn_a" href="javascript:;" @click="viewDetails(article)">
									<span>
										<i class="in_left ico-angle-right"></i>
										<span>查看详情</span>
										<i class="in_right ico-angle-right"></i>
									</span>
                            </a>
                        </div>
                    </div>
                </template>
            </template>
        </div>
        <!-- End blog List -->
        <!-- Pagination -->
        <div class="pagination">
            <div class="M-box front pull-right" style="margin-top:10px; "></div>
        </div>
        <!-- End Pagination -->
    </div>
    <!-- End Content Block -->

</template>
<script type="es6">

    import list from '../demo/list.json'
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
            var me = this;
            me._initTotal(1);
        },
        watch: {
            '$route': '_queryList'
        },
        methods: {
            _initTotal(page){
                var me = this;
                var query = me.$route.query;
                me.condition = jQuery.param(query);
                me._fetchData(page);
                me._fetchPages(page);
            },
            _fetchData(page){
                const me = this;
                me.$http.get("/api/article/list", {
                    params: {
                        rowCount: 5,
                        currentPage: page,
                        condition: me.condition
                    }
                }).then(response => {
                    const data = response.data;
                    me.articleList = data.results;
                    me.$nextTick(() => {
                        me._initGallery();
                        me._initStandard();
                        me._initAudio();
                        plyr.setup(document.querySelector('#js-player'));
                    })
                }, response => {
                    serverErrorInfo();
                });
            },
            _fetchPages (page) {
                const me = this;
                me.$http.get("/api/article/list", {
                    params: {
                        rowCount: 5,
                        currentPage: page,
                        condition: me.condition
                    }
                }).then(response => {
                    const data = response.data;
                    jQuery(".M-box").pagination({
                        pageCount: data.totalPage,
                        nextContent: '<i class="ico-arrow-right4"></i>',
                        prevContent: '<i class="ico-arrow-left4"></i>',
                        callback: function (data) {
                            me._fetchData(data.getCurrent());
                            me.currentPage = data.getCurrent();
                        }
                    });
                }, response => {
                    serverErrorInfo();
                });
            },
            _queryList(){
                var me = this;
                me._initTotal(1);
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
            },
            _initAudio(){
                $("audio.hosted_audio").mediaelementplayer();
            },
            viewDetails(article){
                const me = this;
                switch (article.type) {
                    case 1:
                        me.$router.push("/detail/gallery?id=" + article.id);
                        break;
                    case 2:
                        me.$router.push("/detail/standard?id=" + article.id);
                        break;
                    case 3:
                        me.$router.push("/detail/video?id=" + article.id);
                        break;
                    case 4:
                        me.$router.push("/detail/audio?id=" + article.id);
                        break;
                    case 5:
                        me.$router.push("/detail/quote?id=" + article.id);
                        break;
                }
            }
        }
    }
</script>