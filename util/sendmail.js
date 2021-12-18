const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: '',
  from: 'ritesh@gopazo.com', // Use the email address or domain you verified above
  subject: 'Welcome to our app',
  text: ''
};

const sendMail = (mailData) =>{

   msg.to = mailData.email;
   let text = `Dear ${mailData.name}, \n Welcome to our application`;
   msg.text = text;

   sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
  });
}

module.exports = {
    sendMail
}
