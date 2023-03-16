const path = require('path');
const cors = require('cors');
const express = require('express');

const dotenv = require("dotenv");
dotenv.config();

const email = require('./emailSend');


const express = require('express')
const app = express()
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
