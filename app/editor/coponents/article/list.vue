<template lang="html">
    <div class="row">
        <div class="col-md-12">
            <!-- BEGIN TODO SIDEBAR -->
            <div class="todo-ui">
                <div class="todo-sidebar">
                    <div class="portlet light ">
                        <div class="portlet-title">
                            <div class="caption" data-toggle="collapse" data-target=".todo-project-list-content">
                                <span class="caption-subject font-green-sharp bold uppercase">分类 </span>
                                <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view project list</span>
                            </div>
                            <div class="actions">
                                <div class="btn-group">
                                    <a class="btn green btn-circle btn-outline btn-sm todo-projects-config"
                                       href="javascript:;" data-toggle="dropdown" data-hover="dropdown"
                                       data-close-others="true">
                                        <i class="icon-settings"></i> &nbsp;
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li>
                                            <!--<a href="javascript:;"> 新增分类 </a>-->
                                            <router-link to="/category_add"><span class="title">新增分类</span>
                                            </router-link>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a href="javascript:;" @click="categoryView(-2)"> 全部分类 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="categoryView(1)"> 公开分类 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="categoryView(0)"> 私密分类</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <!--<a href="javascript:;"> 分类管理 </a>-->
                                            <router-link to="/category_list"><span class="title">分类管理</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body todo-project-list-content">
                            <div class="todo-project-list">
                                <ul class="nav nav-stacked">
                                    <li class="active" @click="searchByCategory(0,$event)">
                                        <a href="javascript:;" class="font-green">
                                            <span class="badge badge-info"> {{total_category}} </span> 全部文章 </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" @click="searchByCategory(-1,$event)" class="font-red">
                                            <span class="badge badge-danger"> {{no_category}} </span> 未分类文章 </a>
                                    </li>
                                    <hr/>
                                    <template v-for="item in categoryList">
                                        <li>
                                            <a href="javascript:;" :class="item.state==0?'font-yellow':''"
                                               @click="searchByCategory(item.id,$event)">
                                                <span class="badge badge-success"> {{item.articleCount}} </span>
                                                {{item.name}}</a>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="portlet light ">
                        <div class="portlet-title">
                            <div class="caption" data-toggle="collapse"
                                 data-target=".todo-project-list-content-search">
                                <span class="caption-subject font-green-sharp bold uppercase">搜索 </span>
                                <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view</span>
                            </div>
                        </div>
                        <div class="portlet-body todo-project-list-content todo-project-list-content-search">
                            <form>
                                <div class="todo-project-list">
                                    <div class="form-group form-md-line-input has-info">
                                        <div class="input-group-control">
                                            <input type="text" class="form-control" placeholder="Search"
                                                   id="search_text" v-model="search.search_text">
                                            <label for="search_text">关键字</label>
                                        </div>
                                    </div>
                                    <div class="form-group form-md-checkboxes">
                                        <label>文章操作</label>
                                        <div class="md-checkbox-list">
                                            <div class="md-checkbox">
                                                <input type="checkbox" id="stick" v-model="search.stick"
                                                       class="md-check">
                                                <label for="stick">
                                                    <span></span>
                                                    <span class="check"></span>
                                                    <span class="box"></span> 置顶文章 </label>
                                            </div>
                                            <div class="md-checkbox">
                                                <input type="checkbox" id="recommend" v-model="search.recommend"
                                                       class="md-check">
                                                <label for="recommend">
                                                    <span></span>
                                                    <span class="check"></span>
                                                    <span class="box"></span> 推荐文章 </label>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="form-group form-md-radios">
                                            <label>评论类别</label>
                                            <div class="md-radio-list">
                                                <div class="md-radio has-success">
                                                    <input type="radio" name="comment_state"
                                                           v-model="search.comment_state"
                                                           value="0"
                                                           id="comment_state1" class="md-radiobtn">
                                                    <label for="comment_state1">
                                                        <span></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 允许评论 </label>
                                                </div>
                                                <div class="md-radio has-warning">
                                                    <input type="radio" id="comment_state2" name="comment_state"
                                                           value="1"
                                                           v-model="search.comment_state"
                                                           class="md-radiobtn">
                                                    <label for="comment_state2">
                                                        <span></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 审核评论 </label>
                                                </div>
                                                <div class="md-radio has-error">
                                                    <input type="radio" id="comment_state3" name="comment_state"
                                                           value="2"
                                                           v-model="search.comment_state"
                                                           class="md-radiobtn">
                                                    <label for="comment_state3">
                                                        <span></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 禁止评论 </label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="form-group form-md-radios">
                                            <label>显示状态</label>
                                            <div class="md-radio-list">
                                                <div class="md-radio has-success">
                                                    <input type="radio" id="view_state1" name="view_state" value="0"
                                                           v-model="search.view_state"
                                                           class="view_state1">
                                                    <label for="view_state1">
                                                        <span></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 公开可见 </label>
                                                </div>
                                                <div class="md-radio has-info">
                                                    <input type="radio" id="view_state2" name="view_state" value="1"
                                                           v-model="search.view_state"
                                                           class="md-radiobtn">
                                                    <label for="view_state2">
                                                        <span></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 私密可见 </label>
                                                </div>
                                                <div class="md-radio has-error">
                                                    <input type="radio" id="view_state3" name="view_state" value="-1"
                                                           v-model="search.view_state"
                                                           class="md-radiobtn">
                                                    <label for="view_state3">
                                                        <span></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 回收站 </label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="form-actions text-center">
                                            <button type="button" class="btn green" @click="searchBtn"> 搜 索</button>
                                            <button type="button" class="btn default" @click="resetForm"> 重 置</button>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="portlet light ">
                        <div class="portlet-title">
                            <div class="caption" data-toggle="collapse"
                                 data-target=".todo-project-list-content-tags">
                                <span class="caption-subject font-green-sharp bold uppercase">标签 </span>
                                <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">click to view</span>
                            </div>
                            <div class="actions">
                                <div class="actions">
                                    <a class="btn btn-circle grey-salsa btn-outline btn-sm" href="javascript:;"
                                       @click="tag_add">
                                        <i class="fa fa-plus"></i> 新增 </a>
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body todo-project-list-content todo-project-list-content-tags">
                            <div class="todo-project-list">
                                <ul class="nav nav-pills nav-stacked">
                                    <li>
                                        <a href="javascript:;" class="font-green" @click="searchByTags(0,$event)">
                                            全部 </a>
                                    </li>
                                    <template v-for="item in tagList">
                                        <li>
                                            <a href="javascript:;" @click="searchByTags(item.id,$event)">
                                                <span class="badge badge-success"> {{item.articleCount}} </span>
                                                {{item.name}} </a>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END TODO SIDEBAR -->
                <!-- BEGIN TODO CONTENT -->
                <div class="todo-content">
                    <div class="portlet light ">
                        <!-- PROJECT HEAD -->
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="icon-bar-chart font-green-sharp hide"></i>
                                <span class="caption-subject font-green-sharp bold uppercase">文章列表</span>
                            </div>

                        </div>
                        <!-- end PROJECT HEAD -->
                        <div class="portlet-body">
                            <div class="row">
                                <div class="col-md-5 col-sm-4">
                                    <div class="todo-tasklist">
                                        <template v-for="(item,index) in article_list">
                                            <div :class="index!=0?'todo-tasklist-item todo-tasklist-item-border-green':'todo-tasklist-item todo-tasklist-item-border-green active'"
                                                 @click="article_detail(item,$event)">
                                                <img class="todo-userpic pull-left"
                                                     src="../../images/avatar/touxiang2.jpg" width="27px" height="27px">
                                                <div class="todo-tasklist-item-title">{{item.title}} <span
                                                        class="badge badge-default">{{item.category?item.category.name:"未分类"}}</span>
                                                </div>
                                                <div class="todo-tasklist-item-text">
                                                    {{item.summary}}
                                                </div>
                                                <hr style="margin:5px;">
                                                <div class="todo-tasklist-controls pull-right">
                                                      <span class="todo-tasklist-date">
                                                          <i class="fa fa-calendar"></i> {{item.create_time}}</span>
                                                    <span class="todo-tasklist-date">
                                                          <i class="fa fa-comments-o"></i> {{item.comment_count}}  </span>
                                                    <span class="todo-tasklist-date">
                                                          <i class="fa fa-folder-open-o"></i> {{item.view_count}}  </span>
                                                </div>

                                            </div>
                                        </template>
                                    </div>
                                    <div class="M-box pull-right" style="margin-top:10px; "></div>
                                </div>
                                <div class="todo-tasklist-devider"></div>
                                <div class="col-md-7 col-sm-8">
                                    <form action="#" class="form-horizontal">
                                        <!-- TASK HEAD -->
                                        <div class="form">
                                            <div class="form-group">
                                                <div class="col-md-8 col-sm-8">
                                                    <div class="todo-taskbody-user">

                                                        <span class="todo-username pull-left">{{details.title}}
                                                            <span class="badge badge-default">{{details.category?details.category.name:"未分类"}}</span>
                                                            <span class="badge badge-warning"
                                                                  v-if="details.view_state==1">私密可见</span>
                                                            <span class="badge badge-danger"
                                                                  v-if="details.view_state==-1">回收站</span>
                                                        </span>


                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="todo-taskbody-date pull-right">
                                                        <div class="btn-group btn-group-circle">
                                                            <button type="button" class="btn green">详情</button>
                                                            <button type="button"
                                                                    class="btn btn-circle-right green dropdown-toggle"
                                                                    data-toggle="dropdown" aria-expanded="false">
                                                                <i class="fa fa-angle-down"></i>
                                                            </button>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li>
                                                                    <router-link
                                                                            :to="{path:'/article_change',query:{id:details.id}}">
                                                                        <span class="title">修改文章</span></router-link>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:;"> 分享文章 </a>
                                                                </li>
                                                                <li class="divider"></li>
                                                                <li v-if="details.stick==0">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('stick',details,1)">
                                                                        置顶本文 </a>
                                                                </li>
                                                                <li v-if="details.stick==1">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('stick',details,0)">
                                                                        取消置顶 </a>
                                                                </li>
                                                                <li v-if="details.recommend==0">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('recommend',details,1)">
                                                                        设为推荐 </a>
                                                                </li>
                                                                <li v-if="details.recommend==1">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('recommend',details,0)">
                                                                        取消推荐 </a>
                                                                </li>
                                                                <li v-if="details.comment_state != 0">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('comment_state',details,0)">
                                                                        允许评论 </a>
                                                                </li>
                                                                <li v-if="details.comment_state != 1">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('comment_state',details,1)">
                                                                        审核评论 </a>
                                                                </li>
                                                                <li v-if="details.comment_state != 2">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('comment_state',details,2)">
                                                                        禁止评论 </a>
                                                                </li>
                                                                <li v-if="details.view_state == 1">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('view_state',details,0)">
                                                                        转为公开 </a>
                                                                </li>
                                                                <li v-if="details.view_state == 0">
                                                                    <a href="javascript:;"
                                                                       @click="changeState('view_state',details,1)">
                                                                        转为私密 </a>
                                                                </li>
                                                                <li class="divider"></li>
                                                                <li>
                                                                    <a href="javascript:;"
                                                                       @click="changeState('view_state',details,-1)">
                                                                        移至回收站 </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-element-ribbon">
                                                <div class="ribbon ribbon-right ribbon-vertical-right ribbon-shadow ribbon-border-dash-vert ribbon-color-success uppercase">
                                                    <div class="ribbon-sub ribbon-bookmark"></div>
                                                    <i :class="details.stick==1?'fa fa-star font-yellow-lemon':'fa fa-star'"></i>
                                                </div>
                                                <div class="ribbon ribbon-right ribbon-vertical-right ribbon-shadow ribbon-border-dash-vert ribbon-color-danger uppercase">
                                                    <div class="ribbon-sub ribbon-bookmark"></div>
                                                    <i :class="details.recommend==1?'fa fa-heart font-yellow-lemon':'fa fa-heart'"></i>
                                                </div>
                                                <div style="padding:10px">
                                                    <blockquote class="bg-grey-cararra">
                                                        <em style="font-size:14px;">
                                                            {{details.summary}}
                                                        </em>
                                                        <small class="text-right">
                                                            <cite title="摘要">摘要</cite>
                                                        </small>
                                                    </blockquote>
                                                    <hr/>
                                                    <div v-html="details.content"></div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <ul class="list-inline">
                                                <li>标签：</li>
                                                <template v-for="item in details.tags">
                                                    <li><span class="label label-success"> {{item.name}} </span></li>
                                                </template>

                                            </ul>
                                        </div>
                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active">
                                                    <a href="#tab_1" data-toggle="tab"> 评论 </a>
                                                </li>
                                                <li>
                                                    <a href="#tab_2" data-toggle="tab"> 日志 </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tab_1">
                                                    <!-- TASK COMMENTS -->
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <div class="media-list">
                                                                <template v-for="comment in commentList">
                                                                    <item :model="comment"></item>
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- END TASK COMMENTS -->
                                                    <!-- TASK COMMENT FORM -->
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <ul class="media-list">
                                                                <li class="media">
                                                                    <a class="pull-left" href="javascript:;">
                                                                        <img class="todo-userpic"
                                                                             src="../../images/avatar/touxiang2.jpg"
                                                                             width="27px" height="27px"> </a>
                                                                    <div class="media-body">
                                                                        <div class="alert alert-success"
                                                                             v-show="replyObj.id">
                                                                            <strong>回复</strong> {{replyObj.user.name}} 于
                                                                            {{replyObj.comment_time}} 的评论:
                                                                            <button type="button" class="btn default"
                                                                                    style="float: right;line-height: 100%"
                                                                                    @click="cancelReply">
                                                                                取 消
                                                                            </button>
                                                                        </div>
                                                                        <div id="replyEditor" style="height: 250px;">

                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <button type="button"
                                                                    class="pull-right btn btn-sm btn-circle green"
                                                                    @click="reply">
                                                                &nbsp; 提 交 &nbsp; </button>
                                                        </div>
                                                    </div>
                                                    <!-- END TASK COMMENT FORM -->
                                                </div>
                                                <div class="tab-pane" id="tab_2">
                                                    <ul class="todo-task-history">
                                                        <li>
                                                            <div class="todo-task-history-date"> 20 Jun, 2014 at
                                                                11:35am
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task created</div>
                                                        </li>
                                                        <li>
                                                            <div class="todo-task-history-date"> 21 Jun, 2014 at
                                                                10:35pm
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task category
                                                                status changed to "Top Priority"
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="todo-task-history-date"> 22 Jun, 2014 at
                                                                11:35am
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task owner changed
                                                                to "Nick Larson"
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="todo-task-history-date"> 30 Jun, 2014 at
                                                                8:09am
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task completed by
                                                                "Nick Larson"
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END TODO CONTENT -->
            </div>
        </div>
        <!-- END PAGE CONTENT-->
    </div>
