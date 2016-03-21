var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./client/static")));

var routes = require("./server/config/routes.js");
routes(app);

app.listen(8000, function(){
	console.log("Batman is listening on 8000");
})