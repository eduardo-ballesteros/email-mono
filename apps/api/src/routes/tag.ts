import express from 'express';
import { Tag } from '../models/tag';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newTag = new Tag(req.body);
    await newTag.save();
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ error: 'Error creating tag' });
  }
});

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tags' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTag);
  } catch (error) {
    res.status(500).json({ error: 'Error updating tag' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Tag.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting tag' });
  }
});

export const tagRouter = router;