import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

import BackgroundBlob from '@/components/background-blob'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marius | Portfolio',
  description: 'Marius is a frontend web developer with 1 year of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeContextProvider>
          <div className=' inset-0 absolute overflow-hidden w-full h-[100%]'>
                    <BackgroundBlob color='#C9C3F9' colorDark='#676394' position='left'/>
        <BackgroundBlob color='#F9D2D3' colorDark='#946263' position='right'/>
          </div>

         <ActiveSectionContextProvider>
        <Header/>
          {children}
          <Toaster position="top-right" />
          <Footer/>
        <ThemeSwitch/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}