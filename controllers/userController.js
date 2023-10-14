
const users=[
    {  name:"ali",age:21},
    {  name:"monji",age:21},
    {  name:"kamel",age:18},
    {  name:"mostfa",age:24},
  

]

const userController={

    getAll:(req,res)=>{
        res.send(users)
    },
    getUnderTwentyOne:(req,res)=>{
        const response=users.filter(e=>e.age<21)

        res.send(response)
    }

    //TODO : get All user which the name include 'i'
    //TODO: get the average age of users



}

module.exports=userController