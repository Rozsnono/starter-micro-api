const express = require('express')
const app = express()
const cors = require('cors');

const dotenv = require("dotenv");
dotenv.config();

const email = require('./emailSend');

app.use(cors());

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)

app.post("/email", async (req, res) => {

  const emailSpecs = req.body;
  o = await email.EmailSending(emailSpecs);

  res.ok();
})
