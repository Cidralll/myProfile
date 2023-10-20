import Analytics from '@/components/analytics/analytics'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Perfil - LC',
  description: 'Perfil para mostrar/postar projetos React/Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Analytics />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
