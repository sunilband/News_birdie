const express=require("express")
const CircularJSON = require('circular-json')
require('dotenv').config()
const server=express()
const axios=require("axios")
const port=process.env.port || 8000
const cors=require("cors")
server.use(cors())

server.use(express.json())


server.get("/everything/:api",async(req,res)=>{

    console.log(req.params.api)
    try {
		axios.get(req.params.api)
        .then((response)=>{
            res.status(200).json(response.data);
        })
		
	} catch (err) {
		res.status(500).json({ message: err });
        res.status(500)

	}
           
})

server.get("/top/:api",async(req,res)=>{

    console.log(req.params.api)
    try {
		axios.get(req.params.api)
        .then((response)=>{
            res.status(200).json(response.data);
        })
		
	} catch (err) {
		res.status(500).json({ message: err });
        res.status(500)

	}
           
})


server.listen(port,()=>{
    console.log("server started at ",port)
})