import { z } from 'zod';

export const EmailSchema = z.object({
  id: z.string(),
  subject: z.string(),
  from: z.string(),
  to: z.array(z.string()),
  body: z.string(),
  receivedAt: z.date(),
});

export const TagSchema = z.object({
  id: z.string(),
  name: z.string(),
  instructions: z.string(),
  additionalProcessing: z.string().optional(),
});

export const SenderSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  isVIP: z.boolean(),
  isBlocked: z.boolean(),
  defaultTags: z.array(z.string()),
  additionalProcessing: z.string().optional(),
});

export type Email = z.infer<typeof EmailSchema>;
export type Tag = z.infer<typeof TagSchema>;
export type Sender = z.infer<typeof SenderSchema>;