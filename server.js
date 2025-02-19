console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1 KIRISH CODE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Session CODE

//3  VIEWS CODE
app.set("views", "views");
app.set("view engine","ejs");

//4 ROUTING CODE
app.get("/", function (req, res) {
    res.end(`<h1 style="background:red">HELLO WORLD by little prince</h1>`);
});
app.get("/gift", function (req, res) {
    res.end(`<h1> Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`the server is running succesfully on port: ${PORT}`);

});