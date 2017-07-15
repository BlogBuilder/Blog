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
											<template v-for="item in article.category">
												<a href="#">{{item.name}}</a> ,
											</template>
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
										<i class="ico-image4"></i>
									</a>
								</span>
        </div>
        <div class="feature_inner">
            <div class="feature_inner_corners">
                <a :href="article.materials" class="feature_inner_ling" data-rel="magnific-popup">
                    <img :src="article.materials" alt="Post Title">
                </a>
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
                <a href="javascript:;" @click="clickOther(article.prev)"><i class="ico-arrow-back"></i><span class="t">Prev</span></a>
                <a href="javascript:;" @click="clickOther(article.next)"><span class="t">Next</span><i
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
    import standard from '../../demo/standard.json'
    import {redictURL} from '../../script/js-utils'
    module.exports = {
        data(){
            return {
                article: {}
            }
        },
        watch: {
            '$route': '_queryArticle'
        },
        mounted(){
            const me = this;
            me._queryArticle();
        },
        methods: {
            _fetchData(id){
                console.log("加载id为" + id + "的文章");
                var me = this;
                me.article = standard;
                me.$nextTick(() => {
                    me._initStandard();
                })
            },
            _queryArticle(){
                const me = this;
                const id = me.$route.query.id;
                if (!id) {
                    alert("请选择文章");
                } else
                    me._fetchData(id);
            },
            _initStandard(){
                $(".magnific-popup, a[data-rel^='magnific-popup']").magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
                    zoom: {
                        enabled: true,
                        duration: 300,
                        easing: 'ease-in-out',
                        opener: function (openerElement) {
                            return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                    }

                });
            },
            _fetchTag(item){
                const me = this;
                me.$router.push(redictURL(me.$route.fullPath, "/list", "add", "tag", item.id));
            },
            clickOther(id){
                const me = this;
                me.$router.push("/detail/standard?id=" + id);
            }
        }
    }
</script>