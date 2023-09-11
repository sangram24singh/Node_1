const http = require('http')
const data = require('./data')
const app = http.createServer((req, res)=>{
    const url = req.url
    if (url === '/')
    {
        res.write("<html>")
        res.write("<head><title>Hi !! i am sangram singh how are u javascript</title></head>")
        res.write("<body><h1>what is Node JS!! me</h1><p>NodeJS is the runtime environment, which can execute the javascript code on any platform. It is widely used to create and run web application servers because of its salient features. During production, several times we need to send the resources or some type of information as a response, and javascript object notation (JSON) synt </body>")
        res.write("</html>")
        res.end()
    }
    else if(url === '/node') {
        res.write(JSON.stringify(data))
        res.end()
    }
    else {
        res.write("default path")
        res.end()
    }
})

app.listen(8080,()=>{
    console.log('You are running on port 8080')
})

