import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  instructions: { type: String, required: true },
  additionalProcessing: String,
  createdAt: { type: Date, default: Date.now }
});

export const Tag = mongoose.model('Tag', tagSchema);