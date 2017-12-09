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
                    <span class="enar_occ_title" data-year="2018">Year 2018</span>
                    <div class="enar_occ_content">
                        <div class="acc_content">
                            <ul class="cat_list_widget no_numbers">
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,12)">December</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,11)">November</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,10)">October</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,9)">September</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,8)">August</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,7)">July</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,6)">June</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,5)">May</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,4)">April</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,3)">March</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,2)">February</a>
                                </li>
                                <li>
                                    <a href="javascript:;" @click="clickTime(2018,1)">January</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End My Accordion -->
        </div>
        <!-- Time List -->


        <!-- Social Media -->
        <div class="widget_block">
            <h6 class="widget_title">社交网络</h6>
            <div class="social_links_widget clearfix">
                <a href="http://github.com/qulongjun" target="_blank" class="github"><i class="ico-github6"></i></a>
                <a href="https://www.linkedin.com/in/qulongjun" target="_blank" class="linkedin"><i
                        class="ico-linkedin3"></i></a>
                <a href="http://cv.qulongjun.cn" target="_blank" class="user"><i class="ico-user"></i></a>
                <a href="tel:17717567217" target="_blank" class="user"><i class="ico-phone"></i></a>
                <a href="mailto:qulongjun12@163.com" target="_blank" class="email"><i class="ico-email"></i></a>
            </div>
        </div>
        <!-- End Social Media -->
    </aside>
    <!-- End sidebar -->
</template>
<script type="es6">
    import {changeURLPara, removeURLPara, redictURL} from '../../../script/js-utils'
    module.exports = {
        data(){
            return {
                categoryList: [],
                tagList: []
            }
        },
        mounted(){
            const me = this;
            me._fetchCategory();
            me._fetchTag();
            me.$nextTick(() => {
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
        }
    }
</script>