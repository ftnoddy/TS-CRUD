import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db'
import studentRoutes from './routes/studentRoutes';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', studentRoutes);

app.get('/api', (req, res) => {
  res.send('API is running....');
});

app.get('/', (req, res) => {
  res.send('API is running....');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
