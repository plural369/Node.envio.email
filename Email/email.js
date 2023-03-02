const nodemailer = require('nodemailer');

let emails = ['teste@hotmail.com']

function email(email){
  const transporter = nodemailer.createTransport({
      host: "smtp.live.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: "admin@hotmail.com",
          pass: "***************"
      },
      tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
      from: 'admin@hotmail.com',
      to: email,
      subject: 'E-mail enviado usando Node!',
      html: '<div><p> Seja bem vindo novo blue! </p> <br/> <p> Seus dados estão inseridos </p></div>'
    };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
      }
  });
}

for(let i = 0; i < emails.length; i++){
  email(emails[i]);
}
