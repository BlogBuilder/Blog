<template>
    <ol :class="model.root?'':'children'">
        <li class="comment single_comment" :data-comment-id="model.id">
            <!-- Comment -->
            <div class="comment-container comment-box">
                <div class="trees_number">1.1.1.1</div>
                <a href="javascript:;" class="avatar">
                    <img width="75" height="75"
                         :src="'http://cdn.qulongjun.cn/avator/'+model.photo+'.png'" alt="author">
                </a>
                <div class="comment_content">
                    <h4 class="author_name">{{model.name}}</h4>
                    <span class="comment_meta"><time
                            datetime="2015-10-01T19:56:36+00:00">{{model.create_time}}</time></span>
                    <div class="comment_said_text typo">
                        <p v-html="model.content"></p>
                    </div>
                    <a href="javascript:;" class="comment-reply-link" @click="reply(model,$event)">
                        回复
                    </a>
                </div>
            </div>
            <!-- End Comment -->
        </li>
        <items v-for='model in model.children' :model='model'></items>
    </ol>
</template>
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
            reply: function (item, event) {
                let me = this;
                let parent = me.$parent;
                while (!parent.replyComment) {
                    parent = parent.$parent;
                }
                parent.replyComment(item, event);
            }
        }
    }
</script>
