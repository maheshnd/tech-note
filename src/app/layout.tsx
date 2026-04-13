import type { Metadata } from 'next'
import { JetBrains_Mono, Source_Sans_3, Space_Grotesk } from 'next/font/google'
import Sidebar from '@/components/layout/Sidebar'
import '@/app/globals.css'

const fontSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Tech Note',
  description: 'Personal React, Next.js, and JavaScript learning notes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="h-full overflow-hidden">
        <div className="flex h-screen min-h-0 md:h-dvh">
          <Sidebar />
          <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
