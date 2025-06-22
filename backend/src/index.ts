import express, { Request, Response, RequestHandler } from 'express';
import mongoose from 'mongoose';
import { studentModel } from './models/students';
import studentRouter from './routers/students';
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/students')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error(' MongoDB connection error:', err));

app.use('/students', studentRouter) 
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
  });
