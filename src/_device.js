/**
 * Created by Brendellya on 6/1/2015.
 */

exports.device = (function () {
    var _userAgent = navigator.userAgent.toLowerCase();
    var _os = navigator.platform.toLowerCase();

    return {
        os: function () {
            var result = 'Other';
            var os_obj = {
                'win': 'Windows',
                'mac': 'Macintosh',
                'android': 'Android',
                'ios': 'iOS'
            };

            for (x in os_obj) {
                if (_os.indexOf(x) > -1) {
                    result = os_obj[x];
                }
            }
            return result;
        },
        app: function () {
            var result = 'Other';
            var agent_obj = {
                'msie': 'Internet Explorer',
                'firefox': 'Firefox',
                'safari': 'Safari', //must not have chrome or chromium, check first
                'chrome': 'Chrome',
                'opera': 'Opera'
            };

            for (x in agent_obj) {
                if (_userAgent.indexOf(x) > -1) {
                    result = agent_obj[x];
                }
            }
            return result;
        },
        mobile: function () {
            var result;
            var device_obj = {
                'ipad': 'iPad',
                'iphone': 'iPhone',
                'ipod': 'iPod',
                'silk': 'Kindle',
                'android': 'Android',
                'iemobile': 'Windows Mobile'
            };

            for (x in device_obj) {
                if (_userAgent.indexOf(x) > -1) {
                    result = device_obj[x];
                }
            }
            return result || false;
        },
        specs: function () {
            var _this = this;

            return {
                os: _this.os(),
                app: _this.app(),
                mobile: (_isMobile) ? _this.mobile() : _isMobile,
                availWidth: window.screen.availWidth,
                availHeight: window.screen.availHeight,
                userAgent: _userAgent
            };
        }
    };
})();
