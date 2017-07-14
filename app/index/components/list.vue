<template>

    <div class="content_block col-md-9 f_left">
        <div class="hm_blog_full_list hm_blog_list clearfix">

            <template v-for="article in articleList">
                <template v-if="article.type==1">
                    <div class="blog_grid_block clearfix">
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
                                        <a :href="item" class="feature_inner_ling">
                                            <img :src="item" alt="gallery photos">
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="blog_grid_con">
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
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="#">
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
									<a href="#">
										<i class="ico-pencil4"></i>
									</a>
								</span>
                        </div>
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                                <a href="../images/blog/blog5-large.jpg" class="feature_inner_ling"
                                   data-rel="magnific-popup">
                                    <img :src="article.materials" alt="photo">
                                </a>
                            </div>
                        </div>
                        <div class="blog_grid_con">
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
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="#">
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
									<a href="#">
										<i class="ico-video-camera"></i>
									</a>
								</span>
                        </div>
                        <div class="feature_inner">
                            <div class="feature_inner_corners">
                                <div class="embed-container">
                                    <a href="http://vimeo.com/29193046" data-rel="magnific-popup"></a>
                                    <iframe :src="article.materials"
                                            frameborder="0" allowfullscreen="true" width="100%"
                                            height="100%"></iframe>
                                </div>

                            </div>
                        </div>
                        <div class="blog_grid_con">
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
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="#">
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
                                    <source :src="article.materials"
                                            :type="article.audio_type"/>

                                </audio>
                            </div>
                        </div>
                        <div class="blog_grid_con">
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
                            <p class="desc">{{article.summary}}</p>
                            <a class="btn_a" href="#">
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
									<a href="#">
										<i class="ico-quote-right"></i>
									</a>
								</span>
                        </div>
                        <div class="feature_inner">
                            <a href="#" class="quote_con">
                                <span>{{article.summary}}</span>
                                <span class="quote_author">{{article.quote_author}}</span>
                            </a>
                        </div>
                        <div class="blog_grid_con">
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
                            <a class="btn_a" href="#">
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
        <div id="pagination" class="pagination">
            <ul class="clearfix">
                <li class="prev_pagination"><a href="#"><i class="ico-arrow-left4"></i></a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="next_pagination"><a href="#"><i class="ico-arrow-right4"></i></a>
                </li>
            </ul>
        </div>
        <!-- End Pagination -->
    </div>
    <!-- End Content Block -->

</template>
<script type="es6">
    import list from '../demo/list.json'
    module.exports = {
        data(){
            return {
                articleList: []
            }
        },
        mounted(){
            var me = this;
            me._fetchData();
            me.$nextTick(() => {
                console.log(me.articleList);
            });
        },
        methods: {
            _fetchData(){
                var me = this;
                var data = list;
                me.articleList = data.results;
                me.$nextTick(() => {

                });
            }
        }
    }
</script>