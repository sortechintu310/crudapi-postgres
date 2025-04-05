import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js";

const handleResponse = (res, status, msg, data = null) => {
    res.status(status).json({
        status,
        msg,
        data,
    });
}

export const createUser = async(req, res, next)=>{
    console.log(req.body);
    const{name,email,password} = req.body;
    try{
        const newUser = await createUserService(name,email,password);
        handleResponse(res,201,"User Created Successfully!",newUser);
    }catch(err){
        next(err);   
    }
}

export const getAllUsers = async(req, res, next)=>{
    try{
        const users = await getAllUsersService();
        handleResponse(res,201,"Users fetched Successfully!",users);
    }catch(err){
        next(err);   
    }
}

export const getUserById = async(req, res, next)=>{
    const id = req.params.id;
    try{
        const user = await getUserByIdService(id);
        handleResponse(res,201,"User fetched Successfully!",user);
    }catch(err){
        next(err);   
    }
}

export const updateUser = async(req, res, next)=>{
    const{name,email,password} = req.body;
    try{
        const updatedUser = await updateUserService(req.params.id,name,email,password);
        handleResponse(res,201,"User fetched Successfully!",updatedUser);
    }catch(err){
        next(err);   
    }
}

export const deleteUser = async(req, res, next)=>{
    const{id} = req.params.id;
    try{
        const deletedUser = await deleteUserService(id);
        handleResponse(res,201,"User fetched Successfully!",deletedUser);
    }catch(err){
        next(err);   
    }
}