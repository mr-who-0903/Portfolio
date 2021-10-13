const mongoose = require('mongoose');

// connecting with cloud database "quora"       // ***** if password contains "#" replace it with "%23" ***** //

const DB = process.env.DATABASE;
console.log(DB);
mongoose.connect(DB).then(() =>{
    console.log('connection successful..')
}).catch((e) => {
    console.log(e);
});