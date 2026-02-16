import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
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
      <body className={`${inter.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
