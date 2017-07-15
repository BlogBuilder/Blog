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
                            <a href="#" class="auther_link">{{author.name}}</a>
                            <span class="desc">{{author.desp}}
										</span>
                            <div class="social_media clearfix">
                                <a href="#" target="_blank" class="twitter">
                                    <i class="ico-twitter4"></i>
                                </a>
                                <a href="#" target="_blank" class="facebook">
                                    <i class="ico-facebook4"></i>
                                </a>
                                <a href="#" target="_blank" class="googleplus">
                                    <i class="ico-google-plus"></i>
                                </a>
                                <a href="#" target="_blank" class="linkedin">
                                    <i class="ico-linkedin3"></i>
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
                        <span>尚未有用户评论。</span>
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

                            <div id="editor" class="comment-form-comment">
                            </div>
                            <p class="form-submit">
                                <input class="send_button" type="button" value="发表评论" id="submit-comment"
                                       name="submit">
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

    module.exports = {
        components: {
            "item": item
        },
        data(){
            return {
                author: {},
                commentList: []
            }
        },
        watch: {
            '$route': '_queryComment'
        },
        mounted(){
            const me = this;
            me._queryComment();
            me._fetchAuthor();
            const editor = new E('#editor');
            editor.create();
        },
        methods: {
            _fetchComment(id){
                const me = this;
                me.commentList = comment.results;
            },
            _fetchAuthor(){
                const me = this;
                me.author = author;
            },
            _queryComment(){
                const me = this;
                const id = me.$route.query.id;
                if (!id) {
                    alert("请选择文章");
                } else
                    me._fetchComment(id);
            }
        }
    }
</script>