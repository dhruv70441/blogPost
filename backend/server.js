import express from 'express';
import { configDotenv } from 'dotenv';
import blogRoutes from './blogs.js'
import mongoose from 'mongoose';

//dotenv configure
configDotenv()

//db connection
mongoose.connect(`${process.env.MONGO_URI}`)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log('connected to db');
        console.log(`server is running on port ${process.env.PORT}`);
    })
    
})
.catch((err)=>{
    console.log(err);
    
})

//app intializing
const app = express();



app.use(express.json())


app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})
app.use('/api/v1/blogs',blogRoutes)

