const express = require("express");
const storage = require("node-persist");
const app = express();
const port = 3000;
const http = require("http");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/", (req, res) => {
//   res.send("Got a POST request");
// });

// // cau hinh nhung file tinh public
// app.use(express.static("public"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// khai báo sử dụng module HTTP
var http = require("http");

//Khởi tạo server chạy cổng 8000
http
  .createServer(function (request, response) {
    var param = request.url;
    response.write(param);
    response.end();
  })
  .listen(8000);
