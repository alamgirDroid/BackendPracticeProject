var jwt =require('jsonwebtoken');


module.exports=(req,res,next)=>{

  let Token=req.headers['token-key']
  jwt.verify(Token,'SecretKey1234',function(err,decoded){
    if(err){
      res.status(401).json({status:"Unauthorized"})
    }
    else{
      //Get User Name From Decoded Token and Add with Req header
      let username=decoded['data']['UserName'];
      req.headers.username=username

      next();
    }
  })
}