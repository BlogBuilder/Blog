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
										<i class="ico-video-camera"></i>
									</a>
								</span>
        </div>
        <div class="feature_inner">
            <div class="feature_inner_corners">
                <video controls style="width: 100%">
                    <source :src="article.materials.material" type="video/mp4">
                </video>
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
    import {redictURL} from '../../script/js-utils'
    import plyr from 'plyr'
    import 'plyr/dist/plyr.css'
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
                NProgress.start();
                me.$http.get("/api/article/findById", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    NProgress.set(0.5);
                    const video = response.data;
                    if (video.code == 504) {
                        error("当前文章不存在！");
                        me.$router.push("/list");
                        return;
                    }
                    me.article = video;
                    me.$nextTick(() => {
                        me._initVideo();
                        $("pre").snippet("javascript");
                        NProgress.done();
                    })
                }, response => {

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
            _initVideo(){
                plyr.setup();
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