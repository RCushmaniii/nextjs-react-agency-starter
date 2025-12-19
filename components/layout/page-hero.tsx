import Image from 'next/image'
import { ReactNode } from 'react'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: ReactNode
  subtitle?: ReactNode
  imageSrc?: string
  imageAlt?: string
  children?: ReactNode
  align?: 'left' | 'center'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  priorityImage?: boolean
}

export function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  children,
  align = 'center',
  containerSize = 'lg',
  priorityImage = false,
}: PageHeroProps) {
  return (
    <Section
      spacing="xl"
      className={cn(
        'relative overflow-hidden',
        imageSrc
          ? 'bg-foreground/5'
          : 'bg-gradient-to-b from-background to-foreground/5'
      )}
    >
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priorityImage}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background/95 dark:from-background/70 dark:via-background/60 dark:to-background/90" />
        </>
      )}

      <Container size={containerSize}>
        <div
          className={cn('relative mx-auto max-w-4xl', {
            'text-center': align === 'center',
            'text-left': align === 'left',
          })}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </Container>
    </Section>
  )
}
