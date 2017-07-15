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
