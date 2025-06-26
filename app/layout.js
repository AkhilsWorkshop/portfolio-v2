import "./globals.css"
import { Rock_Salt, Orbitron, Exo_2 } from 'next/font/google'

const rockSalt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
})

const orbitron = Orbitron({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
})

const exo2 = Exo_2({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Akhil Harikumar",
  description: "Full Stack Developer | Passionate about building clean, performant, and user-focused applications",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rockSalt.className} ${orbitron.className} ${exo2.className}`}>
      <body className='antialiased'>
        {children}
      </body>
    </html>
  )
}
