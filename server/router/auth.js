const express = require('express');
const router = express.Router();
const Message =  require('../model/msgSchema');
const validate = require('validator');

router.post('/contact', async (req,res) => {
   
    const { username, email, message } = req.body;   // retrive all data from user

    if(!username || !email || !message ){                  // check if all details are filled or not
        return res.status(422).json({ error: "Please fill all the details !" });
    }

    try{
        if(!validate.isEmail(email)){
            return res.status(401).json({ error: "Email incorrect" });
        }

        const user = new Message({ username, email, message });   // store the document in collection
        //****  NOW PASSWORD HASHING IN userSchema.js file BEFORE user.save() ****/
        await user.save();
        res.status(201).json({ message: "Message sent successfully !" });
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;
