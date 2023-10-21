const express=require("express")
const app=express()

const userRoutes=require('./routes/userRoutes')
const adminRoutes=require('./routes/adminRoutes')
app.use(express.json())

//!TODO: 
/* 
as admin: 
create user 
modify user
delete user
modifyManyUsers
deleteManyUsers
as user: 
modify My account
update My account



*/

app.use('/api/user',userRoutes)
app.use('/api/admin',adminRoutes)


app.listen(8000,()=>{
    console.log("server is running")
})