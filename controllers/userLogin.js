const user = require('../models/user')
module.exports= (req,res)=>{
const {name,pwd} = req.body
user.findOne({name:name,pwd:pwd},(err,users)=>{
    if(users){
      req.session.userId = users._id
    
        res.redirect('/new/post')
    }
  else{
    res.redirect('/auth/login')
  }
})

  
}