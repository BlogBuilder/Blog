<template>
    <div class="media">
        <a class="pull-left" href="javascript:;">
            <img class="todo-userpic"
                 src="../../images/avatar/avatar5.jpg"
                 width="27px" height="27px"> </a>
        <div class="media-body todo-comment">
            <div class="todo-comment-btn">
                <button type="button" class="btn btn-sm btn-circle green btn-outline" @click="reply(model)">回 复</button>
                <button type="button" class="btn btn-sm btn-circle red btn-outline" @click="deleteReply(model.id)">删 除
                </button>
            </div>

            <p class="todo-comment-head">
                <span class="todo-comment-username">{{model.user.name}}</span>
                &nbsp;
                <span class="todo-comment-date">{{model.comment_time}}</span>
            </p>
            <p class="todo-text-color" v-html="model.comment_content">
            </p>
            <!-- 嵌套回复 -->
            <items v-for='model in model.child' :model='model'></items>
        </div>
    </div>
</template>
<style>
    .media {
        overflow: auto;
    }
</style>
<script>
    export default{
        name: "items",
        props: {
            model: Object
        },
        data(){
            return {}
        },
        mounted: function () {

        },
        methods: {
            reply: function (item) {
                var me = this;
                var obj = me.$parent;
                while (!(obj.replyObj)) {
                    obj = obj.$parent;
                }
                obj.replyObj = item;
                var pos = jQuery("#replyEditor").offset().top;
                $("html,body").animate({scrollTop: pos}, 400);
            },
            deleteReply(id){
                var me = this;
                me.$http.get("/api/comment/delete", {
                    params: {
                        comment_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200(){
                            alert("评论删除成功！");
                            var obj = me.$parent;
                            while (!(obj.fetchComment)) {
                                obj = obj.$parent;
                            }
                            obj.fetchComment(obj.details.id);
                        }
                    })
                }, response => {
                    serverErrorInfo();
                });


            }
        }
    }
</script>