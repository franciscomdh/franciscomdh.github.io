const express = require('express');
const app = express();
app.listen(8080,()=>{console.log("Server is running");})

app.get("/",(request,response)=>{
    response.send("<h1>Hello World!</h1><p>This is a simple server.</p>")
})

app.get("/login",(request,response)=>{
    
})