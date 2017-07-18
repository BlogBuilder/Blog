<template>
    <div class="col-md-6 login-container bs-reset mt-login-5-bsfix">
        <div class="login-content">
            <!--<h1>Welcome Home !</h1>-->
            <h1>呢喃数据管理平台</h1>
            <p>你懂的越多，懂你的越少。</p>
            <form action="javascript:;" class="login-form" method="post">
                <div class="alert alert-danger display-hide">
                    <button class="close" data-close="alert"></button>
                    <span>用户账号和密码不能为空！ </span>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <input class="form-control form-control-solid placeholder-no-fix form-group"
                               type="text"
                               autocomplete="off" placeholder="管理员账号" name="username" v-model="username" required/></div>
                    <div class="col-xs-6">
                        <input class="form-control form-control-solid placeholder-no-fix form-group"
                               type="password"
                               autocomplete="off" placeholder="密码" name="password" v-model="password" required/></div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="rem-password">
                            <label class="rememberme mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" name="remember" v-model="remember"/> 记住密码
                                <span></span>
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-8 text-right">
                        <button class="btn green" type="button" @click="login">登 录</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="login-footer">
            <div class="row bs-reset">
                <div class="col-xs-5 bs-reset"></div>
                <div class="col-xs-7  bs-reset">
                    <div class="login-copyright text-right">
                        <p>Copyright © 2017 Powered By 瞿龙俊, All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                username: "",
                password: "",
                remember: false,
                mail: ""
            }
        },
        mounted(){
            const me = this;
            me._bindData();
        },
        methods: {
            login() {
                const me = this;
                const result = $('.login-form').validate().form();
                if (result) {
                    var info = {
                        username: me.username,
                        password: me.password
                    };
                    me.$http.get("/api/user/login", {
                        params: info
                    }).then(response => {
                        const data = response.data;
                        codeState(data.code, {
                            200: function () {
                                me._rememberData();
                                window.location.href = "/admin.html"
                            },
                            502: "你输入的用户名或密码错误",
                            504: "您输入的用户名不存在"
                        });
                    }, response => {
                        serverErrorInfo();
                    })
                }
            },
            _bindData(){
                const me = this;
                me.username = localStorage.getItem("a_username");
                me.password = localStorage.getItem("a_password");
                me.remember = localStorage.getItem("a_remember");
            },
            _rememberData(){
                const me = this;
                if (me.remember) {
                    localStorage.setItem("a_username", me.username);
                    localStorage.setItem("a_password", me.password);
                    localStorage.setItem("a_remember", me.remember);
                } else {
                    localStorage.removeItem("a_username");
                    localStorage.removeItem("a_password");
                    localStorage.removeItem("a_remember");
                }
            }
        }
    }
</script>
