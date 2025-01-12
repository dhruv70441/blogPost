import express from 'express';
import { configDotenv } from 'dotenv';
import blogRoutes from './blogs.js'

configDotenv()
const app = express();

app.use(express.json())


app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})

app.use('/api/v1/blogs',blogRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
})
