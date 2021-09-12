import { url } from "inspector";
import { Mongoose } from "mongoose";
const BookDataSchema = new Mongoose.schema(
    {
        bookname : {type : String,required :true},
        img : {type : url,required :true},
        auther : {type : String,required :true},
        sellername : {type : String,required :true},
        description : {type : String,default:"not Provided"},
        stock : {type : String,required :true},
        publisher :{type : String},
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

module.exports = Mongoose.model('Bookdata',BookDataSchema)