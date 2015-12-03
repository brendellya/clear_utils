/**
 * clear_utils repo
 * Storage Module || localStorage
 *
 * @description
 * Easily set and manage localstorage caching.  Supports a custom
 * error callback function.
 * Module should be used in conjuction with "__session" module.
 *
 * Use with complete library of assign module to a new
 * variable
 *
 * @example
 * var myUtils = (function(){...))();
 *
 * Created by Brendellya on 8/1/2015.
 */

exports.storage = (function () {

    var warning = function () {
        var res = "";
        var args = Array.prototype.slice.call(arguments);
        args.forEach(function (arg) {
            res += arg;
        });
        console.warn(res);
        return;
    };

    var errorCallback = function(){
        //return warning('Error: Could not save to localStorage');
        throw new Error('Error: Could not save to localStorage');
    };

    return {
        /**
         *  storage.type
         *  @description Sets the storage type to localStorage.
         *  Session Storage modules mirrors localStorage.
         *  Do not change!
         */
        type: localStorage,

        /**
         * storage.set
         * @description Sets a new item to localStorage.
         * Encodes encodes objects and accepts an custom error callback.
         *
         * @param {string} key
         * @param {*} val
         * @param {function} error
         *
         * @example
         * __.storage.set('treats', ['ice cream', 'cookies', 'cakes']);
         * __.storage.set('fruit', 'peach', errCallback);
         */
        set: function (key, val, error) {
            var errorHandler = (error && typeof error === 'function')? error : errorCallback;
            val = (val || true);

            if (window.Storage) {
                if (typeof key !== 'string') throw new Error ("Key is not a string!");

                val = (typeof val === 'object') ? JSON.stringify(val) : val;
                try {
                    this.type.setItem(key, val);
                } catch (e) {
                    errorHandler();
                }
            } else {
                errorHandler();
            }
        },

        /**
         * storage.get
         * @description Retrieves a set value and auto parses objects.
         * Set parse param to false to retrieve encoded value.
         *
         * @param {string} name
         * @param {boolean} parse
         *
         * @example
         * __.storage.get('startDate');
         * __.storage.get('settings', false);
         */
        get: function (name, parse) {
            var result = this.type.getItem(name);

            if (window.Storage) {
                if (!result) return warning("No keys found by name: ", name);
                if(parse !== false){
                    try {
                        return JSON.parse(result);
                    }
                    catch(e){}
                }
                return result;
            }
        },

        /**
         * storage.list
         * @description Displays all stored keys and values as an "new" object.
         * Defaults to auto-parse json, but setting param to false will return
         * stringified value.
         *
         * @returns {{}}
         *
         * @example
         * __.storage.list();
         */
        list: function (parse) {
            var keys = [], obj = {}, _this = this;
            if (window.Storage) {
                keys = this.keys();

                keys.forEach(function (key) {
                    obj[key] = (parse === false) ? _this.get(key, false) : _this.get(key);
                });
                return obj;
            }
        },
        
        /**
         * storage.key
         * @description Returns a storage value from a specific index, starting from zero.
         *
         * @param n
         * @returns {*|string}
         *
         * @example
         * __.storage.key(1);
         * __.storage.key(3);
         *
         */
        key: function (n) {
            n = (typeof n === 'number')? n : null;
            if(n === null) throw new Error("Error: No key found at that index. There are currently: " + this.total() + " keys");
            if(n >= this.total()) warning("Warning: There is currently: " + this.total() + " key(s)");
            if(window.Storage){
                return this.type.key(n);
            }
        },

        /**
         * storage.keys
         * @description Returns an array of all stored key names.
         *
         * @returns {Array}
         *
         * @example
         * __.storage.keys();
         */
        keys: function () {
            if(window.Storage) {
                var keys = Object.keys(this.type);
                return keys;
            }
        },

        /**
         * storage.total
         * @description Returns the total number of storage items.
         *
         * @returns {Number}
         *
         * @example
         * __.storage.total();
         */
        total: function () {
            return this.type.length;
        },

        /**
         * storage.remove (alias: storage.delete)
         * @description Removes a specific storage item.
         *
         * @param name
         *
         * @example
         * __.storage.remove('carData');
         */
        remove: function (name) {
            if (window.Storage) {
                if (!this.list()[name]) return warning("No keys found by name: ", name);
                this.type.removeItem(name);
            }
        },
        // Alias
        delete: function(name){
            return this.remove.call(this, name);
        },

        /**
         * storage.clear (alias: storage.deleteAll)
         * @description Deletes all localstorage data.
         *
         * @example
         * __.storage.clear();
         */
        clear: function () {
            if(window.Storage){
                this.type.clear();
            }
        },
        // Alias
        deleteAll: function(){
            return this.clear.call(this);
        }
    };
})();
