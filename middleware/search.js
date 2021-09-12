const bookdata = require('../dummyData/data')
let sortedProducts = [...bookdata.data]
const search = (req,res,next) => {
    
    next()
    return sortedProducts
}

const limit = (req,res,next)=>{
    const{limit} = req.query
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.limit<1){
        res.status(200).json("no Data Available")
    }
    next()
    return sortedProducts
}

module.exports = limit