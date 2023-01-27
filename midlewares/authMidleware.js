const user = require('../models/user')
module.exports = (req,res,next)=>{
    user.findById(req.session.userId,(err,users)=>{
        if(err || !users){
            return res.redirect('/')
        }
        else if(users){
            return res.redirect('create')
        }
        next()
    })
}