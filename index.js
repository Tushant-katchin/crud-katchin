const express= require('express');
const mongoose= require('mongoose');
const app=express();
const url= "mongodb://localhost:27017/crudss";
mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;

try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}
app.use(express.json());
const student=require('./routes/student')
app.use('/student',student)

app.listen(1000, () =>{
    console.log('Server started');
})