const express = require( 'express')
const addsellerUser = require('../middleware/addseller&user')
const { addorderhistory, removeorderhistory, getuser, deleteuser } = require('../middleware/userDetails')
const router = express.Router()
router.route('/addorder').post(addorderhistory)
router.route('/removeorder').put(removeorderhistory)
router.route('/getuser').get(getuser)
router.route('/adduser').post(addsellerUser("adduser"))
router.route('/:id').delete(deleteuser) //test
//add update user

module.exports =  router
