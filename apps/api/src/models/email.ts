import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  originalMessage: Object,
  cleanMessage: String,
  tags: [String],
  threads: [{
    sender: String,
    originalMessage: String,
    summary: String
  }],
  summary: String,
  tasks: [String],
  processedTags: [String],
  createdAt: { type: Date, default: Date.now }
});

export const Email = mongoose.model('Email', emailSchema);