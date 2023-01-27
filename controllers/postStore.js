const blogPost = require('../models/BlogPost')
module.exports = async(req,res)=>{
    await blogPost.create({...req.body,userId:req.session.userId})
    res.redirect('/')
}