const express= require('express')
const TaskModel = require('../models/task')
const app=express();

app.post('/task', async (req,res)=>{
    const task= new TaskModel(req.body);
    try{
        await task.save();
        res.send(task);
    }catch(error){
        res.status(500).send(error);
    }

});

app.get('/task',async(req,res)=>{
    const tasks = await TaskModel.find({});
    try{
        res.send(tasks)
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/task/:title',async(req,res)=>{
    try{
        const tasks= await TaskModel.findOne(req.params.title)
        res.status(200).send(tasks)
    }catch(error){
        res.status(500).send(error)
    }
})
app.patch('/task/:id', async(req,res)=>{
    try{
        await TaskModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send("Done Patching!!")
    }catch(error){
        res.status(500).send("Error: ",error)
    }
});
app.delete('/task/:id', async(req,res)=>{
    try{
        await TaskModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Done Deleting!!")
    }catch(error){
        res.status(500).send("Error: ",error)
    }
});




module.exports = app;