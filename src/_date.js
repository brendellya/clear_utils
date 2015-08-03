/**
 * clear_utils repo
 * Dates Module
 *
 * @description
 * Perform simple date creation & time calculations.
 * Module can be copied/pasted and used as a standalone
 * module.
 *
 * Use with complete library of assign module to a new
 * variable
 *
 * @example
 * var myDates = (function(){...))();
 *
 * Created by Brendellya on 6/1/2015.
 */


exports.date = (function () {
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    /*
        Truncate full months/days
        create a new array
     */
    var truncate = function(str){
        return str.slice(0, 3);
    };
    var monthsShort = months.map(truncate);
    var daysShort = days.map(truncate);

    /*
        Time Limit Ranges [min, max]
     */
    var limits = {
        years: [1, 100],
        months: [1,11],
        weeks: [1,3],
        days: [1,6],
        hours: [1,23],
        minutes: [1,59],
        seconds: [0,59]
    };

    return {
        /*
            Time Durations (milliseconds)
         */
        times: {
            SECOND: 1000,
            MINUTE: 60000,
            HOUR: 3600000,
            DAY: 86400000,
            WEEK: 86400000 * 7,
            MONTH: 86400000 * 30.1666,
            YEAR: 86400000 * 30.4166 * 12
        },

        /**
         * print
         * @description Creates date object and returns
         * a massive object of all native date formats.
         * Can accept milliseconds or any single valid date format.
         *
         * @param d
         * @returns {*}
         *
         * @example
         * __.date.print();
         * __.date.print('2015/03/25');
         * __.date.print(1433624248201);
         *__.date.print('05/02/2015 3:15:00 PM');
         * __.date.print('2015-03-25T12:00:00');
         * __.date.print('2015');
         *
         */
        print: function (d) {
            d = (d)? new Date(d) : new Date();

            return {
                d: d,                                   // Date {Sat Jun 06 2015 00:00:00 GMT-0400 (Eastern Standard Time)}
                timeStamp: d.getTime(),                 // 1433563200000
                string: d.toString(),                   // Sat Jun 06 2015 00:00:00...(Eastern Standard Time)
                dateString: d.toDateString(),           // Sat Jun 06 2015
                timeString: d.toTimeString(),           // 00:00:00 GMT-0400 (Eastern Standard Time)
                isoString: d.toISOString(),             // 2015-06-06T04:00:00.000Z
                localeString: d.toLocaleString(),       // 6/6/2015, 12:00:00 AM
                localeDate: d.toLocaleDateString(),     // 6/6/2015
                localeTime: d.toLocaleTimeString(),     // 12:00:00 AM
                utcString: d.toUTCString(),             // Sat, 06 Jun 2015 04:00:00 GMT
                fullYear: d.getFullYear(),              // 2015
                month: d.getMonth() + 1,                // 6
                monthFull: months[d.getMonth()],        // June
                monthShort: monthsShort[d.getMonth()],  // Jun
                date: d.getDate(),                      // 6
                day: d.getDay() + 1,                    // 7
                dayFull: days[d.getDay()],              // Saturday
                dayShort: daysShort[d.getDay()],        // Sat
                hours: d.getHours(),                    // 0
                minutes: d.getMinutes(),                // 0
                seconds: d.getSeconds(),                // 0
                ms: d.getMilliseconds()                 // 0
            };
        },

        /**
         * setFuture
         * @description Allows setting a future date and returns
         * a new date.print object.
         * Can return an object of a specific format.
         *
         * @param time
         * @param forward
         * @param format
         * @returns {*}
         *
         * @example:
         * __.date.setFuture('9/25/2018', {day: 3});
         * __.date.setFuture('10/1/2025', {day: 15}, 'string'));
         *__.date.setFuture('2025', {day: 2}, 'dateString');
         *
         */
        setFuture: function (time, forward, format) {
            var newDate, conversion;
            time = (time)? this.print(time) : this.print();
            forward = (typeof forward === 'object')? forward : {};

            conversion = {
                year: (forward.year && typeof forward.year === 'number')? time.d.getFullYear() + forward.year : time.d.getFullYear(),
                month: (forward.month && typeof forward.month === 'number')? time.d.getMonth() + forward.year : time.d.getMonth(),
                day: (forward.day && typeof forward.day === 'number')? time.d.getDate() + forward.day : time.d.getDate(),
                week: (forward.week && typeof forward.week === 'number')? time.d.getDate() + (7 * forward.week) : 0, //optional
                hour: (forward.hour && typeof forward.hour === 'number')? time.d.getHours() + forward.hour : time.d.getHours(),
                min: (forward.min && typeof forward.min === 'number')? time.d.getMinutes() + forward.min :  time.d.getMinutes(),
                sec: (forward.sec && typeof forward.sec === 'number')? time.d.getSeconds() + forward.sec :  time.d.getSeconds()
            };
            newDate = new Date(conversion.year, conversion.month, (conversion.week || conversion.day), conversion.hour, conversion.min, conversion.sec, 0);

            return (format)? this.print(newDate)[format] : this.print(newDate);
        },

        /**
         * setPast
         * @description Allows setting a past date and returns
         * a new date.print object.
         * Can return an object of a specific format.
         *
         * @param time
         * @param backward
         * @param format
         * @returns {*}
         *
         * @example:
         * __.date.setPast('9/25/2012', {day: 3, hour: 11});
         * __.date.setPast('10/1/2014', {day: 15}, 'isoString');
         * __.date.setPast('2015-05-25T12:00:00', {hour: 2})
         *
         */
        setPast: function (time, backward, format) {
            var newDate, conversion;
            time = (time)? this.print(time) : this.print();
            backward = (typeof backward === 'object')? backward : {};

            conversion = {
                year: (backward.year && typeof backward.year === 'number')? time.d.getFullYear() - backward.year : time.d.getFullYear(),
                month: (backward.month && typeof backward.month === 'number')? time.d.getMonth() - backward.year : time.d.getMonth(),
                day: (backward.day && typeof backward.day === 'number')? time.d.getDate() - backward.day : time.d.getDate(),
                week: (backward.week && typeof backward.week === 'number')? time.d.getDate() - (7 * backward.week) : 0, //optional
                hour: (backward.hour && typeof backward.hour === 'number')? time.d.getHours() - backward.hour : time.d.getHours(),
                min: (backward.min && typeof backward.min === 'number')? time.d.getMinutes() - backward.min :  time.d.getMinutes(),
                sec: (backward.sec && typeof backward.sec === 'number')? time.d.getSeconds() - backward.sec :  time.d.getSeconds()
            };

            newDate = new Date(conversion.year, conversion.month, (conversion.week || conversion.day), conversion.hour, conversion.min, conversion.sec, 0);
            return (format)? this.print(newDate)[format] : this.print(newDate);
        },


        /**
         * future
         * @description Gets future date from today
         * Can return object or single format.
         *
         * @param forward
         * @param format
         * @returns {*}
         *
         * @example
         * __.date.future({day : 3});
         * __.date.future({week: 1}, 'dateString');
         * __.date.future({month:  2, day: 4, hour: 18 });
         *
         */
        future: function (forward, format) {
            return this.setFuture(null, forward, format);
        },

        /**
         * past
         * @description Gets past date from today
         * Can return object or single format.
         *
         * @param backward
         * @param format
         * @returns {*}
         *
         * @example
         *
         */
        past: function (backward, format) {
            return this.setPast(null, backward, format);
        },

        /**
         * since
         * @description Gets various time segments since
         * set date or today's date. Returns a object
         * with all time calculations & intervals.
         *
         * @param time
         * @returns {{years: number, months: number, weeks: number, days: number, hours: number, minutes: number, seconds: number}}
         *
         * @example
         * __.date.since('2015');
         * __.date.since('2015-04');
         * __.date.since('2015-05-25T12:00:00');
         *
         */
        since: function (time) {
            var now = this.print();
            var then = this.print(time);

            return  {
                years: (Math.floor(now.timeStamp - then.timeStamp) > 0) ? Math.floor((now.timeStamp - then.timeStamp) / this.times.YEAR) : 0,
                months: (Math.floor(now.timeStamp - then.timeStamp) > 0) ? Math.floor((now.timeStamp - then.timeStamp) / this.times.MONTH) : 0,
                weeks: (Math.floor(now.timeStamp - then.timeStamp) > 0) ? Math.floor((now.timeStamp - then.timeStamp) / this.times.WEEK) : 0,
                days: (Math.floor(now.timeStamp - then.timeStamp) > 0) ? Math.floor((now.timeStamp - then.timeStamp) / this.times.DAY) : 0,
                hours: (Math.floor(now.timeStamp - then.timeStamp) > 0) ? Math.floor((now.timeStamp - then.timeStamp) / this.times.HOUR) : 0,
                minutes: (Math.floor(now.timeStamp - then.timeStamp) > 0) ? Math.floor((now.timeStamp - then.timeStamp) / this.times.MINUTE) : 0,
                seconds: (Math.floor(now.timeStamp - then.timeStamp) > 0) ? Math.floor((now.timeStamp - then.timeStamp) / this.times.SECOND) : 0
            };
        },

        /**
         * until
         * @description Gets various time intervals since
         * set date or today's date.
         *
         * @param time
         * @returns {{years: number, months: number, weeks: number, days: number, hours: number, minutes: number, seconds: number}}
         *
         * @example
         * __.date.until('07/01/2016');
         * __.date.until('2020');
         *
         */
        until: function (time) {
            var now = this.print();
            var then = this.print(time);

            return  {
                years: (Math.floor(then.timeStamp - now.timeStamp) > 0) ? Math.floor((then.timeStamp - now.timeStamp) / this.times.YEAR) : 0,
                months: (Math.floor(then.timeStamp - now.timeStamp) > 0) ? Math.floor((then.timeStamp - now.timeStamp) / this.times.MONTH) : 0,
                weeks: (Math.floor(then.timeStamp - now.timeStamp) > 0)? Math.floor((then.timeStamp - now.timeStamp) / this.times.WEEK) : 0,
                days: (Math.floor(then.timeStamp - now.timeStamp) > 0) ? Math.floor((then.timeStamp - now.timeStamp) / this.times.DAY) : 0,
                hours: (Math.floor(then.timeStamp - now.timeStamp) > 0) ? Math.floor((then.timeStamp - now.timeStamp) / this.times.HOUR) : 0,
                minutes: (Math.floor(then.timeStamp - now.timeStamp) > 0) ? Math.floor((then.timeStamp - now.timeStamp) / this.times.MINUTE) : 0,
                seconds: (Math.floor(then.timeStamp - now.timeStamp) > 0) ? Math.floor((then.timeStamp - now.timeStamp) / this.times.SECOND) : 0
            };
        },

        /**
         * timeSince
         * @description Returns the highest segment of time since
         * a set date. Similiar since date.since() except, only one
         * value is returned.
         *
         * @param time
         * @returns {*}
         *
         * @examples
         * __.date.timeSince('06/10/2014');
         *__.date.timeSince('2000');
         *
         */
        timeSince: function(time){
            var since = this.since(time);
            var result = {}, min, max;

            for(x in since){
                min = limits[x][0];
                max = limits[x][1];

                if(since[x] >= min && since[x] <= max){
                    result[x] = since[x];
                    return result;
                }
            }
            return {};
        },

        /**
         * timeUntil
         * @description Returns the highest segment of time since
         * a set date. Similiar since date.since() except, only one
         * value is returned.
         *
         * @param time
         * @returns {*}
         *
         * @example
         * __.date.timeUntil('2026');
         * __.date.timeUntil('2018-06');
         *
         */
        timeUntil: function(time){
            var until = this.until(time);
            var result = {}, min, max;

            for(x in until){
                min = limits[x][0];
                max = limits[x][1];

                if(until[x] >= min && until[x] <= max){
                    result[x] = until[x];
                }
            }
            return result;
        }

    };
})();
