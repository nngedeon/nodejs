const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession=require('express-session')
const homeController = require('./controllers/home')
const getpostController = require('./controllers/newPost')
const postStoreController = require('./controllers/postStore')
const newUserController = require('./controllers/register')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const userLoginController = require('./controllers/userLogin')
const flash = require('connect-flash')
const logout = require('./controllers/logout')
app.use(flash())
const authMidlewareCotroller = require('./midlewares/authMidleware')
app.use(expressSession({secret:'clavier'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
const ejs = require('ejs')
app.set('view engine','ejs')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/newdb',{useNewUrlParser:true})
app.use(express.static('public'))
app.use('*',(req,res,next)=>{
    logIn = req.session.userId
    next()
})
    

app.get('/', homeController)
app.get('/new/post', getpostController)
app.post('/post/store', postStoreController)
app.post('/users/register',storeUserController)
app.get('/auth/register',newUserController)
app.get('/auth/login',loginController)
app.post('/users/login',userLoginController)
app.get('/user/logout',logout)





app.listen(2000,()=>console.log('server is launched'))