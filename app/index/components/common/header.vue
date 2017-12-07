<template>
    <header id="site_header" style="position: fixed;top: 0;width: 100%">
        <div class="topbar"><!-- class ( topbar_colored  ) -->
            <div class="content clearfix">
                <div class="top_details clearfix f_left" v-if="!user.id">
                    <span class="top_login">
						您尚未<a href="javascript:;" @click="_loginModal">登录</a>。
					</span>
                </div>

                <div class="top_details clearfix f_left" v-else>
                    <span class="top_login " style="margin-right: 5px">
						欢迎您，<a href="javascript:;">{{user.nick}}</a>
					</span>
                    <span style="margin-right: 5px">&nbsp;|&nbsp;</span>
                    <span class="top_login" style="margin-right: 5px">
                        <!--<i class="icon ico-comments-o" style="margin-right: 5px"></i>-->
						<a href="javascript:;" style="color: #777" @click="_loginModal">足迹</a>
					</span>
                    <span style="margin-right: 5px">&nbsp;|&nbsp;</span>
                    <span class="top_login ">
						<a href="javascript:;" class="text-danger" @click="logOff">注销</a>
					</span>
                </div>

                <div class="top-socials box_socials f_right">
                    <a href="#" target="_blank">
                        <span class="soc_name">Facebook</span>
                        <span class="soc_icon_bg"></span>
                        <i class="ico-facebook4"></i>
                    </a>
                    <a href="#" target="_blank">
                        <span class="soc_name">Twitter</span>
                        <span class="soc_icon_bg"></span>
                        <i class="ico-twitter4"></i>
                    </a>
                    <a href="#" target="_blank">
                        <span class="soc_name">Google+</span>
                        <span class="soc_icon_bg"></span>
                        <i class="ico-google-plus"></i>
                    </a>
                    <a href="skype:#?call">
                        <span class="soc_name">Skype</span>
                        <span class="soc_icon_bg"></span>
                        <i class="ico-skype"></i>
                    </a>
                    <a href="#" target="_blank">
                        <span class="soc_name">Picassa</span>
                        <span class="soc_icon_bg"></span>
                        <i class="ico-picassa"></i>
                    </a>
                    <a href="#" target="_blank">
                        <span class="soc_name">Vimeo</span>
                        <span class="soc_icon_bg"></span>
                        <i class="ico-vimeo"></i>
                    </a>
                </div>
            </div>
            <!-- End content -->
            <span class="top_expande not_expanded">
				<i class="no_exp ico-angle-double-down"></i>
				<i class="exp ico-angle-double-up"></i>
			</span>
        </div>
        <!-- End topbar -->
        <div id="navigation_bar-sticky-wrapper" class="sticky-wrapper">
            <div id="navigation_bar">
                <div class="content">
                    <div id="logo">
                        <a href="/list">
                            <img src="../../image/logo_d2.png" alt="Logo">
                        </a>
                    </div>

                    <form class="top_search clearfix small_top_search" onkeydown="if(event.keyCode==13)return false;">
                        <div class="top_search_con">
                            <input type="text" class="s" id="githubSearch" placeholder="Github Search ...">
                            <span class="top_search_icon"><i class="ico-search4"></i></span>
                            <input type="submit" class="top_search_submit">
                        </div>
                    </form>
                    <div class="clear"></div>
                </div>
            </div>
        </div>

        <div class="full-width"></div>
        <div class="content row_spacer centered loginContent clearfix">
            <div class="my_col_half on_the_center centered clearfix">
                <form class="login_form_colored shadow1 login_flip flip_top" id="loginForm" style="display: none;">
                    <div class="lfc_user_row">
                        <span class="lfc_header">登录您的账号 或 <a class="sign_up_login_flip" href="#">注册新用户</a></span>

                    </div>
                    <div class="lfc_user_row">
                        <label for="login_user_name">
							<span class="label_space">
								<span class="hm_field_name">Email</span>
								<span class="hm_requires_star">*</span>
							</span>
                            <input class="input_no_icon" type="text" name="login_user_name" id="login_user_name"
                                   v-model="loginInfo.email">
                        </label>
                    </div>
                    <div class="lfc_user_row">
                        <label for="login_password">
							<span class="label_space">
								<span class="hm_field_name">密码</span>
								<span class="hm_requires_star">*</span>
							</span>
                            <input class="input_no_icon" type="password" name="login_password" id="login_password"
                                   v-model="loginInfo.password">
                        </label>
                    </div>
                    <div class="lfc_user_row clearfix">
                        <div class="my_col_third">
                            <label for="rememberme">
								<span class="remember-box">
									<input type="checkbox" id="rememberme" name="rememberme"
                                           v-model="loginInfo.remember">
									<span>记住密码</span>
								</span>
                            </label>
                        </div>
                        <div class="clearfix">
                            <button type="button" @click="_closeModal" name="login"
                                    class="send_button f_right margin_left_a btn-default">
                                关 闭
                            </button>
                            <button type="button" @click="login" name="login"
                                    class="send_button f_right margin_left_a ">
                                登 录
                            </button>
                        </div>
                    </div>
                    <a class="lfc_forget_pass" href="#">忘记密码?</a>
                </form>
                <form class="login_form_colored shadow1 owl-goDown-out" id="registerForm" style="display: none">
                    <div class="lfc_user_row">
                        <span class="lfc_header">注册新账号 或 <a class="sign_up_login_flip" href="#">直接登录</a></span>
                    </div>
                    <div class="lfc_user_row">
                        <label for="login_user_name">
							<span class="label_space">
								<span class="hm_field_name">Email</span>
								<span class="hm_requires_star">*</span>
							</span>
                            <input class="input_no_icon" type="text" name="register_name" id="register_name">
                        </label>
                    </div>
                    <div class="lfc_user_row">
                        <label for="login_password">
							<span class="label_space">
								<span class="hm_field_name">密码</span>
								<span class="hm_requires_star">*</span>
							</span>
                            <input class="input_no_icon" type="password" name="register_password"
                                   id="register_password">
                        </label>
                    </div>
                    <div class="lfc_user_row">
                        <label for="login_password">
							<span class="label_space">
								<span class="hm_field_name">重复密码</span>
								<span class="hm_requires_star">*</span>
							</span>
                            <input class="input_no_icon" type="password" name="register_password_re"
                                   id="register_password_re">
                        </label>
                    </div>
                    <div class="lfc_user_row clearfix">
                        <div class="" style="float: left">
                            <label for="registerAgree">
								<span class="remember-box">
									<input type="checkbox" id="registerAgree" name="rememberme">
									<span>我遵守《关于互联网行为规范的法律要求》</span>
								</span>
                            </label>
                        </div>
                        <div class="" style="float: right">
                            <button type="button" @click="_closeModal" name="closeLoop"
                                    class="send_button f_right margin_left_a btn-default">
                                关 闭
                            </button>
                            <button type="submit" name="login" class="send_button f_right margin_left_a">
                                创建账号
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="clearfix"></div>
        </div>
    </header>
