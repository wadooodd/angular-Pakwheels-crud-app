const express=require('express');
const cors=require('cors');
const mongoose=require('./db.js');
const routes=require('./routes.js');

const app=express();
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=>console.log('Server Started at port 3000'));

app.use('/products', routes);