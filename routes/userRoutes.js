const router=require('express').Router()
const userController=require('../controllers/userController.js')

router.get('/getAll',userController.getAll)
router.get('/getUnderTwentyOne',userController.getUnderTwentyOne)






//exportation in node
module.exports=router