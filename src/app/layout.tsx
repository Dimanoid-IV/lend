import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Веб-студия | Создание сайтов с нуля | Лендинги и многостраничные сайты',
  description: 'Профессиональная веб-студия создает современные сайты с нуля. Разработка лендингов от 150€ и многостраничных сайтов от 350€. Быстрые сроки, SEO оптимизация, мобильная адаптация.',
  keywords: 'создание сайтов, веб-студия, лендинги, многостраничные сайты, SEO оптимизация, мобильная адаптация, веб-разработка',
  authors: [{ name: 'Веб-студия' }],
  creator: 'Веб-студия',
  publisher: 'Веб-студия',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://вашдомен.com',
  },
  openGraph: {
    title: 'Веб-студия | Создание сайтов с нуля',
    description: 'Профессиональная разработка сайтов от опытной веб-студии. Лендинги и многостраничные сайты с гарантией качества.',
    url: 'https://вашдомен.com',
    siteName: 'Веб-студия',
    images: [
      {
        url: 'https://вашдомен.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Веб-студия - создание сайтов',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Веб-студия | Создание сайтов с нуля',
    description: 'Профессиональная веб-студия создает современные сайты с нуля',
    images: ['https://вашдомен.com/og-image.jpg'],
  },
  verification: {
    google: 'ваш-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Веб-студия",
              "url": "https://вашдомен.com",
              "logo": "https://вашдомен.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/вашпрофиль",
                "https://t.me/вашканал"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7-XXX-XXX-XXXX",
                "contactType": "customer service"
              },
              "description": "Профессиональная веб-студия создает современные сайты с нуля"
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}