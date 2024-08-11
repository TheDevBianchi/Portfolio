import { Montserrat } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Bianchi',
  description:
    'Web portfolio of Rafael Bianchi, self-taught web developer, committed to the mission of never stopping learning.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Analytics />
      <SpeedInsights />
      <body className={ montserrat.className }>
        <main className='bg-main min-h-screen flex justify-center my-0 mx-auto max-w-[1349px] overflow-x-hidden'>
          { children }
        </main>
      </body>
    </html>
  )
}
