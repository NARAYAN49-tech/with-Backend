// const figlet  = require("figlet");

// figlet("Sanket bhau pawar",function (err,data){
//     if(err){
//         console.log("error is here");
//         console.dir(err);
//         return err;
//     }
//     console.log(data);
//     figlet("Sanket bhau",function (err,data){
//         if(err){
//             console.log("error is here");
//             console.dir(err);
//             return err;
//         }
//         console.log(data);
//     });
// });

// const finalhandler = require('finalhandler');
// const http =  require('http')

// let server = http.createServer(function (req, res) {
//     let done = finalhandler(req, res)
//     done()
// })
// server.listen(3000)


// var finalhandler = require('finalhandler')
// var fs = require('fs')
// var http = require('http')

// var server = http.createServer(function (req, res) {
//   var done = finalhandler(req, res)

//   fs.readFile('expressDir/narayan.html', function (err, buf) {
//     if (err) return done(err)
//     res.setHeader('Content-Type', 'text/html')
//     res.end(buf)
//   })
// })

// server.listen(8080)

//module.exports = require('./lib/natural/')
// // const finalhandler = require('finalhandler')
// // const fs = require('fs')
// // const http = require('http')

//  server = http.createServer(function (req, res) {
//      done = finalhandler(req, res);

//     fs.readFile('expressDir/index.html', function (err, buf) {
//       if (err) return done(err)
//       res.setHeader('Content-Type', 'text/html')
//       res.end(buf)
//     })
// })

// server.listen(8080)



const request = require('supertest')
const express = require('express')
const app = express()
app.get('/user', function(req, res) {
  res.status(200).json({name: 'john'});
});
request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  console.log(app)
  .end(function(err, res) {
    if (err) throw err;
  });
