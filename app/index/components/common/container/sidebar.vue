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
                    <span class="enar_occ_title" data-year="2017">Year 2017</span>
                    <div class="enar_occ_content">
                        <div class="acc_content">
                            <ul class="cat_list_widget no_numbers">
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,12)">December</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,11)">November</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,10)">October</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,9)">September</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,8)">August</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,7)">July</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,6)">June</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,5)">May</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,4)">April</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,3)">March</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,2)">February</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2017,1)">January</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="enar_occ_container" data-expanded="false">
                    <span class="enar_occ_title" data-year="2016">Year 2016</span>
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
                    <span class="enar_occ_title" data-year="2015">Year 2015</span>
                    <div class="enar_occ_content">
                        <div class="acc_content">
                            <ul class="cat_list_widget no_numbers">
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,12)">December</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,11)">November</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,10)">October</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,9)">September</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,8)">August</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,7)">July</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,6)">June</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,5)">May</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,4)">April</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,3)">March</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,2)">February</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2015,1)">January</a>
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
                        <li><a data-content="inbox" class="selected" href="javascript:;"><span></span>热门</a>
                        </li>
                        <li><a data-content="new" href="javascript:;"><span></span>最近</a></li>
                        <li><a data-content="gallery" href="javascript:;"><i
                                class="icon_alone ico-comment-o"></i></a>
                        </li>
                    </ul>
                </nav>

                <ul class="tabs-body">
                    <li data-content="inbox" class="selected">
                        <ul class="posts_widget_list2">
                            <template v-for="item in hotList">
                                <li class="clearfix">
                                    <a href="javascript:;" @click="viewDetails(item)">
                                        <img alt="" title="" :src="item.materials.material">
                                        <span>{{item.title}}</span>
                                    </a>
                                    <span class="post_date"><i class="ico-eye2"></i>{{item.view_count}} Visitors</span>
                                </li>
                            </template>
                        </ul>
                    </li>

                    <li data-content="new">
                        <ul class="posts_widget_list2">
                            <template v-for="item in recentlyList">
                                <li class="clearfix">
                                    <a href="javascript:;" @click="viewDetails(item)">
                                        <img alt="" title="" :src="item.materials.material">
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
                                    <a href="javascript:;">
                                        <img alt="" title="" :src="'http://cdn.qulongjun.cn/avator/'+item.photo+'.png'">
                                        <span>{{item.name}}:</span>
                                    </a>
                                    <span class="post_comment" v-html="item.content"></span>
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
                <a href="http://github.com/qulongjun" target="_blank" class="github"><i class="ico-github6"></i></a>
                <a href="https://www.linkedin.com/in/qulongjun" target="_blank" class="linkedin"><i
                        class="ico-linkedin3"></i></a>
                <a href="http://cv.qulongjun.cn" target="_blank" class="user"><i class="ico-user"></i></a>
                <a href="tel:17717567217" target="_blank" class="user"><i class="ico-phone"></i></a>
                <a href="mailto:qulongjun12@163.com" target="_blank" class="email"><i class="ico-mail6"></i></a>
            </div>
        </div>
        <!-- End Social Media -->


        <!-- Related Posts Slider -->
        <div class="widget_block">
            <h6 class="widget_title">友情链接</h6>
            <div class="related_slider_widget centered">
                <div class="related_posts_slide">
                    <div class="related_img_con">
                        <a href="https://juejin.im/" target="_blank" class="related_img">
                            <img alt="" src="http://cdn.qulongjun.cn/hotlink/xitu.png">
                            <span><i class="ico-quote-right"></i></span>
                        </a>
                    </div>
                    <a class="related_title" href="https://juejin.im/" target="_blank">稀土·掘金</a>
                    <span class="post_date">高质量的技术社区</span>
                </div>
                <div class="related_posts_slide">
                    <div class="related_img_con">
                        <a href="http://www.qdfuns.com/" target="_blank" class="related_img">
                            <img alt="" src="http://cdn.qulongjun.cn/hotlink/qdfuns.png">
                            <span><i class="ico-quote-right"></i></span>
                        </a>
                    </div>
                    <a class="related_title" href="http://www.qdfuns.com/" target="_blank">前端网</a>
                    <span class="post_date">专注于Web前端开发的综合性门户网站</span>
                </div>
                <div class="related_posts_slide">
                    <div class="related_img_con">
                        <a href="http://www.imooc.com/" target="_blank" class="related_img">
                            <img alt="" src="http://cdn.qulongjun.cn/hotlink/imooc.png">
                            <span><i class="ico-quote-right"></i></span>
                        </a>
                    </div>
                    <a class="related_title" href="http://www.imooc.com/" target="_blank">慕课网</a>
                    <span class="post_date">程序员的梦工厂</span>
                </div>
                <div class="related_posts_slide">
                    <div class="related_img_con">
                        <a href="https://www.v2ex.com/" target="_blank" class="related_img">
                            <img alt="" src="http://cdn.qulongjun.cn/hotlink/v2ex.png">
                            <span><i class="ico-quote-right"></i></span>
                        </a>
                    </div>
                    <a class="related_title" href="https://www.v2ex.com/" target="_blank">V2EX</a>
                    <span class="post_date">汇集各类奇妙好玩的话题和流行动向</span>
                </div>
                <div class="related_posts_slide">
                    <div class="related_img_con">
                        <a href="http://www.guokr.com/" target="_blank" class="related_img">
                            <img alt="" src="http://cdn.qulongjun.cn/hotlink/guokr.png">
                            <span><i class="ico-quote-right"></i></span>
                        </a>
                    </div>
                    <a class="related_title" href="http://www.guokr.com/" target="_blank">果壳网</a>
                    <span class="post_date">开放、多元的泛科技兴趣社区</span>
                </div>
                <div class="related_posts_slide">
                    <div class="related_img_con">
                        <a href="https://www.zhihu.com/" target="_blank" class="related_img">
                            <img alt="" src="http://cdn.qulongjun.cn/hotlink/zhihu.jpg">
                            <span><i class="ico-comment2"></i></span>
                        </a>
                    </div>
                    <a class="related_title" href="https://www.zhihu.com/" target="_blank">知乎</a>
                    <span class="post_date">与世界分享你的知识、经验和见解</span>
                </div>
            </div>
        </div>
        <!-- End Related Posts Slider -->

    </aside>
    <!-- End sidebar -->
