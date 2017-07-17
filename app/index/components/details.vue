<template>
    <!-- All Content -->
    <div class="content_block col-md-9 f_left">
        <div class="hm_blog_full_list hm_blog_list clearfix">

            <!-- Post Container -->
            <div id="post-1"
                 class="post-1 post type-post status-publish format-gallery has-post-thumbnail category-media tag-photos clearfix">

                <!--<transition>-->
                <!--<keep-alive>-->
                <!--<router-view></router-view>-->
                <!--</keep-alive>-->
                <!--</transition>-->

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
                        <span style="padding-left: 20px;">暂无用户评论。</span>
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
                            <span v-if="desp" style="font-size: 17px;font-weight: 300">{{desp}}</span><a
                                class="main_button small_btn cancel-reply"
                                style="float: right;" target="_self"
                                href="javascript:;" v-if="desp" @click="cancelReply">
                            <i class="in_left ico-cancel"></i>取 消
                        </a>
                            <input type="text" size="30" value="" placeholder="昵称" name="author" v-model="name"
                                   id="author">
                            <br>
                            <div id="editor" class="comment-form-comment">
                            </div>
                            <p class="form-submit">
                                <input class="send_button4" type="button" value="回 复"
                                       @click="sendComment(1)" v-if="desp">
                                <input class="send_button" type="button" value="新评论" id="submit-comment"
                                       @click="sendComment(0)">
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
    import comment from '../demo/comment.json'
    import author from '../demo/author.json'

    import item from './comment.vue'


    import E from 'wangeditor'
    import {_backBottom, _backPosition} from '../script/js-utils'

    var editor = null;
    module.exports = {
        components: {
            "item": item
        },
        data(){
            return {
                author: {},
                commentList: [],
                parent: "",
                name: "佚名",
                desp: "",
                backTop: 0
            }
        },
        watch: {
            '$route': '_queryComment'
        },
        mounted(){
            const me = this;
            me._queryComment();
            me._fetchAuthor();
            editor = new E('#editor');
            editor.create();
        },
        methods: {
            _fetchComment(id){
                const me = this;
                me.$http.get("/api/comment/list", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    const data = response.data;
                    me.commentList = data.results;
                }, response => {
                    serverErrorInfo();
                });
            },
            _fetchAuthor(){
                const me = this;
                me.$http.get("/api/author/info").then(response => {
                    var author = response.data;
                    me.author = author;
                }, response => {
                    serverErrorInfo();
                });
            },
            _queryComment(){
                const me = this;
                const id = me.$route.query.id;
                if (!id) {
                    alert("请选择文章");
                } else
                    me._fetchComment(id);
            },
            sendComment(isReply){
                const me = this;
                const id = me.$route.query.id;
                if (!id) {
                    error("请选择一篇文章");
                    return;
                }
                const comment = {
                    name: me.name,
                    content: editor.txt.html(),
                    id: id,
                    parent: isReply == 0 ? '' : me.parent,
                    photo: Math.floor(Math.random() * 824)
                };
                if (!comment.name) comment.name = "佚名";
                me.$http.post("/api/comment/create", comment).then(response => {
                    const data = response.data;
                    codeState(data.code, {
                        200(){
                            alert("评论发表成功！");
                            me._fetchComment(id);
                            editor.txt.clear();
                            me.$nextTick(() => {
                                if (isReply) {
                                    _backPosition(me.backTop);
                                }
                            })
                        }
                    })
                }, response => {
                    serverErrorInfo()
                });
            },
            replyComment(comment, event){
                const me = this;
                me.backTop = jQuery(event.target).parents('li').offset().top;
                me.desp = "回复【" + comment.name + "】于【" + comment.create_time + "】的评论：";
                me.parent = comment.id;
                _backBottom(jQuery('#comments-form'));
            },
            cancelReply(){
                const me = this;
                me.desp = "";
                me.parent = "";
            }
        }
    }
</script>