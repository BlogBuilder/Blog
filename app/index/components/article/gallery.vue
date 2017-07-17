<template>
    <div>
        <div class="post_title_con">
            <h6 class="title"><a href="#">{{article.title}}</a></h6>
            <span class="meta">
									<span class="meta_part">
										<a href="#">
											<i class="ico-clock7"></i>
											<span>{{article.create_time}}</span>
										</a>
									</span>
									<span class="meta_part">
										<a href="#">
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
										<a href="#">
											<i class="ico-user5"></i>
											<span>{{article.author}}</span>
										</a>
									</span>
								</span>
        </div>

        <div class="post_format_con">
								<span>
									<a href="#">
										<i class="ico-gallery"></i>
									</a>
								</span>
        </div>
        <div class="feature_inner">
            <div class="feature_inner_corners">
                <div class="porto_galla">
                    <template v-for="item in article.materials">
                        <a :href="item.material" class="feature_inner_ling">
                            <img :src="item.material" alt="Post Title">
                        </a>
                    </template>
                </div>
            </div>
        </div>
        <div class="blog_grid_con">
            <blockquote>
                <i class="ico-quote"></i>
                <span class="quote_text">{{article.summary}}</span>
            </blockquote>
        </div>
        <div class="blog_grid_con" v-html="article.content">
        </div>

        <!-- Next / Prev and Social Share-->
        <div class="post_next_prev_con clearfix">
            <!-- Next and Prev Post-->
            <div class="post_next_prev clearfix">
                <a href="javascript:;" @click="clickOther(article.prev)" v-if="article.prev!=null"><i
                        class="ico-arrow-back"></i><span class="t">上一篇</span></a>
                <a href="javascript:;" @click="clickOther(article.next)" v-if="article.next!=null"><span
                        class="t">下一篇</span><i
                        class="ico-arrow-forward"></i></a>
            </div>
            <!-- End Next and Prev Post-->

            <!-- Social Share-->
            <div class="single_pro_row">
                <div id="share_on_socials">
                    <!-- <h6>Share:</h6> -->
                    <a class="facebook"
                       href="http://www.facebook.com/sharer.php?s=100&amp;p[url]=http://www.yourlink.com&amp;p[title]=your-post-title&amp;p[summary]=your-content-here&amp;p[images[0]=http://www.yourlink.com/image.jpg"
                       target="_blank"><i class="ico-facebook4"></i></a>
                    <a class="twitter" href="http://twitter.com/home?status=your-post-title+http://www.yourlink.com"
                       target="_blank"><i class="ico-twitter4"></i></a>
                    <a class="googleplus" href="https://plus.google.com/share?url=http://www.yourlink.com"
                       target="_blank"><i class="ico-google-plus"></i></a>
                    <a class="pinterest"
                       href="http://pinterest.com/pin/create/bookmarklet/?media=http://www.yourlink.com/image.jpg&amp;url=http://www.yourlink.com&amp;is_video=false&amp;description=your-post-title"
                       target="_blank"><i class="ico-pinterest-p"></i></a>

                    <a class="linkedin"
                       href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://www.yourlink.com&amp;title=your-post-title&amp;source=http://www.yourlink.com"
                       target="_blank"><i class="ico-linkedin3"></i></a>

                </div>
            </div>
            <!-- End Social Share-->
        </div>
        <!-- End Next / Prev and Social Share-->
        <!-- Tags -->
        <div class="small_title">
								<span class="small_title_con">
									<span class="s_icon"><i class="ico-tag4"></i></span>
									<span class="s_text">标签</span>
								</span>
        </div>
        <div class="tags_con">
            <!-- <h6>Tags:</h6> -->
            <template v-for="item in article.tag">
                <a href="javascript:;" @click="_fetchTag(item)" rel="tag">{{item.name}}</a>
            </template>
        </div>
        <!-- End Tags -->
    </div>
</template>
<script type="es6">
    import gallery from '../../demo/gallery.json'
    import {redictURL} from '../../script/js-utils'
    module.exports = {
        data(){
            return {
                article: {
                    category: {}
                }
            }
        },
        watch: {
            '$route': '_queryArticle'
        },
        mounted(){
            const me = this;
            me._queryArticle();
            $('.hm_go_top').trigger("click");
        },
        methods: {
            _fetchData(id){
                const me = this;
                me.$http.get("/api/article/findById", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    const gallery = response.data;
                    if (gallery.code == 504) {
                        error("当前文章不存在！");
                        me.$router.push("/list");
                        return;
                    }
                    me.article = gallery;
                    me.$nextTick(() => {
                        me._initGallery();
                    })
                }, response => {
                    serverErrorInfo();
                });
            },
            _queryArticle(){
                const me = this;
                const id = me.$route.query.id;
                if (!id) {
                    alert("请选择文章");
                } else
                    me._fetchData(id);
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
            _fetchTag(item){
                const me = this;
                me.$router.push(redictURL(me.$route.fullPath, "/list", "add", "tag", item.id));
            },
            clickOther(article){
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