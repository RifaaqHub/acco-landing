import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import '@/styles/globals.css'

import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import AppProviders from './providers'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const calm = localFont({
  src: [
    {
      path: '../styles/KeepCalm-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-calm',
  fallback: ['system-ui', 'sans-serif', 'arial'],
})

const ACCO_DESC =
  "Whether you're striving to manage your time more effectively, deepen your spiritual connection, or engage with a community that shares your values, Acco-Rifaaq offers a comprehensive solution.It caters to those seeking effective time management, spiritual growth, and a supportive community that shares their values. Whether you're an entrepreneur, student, professional, or anyone striving to enhance both productivity and faith, Acco-rifaaq offers a versatile platform to enrich your journey."

export const metadata: Metadata = {
  title: 'Acco-Rifaaq Home',
  description: ACCO_DESC,
  metadataBase: new URL('https://acco.rifaaq.com'),
  keywords: [
    'muslim',
    'islamic productivity',
    'growth',
    'partnership',
    'personal development',
    'community',
  ],
  category: 'islam, personal development',
  openGraph: {
    title: 'Acco-Rifaaq',
    description: ACCO_DESC,
    url: 'https://acco.rifaaq.com',
    siteName: 'Acco-Rifaaq',
    type: 'website',
    images: [
      {
        url: '/fav.png',
        width: 768,
        height: 768,
        alt: 'acco-rifaaq-icon',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${calm.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <AppProviders>{children}</AppProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
