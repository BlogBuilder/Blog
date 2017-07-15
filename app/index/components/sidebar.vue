<template>
    <!-- sidebar -->
    <aside id="sidebar" class="col-md-3 right_sidebar">

        <!-- Products Slider -->
        <div class="widget_block">
            <h6 class="widget_title">检索</h6>
            <div class="search_block">
                <form action="" method="get" onkeydown="if(event.keyCode==13)return false;" class="widget_search">
                    <input type="search" placeholder="检索文章..." id="searchText" name="s"
                           class="serch_input" @keyup.enter="inputSearch($event)">
                    <button class="search_btn" id="searchsubmit" type="button" @click="clickSearch">
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
                <a href="javascript:;" @click="clickTag()"><span class="tag">全部</span></a>
                <template v-for="item in tagList">
                    <a href="javascript:;" @click="clickTag(item)"><span class="tag">{{item.name}}</span><span
                            class="num">{{item.count}}</span></a>
                </template>
            </div>
        </div>
        <!-- End Tag Cloud -->

        <!-- Categories -->
        <div class="widget_block">
            <h6 class="widget_title">文章分类</h6>
            <ul class="cat_list_widget">
                <li>
                    <a href="javascript:;" @click="clickCategory()">全部</a>
                </li>
                <template v-for="item in categoryList">
                    <li>
                        <a href="javascript:;" @click="clickCategory(item)">{{item.name}}</a>
                        <span class="num_posts">{{item.count}}</span>
                    </li>
                </template>
            </ul>
        </div>
        <!-- End Categories -->


        <!-- Time List -->
        <div class="widget_block">
            <h6 class="widget_title">发表时间</h6>
            <!-- My Accordion -->
            <div class="enar_accordion plus_minus" data-type="toggle"> <!-- accordion - toggle -->
                <div class="enar_occ_container" data-expanded="true">
                    <span class="enar_occ_title">Year 2017</span>
                    <div class="enar_occ_content">
                        <div class="acc_content">
                            <ul class="cat_list_widget no_numbers">
                                <li>
                                    <a href="#">Media</a>
                                </li>
                                <li>
                                    <a href="#">Movies</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="#">Sound</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="enar_occ_container" data-expanded="false">
                    <span class="enar_occ_title">Year 2016</span>
                    <div class="enar_occ_content">
                        <div class="acc_content">
                            <ul class="cat_list_widget no_numbers">
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,12)">December</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,11)">November</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,10)">October</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,9)">September</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,8)">August</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,7)">July</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,6)">June</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,5)">May</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,4)">April</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,3)">March</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,2)">February</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2016,1)">January</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="enar_occ_container" data-expanded="false">
                    <span class="enar_occ_title">Year 2015</span>
                    <div class="enar_occ_content">
                        <div class="acc_content">
                            <ul class="cat_list_widget no_numbers">
                                <li>
                                    <a href="#">Media</a>
                                </li>
                                <li>
                                    <a href="#">Movies</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="#">Sound</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End My Accordion -->
        </div>
        <!-- Time List -->


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
    import {changeURLPara, removeURLPara, redictURL} from '../script/js-utils'

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
            const me = this;
            me._fetchCategory();
            me._fetchTag();
            me._fetchHot();
            me._fetchRecently();
            me._fetchRecentlyComment();
            me.$nextTick(() => {
                me._initTabs();
                me._initAccordion();
            })
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
            },
            clickCategory(category){
                const me = this;
                if (category) {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "add", "category", category.id));
                } else {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "remove", "category"));
                }
            },
            clickTag(tag){
                const me = this;
                if (tag) {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "add", "tag", tag.id));
                } else {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "remove", "tag"));
                }
            },
            clickSearch(){
                const me = this;
                const value = document.querySelector('#searchText').value;
                if (value) {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "add", "key", value));
                } else {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "remove", "key"));
                }
            },
            inputSearch(event){
                const me = this;
                if (event.target.value) {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "add", "key", event.target.value));
                } else {
                    me.$router.push(redictURL(me.$route.fullPath, "/list", "remove", "key"));
                }
            },
            clickTime(year, month){
                const me = this;
                if (year && month) {
                    var path = redictURL(me.$route.fullPath, "/list", "add", "year", year);
                    path = redictURL(path, "/list", "add", "month", month);
                    me.$router.push(path);
                } else {
                    var path = redictURL(me.$route.fullPath, "/list", "remove", "year");
                    path = redictURL(path, "/list", "remove", "month");
                    me.$router.push(path);
                }
            },
            _initTabs(){
                $('.hm-tabs').each(function (index) {
                    var allparent = $(this);
                    var all_width = allparent.width();

                    var tabItems = allparent.find('.tabs-navi a'),
                        tabContentWrapper = allparent.find('.tabs-body');

                    tabItems.on('click', function (event) {
                        event.preventDefault();

                        var selectedItem = $(this);
                        var parentlist = selectedItem.parent();

                        if (parentlist.index() === 0) {
                            selectedItem.parent().siblings("li").removeClass('prev_selected');
                        } else {
                            selectedItem.parent().prev().addClass('prev_selected').siblings("li").removeClass('prev_selected');
                        }

                        if (!selectedItem.hasClass('selected')) {
                            var selectedTab = selectedItem.data('content'),
                                selectedContent = tabContentWrapper.find('li[data-content="' + selectedTab + '"]'),
                                slectedContentHeight = selectedContent.innerHeight();

                            tabItems.removeClass('selected');
                            selectedItem.addClass('selected');
                            selectedContent.addClass('selected').siblings('li').removeClass('selected');
                            //animate tabContentWrapper height when content changes
                            tabContentWrapper.animate({
                                'height': slectedContentHeight
                            }, 200);
                        }
                    });

                    //hide the .hm-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
                    checkScrolling($('.hm-tabs nav'));
                    $(window).on('resize', function () {
                        checkScrolling($('.hm-tabs nav'));
                        tabContentWrapper.css('height', 'auto');
                    });
                    $('.hm-tabs nav').on('scroll', function () {
                        checkScrolling($(this));
                    });

                    function checkScrolling(tabs) {
                        var totalTabWidth = parseInt(tabs.children('.tabs-navi').width()),
                            tabsViewport = parseInt(tabs.width());
                        if (tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
                            tabs.parent('.hm-tabs').addClass('is-ended');
                        } else {
                            tabs.parent('.hm-tabs').removeClass('is-ended');
                        }
                    }

                });
            },
            _initAccordion(){
                $(".enar_accordion").each(function (index, element) {
                    var its_type = $(this).attr("data-type");
                    var its_item = $(this).find(".enar_occ_container");
                    var its_item_lenth = its_item.length;

                    its_item.each(function (index, element) {
                        var item_item = $(this);
                        var item_item_title = $(this).find(".enar_occ_title");
                        var item_title_height = $(this).find(".enar_occ_title").outerHeight();
                        var item_expanded = item_item.attr("data-expanded");  //false - true
                        var item_item_content = $(this).find(".enar_occ_content");
                        var item_item_height = item_item_content.find(".acc_content").outerHeight();

                        if (item_expanded == "true") {//occ_expanded
                            item_item.addClass("occ_expanded");
                            item_item_content.stop(true, true).animate({
                                height: item_item_height + 'px',
                            }, 300);
                        }
                        item_item_title.unbind();
                        item_item_title.click(function (event) {
                            if (item_item.hasClass("occ_expanded")) {
                                item_item.removeClass("occ_expanded");
                                item_item_content.stop(true, true).animate({
                                    height: '0px',
                                }, 300);
                                item_item_content.closest('.content_filter_item').stop(true, true).animate({
                                    height: item_title_height + 10 + 'px',
                                }, 300);

                            } else {
                                item_item.addClass("occ_expanded");
                                item_item_content.stop(true, true).animate({
                                    height: item_item_height + 'px',
                                }, 300);
                                item_item_content.closest('.content_filter_item').stop(true, true).animate({
                                    height: item_item_height + item_title_height + 10 + 'px',
                                }, 300);
                                //--------> Accordion Type
                                if (its_type == "accordion") {
                                    item_item.siblings().removeClass("occ_expanded");
                                    item_item.siblings().find(".enar_occ_content").stop(true, true).animate({
                                        height: '0px',
                                    }, 300);
                                }
                            }
                        });

                    });

                });
            }
        }
    }
</script>