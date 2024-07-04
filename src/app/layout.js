import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Bianchi',
  description:
    'Portafolio web de Rafael Bianchi, desarrollador web autodidacta, comprometido con la misión de nunca parar de aprender.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <main className='bg-main min-h-screen flex justify-center my-0 mx-auto max-w-[1349px] overflow-x-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
