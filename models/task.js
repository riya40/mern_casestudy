const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({

    title:{
        type:String,
        required : true,
    },
    description:{
        type: String,
        required : true,
    },
    Assign:{
        type:String,
        required : true,
    },
    CreationDate:{
        type:Date,
    },
    DueDate:{
        type:String,
        required: true
    },
    Priority:{
        type: String,
        required:true
    }

});

const Tasks= mongoose.model("Tasks",TasksSchema);

module.exports = Tasks;