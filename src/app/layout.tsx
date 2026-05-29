import type { Metadata, Viewport } from 'next'
import Providers from '@/lib/providers'
import TimedPopup from '@/components/TimedPopup'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FusionEdge – Digital Checklists',
    template: '%s | FusionEdge',
  },
  description:
    'FusionEdge helps teams go paperless with digital checklists for inspections, safety audits, and preventive maintenance. Real-time tracking, audit-ready compliance, zero guesswork.',
  keywords: [
    'digital checklists',
    'facility inspections',
    'safety audits',
    'preventive maintenance',
    'compliance software',
    'paperless inspections',
    'checklist app',
    'field operations',
    'FusionEdge',
  ],
  authors: [{ name: 'FusionEdge' }],
  creator: 'FusionEdge',
  publisher: 'FusionEdge',
  metadataBase: new URL('https://www.fusionedge.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fusionedge.io',
    siteName: 'FusionEdge',
    title: 'FusionEdge – Digital Checklists',
    description:
      'Smarter inspections. Proven compliance. Zero guesswork. Replace paper and Excel with one unified system for your team.',
    images: [
      {
        url: '/FusionEdge_logo.png',
        width: 1200,
        height: 630,
        alt: 'FusionEdge – Digital Checklists for Smarter Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FusionEdge – Digital Checklists',
    description:
      'Smarter inspections. Proven compliance. Zero guesswork. Replace paper and Excel with one unified system for your team.',
    images: ['/FusionEdge_logo.png'],
    creator: '@fusionedge',
  },
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
  icons: {
    icon: '/fe_logo.png',
    shortcut: '/fe_logo.png',
    apple: '/fe_logo.png',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#5b2d8e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Structured data – Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FusionEdge',
              url: 'https://www.fusionedge.io',
              logo: 'https://www.fusionedge.io/FusionEdge_logo.png',
              description:
                'FusionEdge helps teams go paperless with digital checklists for inspections, safety audits, and preventive maintenance.',
              sameAs: [],
            }),
          }}
        />
        {/* Structured data – SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'FusionEdge',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'Digital checklist software for facility inspections, safety audits, and preventive maintenance. Real-time tracking and audit-ready compliance.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              url: 'https://www.fusionedge.io',
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
          <TimedPopup />
        </Providers>
      </body>
    </html>
  )
}