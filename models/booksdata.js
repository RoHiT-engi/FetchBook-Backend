const mongoose = require('mongoose');
const BookDataSchema = new mongoose.Schema(
    {
        bookname : {type : String,required :true},
        img : {type : [String],required :true},
        auther : {type : String,required :true},
        sellername : {type : String,required :true},
        description : {type : String,default:"not Provided"},
        publisher :{type : String,default:"not Provided"},
        tag:{
            category: {type : String,default:"general"},
            sellerid :{type : String,required :true,unique:true},
            price : {type : Number,required :true},
            offered_price : {type : Number},
            address :{type : String,required :true},
            delivery_status : {type : Boolean,default:false},
            condition : {type : String,required :true},
            new :{type : Boolean,required :true},
            offer : {type :Boolean,default:false},
            instock : {type : Number,required :true},
        }
    }
);

module.exports = mongoose.model('Bookdata',BookDataSchema)