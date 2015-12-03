# clear_utils
A modular utilities library--made for common auxiliary problems. Easily set Dates, Cookies, and more coming soon.

## Description
This is a lightweight, simple utility library that I created to solve some of my common time-sink aspects
of writing javascript applications.  It's a project I hope to be helpful to me and if it helps others...great.
This repo is a work in progress, and hopefully I can add more modules at a reasonable rate.

### Modules
- [Dates] (docs/date.md)
- [Cookies] (docs/cookie.md)
- LocalStorage (coming soon)
- SessionStorage (coming soon)
- Device (comsin soon)
- Events (coming soon)

### Usage
For quick installation just add the compiled/minified javascript to any project--all functionality will be available.  
Otherwise, modules can be used individually when needed. Just assign to a custom variable anywhere in your code.

***

### Dates
Create simple dates and easily convert them to any format, including past and future dates. 
See [Date] (docs/date.md) for full documentation.

#### Methods
* __.date.print() - Returns a object all javascript formats
* __.date.setFuture() / __.date.setPast() - Set a past or future date.
* __.date.future() / __.date.past() - Set past or future date from now.
* __.date.since() / __.date.until() - Set time segments from now or a set date
* __.date.timeSince() / __.date.timeUntil() - Returns the highest segment from now or a set date

***

### Cookies
Create and manage cookies. Quickly retrieve and delete cookies.  See [Cookie] (docs/cookie.md) for full 
documentation.

#### Methods
* __.cookie.set() - Creates new cookie with options
* __.cookie.get() - Get any cookie by name
* __.cookie.check() - Check the existence of a cookie
* __.cookie.list() - List all cookies
* __.cookie.total() - Gives a total cookies set
* __.cookie.delete() - Delete a cookie by name
* __.cookie.deleteAll() - Delete all cookies

***
