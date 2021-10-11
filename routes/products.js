const express =require( 'express')
const router = express.Router()
const { insertone,getall, getrandom, getbook, updatebook, deletebook, search, getsellerbooks }  = require( '../middleware/productDetails' )



router.route('/insertone').post(insertone)
router.route('/').get(getall)
router.route('/random').get(getrandom)
router.route('/:id').get(getbook).put(updatebook).delete(deletebook)
router.route('/:bookname').get(search)
router.route('/getsellerbooks').get(getsellerbooks)

module.exports =  router