</template>
<style>
    .loginContent {
        z-index: 10000;
        position: fixed;
        left: 0;
        right: 0;
        display: none;
    }

    .loginContent.active {
        display: block;
    }

    .full-width {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 9998;
        background-color: rgba(0, 0, 0, 0.8);
        display: none;
    }

    .full-width.active {
        display: block;
    }
</style>
<script type="es6">
    import jwt from 'jsonwebtoken';
    import config from '../../../global/config';
    import store from 'store';

    let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    module.exports = {
        data(){
            return {
                loginInfo: {
                    email: "",
                    password: "",
                    remember: false
                },
                userInfo: {
                    email: "",
                    password: "",
                    avatar: ""
                },
                user: {}
            }
        },
        mounted(){
            let me = this;
            me._initPlugins();

            $(window).resize(function () {
                me._initPlugins();
                return false;
            });
            me.$nextTick(() => {
                me._fetchState();
                me._fetchLocal();
            })
        },
        methods: {
            login(){
                let me = this;
                if (!(me.loginInfo.email && me.loginInfo.password)) {
                    error("用户名或密码不能为空！");
                    return;
                }
                if (!ePattern.test(me.loginInfo.email)) {
                    error("邮箱格式错误！");
                    return;
                }
                //签发登录字符串
                let loginInfo = jwt.sign(me.loginInfo, config.publicKey, {
                    expiresIn: 100
                });
                me.$http.post("/api/v1.0/login", {
                    loginInfo: loginInfo
                }).then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.user = data.data;
                            if (me.loginInfo.remember) {
                                let localLogin = jwt.sign(me.loginInfo, config.localKey, {
                                    expiresIn: 10 * 24 * 60 * 60
                                });
                                store.set('loginInfo', localLogin);
                            } else store.remove('loginInfo');
                            me._closeModal();
                        },
                        503: "当前用户名不存在，请重新尝试！"
                    })
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            logOff(){
                let me = this;
                me.$http.post("/api/v1.0/login/logOff").then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.user = {};
                            alert("账号注销成功！");
                        }
                    })
                }, response => {
                    serviceErrorInfo(response);
                });
            },
            _fetchState(){
                let me = this;
                me.$http.get("/api/v1.0/login/fetchState").then(response => {
                    let data = response.data;
                    codeState(data.code, {
                        200(){
                            me.user = data.data;
                        },
                        504(){
                        }
                    })
                }, response => {
                    serviceErrorInfo(response);
                })
            },
            _fetchLocal(){
                let me = this;
                let localLoginInfo = store.get('loginInfo');
                if (localLoginInfo) {
                    jwt.verify(localLoginInfo, config.localKey, (err, decoded) => {
                        if (!err) {
                            me.loginInfo = {
                                email: decoded.email,
                                password: decoded.password,
                                remember: decoded.remember
                            };
                        } else {
                            store.remove('loginInfo');
                        }
                    });
                }
            },
            _loginModal(){
                $('#registerForm').css({"display": "none"});
                $('.loginContent').addClass('active');
                $('.full-width').addClass('active');
                let $login_form = $('#loginForm');
                $login_form.css({"display": "block"});
                $login_form.removeClass("owl-goDown-out").addClass("owl-goDown-in");
                $login_form.addClass("flip_top");
            },
            _closeModal(){
                let form0 = $($('.loginContent form')[0]);
                let form1 = $($('.loginContent form')[1]);
                form0.removeClass("owl-goDown-in").addClass("owl-goDown-out");
                form1.removeClass("owl-goDown-in").addClass("owl-goDown-out");
                setTimeout(function () {
                    $('.loginContent').removeClass('active');
                    $('.full-width').removeClass('active');
                }, 300);
            },
            _initPlugins(){
                let me = this;

                $('.sign_up_login_flip').off('click').on("click", function () {
                    let $this = $(this);
                    let $form = $this.closest("form");
                    let $form_other = $form.siblings("form");
                    $form.removeClass("owl-goDown-in").addClass("owl-goDown-out");
                    setTimeout(function () {
                        if ($form.hasClass("login_flip")) {
                            $form.removeClass("flip_top").css({"display": "none"});
                        }
                        $form_other.css({"display": "block"});
                        $form_other.removeClass("owl-goDown-out").addClass("owl-goDown-in");
                        $form_other.addClass("flip_top");

                    }, 300);

                    return false;
                });

                $(".top_search").each(function (index, element) {
                    let top_search = $(this);
                    top_search.submit(function (event) {
                        event.stopPropagation();
                        if (top_search.hasClass("small_top_search")) {
                            top_search.removeClass("small_top_search");
                            top_search.addClass("large_top_search");
                            if (me._getScreenWidth() <= 315) {
                                top_search.siblings("#top_cart").animate({opacity: 0});
                            }
                            top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 0});
                            return false;
                        }

                    });
                    $(top_search).on("click touchstart", function (e) {
                        e.stopPropagation();
                    });
                    $(document).on("click touchstart", function (e) {
                        if (top_search.hasClass("large_top_search")) {
                            top_search.removeClass("large_top_search");
                            top_search.addClass("small_top_search");
                            if (me._getScreenWidth() <= 315) {
                                top_search.siblings("#top_cart").animate({opacity: 1});
                            }
                            top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 1});
                        }
                    });
                });
                if (me._getScreenWidth() < 1190) {
                    $("#navigation_bar").find(".top_search").addClass("small_top_search");
                } else {
                    $("#navigation_bar").find(".top_search").removeClass("small_top_search");
                }

                $("#githubSearch").keydown(function (e) {
                    if (e.keyCode === 13) {
                        const value = e.target.value;
                        window.open("https://github.com/search?utf8=%E2%9C%93&q=" + value);
                    }
                });


                if ($.isFunction($.fn.sticky)) {
                    let $navigation_bar = $("#navigation_bar");
                    $navigation_bar.unstick();
                    let mobile_menu_len = $navigation_bar.find(".mobile_menu").length;
                    let side_header = $(".header_on_side").length;
                    if (mobile_menu_len === 0 && side_header === 0) {
                        $navigation_bar.sticky({
                            topSpacing: 0,
                            className: "sticky_menu",
                            getWidthFrom: "body"
                        });
                    } else {
                        $navigation_bar.unstick();
                    }
                }
            },
            _getScreenWidth(){
                return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
            },
        }
    };
</script>