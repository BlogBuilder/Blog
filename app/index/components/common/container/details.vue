<template>
    <!-- All Content -->
    <div class="content_block col-md-9 f_left">
        <div class="hm_blog_full_list hm_blog_list clearfix">

            <!-- Post Container -->
            <div id="post-1"
                 class="post-1 post type-post status-publish format-gallery has-post-thumbnail category-media tag-photos clearfix">


                <router-view></router-view>

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
										<img alt="client name" :src="author.photo">
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
                                    <i class="ico-mail6"></i>
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
                                <input class="send_button4" type="button" value="回复评论"
                                       @click="sendComment(1)" v-if="parent" id="reply-comment">
                                <input class="send_button" type="button" value="新评论" id="submit-comment"
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
<script type="es6">
    import item from './comment.vue'
    import E from 'wangeditor'
    import {_backBottom, _backPosition} from '../../../script/js-utils'

    let editor = null;
    module.exports = {
        components: {
            "item": item
        },
        data(){
            return {
                author: {},
                commentList: [],
                parent: "",
                desp: "",
                backTop: 0,
                detail: ""
            }
        },
        watch: {
            '$route': '_queryComment'
        },
        mounted(){
            let me = this;
            me._queryComment();
            me._fetchAuthor();
            editor = new E('#editor');
            editor.create();
        },
        methods: {
            _fetchComment(id){
                let me = this;
                me.$http.get("/api/comment/list", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    let data = response.data;
                    me.commentList = data.results;
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            _fetchAuthor(){
                let me = this;
                me.$http.get("/api/author/info").then(response => {
                    let author = response.data;
                    me.author = author;
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            _queryComment(){
                let me = this;
                let id = me.$route.query.id;
                if (!id) {
                    alert("请选择文章");
                } else
                    me._fetchComment(id);
            },
            sendComment(isReply){
                let me = this;
                let id = me.$route.query.id;
                if (!id) {
                    error("请选择一篇文章");
                    return;
                }
                let comment = {
                    content: editor.txt.html(),
                    id: id,
                    parent: isReply == 0 ? '' : me.parent,
                    photo: Math.floor(Math.random() * 824)
                };
                me.$http.post("/api/comment/create", comment).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            alert("评论发表成功！");
                            me._fetchComment(id);
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
                me.desp = "回复【" + comment.name + "】于【" + comment.create_time + "】的评论：";
                me.detail = comment.content;
                me.parent = comment.id;
                _backBottom(jQuery('#comments-form'));
            },
            cancelReply(){
                let me = this;
                me.desp = "";
                me.parent = "";
                me.detail = "";
            }
        }
    }
</script>