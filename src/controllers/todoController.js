import { Todo } from '../models/todo.js';
import { ApiError } from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js';

// GET all todos
 const getTodos =  asyncHandler(async (req,res) => {
    const todos = await Todo.find();
    res.status(200).json(new ApiResponse(200, todos, "Fetched all todos"));
});

// CREATE a new todo
 const createTodo = asyncHandler(async (req,res) => {
     const { title } = req.body;

     if(!title || title.trim() === ""){
        throw new ApiError(400, "Title is required");
     }
    const newTodo = await Todo.create({ title });
    res.status(201).json(new ApiResponse(201, newTodo, "Todo created"));
});

// update a todo
 const updateTodo = asyncHandler(async(req,res) => {
    const { id }  = req.params;

    
        const updateTodo = await Todo.findByIdAndUpdate(
            id, 
            req.body,
            {new: true}
        );

        if(!updateTodo){
           throw new ApiError(404, "Todo not found")
        }

        res.status(200).json(new ApiResponse(200, updateTodo, "Todo Updated"));
});

// Delete a todo
 const deleteTodo = asyncHandler(async(req,res) => {
     const { id } = req.params;

        const deleteTodo = await Todo.findByIdAndDelete(id);

        if(!deleteTodo){
           throw new ApiError(404, "Todo not found");
        }

        res.status(200).json(new ApiResponse(200, null, "Todo deleted"));
});


export { getTodos, createTodo, updateTodo, deleteTodo };