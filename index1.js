// const express  = require("express");
// const app = express();

// console.log(app.listen);

// let port = 3000;
// app.listen(port, () => {
//     console.log(`app listening on port ${port}`);
// });


// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     res.send(`@${username} is the username and #${id} is the id`);
// });
// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     let html = `<h1>Welcome to the page of @${username}!</h1>`;
//     res.send(html);
// });

// app.get("/search", (req, res) => {
//     let { q } = req.query;
//     if(!q) {
//         res.send("<h1>Nothing Searched</h1>")
//     }
//     res.send(`<h1>Search results for query : <u>${q}</u>....</h1>`);
// });

// app.get("/school", (req, res) => {
//     res.send("U contacted school pathe")
// });
// app.get("/chickoo", (req, res) => {
//     res.send("U contacted chickoo pathe")
// });
// app.get("/banana", (req, res) => {
//     res.send("U contacted banana pathe")
// });
// app.get("/orange", (req, res) => {
//     res.send("U contacted orange pathe")
// });
// app.get("/apple", (req, res) => {
//     res.send("U contacted apple pathe")
// });
// app.get("/U", (req, res) => {
//     res.send("U contacted  pathe")
// });
// app.get("*", (req, res) => {
//     res.send("This path is not existing")
// })
// app.post("/link", (req, res) => {
//     res.send("You sent a post on linkedin, and got 44 impressions")
// })
// // app.use((req, res) => {
// //     console.log("request received")
// //     let code = ("<h1>Fruits</h1><ul><li>apple</li></ul>")
// //     res.send(code);
// // })


const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World')
    console.log('This is my Hello World Pone')
})
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listen ing on port ${port}$$`)
})