console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

//Mongo DB connect

//1 KIRISH CODE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Session CODE
//3  VIEWS CODE
app.set("views", "views");
app.set("view engine","ejs");

//4 ROUTING CODE
app.post("/create-item", (req, res) => {
    //console.log(req.body);
    //res.json({ test: "success" });
});
app.get("/author", (req, res) => {
    res.render("author", { user: user});
});  

app.get("/", function (req, res) {
   res.render("reja");
}); 

//module.exports = app;

