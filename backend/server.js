import express from 'express';
import { configDotenv } from 'dotenv';
import blogRoutes from './blogs.js';
import mongoose from 'mongoose';
import cors from 'cors';

//dotenv configure
configDotenv()

//app initializing
const app = express();

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:5173', 'https://blogpostsrc.netlify.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Debugging middleware for requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// DB connection
mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB');
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('DB connection error:', err);
    });

// Routes
app.use('/api/v1/blogs', blogRoutes);
