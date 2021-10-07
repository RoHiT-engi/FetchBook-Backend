const express =require( 'express')
const router = express.Router()
const addseller = require('../middleware/addseller&user')
const {getseller,deleteorder,addorder,isseller} = require('../middleware/sellerDetails')

router.route('/addseller').post(addseller("addseller"))
router.route('/getseller').get(getseller)
router.route('/deleteorder').delete(deleteorder)
router.route('/addorders').post(addorder)
router.route('/isseller').get(isseller)

module.exports =  router
