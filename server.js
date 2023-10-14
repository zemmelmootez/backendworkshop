const express=require("express")
const app=express()

const userRoutes=require('./routes/userRoutes')
app.use(express.json())


app.use('/api/users',userRoutes)



app.listen(8000,()=>{
    console.log("server is running")
})