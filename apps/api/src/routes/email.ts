import express from 'express';
import { processEmail } from '../services/emailProcessor';
import { Email } from '../models/email';

const router = express.Router();

router.post('/process', async (req, res) => {
  try {
    const processedEmail = await processEmail(req.body);
    res.json(processedEmail);
  } catch (error) {
    res.status(500).json({ error: 'Error processing email' });
  }
});

router.get('/', async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 }).limit(10);
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching emails' });
  }
});

export const emailRouter = router;