</template>
<style>
    .todo-tasklist-item.active {
        background-color: #edf7f9
    }

    /* Cubic Bezier Transition */
    .todo-sidebar {
        float: left;
        width: 230px;
        margin-right: 20px;
    }

    .todo-content {
        overflow: hidden;
    }

    .todo-tasklist-item-border-green {
        border-left: #3faba4 2px solid;
    }

    .todo-tasklist-item-border-blue {
        border-left: #4c87b9 2px solid;
    }

    .todo-tasklist-item-border-purple {
        border-left: #8877a9 2px solid;
    }

    .todo-tasklist-item-border-red {
        border-left: #d05454 2px solid;
    }

    .todo-tasklist-item-border-yellow {
        border-left: #d4ad38 2px solid;
    }

    .padding-top-10px {
        padding-top: 15px;
    }

    .todo-userpic {
        -webkit-border-radius: 50% !important;
        -moz-border-radius: 50% !important;
        border-radius: 50% !important;
        border: 1px #cedae1 solid;
    }

    .todo-text-color {
        color: #45535b;
    }

    /* PROJECT LIST */
    .todo-projects-config {
        padding: 6px 9px 3px 9px !important;
    }

    .todo-projects-config > i {
        font-size: 14px !important;
    }

    .todo-tasklist {
        padding: 0;
    }

    .todo-project-list ul li a {
        font-size: 14px !important;
        padding: 8px 10px;
    }

    .todo-project-list .nav li a .badge {
        float: right;
        margin-top: 1px !important;
    }

    .todo-project-list .nav > li.active > a {
        color: #3f444a;
        background-color: #f1f4f7 !important;
    }

    /* END PROJECT LIST */
    /* TASK HISTORY */
    .todo-task-history {
        padding: 0;
        margin: 0;
    }

    .todo-task-history > li {
        padding: 5px 0;
    }

    .todo-task-history > li > .todo-task-history-desc {
        overflow: hidden;
    }

    .todo-task-history > li > .todo-task-history-date {
        font-size: 12px;
        float: right;
        width: 150px;
        margin-left: 10px;
        text-align: right;
        color: #999;
    }

    /* TASKS LIST */
    .todo-tasklist-item {
        background: #f6fbfc;
        padding: 10px;
        margin-bottom: 10px;
        margin-bottom: 15px;
        overflow: hidden;
    }

    .todo-tasklist-item:last-child {
        margin-bottom: 0;
    }

    div .todo-tasklist-item:hover {
        cursor: pointer;
        background-color: #edf7f9;
    }

    .todo-tasklist-item img {
        margin: 0 10px 10px 0;
    }

    .todo-tasklist-item-title {
        font-size: 15px;
        color: #2b4a5c;
        font-weight: 600;
        padding-top: 3px;
        padding-bottom: 13px;
    }

    .todo-tasklist-item-text {
        font-size: 13px;
        color: #577688;
        padding-bottom: 5px;
    }

    .todo-tasklist-item ul {
        margin: 5px 0 0 0px;
    }

    .todo-tasklist-item li {
        color: #577688;
        font-size: 13px;
        margin-right: 10px;
        margin-bottom: 5px;
        padding: 0 !important;
    }

    .todo-tasklist-item li i {
        color: #b3bfcb;
        font-size: 15px;
    }

    .todo-tasklist-controls {
        margin-top: 5px;
    }

    .todo-tasklist-date {
        color: #637b89 !important;
        margin-right: 12px;
    }

    .todo-tasklist-date i {
        color: #abbfca !important;
        margin-right: 5px;
    }

    /* END TASKS LIST */
    /* TASK BODY */
    .todo-taskbody-tasktitle {
        font-size: 18px;
        color: #778d96;
    }

    .todo-taskbody-taskdesc {
        font-size: 14px;
        color: #778d96;
    }

    .todo-username {
        font-size: 16px;
        color: #2b4a5c;
        font-weight: 600;
        padding: 15px 0 0 15px;
    }

    .todo-comment-head {
        padding-top: 3px;
    }

    .todo-comment {
        position: relative;
    }

    .todo-comment:hover > .todo-comment-btn {
        display: block;
    }

    .todo-comment-btn {
        /*display: none;*/
        position: absolute;
        top: 1px;
        right: 0px;
        /*float: right;*/
        /*font-size: 12px;*/

        /*color: #566e7c;*/
        /*border-color: #a2aeb5; */
    }

    .todo-comment-btn:hover {
        color: #fff;
        /*background-color: #a1b6c2;*/
        /*border-color: #a1b6c2;*/
    }

    .todo-comment-username {
        font-size: 14px;
        color: #2b4a5c;
        font-weight: 600;
    }

    .todo-comment-date {
        font-size: 12px;
        color: #2b4a5c;
        font-weight: 400;
    }

    .todo-username-btn {
        margin: 14px 0 0 15px;
        color: #566e7c;
        border-color: #a2aeb5;
    }

    .todo-username-btn:hover {
        color: #fff;
        background-color: #a1b6c2;
        border-color: #a1b6c2;
    }

    .form .form-actions.todo-form-actions {
        padding-top: 10px;
        border: 0;
        margin: 0 0 20px 0;
    }

    /* END TASK BODY */
    /* RESPONSIVE MODE */
    @media (max-width: 991px) {
        /* 991px */
        .todo-sidebar {
            float: none;
            width: 100%;
            margin: 0;
        }

        .todo-sidebar > .portlet {
            margin-bottom: 20px;
        }

        .todo-sidebar > .portlet .portlet-title .tools {
            margin-left: 5px;
        }

        .todo-content {
            overflow: visible;
        }
    }

    .todo-tasklist-devider {
        display: none;
    }

    .mt-element-ribbon img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 767px) {
        /* 767px */
        .todo-tasklist-devider {
            display: block;
            height: 20px;
            margin: 20px -10px;
            background: #F1F3FA;
        }

        /* TASK HISTORY */
        .todo-task-history > li {
            padding: 9px 0;
        }

        .todo-task-history > li > .todo-task-history-date {
            width: 100px;
            font-size: 11px;
        }
    }

