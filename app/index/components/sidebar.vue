<template>
    <!-- sidebar -->
    <aside id="sidebar" class="col-md-3 right_sidebar">

        <!-- Products Slider -->
        <div class="widget_block">
            <h6 class="widget_title">检索</h6>
            <div class="search_block">
                <form action="" method="get" class="widget_search">
                    <input type="search" placeholder="Start Searching..." id="s" name="s"
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
                <a href="#"><span class="tag">Responnsive</span><span class="num">12</span></a>
                <a href="#"><span class="tag">Creative</span><span class="num">24</span></a>
                <a href="#"><span class="tag">CSS3</span><span class="num">8</span></a>
                <a href="#"><span class="tag">Design</span><span class="num">12</span></a>
                <a href="#"><span class="tag">Graphic</span><span class="num">4</span></a>
                <a href="#"><span class="tag">HTML5</span><span class="num">56</span></a>
            </div>
        </div>
        <!-- End Tag Cloud -->

        <!-- Categories -->
        <div class="widget_block">
            <h6 class="widget_title">文章分类</h6>
            <ul class="cat_list_widget">
                <li>
                    <a href="#">Media</a>
                    <span class="num_posts">61</span>
                </li>
                <li>
                    <a href="#">Movies</a>
                    <span class="num_posts">22</span>
                </li>
                <li>
                    <a href="#">News</a>
                    <span class="num_posts">78</span>
                </li>
                <li>
                    <a href="#">Sound</a>
                    <span class="num_posts">12</span>
                </li>
                <li>
                    <a href="#">Tutorials</a>
                    <span class="num_posts">7</span></li>
                <li>
                    <a href="#">Tweets</a>
                    <span class="num_posts">28</span>
                </li>
                <li>
                    <a href="#">Uncategorized</a>
                    <span class="num_posts">9</span>
                </li>
                <li>
                    <a href="#">Wordpress</a>
                    <span class="num_posts">32</span>
                </li>
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
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb1.jpg">
                                    <span>Barbour Jacket</span>
                                </a>
                                <span class="post_date"><i class="ico-comments-o"></i>123 Comments</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb2.jpg">
                                    <span>Visvim Gornergrat</span>
                                </a>
                                <span class="post_date"><i class="ico-comments-o"></i>57 Comments</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb3.jpg">
                                    <span>Nanamica Graphic Tee</span>
                                </a>
                                <span class="post_date"><i class="ico-comments-o"></i>25 Comments</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb4.jpg">
                                    <span>Adidas Hoodie</span>
                                </a>
                                <span class="post_date"><i class="ico-comments-o"></i>14 Comments</span>
                            </li>
                        </ul>
                    </li>

                    <li data-content="new">
                        <ul class="posts_widget_list2">
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb1.jpg">
                                    <span>Barbour Jacket</span>
                                </a>
                                <span class="post_date">2015/01/23</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb2.jpg">
                                    <span>Visvim Gornergrat</span>
                                </a>
                                <span class="post_date">2015/01/23</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb3.jpg">
                                    <span>Nanamica Graphic Tee</span>
                                </a>
                                <span class="post_date">2015/01/23</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb4.jpg">
                                    <span>Adidas Hoodie</span>
                                </a>
                                <span class="post_date">2015/02/12</span>
                            </li>
                        </ul>
                    </li>

                    <li data-content="gallery">
                        <ul class="posts_widget_list2">
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb1.jpg">
                                    <span>Alan Snow:</span>
                                </a>
                                <span class="post_comment">There are many variations of passages of Lorem.</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb2.jpg">
                                    <span>John Doe:</span>
                                </a>
                                <span class="post_comment">There are many variations of passages of Lorem.</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb3.jpg">
                                    <span>Mary Loe:</span>
                                </a>
                                <span class="post_comment">Lorem Ipsum available, but the majority.</span>
                            </li>
                            <li class="clearfix">
                                <a href="#">
                                    <img alt="" title="" src="../images/blog/thumb4.jpg">
                                    <span>Harry John:</span>
                                </a>
                                <span class="post_comment">Lorem Ipsum available, but the majority.</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End Tabs -->


        <!-- Social Media -->
        <div class="widget_block">
            <h6 class="widget_title">Social Media</h6>
            <div class="social_links_widget clearfix">
                <a href="#" target="_blank" class="twitter"><i class="ico-twitter4"></i></a>
                <a href="#" target="_blank" class="facebook"><i class="ico-facebook4"></i></a>
                <a href="#" target="_blank" class="googleplus"><i
                        class="ico-google-plus"></i></a>
                <a href="#" target="_blank" class="linkedin"><i class="ico-linkedin3"></i></a>
                <a href="#" target="_blank" class="vimeo"><i class="ico-vimeo"></i></a>

                <!-- <a href="skype:#?call" class="skype"><i class="ico-skype2"></i></a>
                <a href="#" target="_blank" class="rss"><i class="ico-rss"></i></a>
                <a href="#" target="_blank" class="flickr"><i class="ico-flickr2"></i></a>
                <a href="#" target="_blank" class="picasa"><i class="ico-picassa"></i></a>
                <a href="#" target="_blank" class="tumblr"><i class="ico-tumblr"></i></a>

                <a href="#" target="_blank" class="dribble"><i class="ico-dribbble"></i></a>
                <a href="#" target="_blank" class="soundcloud"><i class="ico-soundcloud"></i></a>
                <a href="#" target="_blank" class="instagram"><i class="ico-instagram3"></i></a>
                <a href="#" target="_blank" class="pinterest"><i class="ico-pinterest-p"></i></a>
                <a href="#" target="_blank" class="youtube"><i class="ico-youtube3"></i></a> -->
            </div>
        </div>
        <!-- End Social Media -->

    </aside>
    <!-- End sidebar -->
</template>