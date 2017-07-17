<template>
    <div>
        <div class="post_title_con">
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
        </div>

        <div class="post_format_con">
								<span>
									<a href="javascript:;">
										<i class="ico-image4"></i>
									</a>
								</span>
        </div>
        <div class="feature_inner">
            <div class="feature_inner_corners">
                <a :href="article.materials.material" class="feature_inner_ling" data-rel="magnific-popup">
                    <img :src="article.materials.material" alt="Post Title">
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
                <a href="javascript:;" @click="clickOther(article.prev)" v-if="article.prev!=null"><i
                        class="ico-arrow-back"></i><span class="t">上一篇</span></a>
                <a href="javascript:;" @click="clickOther(article.next)" v-if="article.next!=null"><span
                        class="t">下一篇</span><i
                        class="ico-arrow-forward"></i></a>
            </div>
            <!-- End Next and Prev Post-->

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
                article: {
                    category: {},
                    materials: {}
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
                    const standard = response.data;
                    if (standard.code == 504) {
                        error("当前文章不存在！");
                        me.$router.push("/list");
                        return;
                    }
                    me.article = standard;
                    me.$nextTick(() => {
                        me._initStandard();
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