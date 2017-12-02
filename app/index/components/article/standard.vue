<template>
    <div class="post_detail">
        <div class="post_title_con" v-if="article.title">
            <h6 class="title"><a href="javascript:;">{{article.title}}</a></h6>
            <span class="meta">
									<span class="meta_part">
											<i class="ico-clock7"></i>
											<span>{{article.create_time}}</span>
									</span>
									<span class="meta_part hidden-xs">
											<i class="ico-comment-o"></i>
											<span>{{article.comment_num}} Comments</span>
									</span>
									<span class="meta_part">
										<i class="ico-folder-open-o"></i>
										<span>{{article.category.name}}</span>
									</span>
								</span>
        </div>

        <div class="post_format_con" v-if="article.materials.material">
								<span>
									<a href="javascript:;">
										<i class="ico-image4"></i>
									</a>
								</span>
        </div>
        <div class="feature_inner" v-if="article.materials.material">
            <div class="feature_inner_corners">
                <a :href="article.materials.material+'?imageView2/0/q/75|watermark/1/image/aHR0cDovL2Nkbi5xdWxvbmdqdW4uY24vYmxvZ19pY29fZ3JleS5wbmc=/dissolve/50/gravity/SouthEast/dx/10/dy/10|imageslim'"
                   class="feature_inner_ling" data-rel="magnific-popup">
                    <img :src="article.materials.material+'?imageView2/0/q/75|watermark/1/image/aHR0cDovL2Nkbi5xdWxvbmdqdW4uY24vYmxvZ19pY29fZ3JleS5wbmc=/dissolve/50/gravity/SouthEast/dx/10/dy/10|imageslim'">
                </a>
            </div>
        </div>
        <div class="blog_grid_con" v-if="article.summary">
            <blockquote>
                <i class="ico-quote"></i>
                <span class="quote_text typo">{{article.summary}}</span>
            </blockquote>
        </div>
        <div class="typo" id="content" v-html="article.content">
        </div>

        <!-- Next / Prev and Social Share-->
        <div class="post_next_prev_con clearfix">
            <div class="addthis_inline_share_toolbox_g6f1 pull-left" style="margin-top: 16px"></div>
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
    import {redictURL} from '../../script/js-utils'
    import scriptjs from 'scriptjs'
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
            let me = this;
            me._queryArticle();
            scriptjs('//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59f2e09318cff082');
        },
        methods: {
            _fetchData(id){
                let me = this;
                showPreLoader();
                me.$http.get("/api/article/findById", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    let standard = response.data;
                    if (standard.code === 504) {
                        error("当前文章不存在！");
                        me.$router.push("/list");
                        return;
                    }
                    me.article = standard;
                    me.$nextTick(() => {
                        me._initStandard();
                        $("pre").snippet("javascript");
                        scrollTo(0);
                        hidePreLoader();
                    })
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            _queryArticle(){
                let me = this;
                let id = me.$route.query.id;
                if (!id) {
                    alert("请选择文章");
                } else
                    me._fetchData(id);
            },
            _initStandard(){
                $(".magnific-popup, a[data-rel^='magnific-popup']").magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-with-zoom',
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
                let me = this;
                me.$router.push(redictURL(me.$route.fullPath, "/list", "add", "tag", item.id));
            },
            clickOther(article){
                let me = this;
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