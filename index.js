import express from 'express'
import cors from "cors"
import 'dotenv/config'
import user from './dbmodel/user.js'
import connectDB from './dbconfig/dbconnection.js'

connectDB()
const app = express()

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => { 
    
  res.send('Hello World')
})
app.get('/form', (req,res) => {
    const person = {
        name:"Abhishek",
        age:22,
        place:"Tvm",
        email:"abhi123@gmail.com"
    }
    res.json({data:person})
})

app.post('/form-submit', (req,res) => {
    
    const {name , email } = req.body
    user.insertOne({name ,email})
    res.json({status:true})
})


console.log("Hi")

app.listen(3001,() =>{
    console.log("Server running at port 3001")
})