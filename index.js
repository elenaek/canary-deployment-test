const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Canary deployment test API version 2!",
        version: "2.0",
        environment: "green"
    });
});

app.listen(80, () => {
    console.log("Canary deployment test API started!");
});
