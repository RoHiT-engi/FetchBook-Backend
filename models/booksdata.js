import { url } from "inspector";
const mongoose = require('mongoose');
const BookDataSchema = new mongoose.Schema(
    {
        bookname : {type : String,required :true,maxLength=50},
        img : {type : [String],required :true},
        auther : {type : String,required :true},
        sellername : {type : String,required :true,maxLength=50},
        description : {type : String,default:"not Provided"},
        publisher :{type : String,maxLength=50,default:"not Provided"},
        tag:{
            category: {type : String,default:"general"},
            sellerid :{type : String,required :true,unique:true},
            price : {type : String,required :true},
            address :{type : String,required :true},
            delivery_status : {type : Boolean,default:false},
            condition : {type : String,required :true},
            new :{type : Boolean,required :true},
            instock : {type : Number,required :true},
        }
    }
);

module.exports = mongoose.model('Bookdata',BookDataSchema)