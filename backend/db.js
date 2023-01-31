const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase',err=>{
if(!err){
    console.log("DB connection successful");
} else {
    console.log('Error in Connection' + err);
}
})

module.exports=mongoose;