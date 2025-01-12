import express, { json } from 'express';
import { configDotenv } from 'dotenv';
import blogRoutes from './blogs.js'

configDotenv()
const app =  express();

app.use(json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
    
})


app.use('/api/v1/blogs',blogRoutes);


app.listen(process.env.PORT, () => {
    console.log(`server is runnig on ${process.env.PORT}`);
    
})