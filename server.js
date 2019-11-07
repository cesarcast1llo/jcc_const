const next = require('next')
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = express();
const handle = app.getRequestHandler();
var $PORT = process.env.PORT || 4000;
require('dotenv').config();

var auth = {
   auth: {
     api_key: process.env.MAILGUN_API_KEY,
     domain: process.env.MAILGUN_API_DOMAIN
   }
 }
var nodemailerMailgun = nodemailer.createTransport(mg(auth));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

server.post('/sent', (req, res) => {
   const output = `
      Contact Details
      --------
      Name: ${req.body.name}
      --------
      Email: ${req.body.email}
      --------
      Phone: ${req.body.number}
      --------
      Message: ${req.body.message}
   `;

   nodemailerMailgun.sendMail({
      from: '<donotreply@jccwebsite.com>',
      to: process.env.EMAILS,
      subject: 'Contact Submission',
      text: output

    }, function (err, info) {
      if (err) {
        console.log('Error: ' + err);
      }
      else {
        console.log('Email sent!');
      }
    });
    
   function redirectContact() {
      res.redirect('contact');
   }
   setTimeout(redirectContact, 5000);
});

app.prepare().then(() => {
   server.all('*', (req, res) => {
     return handle(req, res)
   })
 
   server.listen($PORT, err => {
     if (err) throw err
     console.log(`🔥🔥⚽⚽ Ready on http://localhost:4000`)
   })
 })
