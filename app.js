console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();

const fs = require("fs");
 
//let user = JSON.parse(fs.readFileSync("database/user.json", "utf8"));
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

//Mongo DB connect/ chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");


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
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});
//app.get("/author", (req, res) => {
 // res.render("author", { user: user});
//});  

app.post("/delete-item", (req,res) => {
    const id = req.body.id;
    db.collection("plans")
    .deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({ state: "success" });
    });
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });  
   
});  

module.exports = app; 

