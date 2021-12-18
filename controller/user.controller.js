const {UserSchema} = require('../model/user');
const jwt = require('jsonwebtoken');
const { sendMail } = require('../util/sendmail');
const secretKey = 'SECRET';

const signup = (req, res) => {
  let userData = req.body;
  if(userData && (!userData.email || !userData.password)){
      return res.status(400).json({
          msg: "Email or password not found"
      })
  }
  const passwordToken = jwt.sign( userData.password , secretKey);
  userData.password = passwordToken;

  const user = new UserSchema(userData);
  user.save().then((data)=>{
    sendMail(data);
    return res.status(200).json({
        msg: "Sucess",
        data: data
    })
  }).catch((err)=>{
      return res.status(400).json({
          "msg":"Error on saving data",
          err: err
      })
  })
}

module.exports = {
    signup
}