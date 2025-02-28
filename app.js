console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();

const fs = require("fs");
 
let user = JSON.parse(fs.readFileSync("database/user.json", "utf8"));
/*let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});*/

//Mongo DB connect/ chaqirish
const db = require("./server").db();


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
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else{
            res.end("succesfully added");
        }
    });
});
app.get("/author", (req, res) => {
  res.render("author", { user: user});
});  

app.get("/", function (req, res) {
    if (!db) {
        return res.status(500).send("Database not connected");
    }
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja");
        }
    }) 
   
}); 

module.exports = app;

