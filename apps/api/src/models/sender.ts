import mongoose from 'mongoose';

const senderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isVIP: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  defaultTags: [String],
  additionalProcessing: String,
  createdAt: { type: Date, default: Date.now }
});

export const Sender = mongoose.model('Sender', senderSchema);