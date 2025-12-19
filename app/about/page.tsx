import { Metadata } from 'next'
import type React from 'react'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { PageHero } from '@/components/layout/page-hero'
import { Container } from '@/components/layout/container'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn how we think, what we value, and the builder behind the work.',
}

export default function AboutPage() {
  const copy = {
    en: {
      heroTitle: 'We Build Digital Products That Scale.',
      heroSubtitle:
        'We are a team of designers and engineers who believe that quality code and beautiful design are not mutually exclusive. We bridge the gap between vision and reality.',
      statsTitle: 'Signals that we ship',
      philosophyTitle: 'Our Philosophy',
      philosophyBody:
        'The web has become complex. Our mission is to simplify it. We don\'t just write code; We build systems that enable your business to move faster. We prioritize long-term maintainability over short-term shortcuts.',
      valuesTitle: 'Principles that guide our work.',
      teamTitle: 'The Builders',
      teamSubtitle: 'A small team with big impact.',
      ctaTitle: 'Ready to build something great?',
      ctaSubtitle: 'Let\'s turn your idea into a production-ready reality.',
      ctaButton: 'Get In Touch',
    },
    es: {
      heroTitle: 'Construimos productos digitales que escalan.',
      heroSubtitle:
        'Somos un equipo de dise\u00f1adores e ingenieros que cree que el c\u00f3digo de calidad y el dise\u00f1o hermoso no son mutuamente excluyentes. Cerramos la brecha entre visi\u00f3n y realidad.',
      statsTitle: 'Se\u00f1ales de que entregamos',
      philosophyTitle: 'Nuestra filosof\u00eda',
      philosophyBody:
        'La web se ha vuelto compleja. Nuestra misi\u00f3n es simplificarla. No solo escribimos c\u00f3digo; construimos sistemas que permiten que tu negocio se mueva m\u00e1s r\u00e1pido. Priorizamos la mantenibilidad a largo plazo sobre atajos de corto plazo.',
      valuesTitle: 'Principios que gu\u00edan nuestro trabajo.',
      teamTitle: 'El Equipo',
      teamSubtitle: 'Un equipo peque\u00f1o con gran impacto.',
      ctaTitle: '\u00bfListo para construir algo grande?',
      ctaSubtitle: 'Convirtamos tu idea en una realidad lista para producci\u00f3n.',
      ctaButton: 'Hablemos',
    },
  }

  const t = copy.en

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Launched' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  const values = [
    {
      title: 'Uncompromising Quality',
      description:
        'We don\'t do just good enough. Every component is accessible, responsive, and built to last.',
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
          />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Radical Transparency',
      description:
        'No black boxes. Clear communication, visible progress, and honest collaboration.',
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
          />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
      ),
    },
    {
      title: 'Performance First',
      description:
        'Speed is a feature. We engineer for Core Web Vitals and smooth interactions.',
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 2L3 14h8l-1 8 11-14h-8l1-6z"
          />
        </svg>
      ),
    },
    {
      title: 'Future-Proof by Default',
      description:
        'We use modern frameworks like Next.js so your product stays relevant for years.',
      Icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22s7-4 7-10V5l-7-3-7 3v7c0 6 7 10 7 10z"
          />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6"
          />
        </svg>
      ),
    },
  ]

  const team = [
    {
      name: 'Robert Cushman',
      role: 'Founder & Lead Engineer',
      imageSrc: '/images/testimonials/avatar-1.jpg',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of Design',
      imageSrc: '/images/testimonials/avatar-3.jpg',
    },
    {
      name: 'David Ross',
      role: 'Frontend Specialist',
      imageSrc: '/images/testimonials/avatar-2.jpg',
    },
  ]

  return (
    <>
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        imageSrc="/images/hero/about-hero.jpg"
        imageAlt="About page hero"
        containerSize="md"
        priorityImage
      />

      <Section spacing="lg">
        <Container size="md">
          <div className="text-center">
            <p className="text-sm text-foreground/70">{t.statsTitle}</p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-tight">{s.value}</div>
                <div className="mt-2 text-sm text-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>{t.philosophyTitle}</h2>
            <p>{t.philosophyBody}</p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-foreground/5">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t.valuesTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                      <v.Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{v.title}</CardTitle>
                      <CardDescription className="mt-2">{v.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t.teamTitle}</h2>
            <p className="mt-3 text-foreground/70">{t.teamSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative aspect-[4/5] bg-foreground/10">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t.ctaTitle}</h2>
            <p className="mt-4 text-lg text-foreground/70">{t.ctaSubtitle}</p>
            <div className="mt-8">
              <NextLink href="/contact">
                <Button variant="primary">{t.ctaButton}</Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
