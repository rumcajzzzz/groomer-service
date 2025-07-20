import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import OdometerLoader from '@/components/Odometer'

export const metadata: Metadata = {
  title: 'Psi Styl',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-default.min.css"
          precedence="default"
        />
      </head>
      <body>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js"
          strategy="beforeInteractive"
        />
        <OdometerLoader />
        {children}
      </body>
    </html>
  )
}
