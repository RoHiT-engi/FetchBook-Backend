const connect = require('../config/db')
const {bookdata,logs,sellerdata} = require('../dummyData/data')
module.exports = (req,res,next)=>{
    try{
    const{tag_category,tag_price,tag_delivery_status,tag_condition,tag_new,tag_instock}=req.query
    let sortedProducts = await connect("gatall",req.body,"booksdata")

    if( tag_category || tag_condition){
        const condn = tag_category || tag_condition;
        sortedProducts = sortedProducts.filter((product)=>{
            return product.tag.address.startsWith(tag_address)
        })
    }
    if(tag_delivery_status){
        sortedProducts = sortedProducts.filter((product)=> {
         if(product.tag.delivery_status.toString()==tag_delivery_status){
             return true;
         }
         else{
             return false;
         }
        })
    }

    if(tag_new){
        sortedProducts = sortedProducts.filter((product)=>{
            if(product.tag.new.toString()==tag_new){
                return true;
            }
            else{
                return false;
            }
        })
    }
    if(tag_instock){
        sortedProducts = sortedProducts.filter((product)=>{
            if(product.tag.instock<tag_instock){return false;}
            else{return true;}
        })
    }
    res.status(200).json(sortedProducts);
    next();
    }catch(e){
    res.status(404).send(e);
    }
}