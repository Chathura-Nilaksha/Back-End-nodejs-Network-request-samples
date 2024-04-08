const http = require('http');
const co = require('./data/courses');
const re = require('./data/studentRequirements');

console.log("1 st node app");

    // below-createServer() => get big info box. check later too
const server = http.createServer((req,res)=>{    
    //console.log(req);
    //console.log(req.headers);

    if(req.method=="GET" && req.url=="/student-details"){
        res.statusCode=200;
        res.setHeader("Content-Type", "application/json");

        res.write(JSON.stringify(re.req));
        res.end();
    }
    if(req.method=="GET" && req.url=="/student-requirements"){
        res.statusCode=200;
        res.setHeader("Content-Type", "application/json");

        const responseData = 
        res.write(JSON.stringify(responseData));
        res.end();
    }
    if(req.method=="GET" && req.url=="/courses"){
        res.statusCode=200;
        res.setHeader("Content-Type", "application/json");

        res.write(JSON.stringify(co.a));
        res.end();
    }

});  




server.listen(3000, error => {
    if(error){
        console.error(error);
    }else{
        console.log("app started on port 8080");
    }

})    
//server.addListener()

