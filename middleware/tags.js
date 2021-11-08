const connect = require('../config/db')

module.exports =async (req,res,next)=>{
    try{
    const{tag_bookname,tag_category,tag_offers,tag_price,tag_sellerBooks,tag_delivery_status,tag_condition,tag_new,tag_instock}=req.query
    let sortedProducts = await connect("getall",req.body,"booksdata")

    
    if( tag_category || tag_condition || tag_bookname || tag_sellerBooks){
        const condn = tag_category || tag_condition || tag_bookname || tag_sellerBooks;
        console.log(condn)
        sortedProducts = sortedProducts.filter((product)=>{
            if(tag_category){
                return product.tag.category.startsWith(condn)
            }
            if(tag_condition){
                return product.tag.condition.startsWith(condn)
            }
            if(tag_bookname){
                return product.bookname.startsWith(condn)
            }
            if(tag_sellerBooks){
                return product.tag.sellerid === condn
            }
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
    
    if(tag_offers){
        sortedProducts = sortedProducts.filter((product)=> {
         if(product.tag.offer.toString()===tag_offers){
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
        console.log(e)
    res.status(404).send(e);
    }
}