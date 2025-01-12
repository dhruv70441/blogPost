import { Router } from 'express';


const router = Router();

//GET all blogs
router.get('/', (req,res) => {
    res.json({mssg:'get all blogs'})    
})


//GET a single blogs
router.get('/:id', (req,res) => {
    res.json({mssg:'get a single blog'})    
})

//POST a single blogs
router.post('/', (req,res) => {
    res.json({mssg:'post a single blog'})    
})

//DELETE a single blogs
router.delete('/:id', (req,res) => {
    res.json({mssg:'delete a single blog'})    
})

//PATCH a single blogs
router.patch('/:id', (req,res) => {
    res.json({mssg:'update a single blog'})    
})



export default router;
