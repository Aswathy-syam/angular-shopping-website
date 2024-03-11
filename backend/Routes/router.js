const express=require('express')

const productController=require('../controllers/productController')

const userController=require('../controllers/userController')

const router=new express.Router()

router.get('/products/all',productController.getallProductcontrollers)

//single product

router.get('/product/view/:id',productController.getAproduct)

// register
router.post('/user/register',userController.Register)

// login

router.post('/user/login',userController.loginContrller)

module.exports=router