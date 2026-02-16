import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: 'NexaCard - Portafolio de Tarjetas Digitales',
  description: 'Portafolio profesional con 10 diseños de tarjetas digitales de contacto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
