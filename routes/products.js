const express =require( 'express')
const router = express.Router()
const { insertone,getall }  = require( '../middleware/productDetails' )


//router.route('/random').get(getrandom)

router.route('/insertone').post(insertone)
router.route('/').get(getall)
//router.route('/:id').get(getone)
module.exports =  router