<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="article_add">
                    <div class="form-body">
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-2 control-label" for="title">标题
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="title" v-model="title" placeholder=""
                                       name="title">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入文章标题，不少于3个字符。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-2 control-label" for="editor">内容
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-8">
                                <div id="editor"></div>
                            </div>
                        </div>

                        <div class="form-group form-md-line-input">
                            <label class="col-md-2 control-label" for="categoryId">分类
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-8">
                                <select class="category-select form-control" id="categoryId" name="categoryId"
                                        v-model="categoryId" data-live-search="true" data-size="8">
                                    <template v-for="item in category_list">
                                        <option :value="item.id">{{item.name}}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-2 control-label" for="tags">文章标签</label>
                            <div class="col-md-8">
                                <select class="tag-select form-control" multiple data-actions-box="true" name="tags[]"
                                        id="tags" v-model="tags" data-live-search="true">
                                    <template v-for="item in tagList">
                                        <option :value="item.id">
                                            {{item.name}}
                                        </option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-2 control-label" for="summary">摘要
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-8">
                                <textarea class="form-control" name="summary" id="summary" v-model="summary"
                                          rows="3"></textarea>
                                <div class="form-control-focus"></div>
                                <span class="help-block">默认自动提取您文章的前200字显示在博客首页作为文章摘要，您也可以在这里自行编辑。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-2 control-label" for="summary">文章类型
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-8">
                                <div class="md-radio-inline">

                                    <div class="md-radio has-success">
                                        <input type="radio" id="standard" name="type" value="2" v-model="type"
                                               class="md-radiobtn">
                                        <label for="standard">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 标准文章 </label>
                                    </div>
                                    <div class="md-radio">
                                        <input type="radio" id="gallery" name="type" value="1" v-model="type"
                                               class="md-radiobtn">
                                        <label for="gallery">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 图集文章 </label>
                                    </div>
                                    <div class="md-radio has-warning">
                                        <input type="radio" id="video" name="type" value="3" v-model="type"
                                               class="md-radiobtn">
                                        <label for="video">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 视频文章 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="audio" name="type" value="4" v-model="type"
                                               class="md-radiobtn">
                                        <label for="audio">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 音频文章 </label>
                                    </div>
                                    <div class="md-radio has-info">
                                        <input type="radio" id="quote" name="type" value="5" v-model="type"
                                               class="md-radiobtn">
                                        <label for="quote">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 引用文章 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input" v-if="type==2">
                            <label class="control-label col-md-2">上传素材</label>
                            <div class="col-md-8">
                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-preview thumbnail" data-trigger="fileinput"
                                         style="width: 200px; height: 150px;">
                                        <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image"
                                             alt=""/>
                                    </div>
                                    <div>
                                      <span class="btn green btn-outline btn-file">
                                          <span class="fileinput-new"> 选择图片 </span>
                                      <span class="fileinput-exists"> 更换 </span>
                                      <input type="file" name="file" id="file"> </span>
                                        <a href="javascript:;" class="btn red fileinput-exists"
                                           data-dismiss="fileinput"> 删除 </a>
                                        <a href="javascript:;" class="btn purple fileinput-exists"
                                           @click="_uploadResource">
                                            上传 </a>
                                    </div>
                                </div>

                                <div class="clearfix margin-top-10">
                                    <span class="label label-success">通知</span> 图像预览仅在 IE10+, FF3.6+, Safari6.0+,
                                    Chrome6.0+ and Opera11.1+ 浏览器中正常工作。
                                </div>
                                <!-- </form> -->

                            </div>
                        </div>
                        <div class="form-group form-md-line-input" v-if="type==1">
                            <label class="control-label col-md-2">上传素材</label>
                            <div class="col-md-8">
                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-preview thumbnail" data-trigger="fileinput"
                                         style="width: 200px; height: 150px;">
                                        <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image"
                                             alt=""/>
                                    </div>
                                    <div>
                                      <span class="btn green btn-outline btn-file">
                                          <span class="fileinput-new"> 选择图片 </span>
                                      <span class="fileinput-exists"> 更换 </span>
                                      <input type="file" name="file" id="file"> </span>
                                        <a href="javascript:;" class="btn red fileinput-exists"
                                           data-dismiss="fileinput"> 删除 </a>
                                        <a href="javascript:;" class="btn purple fileinput-exists"
                                           @click="_uploadResource">
                                            上传 </a>
                                    </div>
                                </div>
                                <div class="clearfix margin-top-10">
                                    <span class="label label-success">通知</span> 图像预览仅在 IE10+, FF3.6+, Safari6.0+,
                                    Chrome6.0+ and Opera11.1+ 浏览器中正常工作。
                                </div>
                                <!-- </form> -->

                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn green" @click="createArticle">发 布</button>
                                <button type="reset" class="btn default">重 置</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- END FORM-->
            </div>
        </div>
    </div>
    <!-- END CONTENT BODY -->
