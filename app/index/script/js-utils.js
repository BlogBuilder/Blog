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
}


