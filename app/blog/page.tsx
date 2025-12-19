import { Metadata } from 'next'
import NextLink from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { PageHero } from '@/components/layout/page-hero'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles on web development, design, and technology.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights, tutorials, and thoughts on web development, design, and building great products."
        imageSrc="/images/hero/blog-hero.jpg"
        imageAlt="Blog page hero"
        priorityImage
      />

      <Section spacing="lg">
        <Container>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">
                No blog posts found. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
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
          )}
        </Container>
      </Section>
    </>
  )
}
