import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LV Welding Services | Custom Metal Fabrication — South Florida',
  description:
    'Licensed and insured welding and custom metal fabrication in South Florida. Specializing in custom gates, railings, staircases, structural steel, and ornamental ironwork. Serving Miami, Hialeah, Coral Gables, Fort Lauderdale & beyond. Available 24/7.',
  keywords: [
    'welding services South Florida',
    'custom metal fabrication Miami',
    'custom gates Miami',
    'custom railings Hialeah',
    'ornamental ironwork Florida',
    'structural steel fabrication',
    'LV Welding Services',
    'welding Coral Gables',
    'metal fabrication Fort Lauderdale',
    'welding Miami-Dade',
  ],
  openGraph: {
    title: 'LV Welding Services | Custom Metal Fabrication — South Florida',
    description:
      'Licensed and insured welding and custom metal fabrication. Serving all of South Florida since 2018.',
    url: 'https://www.lvweldingservices.com',
    siteName: 'LV Welding Services',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LV Welding Services | South Florida',
    description: 'Custom metal fabrication, gates, railings, staircases & more. Licensed & insured.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
