const express = require("express");
const app = express();
const port  = 5000;

app.get("/",(req,res)=>{
    console.log("Received request for /");
    res.send('Hello World')   
})

/*app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});*/

module.exports = app;
