const express = require("express");
const route = require("./router/router")
const cors = require("cors")

const app = express();

app.use(cors({
    origin : "*"
}))

app.use("/api/category",route)

app.get("/",(req,res)=>{
    res.send("api is running fine!")
})

app.listen(8000,()=>{
    console.log("server is running!")
})