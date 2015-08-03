/**
 * User: brendellya
 * clear_utils:: Big Ol' Repo for common functions
 *
 * @description
 * A modular javascript utilities library.  Made by me, for me, and anybody
 * else that finds this code useful.
 *
 * All modules are create in a way that will allow them to work as a whole
 * or they can be easily copied/pasted and used in isolation.
 * Just assign any module to a local variable.
 *
 * @example
 * var myDates = (function(){...))();
 *
 * Updated by Brendellya on 6/1/2015.
 */

(function () {
   var obj = {};

    // __.Date Module
    obj.date = require('./_date').date;

  // __.Cookie Module
  obj.cookie = require('./_cookie').cookie;



    window.__ = obj;
})();
