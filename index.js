const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');




const app = express();

const url = ('mongodb+srv://m001-student:m001-mongodb-basics@sanbox.arebk.mongodb.net/phonebook?retryWrites=true&w=majority');

const port = 5000;
app.use('/router', router);


mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true }, function(err){
    if(err){
        console.log(err);
    } else{
         console.log(`Connected to Database`);
    }
   
});

app.listen(port, () => console.log(`Listen on port : http//localhost: ${port}`));