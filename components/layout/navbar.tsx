'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Container } from './container'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Demos', href: '/demo' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const pathname = usePathname()

  // Initialize dark mode from localStorage
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))

    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 border-b',
        darkMode
          ? 'border-white/10 bg-black text-white'
          : 'border-foreground/10 bg-white text-foreground'
      )}
    >
      <Container>
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <NextLink
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <span className="sr-only">Company Name</span>
            <Image
              src="/images/logos/company-name-white-logo.jpg"
              alt="Company Name"
              width={420}
              height={96}
              className="h-14 md:h-24 w-auto dark:hidden"
              priority
            />
            <Image
              src="/images/logos/company-name-black-logo.jpg"
              alt="Company Name"
              width={420}
              height={96}
              className="hidden h-14 md:h-24 w-auto dark:block"
              priority
            />
          </NextLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : darkMode
                      ? 'text-white/70'
                      : 'text-foreground/70'
                )}
              >
                {item.label}
              </NextLink>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                'p-2 rounded-lg transition-colors',
                darkMode ? 'hover:bg-white/10' : 'hover:bg-foreground/5'
              )}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={cn(
                'p-2 rounded-lg transition-colors',
                darkMode ? 'hover:bg-white/10' : 'hover:bg-foreground/5'
              )}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                darkMode ? 'hover:bg-white/10' : 'hover:bg-foreground/5'
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={cn(
              'md:hidden py-4 border-t',
              darkMode ? 'border-white/10' : 'border-foreground/10'
            )}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : darkMode
                        ? 'text-white/70'
                        : 'text-foreground/70'
                  )}
                >
                  {item.label}
                </NextLink>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
