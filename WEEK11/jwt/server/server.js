import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './routes/users.js';
import db from './config/db.js';


dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (err) {
    console.log(err);
}

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(cors({credentials:true,origin:'http://localhost:3000'}));

app.use(router);

app.listen(process.env.PORT||8080,()=>{
    console.log(`Server running on port ${process.env.PORT||8080}`);
})