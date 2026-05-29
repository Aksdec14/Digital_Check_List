import Providers from '@/lib/providers'
import TimedPopup from '@/components/TimedPopup'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
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
        <Providers>
          {children}
          <TimedPopup />
        </Providers>
      </body>
    </html>
  )
}
