import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Prose } from '@/components/content/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy and how we handle your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        imageSrc="/images/hero/home-hero.jpg"
        imageAlt="Privacy policy hero"
        containerSize="md"
      />

      <Section spacing="lg">
        <Container size="md">
          <p className="text-sm text-foreground/60 mb-10">
            Last updated: 2025-01-01
          </p>

          <Prose>
            <h2>Introduction</h2>
            <p>
              This privacy policy outlines how we collect, use, and protect your personal information when you use our website and services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information when you fill out forms</li>
              <li>Email address for communications</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates and marketing communications (with your consent)</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us through our contact form.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  )
}
