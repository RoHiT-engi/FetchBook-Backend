
const mongoose = require('mongoose');
const userDataSchema = new mongoose.Schema(
    {
        userid : {type :String,required:true},
        username : {type : String,required :true},
        dp_img : {type : String,default :"https://images-eu.ssl-images-amazon.com/images/I/51PV2vaUraL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"},
        order_history :  {type : [Object]},
        incart : {type : [Object]},
        mail : {type : String,required :true},
    });

    module.exports = mongoose.model('UserData',userDataSchema);