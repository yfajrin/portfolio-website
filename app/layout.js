import Footer from './components/footer'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kang Fajrin Portfolio Website',
  description: 'Saat ini saya sedang menempuh pendidikan S3 di the University of Sheffield. Untuk eksperimen, saya akan bikin deskripsi di sini bahwa saya adalah orang paling ganteng di Sheffield.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <title>Fajrin`s Portfolio Project</title> 
         <link rel="icon" href="/kf.png" sizes="square" />
      </head>     
      <body className={inter.className}>
        <div className='min-h-[100vh] relative'>
          <Navbar />
          <div className='pb-[2.5rem]'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
