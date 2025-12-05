/*
Challenge: 

1.Set up a server that serves the string 
    '<html><h1>The server is working</h1></html>'.
    
    What should the content type be? 
    What status code should you send?

2. Listen on port 8000 and log a connection message to the console.

3. Open the browser to see your first served HTML.

*/

import http from 'http';

const server=http.createServer((req,res)=>{
res.statusCode=200
res.setHeader('Content-Type', 'text/html');
res.end('<html><h1>The server is working</h1></html>')
})

server.listen(8000,()=>console.log(`server is running on port 8000`))