const express=require('express')
const router=express.Router({mergeParams:true})
const userController=require('../../controller/userController')

router.get('/fetch',userController.fetch)

module.exports=router