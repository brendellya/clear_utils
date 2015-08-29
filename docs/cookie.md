### Cookies
Create and manage cookies with a simple 

##### cookie.set
Creates a new cookie with or without a value (json or otherwise).  All values are encoded.  See cookie options below.

````javascript
__.cookie.set('status');  // sets value to "true"
__.cookie.set('color', 'blue');   // set color to blue
__.cookie.set('today', 'It's hot yo!', {expires: '12/31/2015', path: '/my-dir/' });
__.cookie.set('flavor', 'chocolate', { maxAge: 86400, domain: '.example.com' });
````

##### cookie options
All cookie options are optional, if options are omitted default values are set.

##### expires
Sets cookie expiration to a date.  Can use any valid date format.
Format: {date} `2/10/2013` `2016` `1438909627268`
Default value: empty (no expiration ends with browser session)
 
##### maxAge
Sets cookie's max age in seconds starting from now.
Format: {number} `360` 
Default value: empty  (no expiration ends with browser session)

##### path
Sets the cookies path, usually the local directory.
Format: {string} `/myDri' 
Default value: '/' 

##### domain
Sets the cookies domain.
Format: {string} `mysite.com` `.myothersite.com`
Default value: empty

##### secure
Sets the cookie to secure.
Format: {boolean} `true`
Default value: empty


##### cookie.get
Returns decoded cookie value if it exists. Set `decode` param to false, to retrieve encoded value.

````javascript
__.cookie.get("url"); 
// returns  "https://github.com/brendellya/clear_utils"
__.cookie.get("url", false);
// returns encoded value: "https%3A%2F%2Fgithub.com%2Fbrendellya%2Fclear_utils"
````

##### cookie.check
Checks the existence of a cookie.

````javascript
__.cookie.check("cat"); // Returns true or false
````

##### cookie.list
Displays all cookies as an object. All values are decoded by default, add decode parameter to return encoded values.

````javascript
__.cookie.list();
__.cookie.list(false);
````

##### cookie.total
Returns the total number of cookies.

````javascript
__.cookie.total();
````

##### cookie.delete
Deletes a single cookie by name.

````javascript
__.cookie.delete("today");
````

##### cookie.deleteAll
Deletes all cookies.

````javascript
__.cookie.deleteAll();
````


