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
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
        console.log(data.ops[0]);
        
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

app.post("/edit-item", (req, res) => {
    const data  = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input} },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
    });

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "Barcha rejalar ochirildi"});
        });
    }
})    

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

