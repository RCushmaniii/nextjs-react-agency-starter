import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Badge } from '@/components/ui/badge'
import { Prose } from '@/components/content/prose'
import { getAllWork, getWorkBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { PageHero } from '@/components/layout/page-hero'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/content/mdx-components'

export async function generateStaticParams() {
  const work = getAllWork()
  return work.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const work = getWorkBySlug(params.slug)

  if (!work) {
    return {
      title: 'Work Not Found',
    }
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      type: 'article',
      publishedTime: work.date,
      images: work.coverImage ? [work.coverImage] : undefined,
    },
  }
}

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const work = getWorkBySlug(params.slug)

  if (!work) {
    notFound()
  }

  const heroImage = work.coverImage || '/images/work/work-1.jpg'

  return (
    <>
      <PageHero
        title={work.title}
        subtitle={work.description}
        imageSrc={heroImage}
        imageAlt={`${work.title} cover`}
        containerSize="md"
        align="left"
        priorityImage
      >
        <div className="flex flex-wrap gap-6 text-sm text-foreground/70 mb-6">
          {work.client && (
            <div>
              <span className="font-semibold">Client:</span> {work.client}
            </div>
          )}
          {work.role && (
            <div>
              <span className="font-semibold">Role:</span> {work.role}
            </div>
          )}
          <div>
            <span className="font-semibold">Date:</span> {formatDate(work.date)}
          </div>
        </div>

        {work.tech && work.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {work.tech.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </PageHero>

      <Section spacing="lg">
        <Container size="md">
          <Prose>
            <MDXRemote source={work.content} components={mdxComponents} />
          </Prose>
        </Container>
      </Section>
    </>
  )
}
