const express = require("express")
const app =  express()
console.log(app.listen)
let port = 8080
app.listen(port,() =>{
    console.log(`app is listening on port ${port}`)
})

app.get("/home",(req,res) => {
    let { n } = req.query;
    res.send(`<h1>This is home page </h1>`); 
});

app.get("/apple", (req,res) => {
    res.send(`This is appple page`);
})
app.get("/search", (req, res) => {
    let { z } = req.query;
    
    res.send(`<h2>This is <u>search page</u></h2>`)
  
})
app.get("*", (req, res) => {
    res.send("This path is not existing")
 })
app.post("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let visci = (`This is my @${username}, and id @${id} is instagram page`);
    console.log(visci);
    res.send(visci);
});

// app.use((req, res) => {
//     console.log("request received");
//     let code = ("<head><title>Peru</title></head><h1>Santra</h1><button>Click me</button>");
//     res.send(code);
// })
// app.post("/:username/:id", (req, res) => {
//     let {username,id} = req.params;
//     let htnml = (`@${username} is username of narayan suryawanshi and ${id} is the id of narayan suryawanshi`)
//    console.log(htnml)
//     res.send = htnml;
    
// })