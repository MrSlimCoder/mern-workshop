const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Author = require("./Author");
const app = express();

// req.body //post,delete,put,patch
// req.params //get
// req.query //get

// mongodb connection 
mongoose.connect("mongodb://localhost/mernstack", (err) => {
    if (err) console.log("unable to connect");
    else console.log('database connected');
})

// cors
app.use(cors());

// middleware
app.use(bodyParser.json());

// REST API's
// app.get(); (data get)
// app.post(); (data create)
// app.delete(); (data delete)
// app.put(); (whole data update)
// app.patch(); (few fields update)

app.get("/", (req, res) => {
    Author.find().then((response) => {
        return res.status(200).json({
            success: true,
            data: response,
            message: "Author list"
        })
    })
});

app.get("/single", (req, res) => {
    const query = req.query;
    Author.findOne({ authorId: query.id }).then((response) => {
        return res.status(200).json({
            success: true,
            data: response,
            message: "Author Detail"
        })
    })
})

app.post("/", (req, res) => {
    const body = req.body;
    const author = new Author(body);
    author.save();
    return res.status(200).json({
        success: true,
        data: author,
        message: "Author added"
    })
})

// app.get("/", (req,res) => {
//     res.status(200).json({
//         message: "Welcome to the Express",
//         data: [{
//             name: "vivek",
//             id: "123"
//         }]
//     })
// });

// app.get("/details", (req,res) => {
//     const query = req.query;
//     if(query.id === "123") {
//         res.status(200).json({
//             message: "Yours data",
//             data: [{
//                 name: "vivek",
//                 id: "123",
//                 age: 25,
//                 city: "Mirpurkhas"
//             }]
//         });
//     }
//     else {
//         res.status(400).json({
//             message: "Invalid id",
//             data: []
//         });
//     }
// })

// app.post("/", (req,res) => {
//     const body = req.body;
//     if(body.id === "123") {
//         res.status(200).json({
//             message: "Yours data",
//             data: [{
//                 name: "vivek",
//                 id: "123",
//                 age: 25,
//                 city: "Mirpurkhas"
//             }]
//         });
//     }
//     else {
//         res.status(400).json({
//             message: "Invalid id",
//             data: []
//         });
//     }
// })

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 8080");
    }
})