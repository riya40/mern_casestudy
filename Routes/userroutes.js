const express= require('express')
const UserModel = require('../models/user')
const app=express();

app.post('/user', async (req,res)=>{
    const user= new UserModel(req.body);
    try{
        await user.save();
        res.send(user);
    }catch(error){
        res.status(500).send(error);
    }

});

app.get('/user',async(req,res)=>{
    const users = await UserModel.find({});
    try{
        res.send(users)
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/user/:email',async(req,res)=>{
    try{
        const tasks= await UserModel.findOne(req.params.email)
        res.status(200).send(tasks)
    }catch(error){
        res.status(500).send(error)
    }
})
app.patch('/user/:id', async(req,res)=>{
    try{
        await UserModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send("Done Patching!!")
    }catch(error){
        res.status(500).send("Error: ",error)
    }
});
app.delete('/user/:id', async(req,res)=>{
    try{
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Done Deleting!!")
    }catch(error){
        res.status(500).send("Error: ",error)
    }
});




module.exports = app;