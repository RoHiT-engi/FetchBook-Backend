const express = require( 'express')
const { addorderhistory, removeorderhistory, getuser } = require('../middleware/userDetails')
const router = express.Router()
router.route('/addorder').post(addorderhistory)
router.route('/remove').delete(removeorderhistory)
router.route('/getuser').get(getuser)


module.exports =  router
