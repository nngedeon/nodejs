const blogPost = require('../models/BlogPost')
module.exports = async(req,res)=>{
    const blogPosts = await blogPost.find({}).populate('userId')
    // console.log(req.session)
    res.render('index',{blogPosts})
}
