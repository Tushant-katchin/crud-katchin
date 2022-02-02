const mongoose =require('mongoose');
const studentSchema = mongoose.Schema({
    _id:{
        type: Number,
        
    },
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,  
    },
})

module.exports= mongoose.model('studentdata',studentSchema);;