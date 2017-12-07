<template>
    <!-- All Content -->
    <div class="content_block col-md-9 f_left">
        <div class="hm_blog_full_list hm_blog_list clearfix">

            <!-- Post Container -->
            <div id="post-1"
                 class="post-1 post type-post status-publish format-gallery has-post-thumbnail category-media tag-photos clearfix">
                <div class="post_detail">
                    <div class="post_title_con" v-if="article.title">
                        <h6 class="title">{{article.title}}</h6>
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

                    <div class="post_format_con">
								<span>
									<a href="javascript:;">
                                        <i class="ico-gallery" v-if="article.type==1"></i>
										<i class="ico-image4" v-if="article.type==2"></i>
                                        <i class="ico-video-camera" v-if="article.type==3"></i>
                                         <i class="ico-music" v-if="article.type==4"></i>
									</a>
								</span>
                    </div>
                    <div class="feature_inner" v-if="article.type==1">
                        <div class="feature_inner_corners">
                            <div class="porto_galla">
                                <template v-for="item in article.materials">
                                    <a :href="item.path" class="feature_inner_ling">
                                        <img :src="item.path" alt="Post Title">
                                    </a>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="feature_inner" v-if="article.type==2">
                        <div class="feature_inner_corners">
                            <img :src="article.materials[0].path+'?imageView2/0/q/75|watermark/1/image/aHR0cDovL2Nkbi5xdWxvbmdqdW4uY24vYmxvZ19pY29fZ3JleS5wbmc=/dissolve/50/gravity/SouthEast/dx/10/dy/10|imageslim'"
                                 style="max-height: 450px;width: 100%">
                        </div>
                    </div>
                    <div class="feature_inner" v-if="article.type==3">
                        <div class="feature_inner_corners">
                            <video controls style="width: 100%">
                                <source :src="article.materials[0].path" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="feature_inner" v-if="article.type==4">
                        <div class="self_hosted_container">
                            <audio class="hosted_audio" id="audio_player_1" width="100%" preload="metadata"
                                   controls="controls">
                                <source :src="article.materials[0].path" type="audio/mp3"/>

                            </audio>
                        </div>
                    </div>
                    <div class="blog_grid_con" v-if="article.summary">
                        <blockquote>
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
                            <router-link :to="{ name: '/article', params: { id: article.prev.id }}"
                                         v-if="article.prev!=null">
                                <i class="ico-arrow-back"></i><span class="t">上一篇</span>
                            </router-link>
                            <router-link :to="{ name: '/article', params: { id: article.next.id }}"
                                         v-if="article.next!=null">
                                <span class="t">下一篇</span><i class="ico-arrow-forward"></i>
                            </router-link>
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
                            <a href="javascript:;" rel="tag">{{item.name}}</a>
                        </template>
                    </div>
                    <!-- End Tags -->
                </div>


                <!-- About the author -->
                <div class="about_auther">
                    <div class="small_title">
									<span class="small_title_con">
										<span class="s_icon"><i class="ico-user5"></i></span>
										<span class="s_text">关于作者</span>
									</span>
                    </div>

                    <div class="about_auther_con clearfix">
									<span class="avatar_img">
										<img alt="author name" :src="author.photo">
									</span>
                        <div class="about_auther_details">
                            <a href="javascript:;" class="auther_link">{{author.name}}</a>
                            <span class="desc">{{author.desp}}
										</span>
                            <div class="social_media clearfix">
                                <a href="http://github.com/qulongjun" target="_blank" class="github">
                                    <i class="ico-github6"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/qulongjun" target="_blank" class="linkedin">
                                    <i class="ico-linkedin3"></i>
                                </a>
                                <a href="http://cv.qulongjun.cn" target="_blank" class="user">
                                    <i class="ico-user"></i>
                                </a>
                                <a href="tel:17717567217" target="_blank" class="phone">
                                    <i class="ico-phone"></i>
                                </a>
                                <a href="mailto:qulongjun12@163.com" target="_blank" class="email">
                                    <i class="ico-email"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- End About the author -->
            </div>
            <!-- End Post Container -->

            <!-- Comments Container -->
            <div id="comments" class="comments-area">
                <div class="small_title">
								<span class="small_title_con">
									<span class="s_icon"><i class="ico-comment-o"></i></span>
									<span class="s_text">评论</span>
								</span>
                </div>
                <ol class="comments_list clearfix" id="comment_container">
                    <template v-if="commentList.length == 0">
                        <span style="padding-left: 20px;">暂无评论。</span>
                    </template>
                    <template v-for="comment in commentList">
                        <item :model="comment"></item>
                    </template>
                </ol>


                <!-- Comments Form -->
                <div class="comments-form-area" id="comments-form">
                    <div class="comment-respond" id="respond">
                        <div class="small_title">
										<span class="small_title_con">
											<span class="s_icon"><i class="ico-pencil6"></i></span>
											<span class="s_text">发表评论</span>
										</span>
                        </div>
                        <form class="comment-form" id="commentform" method="post" action="">
                            <div class="alert alert-danger alert-dismissable" style="display: none;" id="emptyInfo">
                                文章评论内容不能为空哦！
                                <button type="button" class="close" data-dismiss="alert"
                                        aria-hidden="true">&times
                                </button>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <span v-if="desp" style="font-size: 14px;font-weight: bold;">{{desp}}</span>
                                <a class="main_button small_btn cancel-reply btn-danger"
                                   style="float: right;" target="_self"
                                   href="javascript:;" v-if="desp" @click="cancelReply">
                                    <i class="in_left ico-cancel"></i>取消评论
                                </a>
                                <p style="padding-right: 100px;margin-top: 10px;" v-html="detail" v-if="parent"></p>
                            </div>
                            <hr v-if="parent">
                            <div id="editor" class="comment-form-comment typo">
                            </div>
                            <p class="form-submit">
                                <input class="send_button4" type="button" value="回 复"
                                       @click="sendComment(1)" v-if="parent" id="reply-comment">
                                <input class="send_button" type="button" value="发 表" id="submit-comment"
                                       @click="sendComment(0)" v-if="!parent">
                            </p>
                        </form>
                    </div>
                </div>
                <!-- End Comments Form -->
            </div>
            <!-- End Comments Container -->
        </div>
        <!-- End blog List -->
    </div>
    <!-- End All Content -->
