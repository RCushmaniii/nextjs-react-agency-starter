import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import NextLink from 'next/link'
import Image from 'next/image'
import { getAllPosts, getAllWork } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gradient Fade Transition Demo',
  description:
    'Smooth gradient dissolve transition between hero and content sections.',
}

export default function GradientFadeDemoPage() {
  const featuredWork = getAllWork().slice(0, 3)
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero Section — custom (not PageHero) so we can place the gradient overlay at the bottom */}
      <section className="relative overflow-hidden bg-foreground/5 py-24 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/home-hero.jpg"
            alt="Gradient fade demo hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background/95 dark:from-background/70 dark:via-background/60 dark:to-background/90" />

        <Container size="lg">
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Fluid <span className="text-primary">User Journeys</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance">
              Evaluating seamless scroll transitions. This test measures the psychological impact of removing rigid structural borders, encouraging the user to continue scrolling through a unified narrative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href="/work">
                <Button variant="primary" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </NextLink>
              <NextLink href="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Book a Call
                </Button>
              </NextLink>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Badge variant="default">Production-ready Auth</Badge>
              <Badge variant="default">Database security patterns</Badge>
              <Badge variant="default">Type-safe content + UI</Badge>
            </div>
          </div>
        </Container>

        {/* Gradient Fade Transition: dissolves hero into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white dark:to-[#0f172a]" />
      </section>

      {/* Clients Section */}
      <Section spacing="md">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Partnering with forward-thinking innovators.
            </h2>
            <p className="mt-3 text-sm md:text-base text-foreground/70">
              A few teams we&apos;ve partnered with.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-start">
            {[
              { name: 'Northwind Systems', logo: '/images/clients/client-logo-1.png' },
              { name: 'Acme Industries', logo: '/images/clients/client-logo-2.png' },
              { name: 'Summit Digital', logo: '/images/clients/client-logo-3.png' },
              { name: 'BlueSky Commerce', logo: '/images/clients/client-logo-4.png' },
            ].map((client) => (
              <div key={client.name} className="flex flex-col items-center text-center">
                <div className="relative h-12 w-full max-w-[180px] transition-transform duration-200 hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
                <div className="mt-3 text-xs md:text-sm font-medium text-foreground/80">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Capabilities</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Full-stack engineering, interface design, and performance—built for teams that ship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Full-Stack Engineering</CardTitle>
                <CardDescription>
                  Next.js &amp; TypeScript at the core. Type-safe, reliable builds with production-ready patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <CardTitle>Interface Design</CardTitle>
                <CardDescription>
                  Systems that scale with your product—accessible, intuitive, and brand-aligned.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Core Web Vitals green across the board. SEO-first and lightning-fast interactive states.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section spacing="lg" className="bg-foreground/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              An iterative approach that keeps quality high and momentum higher.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy', description: 'Aligning technical constraints with business goals.' },
              { step: '02', title: 'Prototyping', description: 'High-fidelity mockups and rapid iteration.' },
              { step: '03', title: 'Engineering', description: 'Component-driven development with best-in-class tooling.' },
              { step: '04', title: 'Delivery', description: 'CI/CD pipelines, analytics setup, and handoff.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Work Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Recent projects we&apos;re proud of.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((work) => (
              <NextLink key={work.slug} href={`/work/${work.slug}`}>
                <Card className="h-full p-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative aspect-[16/9] bg-foreground/5">
                    <Image
                      src={work.coverImage || '/images/work/work-1.jpg'}
                      alt={`${work.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="mb-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {work.tech?.slice(0, 2).map((tech) => (
                          <Badge key={tech} variant="primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle>{work.title}</CardTitle>
                      <CardDescription>{work.description}</CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              </NextLink>
            ))}
          </div>

          <div className="text-center mt-12">
            <NextLink href="/work">
              <Button variant="outline">View All Work</Button>
            </NextLink>
          </div>
        </Container>
      </Section>

      {/* Latest Articles Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Insights on web development, design, and building great products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <NextLink key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full p-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative aspect-[16/9] bg-foreground/5">
                    <Image
                      src={post.coverImage || '/images/blog/blog-1.jpg'}
                      alt={`${post.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="mb-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="default">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                      <p className="text-sm text-foreground/50 mt-4">
                        {formatDate(post.date)}
                      </p>
                    </CardHeader>
                  </div>
                </Card>
              </NextLink>
            ))}
          </div>

          <div className="text-center mt-12">
            <NextLink href="/blog">
              <Button variant="outline">View All Articles</Button>
            </NextLink>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section spacing="lg" className="bg-foreground/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Michael Chen',
                title: 'Founder, Bloom',
                avatar: '/images/testimonials/avatar-1.jpg',
                quote:
                  'Their attention to detail and technical expertise helped us launch ahead of schedule. The code quality is top-notch.',
              },
              {
                name: 'Daniel Rivera',
                title: 'Marketing Director, Summit',
                avatar: '/images/testimonials/avatar-2.jpg',
                quote:
                  'They helped us refine the story, polish the UX, and ship a site that feels premium and converts significantly better.',
              },
              {
                name: 'Sarah Johnson',
                title: 'CEO, Northwind',
                avatar: '/images/testimonials/avatar-3.jpg',
                quote:
                  'Working with this team was an absolute pleasure. They delivered a beautiful, performant website that exceeded our expectations.',
              },
              {
                name: 'Amina Patel',
                title: 'VP of Product, BlueSky',
                avatar: '/images/testimonials/avatar-4.jpg',
                quote:
                  'Clear communication, great taste, and solid engineering. The process was smooth from kickoff to final deployment.',
              },
            ].map((t) => (
              <Card key={t.name}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-foreground/10 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/80 mb-4 italic">{t.quote}</p>
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-foreground/70">{t.title}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">This Is Not a Sales Call</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Let&apos;s walk through your ideas, I&apos;ll share what I&apos;ve learned, and get honest feedback.
            </p>
            <NextLink href="/contact">
              <Button variant="primary" className="text-lg px-8 py-4">
                Start a Conversation
              </Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
