
const mongoose = require('mongoose');
const userDataSchema = new mongoose.Schema(
    {
        username : {type : String,required :true},
        order_history :  {type : [Object],default:[]},
        address : {type : String,default:"not Provided"},
        email : {type : String,required :true},
    });

    module.exports = mongoose.model('UserData',userDataSchema);