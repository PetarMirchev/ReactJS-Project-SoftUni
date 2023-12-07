const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); 
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Replace these with your email server details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mychieldreactbackendnodemailer@gmail.com',
      pass: 'qwertyuiop-1234567890!'
    }
  });

  const mailOptions = {
    from: 'mychieldreactbackendnodemailer@gmail.com',
    to: 'petar_g@abv.bg',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});