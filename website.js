const http = require("http")
const fs= require("fs")

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
    if(req.url =="/"){
        res.statusCode = 200  
        res.end("<h1> Hello myname is Ifham</h1><p>This is my first http server</p>")
        
    }
    else if(req.url == "/about"){
        res.statusCode = 200  
        res.end("<h1> Hello this is about ifham</h1><p>This is my first about ifham</p>")
        
    }
    else if(req.url == "/hello"){
        res.statusCode = 200  
        const data = fs.readFileSync("index.html")
        res.end(data.toString())
        
    }
    else{
        res.statusCode = 404   
        // error
        res.end("<h1> Page not found on server</h1><p>This page is not found</p>")
    }

    // This tells what should be the response of our server
})

server.listen(port,()=>
{console.log(`Server is listening on port: ${port}`)
})
// We always have to listen on a port for making the server run