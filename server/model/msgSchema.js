const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
},
{
    timestamps: true
}
)
 
const Message = mongoose.model('message', msgSchema); 

module.exports = Message;