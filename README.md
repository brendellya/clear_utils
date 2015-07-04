# clear_utils
A modular utilities library--made for common auxiliary problems. Starting with Date creation.

## Description
This is a lightweight, simple utility library that I created to solve some of my common time-sink aspects
of writing javascript applications.  It's a project I hope to be helpful to me and if it helps others...great.
This repo is a work in progress, and hopefully I can add more modules at a reasonable rate.

### Usage
For quick installation just add the compiled/minified javascript to any project--all functionality will be available.  
Otherwise, modules can be used individually when needed. Just assign to a custom variable anywhere in your code.

***

### Dates
The simplest approach to creating dates in any format.  All functions uses date.print to return a new object with native formats.

### date.print()
Creates a date object and returns a massive object of all native date formats.  Can accept milliseconds or any single 
valid date format.

```javascript
__.date.print(); // will return current date/time
__.date.print('2015/03/25'); 
__.date.print('07/01/2015 10:15:00 AM');
__.date.print('2015');
```

Returns an object of native formats including the original date object (new Date()). For example:

```javascript
__.date.print('2015');
// date.print() object
{
  "d": "2015-03-14T04:00:00.000Z",
  "timeStamp": 1426305600000,
  "string": "Sat Mar 14 2015 00:00:00 GMT-0400 (Eastern Daylight Time)",
  "dateString": "Sat Mar 14 2015",
  "timeString": "00:00:00 GMT-0400 (Eastern Daylight Time)",
  "isoString": "2015-03-14T04:00:00.000Z",
  "localeString": "3/14/2015, 12:00:00 AM",
  "localeDate": "3/14/2015",
  "localeTime": "12:00:00 AM",
  "utcString": "Sat, 14 Mar 2015 04:00:00 GMT",
  "fullYear": 2015,
  "month": 3,
  "monthFull": "March",
  "monthShort": "Mar",
  "date": 14,
  "day": 7,
  "dayFull": "Saturday",
  "dayShort": "Sat",
  "hours": 0,
  "minutes": 0,
  "seconds": 0,
  "ms": 0
  }
```

### date.setFuture() / date.setPast()
Set a future or past date to return a new date.print() object. Set dates using a object in the format `{week: 6}`. Can also return a single format. 

```javascript
__.date.setFuture('02/20/2020', {year: 1});  // Set & Get future date, returns a new date object
__.date.setPast('05/01/2015', { day: 5, hour: 3}, 'isoString'); // Set & Get past date, return an ISO formatted string
```

### date.future() / date.past()
Get future or past date using today as starting point. Can return a single format.

```javascript
__.date.future({month: 3, hour: 4}); // Get future date from today, returns a new date object
__.date.past({week: 3}, 'dateString'); // Get past date form today, returns a date string
```

### date.since() / date.until()
Get time segments since a set date or today's date. Returns an object with all time calculations and intervals. Intervals are rounded down
to whole completed intervals.  In essence the time from 1/1/2015 to 7/1/2015 is six months, not seven since the seven month would be in progress.

```javascript
__.date.since('2015-01'); // Get intervals since a set date, returns an object
__.date.until('2025-05-25T12:00:00'); // Get intervals until a set date, returns an object

// time interval object
{years: 0, months: 4, weeks: 21, days: 149, hours: 3597…}
```

### date.timeSince() / date.timeUntil()
Returns the highest segment of time since a set date. Similiar to date.since() / date.until() except only the highest completed value is returned.

```javascript
__.date.timeSince('07/01/2015');
__.date.timeUntil('2018-06');
// 
{years: 2}
```

