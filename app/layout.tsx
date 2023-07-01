import { Navbar } from '@/components'
import './globals.css'
import Footer from '@/components/Footer'
import SupabaseProvider from '@/providers/SupabaseProvider'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <SupabaseProvider>
          <Navbar />
          {children}
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  )
}
