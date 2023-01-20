const http = require("http")


const port = process.env.PORT  || 3000     
// whichever port our process is getting we use that or if undefined we use 3000
const server = http.createServer((req, res) =>{
    // http.createServer is a method that is present in http module
    console.log(req.url)
    res.statusCode = 200  
    // 200 is for ok
    // When we send a request to http server the response we get it has some status codes which tell us whether the
    //  response is ok, or there is a an error or page not found etc.
    // Can find them on google by searching http server statuscodes.
    res.setHeader("Content-type","text/html")
    // We used this so that the response printed should not be in plain text and should be in HTML.

    // This tells what should be the response of our server
})

server.listen(port,()=>
{console.log(`Server is listening on port: ${port}`)
})
// We always have to listen on a port for making the server run