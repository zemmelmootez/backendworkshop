
const users=[
    { cin:"1", name:"ali",age:21,password:"1"},
    { cin:"123", name:"monji",age:21,password:"123"},
    { cin:"1234", name:"kamel",age:18,password:"1234"},
    { cin:"12345", name:"mostfa",age:24,password:"12345"},
]

const userController={


    getAll:(req,res)=>{
        res.send(users)
    },
    register:(req,res)=>{
        const {cin,name,age,password}=req.body
        
        if(!cin||!name|| !age || !password)
        res.status(400).json({
                message:"missing data password, cin , age and name are required"
        })
        
        const user=users.findIndex((e)=>e.cin===cin)
        if(user!=-1)
        res.status(400).json({message:"user already exists"})

        users.push({cin,name,age,password})

        res.status(200).json({message:"user successfully added",
                                user: {cin,name,age,password}})
    },
    login:(req,res)=>{
        const {cin,password}=req.body
        
        if(!cin || !password)
        res.status(400).json({
                message:"missing data password, cin  are required"
        })
        // find return the element that verifiy the condition 
        // findIndex return the index of the element that verifiy the condition
        const user=users.find(e=>e.cin===cin)
        if(!user)
        res.status(400).json({message:"user not registered"})

        if(user.password!=password)
        res.status(400).json({message:"wrong passwords"})


        res.status(200).json({message:"user login successful",
                                user: {name:user.name,age:user.age,cin:user.cin}})

        
    }


}

module.exports=userController