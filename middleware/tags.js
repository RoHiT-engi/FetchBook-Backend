const {bookdata,logs,sellerdata} = require('../dummyData/data')
module.exports = (req,res,next)=>{
    const{search,limit,tag_address,tag_delivery_status,tag_condition,tag_new,tag_instock}=req.query
    let sortedProducts = [...bookdata.data]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
        return product.bookname.startsWith(search)
     })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.limit<1){
        res.status(200).json("no Data Available")
    }
    if(tag_address){
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
    if(tag_condition){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.tag.condition.startsWith(tag_condition)
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
}