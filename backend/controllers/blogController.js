import blogModel from '../models/blog.model.js';
import mongoose from 'mongoose';

//get all blogs
export const getBlogs = async (req, res) => {
    const blog = await blogModel.find({}).sort({createdAt: -1}) 
    res.status(200).json(blog)
}

//create a new blog
export const createBlog = async (req ,res) => {
    const {title, blogBody, author} = req.body
    try {
        const blog = await blogModel.create({title, blogBody, author})
        res.status(201).json(blog)
    } catch (err) {
        res.status(400).json({error: err.message}) 
    }
}

//get a specific blog by id
export const getSingleBlog = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such blog"})
    }
    const blog = await blogModel.findById(id)
    if(!blog){
       return res.status(400).json({error: "No such blog"})
    } 
    res.status(200).json(blog)
}
//delete a blog by id
export const deleteBlog = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such blog"})
    }
    const blog = await blogModel.findOneAndDelete({_id: id})
    if(!blog){
       return res.status(400).json({error: "No such blog"})
    } 
    res.status(200).json(blog)
}

//update a single blog by id
export const updateBlog = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such blog"})
    }
    const blog = await blogModel.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!blog){
       return res.status(400).json({error: "No such blog"})
    } 
    res.status(200).json(blog)
}