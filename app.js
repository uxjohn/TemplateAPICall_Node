const apiCallFromRequest = require('./Request')

const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            })
        };
        
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....http://localhost:3000/request");