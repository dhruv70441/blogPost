import express from 'express';
import { configDotenv } from 'dotenv';
import blogRoutes from './blogs.js';
import mongoose from 'mongoose';
import cors from 'cors';

//dotenv configure
configDotenv()

//app intializing
const app = express();

app.use(cors());
const corsOptions = {
    origin: 'https://blogpostsrc.netlify.app/', 
};
app.use(cors(corsOptions));

//db connection
mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log('connected to db');
        console.log(`server is running on port ${process.env.PORT}`);
    })
    
})
.catch((err)=>{
    console.log(err);
    
})




app.use(express.json())


app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})
app.use('/api/v1/blogs',blogRoutes)

