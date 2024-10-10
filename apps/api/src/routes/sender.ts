import express from 'express';
import { Sender } from '../models/sender';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newSender = new Sender(req.body);
    await newSender.save();
    res.status(201).json(newSender);
  } catch (error) {
    res.status(500).json({ error: 'Error creating sender' });
  }
});

router.get('/', async (req, res) => {
  try {
    const senders = await Sender.find();
    res.json(senders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching senders' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedSender = await Sender.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSender);
  } catch (error) {
    res.status(500).json({ error: 'Error updating sender' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Sender.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting sender' });
  }
});

export const senderRouter = router;