const express=require('express');
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;

const Product=require('./product.js');

//GET single employee
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Product.findById(req.params.id, (err,doc)=>{
            if(err){
                console.log('Error in GET Product by ID'+err);
            } else {
                res.send(doc);
            }           
        })
    } else {
        return res.status(400).send(`No record found with ID ${req.params.id}`);
    }
})

//GET API
router.get('/',(req,res)=>{
Product.find((err,doc)=>{
    if(err){
        console.log('Error in GET data'+err);
    } else {
        res.send(doc);
    }
})    
})


//POST API
router.post('/',(req,res)=>{
    let prod=new Product({
        url:req.body.url,
        title:req.body.title,
        location:req.body.location,
        price:req.body.price,
        date:req.body.date,
        rating:req.body.rating,
        category:req.body.category,
        make:req.body.make,
        color:req.body.color,
        sellerName:req.body.sellerName,
        sellerPhone:req.body.sellerPhone,
        sellerEmail:req.body.sellerEmail,
        millage:req.body.millage
    });

    prod.save((err,doc)=>{
        if(err){
            console.log('Error in POST data'+ err);
        } else {
            res.send(doc);
        }
    })
})

//PUT(update API)
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let prod={
            url:req.body.url,
            title:req.body.title,
            location:req.body.location,
            price:req.body.price,
            date:req.body.date,
            rating:req.body.rating,
            category:req.body.category,
            make:req.body.make,
            color:req.body.color,
            sellerName:req.body.sellerName,
            sellerPhone:req.body.sellerPhone,
            sellerEmail:req.body.sellerEmail,
            millage:req.body.millage
        }
        Product.findByIdAndUpdate(req.params.id, {$set:prod},{new:true},(err,doc)=>{
            if(err){
                console.log('Error in Update Product by ID'+err);
            } else {
                res.send(doc);
            }           
        })
    } else {
        return res.status(400).send(`No record found with ID ${req.params.id}`);
    }
})

//DELETE single employee
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Product.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(err){
                console.log('Error in DELETE Product by ID'+err);
            } else {
                res.send(doc);
            }           
        })
    } else {
        return res.status(400).send(`No record found with ID ${req.params.id}`);
    }
})

module.exports=router;