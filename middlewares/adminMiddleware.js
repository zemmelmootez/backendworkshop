

const isAdmin = (req,res,next)=>{


    if(req.body.isAdmin===true)
    next()
res.send("you are not an admin ")
}

module.exports=isAdmin