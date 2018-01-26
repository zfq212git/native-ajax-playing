var http=require("http");
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain", "Access-Control-Allow-Headers":"x-requested-with","Access-Control-Allow-Origin":"*"});
    res.write("ajax 来了!");
    
    res.end();
});
server.listen(8080,"127.0.0.1",function(){
    console.log("开始监听...");
});