const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Canary deployment test API version 1!",
        version: "1.0",
        environment: "blue"
    }); // BLUE
});

// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome to Canary deployment test API version 2!",
//         version: "2.0",
//         environment: "green"
//     }); // GREEN
// });

app.listen(80, () => {
    console.log("Canary deployment test API started!");
});
