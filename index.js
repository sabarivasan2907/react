const express = require('express');
const app = express();
const port = 3000;

const appRouter = require('./routes/index.js');

app.use(logger);

app.get('/', (req, res) => {
    console.log('test');
    res.send("hello world");
});

function logger(req, res, next) {
    console.log("before");
    //console.log("req", req);
    // console.log("res", res);
    console.log("after");
    next();
    // console.log("req", req);
    //console.log("res", res);
}

app.listen(port, () => {
    console.log('Application is listening on port ', port);
});