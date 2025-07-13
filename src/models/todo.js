import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true,"Title is required"],
        trim: true,
    },
    description:{
        type:String,
        default:"",
    },
    completed:{
        type:Boolean,
        default:false,
    },
}, 
 {
    timestamps:true
})

export const Todo = mongoose.model('Todo', todoSchema);