<template>
    <!-- sidebar -->
    <aside id="sidebar" class="col-md-3 right_sidebar">

        <!-- Products Slider -->
        <div class="widget_block">
            <h6 class="widget_title">检索</h6>
            <div class="search_block">
                <form action="" method="get" class="widget_search">
                    <input type="search" placeholder="检索文章..." id="s" name="s"
                           class="serch_input">
                    <button class="search_btn" id="searchsubmit" type="submit">
                        <i class="ico-search2"></i>
                    </button>
                    <div class="clear"></div>
                </form>
            </div>

        </div>
        <!-- End Products Slider -->

        <!-- Tag Cloud -->
        <div class="widget_block">
            <h6 class="widget_title">标签云</h6>
            <div class="tagcloud style2 clearfix">
                <template v-for="item in tagList">
                    <a href="#"><span class="tag">{{item.name}}</span><span class="num">{{item.count}}</span></a>
                </template>
            </div>
        </div>
        <!-- End Tag Cloud -->

        <!-- Categories -->
        <div class="widget_block">
            <h6 class="widget_title">文章分类</h6>
            <ul class="cat_list_widget">
                <template v-for="item in categoryList">
                    <li>
                        <a href="#">{{item.name}}</a>
                        <span class="num_posts">{{item.count}}</span>
                    </li>
                </template>
            </ul>
        </div>
        <!-- End Categories -->


        <!-- Tabs -->
        <div class="widget_block">
            <div class="hm-tabs tabs1">
                <nav>
                    <ul class="tabs-navi">
                        <li><a data-content="inbox" class="selected" href="#"><span></span>热门</a>
                        </li>
                        <li><a data-content="new" href="#"><span></span>最近</a></li>
                        <li><a data-content="gallery" href="#"><i
                                class="icon_alone ico-comment-o"></i></a>
                        </li>
                    </ul>
                </nav>

                <ul class="tabs-body">
                    <li data-content="inbox" class="selected">
                        <ul class="posts_widget_list2">
                            <template v-for="item in hotList">
                                <li class="clearfix">
                                    <a href="#">
                                        <img alt="" title="" :src="item.materials">
                                        <span>{{item.title}}</span>
                                    </a>
                                    <span class="post_date"><i class="ico-comments-o"></i>{{item.comment_num}} Comments</span>
                                </li>
                            </template>
                        </ul>
                    </li>

                    <li data-content="new">
                        <ul class="posts_widget_list2">
                            <template v-for="item in recentlyList">
                                <li class="clearfix">
                                    <a href="#">
                                        <img alt="" title="" :src="item.materials">
                                        <span>{{item.title}}</span>
                                    </a>
                                    <span class="post_date">{{item.create_time}}</span>
                                </li>
                            </template>
                        </ul>
                    </li>

                    <li data-content="gallery">
                        <ul class="posts_widget_list2">
                            <template v-for="item in recentlyCommentList">
                                <li class="clearfix">
                                    <a href="#">
                                        <img alt="" title="" :src="item.materials">
                                        <span>{{item.name}}:</span>
                                    </a>
                                    <span class="post_comment">{{item.content}}</span>
                                </li>
                            </template>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End Tabs -->


        <!-- Social Media -->
        <div class="widget_block">
            <h6 class="widget_title">社交媒体</h6>
            <div class="social_links_widget clearfix">
                <a href="#" target="_blank" class="twitter"><i class="ico-twitter4"></i></a>
                <a href="#" target="_blank" class="facebook"><i class="ico-facebook4"></i></a>
                <a href="#" target="_blank" class="googleplus"><i
                        class="ico-google-plus"></i></a>
                <a href="#" target="_blank" class="linkedin"><i class="ico-linkedin3"></i></a>
                <a href="#" target="_blank" class="vimeo"><i class="ico-vimeo"></i></a>

                <!--<a href="skype:#?call" class="skype"><i class="ico-skype2"></i></a>-->
                <!--<a href="#" target="_blank" class="rss"><i class="ico-rss"></i></a>-->
                <!--<a href="#" target="_blank" class="flickr"><i class="ico-flickr2"></i></a>-->
                <!--<a href="#" target="_blank" class="picasa"><i class="ico-picassa"></i></a>-->
                <!--<a href="#" target="_blank" class="tumblr"><i class="ico-tumblr"></i></a>-->

                <!--<a href="#" target="_blank" class="dribble"><i class="ico-dribbble"></i></a>-->
                <!--<a href="#" target="_blank" class="soundcloud"><i class="ico-soundcloud"></i></a>-->
                <!--<a href="#" target="_blank" class="instagram"><i class="ico-instagram3"></i></a>-->
                <!--<a href="#" target="_blank" class="pinterest"><i class="ico-pinterest-p"></i></a>-->
                <!--<a href="#" target="_blank" class="youtube"><i class="ico-youtube3"></i></a>-->
            </div>
        </div>
        <!-- End Social Media -->

    </aside>
    <!-- End sidebar -->
</template>
<script type="es6">
    import category from '../demo/category.json'
    import tag from '../demo/tag.json'
    import hot from '../demo/hot.json'
    import recently from '../demo/recently.json'
    import recentlyComment from '../demo/recentlyComment.json'
    module.exports = {
        data(){
            return {
                categoryList: [],
                tagList: [],
                hotList: [],
                recentlyList: [],
                recentlyCommentList: []
            }
        },
        mounted(){
            var me = this;
            me._fetchCategory();
            me._fetchTag();
            me._fetchHot();
            me._fetchRecently();
            me._fetchRecentlyComment();
        },
        methods: {
            _fetchCategory(){
                const me = this;
                const data = category;
                me.categoryList = data.results;
            },
            _fetchTag(){
                const me = this;
                const data = tag;
                me.tagList = data.results;
            },
            _fetchHot(){
                const me = this;
                const data = hot;
                me.hotList = data.results;
            },
            _fetchRecently(){
                const me = this;
                const data = recently;
                me.recentlyList = data.results;
            },
            _fetchRecentlyComment(){
                const me = this;
                const data = recentlyComment;
                me.recentlyCommentList = data.results;
            }
        }
    }
</script>