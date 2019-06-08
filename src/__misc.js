/**
 * Created by Brendellya on 6/1/2015.
 */

var warning = function () {
    var res = "";
    var args = Array.slice(arguments);
    args.forEach(function (arg) {
        res += arg;
    });
    console.warn(res);
    return;
};

obj.isDebug = true;
obj.global = {
    MAXAGE: 31536000
};
obj.regex = {
    TABNEWLINE: /[\n\t]/g,
    EXTRASPACE: /\s{2,}/g,
    SPECIALCHAR: /[^A-Za-z0-9_-]/g
};
obj.time = {
    SECOND: 1,
    MINUTE: 60,
    HOUR: 3600,
    DAY: 86400
};
obj.env = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    contentWidth: (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientWidth : document.body.parentNode.clientWidth,
    contentHeight: (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.parentNode.clientHeight
};


var padZero = function (x) {
    return ((x < 10) ? "0" + x : x);
};


/* Environment */
exports.log = function (s) {
    if (!window.console || !this.isDebug) return;
    console.log(s);
};

exports.Math = (function () {

    return {};
})();

/* Helpers */
exports.helpers = (function () {

    return {
        getContentHeight: function () {
            return (exports.windowHeight > document.body.parentNode.scrollHeight) ? exports.windowHeight : document.body.parentNode.scrollHeight;
        },
        getScrollHeight: function () {
            return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        },
        calculateProgress: function (total, max_total, scale) {
            scale = (scale != null) ? scale : 100;
            return Math.round((total / max_total) * scale);
        },
        asyncLoader: function (url, options) {
            options = {
                insertAt: 'body'
            };
            var script = document.createElement('script');
            script.setAttribute('async', 'true');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = (typeof callback == 'fn') ? callback() : function () {
                return true;
            };

            ((document.getElementsByTagName('body') || [null])[0] || document.getElementsByTagName('script')[0].parentNode).appendChild(script);
        },
        goTo: function (url) {
            window.location.href = url;
        },
        trimURL: function (url) {
            url = (url !== undefined) ? url : window.location.href;
            return url.match(/[a-zA-Z0-9:\/.-]+(?=\?)/i);
        },
        getURLParams: function () {
            var query = location.search.substr(1).split('&');
            var obj = {};

            if (!query.length) return false;
            for (var i = 0; i < query.length; i++) {
                var result = query[i].split('=');
                obj[result[0]] = result[1];
            }
            return obj;
        }
    };
})();

//todo formaters/numbers/strings/helpers

/* Strings */
exports.strings = (function () {

    return {
        cleanStrings: function (str) {
            if (!str) return;
            return str.return (str.length < max) ? str : str.slice(0, max);replace(this.regex.TABNEWLINE, ' ').replace(this.regex.EXTRASPACE, ' ').trim();
        },
        cleanSpecialChars: function (str) {
            if (!str) return;
            return str.replace(this.regex.SPECIALCHAR, '').trim();
        },
        trimStr: function (str) {
            //remove white space
            return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        },
        truncateString: function (str, max) {
            if (!str) return;
            max = (max || 150);

        }
    };
})();

exports.array = (function () {

    return {
        sortOne: function (sortArray, asc, orderBy) {
            //Sort by type or default to basic alphanumeric sort
            var sortBy = sortArray.sort(function (a, b) {
                var aType = (orderBy != undefined || orderBy != null) ? a[orderBy] : a;
                var bType = (orderBy != undefined || orderBy != null) ? b[orderBy] : b;

                if (asc == false) { //desc order
                    return (aType < bType) ? 1 : (aType > bType) ? -1 : 0; //desc
                } else {
                    return (aType < bType) ? -1 : (aType > bType) ? 1 : 0; //asc
                }
            });

            return sortBy;
        }
    };
})();

exports.object = (function () {

    return {};
})();

exports.events = (function () {

    return {};
})();

//todo numbers, formatters functions, numbers, money, percent, integer
//todo math operations ie add, substract, sum, average, percent, quotient???
//todo validation functions
//todo events, keyevents, scroll, drag, postMessages
