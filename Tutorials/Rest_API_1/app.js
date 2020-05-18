const express= require('express');//import express package to this file
const app=express();//excute express
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);//use it
//app.use('/user',userRoute);

//middlewares=function when hit route
//send message in terminal=>when browser is active
app.use('/posts',()=>{
    console.log('middlewares is runnning');
})

//routes ,req=request,res=response
//app.delete=delete post/ patch=update post/ get=get info/ post=give info
//'/'=localhost
//http://localhost:3000/
app.get('/',(req,res)=>{
    res.send('We are on home');
})


//Connect to DB=hardcode
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },//solve warning
()=>console.log('Connected to DB')//message
);


//listening to server, with port
app.listen(3000);