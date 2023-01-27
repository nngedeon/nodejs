const mongoose = require('mongoose')

const bloSchema = mongoose.Schema({body:String,title:String,
    date:{type: Date,
    default:new Date() },
    userId:{type: mongoose.Schema.Types.ObjectId,ref:'user',require:true},
    image: String
    })

const blogPost = mongoose.model('blogPost',bloSchema)
module.exports = blogPost