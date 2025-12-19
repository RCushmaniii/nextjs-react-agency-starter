'use server'

import { contactFormSchema } from '@/lib/schemas'
import { Resend } from 'resend'
import { ContactEmail } from '@/components/emails/contact-template'

const resend = new Resend(process.env.RESEND_API_KEY)

const CONTACT_FROM =
  process.env.CONTACT_FROM || 'Portfolio Contact <system@your-verified-domain.com>'

export async function submitContactForm(data: unknown): Promise<
  | { success: true }
  | { success: false; error?: string; errors?: Record<string, string[]> }
> {
  const result = contactFormSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  const cleanData = result.data

  if (cleanData.address && cleanData.address.length > 0) {
    console.log('Honeypot triggered. Silently ignoring.')
    return { success: true }
  }

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'],
      reply_to: cleanData.email,
      subject: `New Inquiry: ${cleanData.name}`,
      react: ContactEmail({
        name: cleanData.name,
        email: cleanData.email,
        company: cleanData.company,
        website: cleanData.website,
        interest: cleanData.interest,
        message: cleanData.message,
      }),
    })

    if (error) {
      console.error('Resend Error:', error)
      return { success: false, error: 'Failed to send email.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Unexpected Error:', err)
    return { success: false, error: 'An unexpected error occurred.' }
  }
}
