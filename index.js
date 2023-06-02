const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome"
    });
});

const port = process.env.PORT || 3000;
app.listen(port, (err, res) => {
    console.log(err);
    console.log('App is Running');
});


