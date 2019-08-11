const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100status=active');

//Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//host or root domain
console.log(myUrl.host);

//host name : does not get the port
console.log(myUrl.hostname);

//pathname -> returns file name
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));