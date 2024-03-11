require('dotenv').config()
require('./DB/connection')

const express=require('express')
const router=require('./Routes/router')


const cors=require('cors')

//create a server

const dropCartserver=express()

dropCartserver.use(cors())

dropCartserver.use(express.json())
// dropCartserver.use(bodyParser.json()) // for parsing application/json
// dropCartserver.use(bodyParser.urlencoded({ extended: true }))

dropCartserver.use(router)

const PORT=3000||process.env.PORT

dropCartserver.listen(PORT,()=>{
    console.log(`drop cart srver running ${PORT}`);
})