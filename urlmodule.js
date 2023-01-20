import url from "url"
const myURL = new URL("https://example.org")
myURL.pathname = 'a/b/c'
myURL.search = '?d=e'
myURL.hash = '#fgh'
// All the above code is present in nodejs docs
console.log(myURL)
