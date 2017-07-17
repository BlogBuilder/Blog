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
        title: '警告',
        message: content,
        position: 'topRight'
    });
};

export const alert = (content) => {
    iziToast.success({
        title: '通知',
        message: content,
        position: 'topRight',
        progressBarColor: 'rgb(0, 255, 184)'
    });
};

export const serverErrorInfo = () => {
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

    if (!code) return;
    if (code == 200) {
        if (opt[200] && typeof opt[200] == "string") {
            alert(opt[200]);
        } else {
            if (opt[200] && typeof opt[200] == "function") {
                opt[200]();
            } else {
                alert('操作成功！');
            }
        }
    }
    if (code == 500) {
        if (opt[500] && typeof opt[500] == "string") {
            error(opt[500]);
            return;
        } else {
            opt[500] ? opt[500]() : error('服务器异常,请刷新后重新尝试！');
        }

    }
    if (code == 501) {
        if (opt[501] && typeof opt[501] == "string") {
            error(opt[501]);
            return;
        } else {
            opt[501] ? opt[501]() : error('数据值不能为空,请检查后重新操作！');
        }
    }
    if (code == 502) {
        if (opt[502] && typeof opt[502] == "string") {
            error(opt[502]);
            return;
        }
        opt[502] ? opt[502]() : error('请求异常,请重新尝试操作！');
    }
    if (code == 503) {
        if (opt[503] && typeof opt[503] == "string") {
            error(opt[503]);
            return;
        }
        opt[503] ? opt[503]() : error('数据库中已存在当前值,不能重复操作！');
    }
    if (code == 504) {
        if (opt[504] && typeof opt[504] == "string") {
            error(opt[504]);
            return;
        }
        opt[504] ? opt[504]() : error('当前操作的数据不存在,请刷新后重新尝试！');
    }
    if (code == 505) {
        if (opt[505] && typeof opt[505] == "string") {
            error(opt[505]);
            return;
        }
        opt[505] ? opt[505]() : error('系统不允许您注册两次！');
    }
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
window.serverErrorInfo = serverErrorInfo;
window.codeState = codeState;
