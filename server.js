const http = require("http");
const mongodb = require("mongodb");


const connectionString = "mongodb+srv://Alex:JoN5dNUICcdLMuGy@alex.oriby.mongodb.net/Reja"


mongodb.connect(connectionString,
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
 (err, client) => {
    if (err) console.log("ERROR on connection Mongodb");
    else {
        console.log("mongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(
        `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
    );
  }); 
}
 }
); 

console.log("brr") 


 
