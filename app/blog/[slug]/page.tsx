import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Badge } from '@/components/ui/badge'
import { Prose } from '@/components/content/prose'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { getArticleSchema } from '@/lib/seo'
import { PageHero } from '@/components/layout/page-hero'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/content/mdx-components'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    coverImage: post.coverImage,
    slug: post.slug,
  })

  const heroImage = post.coverImage || '/images/blog/blog-1.jpg'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        title={post.title}
        subtitle={post.description}
        imageSrc={heroImage}
        imageAlt={`${post.title} cover`}
        containerSize="md"
        align="left"
        priorityImage
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-6">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </PageHero>

      <Section spacing="lg">
        <Container size="md">
          <Prose>
            <MDXRemote source={post.content} components={mdxComponents} />
          </Prose>
        </Container>
      </Section>
    </>
  )
}
