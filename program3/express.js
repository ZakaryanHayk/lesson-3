// let express = require("express");
// let app = express();

// app.get("/", function(req, res){
// res.send("Hello world");
// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });/
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
//     var name = req.params.name;
// res.redirect('https://google.com/search?q=' + name)
//     // res.send("<h1>Hello " + name +"</h1>");
// });
// app.listen(3000, function(){
//     console.log("Example is running on port 3000");
// });

// var express = require("express");
// var app = express();

// app.use(express.static("../programming-3/Hayk_Zakaryan_2"));

// app.get("/", function(req, res){
// res.redirect("index.html");
// });

// app.listen(3000, function(){
// console.log("Example is running on port 3000");
// });

// let Sq = require("./module")
// let squ = new Sq(64);
// console.log("Result =====>", squ.mathSquare());

var fs = require('fs');

function main(){
    var file = "hello.txt";

    fs.appendFileSync(file, "Hello world");
}
main();