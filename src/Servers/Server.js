const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());
app.use("/api", (req, res) =>
  res.json([
    {
      id: 1,
      title: "test1_title",
      body: "test1_body",
    },
    {
      id: 2,
      title: "test2_title",
      body: "test2_body",
    },
    {
      id: 3,
      title: "test3_title",
      body: "test3_body",
    }
  ])
);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})