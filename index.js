// chap 1

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })

// chap 2

// const express = require('express')
// const app = express()
// const port = 3000
// const path=require("path")

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.use("/",require(path.join(__dirname,"routes/blog.js")))

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })

// chap 3

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
