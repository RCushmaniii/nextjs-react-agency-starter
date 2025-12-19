import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { PageHero } from '@/components/layout/page-hero'

export default function NotFound() {
  return (
    <>
      <PageHero
        title="404"
        subtitle="We couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists."
        imageSrc="/images/hero/home-hero.jpg"
        imageAlt="Not found page hero"
        containerSize="md"
        priorityImage
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NextLink href="/">
            <Button variant="primary">Go Home</Button>
          </NextLink>
          <NextLink href="/work">
            <Button variant="outline">View Our Work</Button>
          </NextLink>
        </div>
      </PageHero>

      <Section spacing="lg">
        <Container size="md">
          <div className="text-center text-sm text-foreground/70">
            If you think this is a mistake, double-check the URL or head back to the homepage.
          </div>
        </Container>
      </Section>
    </>
  )
}
