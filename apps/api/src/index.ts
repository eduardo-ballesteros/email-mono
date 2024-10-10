import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { emailRouter } from './routes/email';
import { tagRouter } from './routes/tag';
import { senderRouter } from './routes/sender';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/emails', emailRouter);
app.use('/api/tags', tagRouter);
app.use('/api/senders', senderRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});