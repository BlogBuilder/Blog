import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css'
/**
 * Created by qulongjun on 2017/7/14.
 */

/**
 * 变更URL参数
 * @returns {string}
 */
export const changeURLPara = (url, arg, val) => {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + val;
    return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url + '&' + replaceText : url + '?' + replaceText);
};

/**
 * 删除URL参数
 * @param url
 * @param arg
 * @returns {string}
 */
export const removeURLPara = (url, arg) => {
    var pattern = arg + '=([^&]*)';
    return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), "") : (url.match('[\?]') ? url + '&' + "" : url + '?' + "");
};

export const error = (content) => {
    iziToast.error({
        // title: '警告',
        message: content,
        position: 'topRight',
        // icon:""
    });
};

export const alert = (content) => {
    iziToast.success({
        // title: '通知',
        message: content,
        position: 'topRight',
        progressBarColor: 'rgb(0, 255, 184)',
        // timeout:0,
        icon: "ico-check2"
    });
};

export const serviceErrorInfo = () => {
    error("服务器错误")
};

export const redictURL = (url, base_url, opt_type, arg, val) => {
    if (url.indexOf(base_url) != -1) {
        //说明是正确的基线地址
        if (opt_type == "add") {
            return changeURLPara(url, arg, val);
        } else {
            return removeURLPara(url, arg);
        }
    } else {
        if (opt_type == "add") {
            return changeURLPara(base_url, arg, val);
        } else {
            return removeURLPara(base_url, arg);
        }
    }
};
export const codeState = (code, opt) => {

    if (typeof code !== "number") {
        return;
    }
    switch (code) {
        case 200:
            if (opt[200]) {
                typeof opt[200] === "string" ? alert(opt[200]) : opt[200]();
            } else alert("操作执行成功！");
            break;
        case 500:
            if (opt[500]) {
                typeof opt[500] === "string" ? error(opt[500]) : opt[500]();
            } else error("服务器出小差了哦！");
            break;

        case 501:
            if (opt[501]) {
                typeof opt[501] === "string" ? error(opt[501]) : opt[501]();
            } else error("当前已经存在相同值！");
            break;
        case 502:
            if (opt[502]) {
                typeof opt[502] === "string" ? error(opt[502]) : opt[502]();
            } else error("保存的数据格式错误！");
            break;
        case 503:
            if (opt[503]) {
                typeof opt[503] === "string" ? error(opt[503]) : opt[503]();
            } else error("当前操作的记录值不存在！");
            break;
        case 504:
            if (opt[504]) {
                typeof opt[504] === "string" ? error(opt[504]) : opt[504]();
            } else error("您尚未登录或登录信息过期！");
            break;
        case 505:
            if (opt[505]) {
                typeof opt[505] === "string" ? error(opt[505]) : opt[505]();
            } else error("您的请求超时，请重新尝试！");
            break;
        case 506:
            if (opt[506]) {
                typeof opt[506] === "string" ? error(opt[506]) : opt[506]();
            } else error("登录密码错误，请重新尝试！");
            break;
        case 507:
            if (opt[507]) {
                typeof opt[507] === "string" ? error(opt[507]) : opt[507]();
            } else error("当前加密签名错误！");
            break;

        default:
            if (opt[code]) {
                typeof opt[code] === "string" ? error(opt[code]) : opt[code]();
            } else error("未知错误！");
            break;
    }
};


const scrollTo = function (scrollNum) {
    $('body,html').animate({
            scrollTop: scrollNum,
        }, {queue: false, duration: 900, easing: "easeInOutExpo"}
    );
};


const showPreLoader = function () {
    $('#preloader_list').fadeIn(500);
};

const hidePreLoader = function () {
    $('#preloader_list').fadeOut(500);
};

export const _backBottom = (dom) => {
    $('body,html').animate({
            scrollTop: dom.offset().top,
        }, {queue: false, duration: 900, easing: "easeInOutExpo"}
    );
};
export const _backPosition = (position) => {
    $('body,html').animate({
            scrollTop: position,
        }, {queue: false, duration: 900, easing: "easeInOutExpo"}
    );
};


window.alert = alert;
window.error = error;
window.serviceErrorInfo = serviceErrorInfo;
window.codeState = codeState;
window.scrollTo = scrollTo;
window.showPreLoader = showPreLoader;
window.hidePreLoader = hidePreLoader;