</style>
<script>
    var rowCount = localStorage.getItem("rowCount") || 10;
    import item from './comment.vue'
    export default {
        components: {
            "item": item
        },
        data () {
            return {
                categoryList: [],
                tagList: [],
                currentPage: 1,
                condition: "",
                article_list: [],
                details: {},
                no_category: 0,
                total_category: 0,
                search: {},
                commentList: [],
                replyObj: {
                    user: {}
                }
            };
        },
        mounted () {
            var me = this;
            me.fetchData(1, rowCount, me.condition);
            me.fetchPages(rowCount, me.condition);
            me.initData();
            var replyEditor = window.replyEditor = new wangEditor("replyEditor");
            replyEditor.config.uploadImgUrl = '/api/upload/imgUpload';
            replyEditor.create();
        },
        methods: {
            initData () {
                var me = this;
                me.$http.get("/api/category/total").then(function (response) {
                    var data = response.data;

                    me.categoryList = data.results;
                    me.no_category = data.no_category;
                    me.total_category = data.total_category;
                }, function () {
                    serverErrorInfo();
                });
                me.$http.get("/api/tag/total").then(function (response) {
                    var data = response.data;
                    me.tagList = data.results;
                }, function () {
                    serverErrorInfo();
                });
            },
            fetchData (pageNum, rowCount, condition) {
                var me = this;
                this.$http.get('/api/article/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: condition ? condition : ""
                    }
                }).then((response) => {
                    var data = response.data;
                    me.article_list = data.results;
                    data.results.length > 0 ? me.render_detail(data.results[0].id) : null;
                }, (response) => {
                    serverErrorInfo();
                });
            },
            fetchPages (rowCount, condition) {
                var me = this;
                me.$http.get('/api/article/page', {
                    params: {
                        rowCount: rowCount,
                        currentPage: 1,
                        condition: condition ? condition : ""
                    }
                }).then((response) => {
                    var data = response.data;
                    jQuery(".M-box").pagination({
                        pageCount: data.total,
                        coping: true,
                        homePage: '首页',
                        endPage: '末页',
                        prevContent: '上页',
                        nextContent: '下页',
                        callback: function (data) {
                            me.fetchData(data.getCurrent(), rowCount, me.condition);
                            me.currentPage = data.getCurrent();
                        }
                    });
                }, (response) => {
                    serverErrorInfo();
                });
            },
            article_detail (item, e) {
                var me = this;
                var dom = $(e.target).hasClass('todo-tasklist-item') ? $(e.target) : $(e.target).parents('.todo-tasklist-item');
                dom.siblings(" .todo-tasklist-item.active").removeClass('active');
                dom.addClass("active");
                var id = item.id;
                me.render_detail(id);

            },
            fetchComment (id) {
                var me = this;
                me.$http.get("/api/comment/list", {
                    params: {
                        article_id: id
                    }
                }).then(function (response) {
                    var data = response.data;
                    me.commentList = data;
                }, function () {
                    serverErrorInfo();
                })
            },
            render_detail (id) {
                var me = this;
                me.$http.get("/api/article/findById", {
                    params: {
                        article_id: id
                    }
                }).then(function (response) {
                    var data = response.data;
                    me.details = data;
                    me.fetchComment(id);
                }, function () {
                    serverErrorInfo();
                })
            },
            searchByCategory (id, e) {
                var me = this;
                var dom = $(e.target).parents('li');
                dom.siblings("li").removeClass('active');
                dom.addClass("active");
                me.condition = "categoryId=" + id;
                me.fetchData(1, rowCount, me.condition);
                me.fetchPages(rowCount, me.condition);
            },
            searchByTags (id, e) {
                var me = this;
                var dom = $(e.target).parents('li');
                dom.siblings("li").removeClass('active');
                dom.addClass("active");
                if (id == 0) {
                    me.condition = "";
                } else {
                    me.condition = "tagId=" + id;
                }
                me.fetchData(1, rowCount, me.condition);
                me.fetchPages(rowCount, me.condition);
            },
            searchBtn () {
                var me = this;
                var queryStr = "";
                for (var key in me.search) {
                    var value = me.search[key];
                    switch (key) {
                        case 'search_text':
                            queryStr += ("search_key=" + encodeURI(value) + "&&");
                            break;
                        case 'stick':
                            if (value) {
                                queryStr += ("stick=1&&");
                            }
                            //queryStr += ("stick=" + (value ? "1" : "0") + "&&");
                            break;
                        case 'recommend':
                            if (value) {
                                queryStr += ("recommend=1&&");
                            }
                            //queryStr += ("recommend=" + (value ? "1" : "0") + "&&");
                            break;
                        case 'comment_state':
                            queryStr += ("comment_state=" + value + "&&");
                            break;
                        case 'view_state':
                            queryStr += ("view_state=" + value + "&&");
                            break;
                    }
                }
                me.condition = queryStr;
                me.fetchData(1, rowCount, me.condition);
                me.fetchPages(rowCount, me.condition);
            },
            resetForm () {
                var me = this;
                me.search = {};
            },
            categoryView (state) {
                var me = this;
                me.$http.get("/api/category/categoryViewList", {
                    params: {
                        state: state
                    }
                }).then(function (response) {
                    var data = response.data;
                    me.categoryList = data.results;
                }, function () {
                    serverErrorInfo();
                })
            },
            tag_add () {
                router.push("/tag_add");
            },
            changeState (type, item, state) {
                var me = this;
                var str = "";
                switch (type) {
                    case 'stick':
                        str = "是否将文章【" + item.title + "】设置为【" + (state == 1 ? '置顶文章' : '取消置顶') + "】？";
                        break;
                    case 'recommend':
                        str = "是否将文章【" + item.title + "】设置为【" + (state == 1 ? '推荐文章' : '取消推荐') + "】？";
                        break;
                    case 'comment_state':
                        str = "是否将文章【" + item.title + "】设置为【" + (state == 0 ? '允许评论' : state == 1 ? '审核评论' : '禁止评论') + "】？";
                        break;
                    case 'view_state':
                        if (state != -1) {
                            str = "是否将文章【" + item.title + "】设置为【" + (state == 0 ? '公开文章' : '私密文章') + "】？";
                        } else {
                            str = "是否将文章【" + item.title + "】移至回收站？";
                        }

                        break;
                }
                confirm({
                    content: str,
                    success: function () {
                        me.$http.post("/api/article/changeState", {
                            article_id: item.id,
                            type: type,
                            state: state
                        }).then(function (response) {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    me.render_detail(item.id);
                                    alert("操作成功！");
                                }
                            })
                        }, function () {
                            serverErrorInfo();
                        })
                    }
                })
            },
            reply(){
                var me = this;
                var info = {
                    comment_conent: replyEditor.$txt.html(),
                    article_id: me.details.id,
                    anonymous: 1,
                    parent_comment: me.replyObj.id ? me.replyObj.id : ""
                };
                me.$http.post("/api/comment/adminAdd", info).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("评论回复成功！");
                            replyEditor.$txt.html('<p><br></p>');//清空编辑器
                            me.cancelReply();
                            me.fetchComment(me.details.id);
                        },
                        501: "请先登录之后再评论"
                    })
                }, response => {
                    serverErrorInfo();
                })

            },
            cancelReply(){
                var me = this;
                var replyObj = {
                    user: {}
                };
                me.replyObj = replyObj;
            }
        }
    }
</script>
