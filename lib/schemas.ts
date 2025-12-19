import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(50, { message: 'Name must be fewer than 50 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.preprocess(
    (val: unknown) =>
      typeof val === 'string' && val.trim().length === 0 ? undefined : val,
    z.string().max(100, { message: 'Company name is too long.' }).optional()
  ),
  website: z.preprocess(
    (val: unknown) =>
      typeof val === 'string' && val.trim().length === 0 ? undefined : val,
    z
      .string()
      .max(200, { message: 'Website is too long.' })
      .optional()
      .refine(
        (val: string | undefined) => !val || /^(https?:\/\/)?[^\s]+\.[^\s]+$/i.test(val),
        {
          message: 'Please enter a valid website (e.g. company.com).',
        }
      )
  ),
  interest: z.preprocess(
    (val: unknown) =>
      typeof val === 'string' && val.trim().length === 0 ? undefined : val,
    z.enum(['Web Dev', 'Design', 'Strategy']).optional()
  ),
  message: z
    .string()
    .min(10, { message: 'Please share a bit more detail about your project.' })
    .max(1000, { message: 'Message is too long.' }),

  // HONEYPOT: Hidden field for bots. If this has a value, it is spam.
  // We call it 'address' to trick bots into thinking it's a real field.
  address: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
