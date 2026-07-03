const express = require('express')
const bodyParser = require('body-parser') 
const path = require('path')
const app = express()
const PORT = 3000;
//Middle wear
app.use(bodyParser.urlencoded({extends:true}))
app.use(express.static('public'))

const users = {}

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/register.html"))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"public/login.html"))
})

app.post('/register',(req,res)=>{
    const {username,password} = req.body;

    if(!username||!password){
        return res.send("Please fill all the details")
    }

    if(users[username]){
        return res.send("user already exist")
    }
    users[username] = password

    res.send("Registration Successfull")
})
app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    if(!users[username]){
        return res.send("user not found")
    }
    
    if(users[username]!=password){
        return res.send("Invalid credentials")
    }
    res.send("Login Successfully")
})

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:3000/ ${PORT}`);
  
  });