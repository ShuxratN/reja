const http = require("http");
const mongodb = require("mongodb");

let db ;
const connectionString =


mongodb.connect(connectionString,
    { 
    useNewUrlParser: true, 
    useUnifieldTopology: true,
}, 
(err, client) => {
    if (err) console.log("ERROR on connection Mongodb");
    else {
        console.log("mongoDB connection succeed")
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


 
