import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://agency.com'),
  title: {
    default: 'Agency - Production-Grade Web Solutions',
    template: '%s | Agency',
  },
  description:
    'We build exceptional web experiences with Next.js, TypeScript, and modern design principles.',
  keywords: [
    'web development',
    'Next.js',
    'TypeScript',
    'agency',
    'design',
    'development',
  ],
  authors: [{ name: 'Agency' }],
  creator: 'Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agency.com',
    siteName: 'Agency',
    title: 'Agency - Production-Grade Web Solutions',
    description:
      'We build exceptional web experiences with Next.js, TypeScript, and modern design principles.',
    images: [
      {
        url: '/images/logos/logo-square-black.jpg',
        width: 1200,
        height: 630,
        alt: 'Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency - Production-Grade Web Solutions',
    description:
      'We build exceptional web experiences with Next.js, TypeScript, and modern design principles.',
    creator: '@agency',
    images: ['/images/logos/logo-square-black.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <div className="flex min-h-screen flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
