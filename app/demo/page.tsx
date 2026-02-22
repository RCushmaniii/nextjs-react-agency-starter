import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import NextLink from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Section Transition Demos',
  description:
    'Explore four modern CSS transition techniques for seamless section boundaries.',
}

const demos = [
  {
    title: 'Glassmorphism',
    href: '/demo/glassmorphism',
    description:
      'Frosted glass overlay with negative margin overlap. The clients section lifts into the hero with backdrop blur and translucent backgrounds.',
    tag: 'Spatial Layering',
  },
  {
    title: 'Gradient Fade',
    href: '/demo/gradient-fade',
    description:
      'A smooth gradient dissolve from the hero into the next section. No hard edges — the hero image bleeds seamlessly into the content below.',
    tag: 'Soft Dissolve',
  },
  {
    title: 'Tech Glow',
    href: '/demo/tech-glow',
    description:
      'A single-pixel gradient divider with a neon glow effect. Clean, precise separation with a technical aesthetic.',
    tag: 'Accent Divider',
  },
  {
    title: 'SVG Sweep',
    href: '/demo/svg-sweep',
    description:
      'An inline SVG curve that breaks the horizontal grid. Asymmetric geometry drives the eye diagonally down the page.',
    tag: 'Organic Shape',
  },
]

export default function DemoIndexPage() {
  return (
    <>
      <Section spacing="xl" className="bg-gradient-to-b from-background to-foreground/5">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Section <span className="text-primary">Transition</span> Demos
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance">
              Four approaches to eliminating hard borders between sections. Each
              page is a full homepage variant with a unique hero-to-content
              transition.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {demos.map((demo) => (
              <NextLink key={demo.href} href={demo.href}>
                <div className="group relative rounded-2xl border border-foreground/10 bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {demo.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {demo.title}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View demo
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </NextLink>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
