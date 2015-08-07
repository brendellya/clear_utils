/**
 * clear_utils repo
 * Cookie Module
 *
 * @description
 * Perform simple cookie creation & management
 * Module can be copied/pasted and used as a standalone
 * module.
 *
 * Use with complete library of assign module to a new
 * variable
 *
 * @example
 * var myUtils = (function(){...))();
 *
 * Created by Brendellya on 8/1/2015.
 */

exports.cookie = (function () {

    /*
       Uses Date Object to set new UTC date
    */
    var expiry = function (time) {
        var d = new Date(time);
        var expires = d.toUTCString();

        return (expires !== 'Invalid Date') ? d.toUTCString() : null;
    };

    /*
        Trim white space
    */
    var trimStr = function (str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };

    return {
        /*
            Time Durations (seconds)
         */
        times: {
            SECOND: 1,
            MINUTE: 60,
            HOUR: 3600,
            DAY: 86400,
            YEAR: 86400 * 365
        },

        /**
         * cookie.set
         * @description Creates a new cookie.
         * Cookies values are encoded, json objects are stringified.
         * Besides cookie name all other values are optional.
         *
         * @param {string} name
         * @param {*} value
         * @param {object} options
         *
         * @example
         * __.cookie.set('status');  // sets value to "true"
         * __.cookie.set('today', 'It's hot yo!', {expires: '12/31/2015', path: '/my-dir/' });
         * __.cookie.set('flavor', 'chocolate', { maxAge: 86400, domain: '.example.com' });
         */
        set: function (name, value, options) {
            if (!name && typeof name !== 'string') {
                throw new Error('Cookie: Please enter a cookie name.');
            }
            var cookie;
            options = options || {};

            cookie = {
                name: name,
                value: (value !== undefined) ?
                    (typeof value === 'object') ? encodeURIComponent(JSON.stringify(value)) : encodeURIComponent(value) : // Encode or stringify
                    true,  // Default to "true"
                expires: (options.expires) ? '; expires=' + expiry(options.expires) : '', // Default to session
                maxAge: (options.maxAge)? '; max-age=' + options.maxAge : '',
                path: (options.path) ? '; path=' + options.path : '; path=/',
                domain: (options.domain) ? '; domain=' + options.domain : '', // Default to host
                secure: (options.secure) ? '; secure' : ''
            };

            // Set Cookie
            document.cookie = cookie.name + '=' + cookie.value +
                cookie.expires + cookie.maxAge +
                cookie.path + cookie.domain +
                cookie.secure +
                ';';
        },

        /**
         * cookie.get
         * @description Returns decoded cookie value if it exists.
         * Used decode param to false, to retrieve encoded value.
         *
         * @param {string} name
         * @param {boolean} decode
         * @returns {string} cookie
         *
         * @example
         * __.cookie.get("tea"); // Returns decode value
         * __.cookie.get("url", false); // Returns encoded value
         */
        get: function (name, decode) {
            var cookies = this.list(decode);
            return cookies[name];
        },

        /**
         * cookie.check
         * @description Checks the existence of a cookie.
         *
         * @param {string} name
         * @returns {boolean}
         *
         * @example
         * __.cookie.check("cat"); // Returns true|false
         *
         */
        check: function (name) {
            var cookies = this.list();
            return (cookies[name] && typeof cookies[name] === 'string')? true : false;
        },

        /**
         * cookie.list
         * @description Displays all cookies as an object
         * All values are decoded by default, add decode parameter
         * to return encoded values.
         *
         * @param {boolean} decode
         * @returns {object}
         *
         * @example
         * __.cookie.list();
         * __.cookie.list(false);
         *
         */
        list: function (decode) {
            var cookie = document.cookie;
            var arr = (cookie.length && cookie.indexOf(';') > -1) ?
                cookie.split(';') :  // Split multi-cookie length into array
                (cookie.length) ? [cookie] : []; // Create array for single cookie or empty array
            var obj = {};

            if (!arr.length) return {};

            arr.forEach(function(c){
                var result = c.split('=');
                obj[trimStr(result[0])] = (decode === false) ? result[1] : decodeURIComponent(result[1]);
            });

            return obj;
        },

        /**
         * cookie.total
         * @description Returns the total number of cookies.
         *
         * @returns {number}
         *
         * @example
         * __.cookie.total();
         *
         */
        total: function(){
            var cookies = this.list();
            var arr = Object.keys(cookies) || [];

            return arr.length;
        },

        /**
         * cookie.delete
         * @description Deletes a single cookie by name
         *
         * @param {string} name
         *
         * @example
         * __.cookie.delete("today");
         *
         */
        delete: function (name) {
            this.set(name, '', {maxAge: -1});
        },

        /**
         * cookie.deleteAll
         * @description Deletes all cookies
         *
         * @example
         * __.cookie.deleteAll();
         *
         */
        deleteAll: function () {
            var cookies = this.list();
            var arr = Object.keys(cookies) || [];

            arr.forEach(function (c) {
                this.delete(c);
            }.bind(this));
        }
    }

})();
