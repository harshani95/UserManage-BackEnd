const userSchema= require('../model/UserSchema');
const bcrypt= require('bcrypt');
const salt=10;
const jsonwebtoken =require('jsonwebtoken');

const login = (req,resp) => {
    userSchema.findOne({'email':req.body.email}).then(selectedUser=>{
        if (selectedUser !== null){
            bcrypt.compare(req.body.password, selectedUser.password, function(err, result) {
               if (err){
                   return resp.status(500).json({'message':'internal server error'});
               }

               if(result){
                   const payload={
                       email:selectedUser.email
                   }

                   const secretKey=process.env.SECRET_KEY;
                   const expiresIn='24h';

                   const token = jsonwebtoken.sign(payload,secretKey,{expiresIn});
                   return resp.status(200).json({'token':token});
               }else{
                   return resp.status(401).json({'message':'Password is incorrect!'});
               }
            });
        }else{
            return resp.status(404).json({'message':' User not found!'});
        }
    });
}

module.exports={
    login
}