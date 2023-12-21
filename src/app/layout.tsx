import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer';
import Header from './components/Header';
import NextThemeProvider from './providers/NextThemeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bug Tracker',
  description: 'Welcome to the bug tracker!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />  
          <Footer />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  )
}
