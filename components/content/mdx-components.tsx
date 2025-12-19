import Image from 'next/image'
import { Link } from '@/components/ui/link'
import { cn } from '@/lib/utils'

export const mdxComponents = {
  // Headings
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-8 mb-4 text-4xl font-bold text-foreground',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-12 mb-4 text-3xl font-semibold text-foreground',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 mb-3 text-2xl font-semibold text-foreground',
        className
      )}
      {...props}
    />
  ),

  // Paragraph
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('mb-4 leading-relaxed text-foreground/80', className)}
      {...props}
    />
  ),

  // Links
  a: ({ href = '', children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),

  // Lists
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('mb-4 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('mb-4 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn('mb-2 text-foreground/80', className)} {...props} />
  ),

  // Blockquote
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        'border-l-4 border-primary pl-6 italic text-foreground/70 my-6',
        className
      )}
      {...props}
    />
  ),

  // Code
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'rounded bg-foreground/5 px-1.5 py-0.5 text-sm font-mono text-primary',
        className
      )}
      {...props}
    />
  ),

  // Pre (code blocks)
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mb-4 overflow-x-auto rounded-lg bg-foreground/5 p-4 border border-foreground/10',
        className
      )}
      {...props}
    />
  ),

  // Image
  img: ({ src = '', alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const rest: Record<string, unknown> = { ...props }
    delete rest.width
    delete rest.height
    delete rest.sizes
    delete rest.srcSet

    return (
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={600}
        className="rounded-lg my-6"
        {...(rest as Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'sizes' | 'srcSet'>)}
      />
    )
  },

  // Horizontal rule
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn('my-8 border-foreground/10', className)}
      {...props}
    />
  ),

  // Table
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table
        className={cn('w-full border-collapse text-sm', className)}
        {...props}
      />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border border-foreground/10 bg-foreground/5 px-4 py-2 text-left font-semibold',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border border-foreground/10 px-4 py-2 text-foreground/80',
        className
      )}
      {...props}
    />
  ),
}
