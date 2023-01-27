const user = require('../models/user')
module.exports= (req,res)=>{
   user.create(req.body,(err,users)=>{
    if(err){
      // const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message)
      // req.flash('validationErrors',validationErrors)
     return res.redirect('/auth/register')
    }
    res.redirect('/new/post')
    
  })
  
}