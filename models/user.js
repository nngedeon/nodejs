const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = mongoose.Schema({
    name:{type:String,required:[true,'username is required']},
    pwd:{type:String,required:[true,'password is required']}
})
userSchema.plugin(uniqueValidator)
const user = mongoose.model('user',userSchema)
module.exports = user
