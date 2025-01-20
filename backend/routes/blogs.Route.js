import { Router } from 'express';
import { createBlog, deleteBlog, getBlogs, getSingleBlog, updateBlog } from '../controllers/blogController.js'

const router = Router();

//GET all blogs
router.get('/', getBlogs)


//GET a single blog
router.get('/:id', getSingleBlog)

//POST a single blog
router.post('/',createBlog)

//DELETE a single blogs
router.delete('/:id',deleteBlog)

//PATCH a single blogs
router.patch('/:id',updateBlog)



export default router;
