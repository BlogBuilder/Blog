import iziToast from 'mod/iziToast'
import 'mod/iziModal'


var BlogUtils = {
    copyTextToClipboard(text){
        var textArea = document.createElement("textarea");

        //
        // *** This styling is an extra step which is likely not required. ***
        //
        // Why is it here? To ensure:
        // 1. the element is able to have focus and selection.
        // 2. if element was to flash render it has minimal visual impact.
        // 3. less flakyness with selection and copying which **might** occur if
        //    the textarea element is not visible.
        //
        // The likelihood is the element won't even render, not even a flash,
        // so some of these are just precautions. However in IE the element
        // is visible whilst the popup box asking the user for permission for
        // the web page to copy to the clipboard.
        //

        // Place in top-left corner of screen regardless of scroll position.
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em';

        // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = 0;

        // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';

        // Avoid flash of white box if rendered for any reason.
        textArea.style.background = 'transparent';


        textArea.value = text;

        document.body.appendChild(textArea);

        textArea.select();

        try {
            var successful = document.execCommand('copy');
            return successful;
        } catch (err) {
            // console.log('Oops, unable to copy');
            return false;
        }
        document.body.removeChild(textArea);
    }
};
window.alert = function (content) {
    iziToast.success({
        title: '通知',
        message: content,
        position: 'topRight',
        progressBarColor: 'rgb(0, 255, 184)'
    });
};
window.error = function (content) {
    iziToast.error({
        title: '警告',
        message: content,
        position: 'topRight'
    });
};
window.confirm =function () {


}
window.serverErrorInfo = function () {
    error("服务器错误")
};
window.modal = function (options) {
    var defaultValue = {
        title: '', //标题
        subtitle: '', //子标题
        headerColor: '#88A0B9',//模态窗口的头部颜色。
        theme: '',  // 主题，可以是空或"light"
        attached: '', // bottom, top
        icon: null, //图标的class（你使用的字体图标的class名称）
        iconText: null,//图标文字
        iconColor: '', //图标颜色
        rtl: false,
        width: 600, //模态窗口的固定宽度，可以使用%, px, em 或 cm。如果不带单位，默认为像素。
        padding: 0,//模态窗口的内边距。
        radius: 3,
        zindex: 19999,
        iframe: false,//是否在模态窗口中启用iframe功能。
        iframeHeight: 400,//iframe的高度。
        iframeURL: null,//	iframe加载内容的URL地址。如果没有设置，可以使用超链接的地址来作为URL地址。
        focusInput: true,//设置为true时，当打开模态窗口时，第一个可见的表单域将被激活。
        group: '',
        loop: false,
        navigateCaption: true,
        navigateArrows: true, // closeToModal, closeScreenEdge
        history: true,
        restoreDefaultContent: false,
        autoOpen: 0, // Boolean, Number
        bodyOverflow: false,
        fullscreen: false,
        openFullscreen: false,
        closeOnEscape: true,
        overlay: true,//遮罩层
        overlayClose: true, //关闭遮罩
        overlayColor: 'rgba(0, 0, 0, 0.4)', //遮罩背景色
        timeout: false,
        timeoutProgressbar: false,
        pauseOnHover: false,
        timeoutProgressbarColor: 'rgba(255,255,255,0.5)',
        transitionIn: 'comingIn',
        transitionOut: 'comingOut',
        transitionInOverlay: 'fadeIn',
        transitionOutOverlay: 'fadeOut',
        onFullscreen () {
        },
        onResize () {
        },
        onOpening () {
        },
        onOpened () {
        },
        onClosing () {
        },
        onClosed () {
        }
    };
    for (const keys in options) {
        if (defaultValue[keys] != undefined) {
            defaultValue[keys] = options[keys];
        }
    }
    $('#modal').iziModal('destroy');
    if (options.content != undefined) {
        $("#modal").html(options.content);
    }
    $("#modal").iziModal(defaultValue);
    $("#modal").iziModal("open");
};
window.codeState = function (code, opt) {
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
window.BlogUtils = BlogUtils;