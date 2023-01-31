const mongoose=require('mongoose');

const Product=mongoose.model('Product', {
    url:{type:String},
    title:{type:String},
    location:{type:String},
    price:{type:Number},
    date:{type:String},
    rating:{type:Number},
    category:{type:String},
    make:{type:String},
    color:{type:String},
    sellerName:{type:String},
    sellerPhone:{type:String},
    sellerEmail:{type:String},
    millage:{type:Number},    
})

module.exports=Product;



