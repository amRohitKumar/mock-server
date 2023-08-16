const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.post("/response", (req, res) => {
  res.status(200).send("I'm AI, nice to chat with you");
});

const port = process.env.LOCALPORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
