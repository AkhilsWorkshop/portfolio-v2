import "./globals.css"
import { Rock_Salt, Comic_Neue } from 'next/font/google'

const rockSalt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
})

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Akhil Harikumar",
  description: "Created using NextJS 15 and Tailwind CSS 4",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rockSalt.className} ${comicNeue.className}`}>
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  )
}