</template>
<script>
    import E from 'wangeditor';
    var editor = null;
    const _handleValidation = () => {
        var form1 = $('#article_add');
        var error1 = $('.alert-danger', form1);
        //var success1 = $('.alert-success', form1);
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            messages: {
                title: {
                    required: "文章标题不能为空"
                },
                categoryId: {
                    required: "分类不能为空"
                }
            },
            rules: {
                title: {
                    required: true
                },
                categoryId: {
                    required: true
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                //success1.hide();
                error1.show();
                App.scrollTo(error1, -200);
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                error1.hide();
            }
        });
    };
    module.exports = {
        data() {
            return {
                category_list: [],
                tagList: [],
                title: "",
                categoryId: "",
                summary: "",
                tags: [],
                resource: [],
                type: 2
            }
        },
        mounted () {
            const me = this;
            me._initEditor();
            me._initSelect();
            me.fetchCategory();
            me.fetchTag();
            _handleValidation();
        },
        methods: {
            _initSelect(){
                $('#tag_select').multiSelect({
                    selectableOptgroup: true
                });
            },
            _initEditor(){
                editor = new E('#editor');
                editor.customConfig.uploadImgServer = '/api/upload/imgUpload';
                editor.create();
            },
            fetchCategory(){
                const me = this;
                me.$http.get("/api/category/list").then(function (response) {
                    const data = response.data;
                    me.category_list = data.results;
                    me.$nextTick(() => {
                        $('.category-select').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            dropupAuto: false
                        });
                    });
                }, function () {
                    serverErrorInfo();
                });
            },
            fetchTag(){
                const me = this;
                me.$http.get("/api/tag/list").then(response => {
                    var data = response.data;
                    me.tagList = data.results;
                    me.$nextTick(() => {
                        $('.tag-select').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            dropupAuto: false
                        });
                    });
                }, response => {
                    serverErrorInfo();
                });
            },
            createArticle () {
                const me = this;
                const result = jQuery("#article_add").valid();
                if (!result) return;
                if (me.resource.length == 0) {
                    confirm({
                        content: "您尚未设置封面，是否使用默认封面？",
                        success: () => {
                            me.$http.post("/api/article/create", {
                                title: me.title,
                                content: editor.$txt.html(),
                                categoryId: me.categoryId,
                                summary: me.summary,
                                tags: me.tags,
                                resource: me.resource
                            }).then(response => {
                                var data = response.data;
                                codeState(data.code, {
                                    200() {
                                        alert("文章保存成功!");
                                    }
                                })
                            }, response => {
                                serverErrorInfo();
                            })
                        }
                    });
                }
            },
            _uploadResource () {
                const me = this;
                jQuery.ajaxFileUpload({
                    url: '/api/file/upload', //用于文件上传的服务器端请求地址
                    secureuri: false, //是否需要安全协议，一般设置为false
                    fileElementId: 'file', //文件上传域的ID
                    dataType: 'json', //返回值类型 一般设置为json
                    success: (data, status) => { //服务器成功响应处理函数
                        codeState(data.code, {
                            200: function () {
                                me.resource.push(data.path);
                                alert("资源上传成功！");
                            }
                        })
                    },
                    error: (data, status, e) => { //服务器响应失败处理函数
                        serverErrorInfo();
                    }
                })
            }
        }
    };


</script>