</template>
<script type="es6">
    import {changeURLPara, removeURLPara, redictURL} from '../../../script/js-utils'

    import category from '../../../demo/category.json'
    import tag from '../../../demo/tag.json'
    import hot from '../../../demo/hot.json'
    import recently from '../../../demo/recently.json'
    import recentlyComment from '../../../demo/recentlyComment.json'
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
            me._relatedLink();
            me.$nextTick(() => {
                me._initTabs();
                me._initAccordion();
                me._initYears();
            })
        },
        methods: {
            _fetchCategory(){
                const me = this;
                me.$http.get("/api/category/list").then(response => {
                    const data = response.data;
                    me.categoryList = data.results;
                }, response => {

                });

            },
            _fetchTag(){
                const me = this;
                me.$http.get("/api/tag/list").then(response => {
                    const data = response.data;
                    me.tagList = data.results;
                }, response => {

                });

            },
            _fetchHot(){
                const me = this;
                me.$http.get("/api/article/hot").then(response => {
                    const data = response.data;
                    me.hotList = data.results;
                }, response => {
                    serviceErrorInfo();
                });
            },
            _fetchRecently(){
                const me = this;
                me.$http.get("/api/article/recently").then(response => {
                    const data = response.data;
                    me.recentlyList = data.results;
                }, response => {
                    serviceErrorInfo();
                });
            },
            _fetchRecentlyComment(){
                const me = this;
                me.$http.get("/api/comment/recently").then(response => {
                    const data = response.data;
                    me.recentlyCommentList = data.results;
                }, response => {
                    serviceErrorInfo();
                });
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
                    month = month < 10 ? '0' + month : month;
                    var path = redictURL(me.$route.fullPath, "/list", "add", "time", year + "-" + month);
                    me.$router.push(path);
                } else {
                    var path = redictURL(me.$route.fullPath, "/list", "remove", "time");
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
            },
            _initYears(){
                const me = this;
                jQuery(".enar_occ_title").on("click", (e) => {
                    const oSpan = jQuery(e.target);
                    const year = oSpan.data("year");
                    if (window.location.search.indexOf("time=" + year) != -1) {
                        me.$router.push(redictURL(me.$route.fullPath, "/list", "remove", "time"));
                    }
                });
            },
            viewDetails(article){
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
            },
            _relatedLink(){
                $(".related_slider_widget").owlCarousel({
                    direction: 'ltr',
                    slideSpeed: 900,
                    autoPlay: 3000,
                    autoHeight: true,
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
            }
        }
    }
</script>