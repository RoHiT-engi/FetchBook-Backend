//const {bookdata,logs,sellerdata} = require('../dummyData/data')
const connect= require('../config/db')
const userdataSchema = require('../models/userdata');
module.exports = (req,res,next)=>{
    const userdata = new userdataSchema(req.body)
    const result = connect("adduser",userdata)
    result.then(res.status(200).send('user added :)'))
    .catch(res.status(400).send('Error Occured :('))
}