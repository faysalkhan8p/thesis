const express = require('express');
const app = express();
const free = require("free-memory")
app.get('/favicon.ico',(req,res)=>{
    console.log("express is dumb")
})
app.use('/:value', (req, res) => {
    let num = req.params.value
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    // free(function (err, info) {
    //     console.log(info);
    // });
    console.log(num2)
    res.status(200).json({
        status: "ok",
        data: num2
    });
});
app.listen(5000);