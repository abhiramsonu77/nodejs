const http = require("http");
const fs = require("fs");

http

    .createServer(function(req,res){
        const info = {
            name : "Abhiram",
            age : 22,
            degree : "BSc"
        };
        const txt = JSON.stringify(info);

        fs.writeFileSync("txt.json",txt);

        fs.readFile("txt.json", function (err, data){
            res.writeHead(250, {"Content-Type":"text/html"});
            res.write(data);
            res.end;
        });
    })

    .listen(5000,()=> {
        console.log("Server started");
    })