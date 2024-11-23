const express = require("express");

const app = express();
const path = require("path");
const port = 8080;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
 app.get("/", (req, res) => {
    res.render("home.ejs");
 });

app.get("/ig/:username", (req,res) => {
    // const followers = ["adam","bob","steve","abc"];
    // let { username } = req.params;
    let { username } = req.params;
    const instaData = require("./DATA.json");
    res.send(instaData);

    const data = instaData[username];
    res.send(data);
    if(data) {
        res.render("instagram.ejs", {data});
    }else {
        res.render("error.ejs");
    }
    // console.log(dasta);
    // res.render("instagram.ejs", {data : instaData[username] });
});

app.get("/rollDice",(req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", {diceVal });
});

app.get("/hello",(req, res) => {
    res.send("Hello")
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});