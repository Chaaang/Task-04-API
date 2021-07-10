const { request, response } = require('express');
const express = require('express');
const model = require('./model');
const router = express.Router();
const app = express();
router.use(express.json());

router.post('/post', async(request,response) => {
    //response.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Accept');
    response.setHeader('Access-Control-Allow-Origin', '*');
    const phonebook = new model(
        {
            firstname : request.body.firstname,
            lastname : request.body.lastname,
            phonenumber : request.body.phonenumber
        }
    );
    phonebook.save().then(data =>{
        response.json(data);
    })
    .catch(err => {
        response.json({message: err})
    });
});

router.get('/get',async(request,response)=> {
    const tempcontacts  = await model.find();
    response.json({tempcontacts});
})

module.exports = router;
