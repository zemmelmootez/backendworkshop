const router = require('express').Router()

const userController=require('../controllers/userController.js')
const isAdmin = require('../middlewares/adminMiddleware.js')

router.get("/getAll",isAdmin,userController.getAll)

module.exports=router