</template>
<style>
    .no-border-bottom {
        border-bottom: none !important;
    }
</style>
<script type="es6">
    import item from './comment.vue'
    import author from '../../../data/author.json'
    import E from 'wangeditor'
    import {_backBottom, _backPosition} from '../../../script/js-utils'
    import scriptjs from 'scriptjs'
    import plyr from 'plyr'
    import 'plyr/dist/plyr.css'
    let editor = null;
    module.exports = {
        components: {
            "item": item
        },
        data(){
            return {
                id: null,
                author,
                commentList: [],
                parent: "",
                desp: "",
                backTop: 0,
                detail: "",
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
            editor = new E('#editor');
            editor.create();
            scriptjs('//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59f2e09318cff082');
        },
        methods: {
            _fetchComment(){
                let me = this;
                me.$http.get("/api/v1.0/comment/list/" + me.id).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.commentList = data.data.results;
                        }
                    });
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            _fetchArticle(){
                let me = this;
                me.$http.get("/api/v1.0/article/findById/" + me.id).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.article = data.data.results[0];
                            me.$nextTick(() => {
                                switch (data.data.results[0].type) {
                                    case 1:
                                        me._initGallery();
                                        break;
                                    case 2:
                                        me._initStandard();
                                        break;
                                    case 3:
                                    case 4:
                                        me._initMedia();
                                        break;
                                }
                                $("pre").snippet("javascript");
                                scrollTo(0);
                            })
                        },
                        503: "当前编号的文章不存在！"
                    });
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            _queryArticle(){
                let me = this;
                showPreLoader();
                me.id = me.$route.params.id;
                me._fetchComment();
                me._fetchArticle();
                me.$nextTick(() => {
                    hidePreLoader();
                })
            },
            sendComment(isReply){
                let me = this;
                if (editor && !editor.txt.text()) {
                    $('#emptyInfo').fadeIn(1000)
                    return;
                }
                let comment = {
                    content: editor.txt.html(),
                    articleId: me.id,
                    id: isReply == 0 ? '' : me.parent,
                };
                me.$http.post("/api/v1.0/comment/create", comment).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            alert("评论发表成功！");
                            me._fetchComment();
                            editor.txt.clear();
                            me.cancelReply();
                            me.$nextTick(() => {
                                if (isReply) {
                                    _backPosition(me.backTop);
                                }
                            })
                        }
                    })
                }, response => {
                    serviceErrorInfo(response)
                });
            },
            replyComment(comment, event){
                let me = this;
                me.backTop = jQuery(event.target).parents('li').offset().top;
                me.desp = "回复【" + comment.nick + "】于【" + comment.create_time + "】的评论：";
                me.detail = comment.content;
                me.parent = comment.id;
                _backBottom(jQuery('#comments-form'));
            },
            cancelReply(){
                let me = this;
                me.desp = "";
                me.parent = "";
                me.detail = "";
            },
            _initStandard(){
//                $(".magnific-popup, a[data-rel^='magnific-popup']").magnificPopup({
//                    type: 'image',
//                    mainClass: 'mfp-with-zoom',
//                    zoom: {
//                        enabled: true,
//                        duration: 300,
//                        easing: 'ease-in-out',
//                        opener: function (openerElement) {
//                            return openerElement.is('img') ? openerElement : openerElement.find('img');
//                        }
//                    }
//
//                });
                $("#content img").each((index, item) => {
                    $(item).wrap('<a class="magnific-popup no-border-bottom" href="' + item.src + '"></a>')
                });
                $(".magnific-popup").magnificPopup({
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
            _initMedia(){
                plyr.setup();
            }
        }
    }
</script>