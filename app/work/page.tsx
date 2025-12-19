import { Metadata } from 'next'
import NextLink from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllWork } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { PageHero } from '@/components/layout/page-hero'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Browse our portfolio of web development projects and case studies.',
}

export default function WorkPage() {
  const work = getAllWork()

  return (
    <>
      <PageHero
        title="Selected Work"
        subtitle="A curation of production-grade applications, focused on performance, accessibility, and user experience."
        imageSrc="/images/hero/work-hero.jpg"
        imageAlt="Work page hero"
        priorityImage
      />

      <Section spacing="lg">
        <Container>

          {work.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">
                No work items found. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {work.map((item) => (
                <NextLink key={item.slug} href={`/work/${item.slug}`}>
                  <Card className="h-full p-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative aspect-[16/9] bg-foreground/5">
                      <Image
                        src={item.coverImage || '/images/work/work-1.jpg'}
                        alt={`${item.title} cover`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      <CardHeader className="mb-0">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tech?.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        {item.client && (
                          <p className="text-sm text-foreground/50 mb-2">
                            {item.client}
                          </p>
                        )}
                        <CardDescription>{item.description}</CardDescription>
                        <p className="text-sm text-foreground/50 mt-4">
                          {formatDate(item.date)}
                        </p>
                      </CardHeader>
                    </div>
                  </Card>
                </NextLink>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
