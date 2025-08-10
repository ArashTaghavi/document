/** @format */
import localFont from 'next/font/local'
import './globals.css'

const vazir = localFont({
  src: './assets/fonts/Vazir-Variable.woff2',
  display: 'swap',
  variable: '--font-vazir'
})

export default function NetworkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={`${vazir.className} text-right antialiased`}>
        <div>{children}</div>
      </body>
    </html>
  )
}
