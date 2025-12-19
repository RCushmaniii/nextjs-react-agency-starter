import { Metadata } from 'next'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import NextLink from 'next/link'
import { PageHero } from '@/components/layout/page-hero'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Interested in working together? Tell us about your project and we will reply within 48 hours.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={<>Let&apos;s Start a Conversation.</>}
        subtitle={
          <>
            Interested in working together? We should talk. Fill out the form below, and we&apos;ll
            reply within 48 hours.
          </>
        }
        imageSrc="/images/hero/contact-hero.jpg"
        imageAlt="Contact page hero"
        containerSize="md"
        priorityImage
      />

      <Section spacing="lg">
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <Card>
                <h3 className="text-xl font-semibold mb-3">What happens next?</h3>
                <ol className="space-y-2 text-foreground/70">
                  <li>1. We review your requirements.</li>
                  <li>2. We schedule a discovery call (30 mins).</li>
                  <li>3. We provide a proposal and roadmap.</li>
                </ol>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold mb-3">Prefer email?</h3>
                <p className="text-foreground/70">
                  Reach us directly at{' '}
                  <a className="underline underline-offset-4" href="mailto:hello@companyname.com">
                    hello@companyname.com
                  </a>
                </p>

                <div className="mt-6 space-y-3 text-sm text-foreground/70">
                  <div>
                    <div className="font-medium text-foreground">Social</div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
                      <a className="underline underline-offset-4" href="#">
                        GitHub
                      </a>
                      <a className="underline underline-offset-4" href="#">
                        Twitter
                      </a>
                      <a className="underline underline-offset-4" href="#">
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-foreground">Office</div>
                    <div className="mt-1">123 Innovation Dr. Tech City, TC 90210</div>
                  </div>
                </div>

                <div className="mt-6">
                  <NextLink href="/work">
                    <Button variant="outline" className="w-full">
                      View Our Work
                    </Button>
                  </NextLink>
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
