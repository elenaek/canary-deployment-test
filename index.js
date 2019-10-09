const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Canary deployment test API version 1!",
        version: "1.0"
    });
});

app.listen(5000, () => {
    console.log("Canary deployment test API started!");
});
