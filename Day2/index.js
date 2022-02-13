const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// req.body //post,delete,put,patch
// req.params //get
// req.query //get

// middleware
app.use(bodyParser.json());

// REST API's
// app.get(); (data get)
// app.post(); (data create)
// app.delete(); (data delete)
// app.put(); (whole data update)
// app.patch(); (few fields update)

app.get("/", (req,res) => {
    res.status(200).json({
        message: "Welcome to the Express",
        data: [{
            name: "vivek",
            id: "123"
        }]
    })
});

app.get("/details", (req,res) => {
    const query = req.query;
    if(query.id === "123") {
        res.status(200).json({
            message: "Yours data",
            data: [{
                name: "vivek",
                id: "123",
                age: 25,
                city: "Mirpurkhas"
            }]
        });
    }
    else {
        res.status(400).json({
            message: "Invalid id",
            data: []
        });
    }
})

app.post("/", (req,res) => {
    const body = req.body;
    if(body.id === "123") {
        res.status(200).json({
            message: "Yours data",
            data: [{
                name: "vivek",
                id: "123",
                age: 25,
                city: "Mirpurkhas"
            }]
        });
    }
    else {
        res.status(400).json({
            message: "Invalid id",
            data: []
        });
    }
})

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 8080");
    }
})