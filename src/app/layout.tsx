'use client'

import { ClerkProvider } from '@clerk/clerk-react'
import TimedPopup from '@/components/TimedPopup'
import './globals.css'

const CLERK_PUBLISHABLE_KEY = "pk_test_bW9yZS1zaGVlcC04MS5jbGVyay5hY2NvdW50cy5kZXYk"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <html lang="en" data-scroll-behavior="smooth">
        <head>
          <title>FusionEdge – Digital Checklists</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/fe_logo.png" />
        </head>
        <body>
          {children}
          <TimedPopup />
        </body>
      </html>
    </ClerkProvider>
  )
}
