/**
 * clear_utils repo
 * Storage Module || sessionStorage
 *
 * @description
 * Easily set and manage sessionStorage caching.  Supports a custom
 * error callback function.
 * Module should be used in conjuction with "__storage" module.
 *
 * Use with complete library of assign module to a new
 * variable
 *
 * @example
 * var myUtils = (function(){...))();
 *
 * Created by Brendellya on 8/1/2015.
 */


exports.session = (function () {
    var storage = require('./_storage').storage;
    var storageMethods = Object.keys(storage);
    var session = {};

    // Create a new session object from the storage module
    session = storageMethods.reduce(function(memo, method){
        if(storage[method] &&  typeof storage[method] === 'function'){
            memo[method] = storage[method];
        }
        return memo;
    }, {});

    // Set storage type to sessionStorage
    session.type = sessionStorage;

    return session;

})();
