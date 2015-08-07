### Dates
The simplest approach to creating dates in any format.  All functions uses date.print to return a new object with native formats.

##### date.print()
Creates a date object and returns a massive object of all native date formats.  Can accept milliseconds or any single 
valid date format.

```javascript
__.date.print(); // will return current date/time
__.date.print('2015/03/25'); 
__.date.print('07/01/2015 10:15:00 AM');
__.date.print('2015');
__.date.print(1436198729478);
```

Returns an object of native formats including the original date object (new Date()). For example:

```javascript
__.date.print('03/14/2015');
// result
{
  "d": Date {Sat Mar 14 2015 00:00:00 GMT-0400 (Eastern Standard Time)},
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

##### date.setFuture() / date.setPast()
Set a future or past date to return a new date.print() object. Set dates using a object in the format `{week: 6}`. Can also return a single format. 

```javascript
__.date.setFuture('02/20/2020', {year: 1}); 
// Set & Get future date, returns a new date object 1 year out from set date
__.date.setPast('05/01/2015', { day: 5, hour: 3}, 'isoString'); 
// result
"2015-04-26T01:00:00.000Z"
```

##### date.future() / date.past()
Get future or past date using today as starting point. Can return a single format.

```javascript
__.date.future({month: 3, hour: 4}); 
// Get future date from today, returns a new date object
__.date.past({week: 3}, 'dateString'); 
// result
"Mon Jun 15 2015"
```

##### date.since() / date.until()
Get time segments since a set date or today's date. Returns an object with all time calculations and intervals. Intervals are rounded down
to whole completed intervals.  In essence the time from 1/1/2015 to 7/1/2015 is six months, not seven since the seven month would be in progress.

```javascript
__.date.since('2015-01'); 
// Get intervals since a set date, returns an object
__.date.until('2025-05-25T12:00:00'); 
// result based on 7/2015
{"years":9,"months":119,"weeks":515,"days":3610,"hours":86663,"minutes":5199831,"seconds":311989886}
```

##### date.timeSince() / date.timeUntil()
Returns the highest segment of time since a set date. Similiar to date.since() / date.until() except only the highest completed value is returned.

```javascript
__.date.timeSince('07/01/2015');
__.date.timeUntil('2018-09');
// result based on 7/2015
{years: 3}
```
