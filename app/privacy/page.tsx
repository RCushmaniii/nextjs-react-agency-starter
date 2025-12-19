import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Prose } from '@/components/content/prose'

export const metadata: Metadata = {
  title: 'Privacy Policy | Company Name',
  description: 'How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  // Automatically formats the date to "October 24, 2025" style
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

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
          <p className="text-sm text-foreground/60 mb-10 border-b border-border/50 pb-4">
            Last updated: {currentDate}
          </p>

          <Prose>
            <h2>1. Introduction</h2>
            <p>
              Welcome to <strong>Company Name</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
              We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data 
              when you visit our website (regardless of where you visit it from) and tell 
              you about your privacy rights and how the law protects you.
            </p>

            <h2>2. The Data We Collect</h2>
            <p>
              We may collect, use, store, and transfer different kinds of personal data about 
              you which we have grouped together as follows:
            </p>
            <ul>
              <li>
                <strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.
              </li>
              <li>
                <strong>Contact Data:</strong> Includes billing address, email address, and telephone number.
              </li>
              <li>
                <strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, 
                time zone setting and location, browser plug-in types and versions, operating system and platform 
                on the devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data:</strong> Includes information about how you use our website and services.
              </li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, 
              we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>To provide services:</strong> Processing your requests, managing your account, 
                and delivering the work you commissioned.
              </li>
              <li>
                <strong>To communicate:</strong> Sending you updates regarding your project, 
                security alerts, or administrative messages.
              </li>
              <li>
                <strong>To improve our platform:</strong> Using analytics to understand how users 
                interact with our site to enhance user experience.
              </li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>
              We may share your data with trusted third-party service providers who assist us 
              in operating our website, conducting our business, or serving our users, so long 
              as those parties agree to keep this information confidential. These may include:
            </p>
            <ul>
              <li>Hosting Providers (e.g., Vercel, AWS)</li>
              <li>Email Services (e.g., Resend)</li>
              <li>Analytics Providers (e.g., Google Analytics, Vercel Analytics)</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data 
              from being accidentally lost, used, or accessed in an unauthorized way, altered, 
              or disclosed. In addition, we limit access to your personal data to those employees, 
              agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2>6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation 
              to your personal data, including the right to access, correct, erase, restrict, 
              transfer, or object to the processing of your personal data.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, 
              please contact us through our <Link href="/contact">contact form</Link> or via email 
              at <strong>support@companyname.com</strong>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  )
}