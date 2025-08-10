<!-- @format -->

`The next/font module automatically optimizes your fonts and removes external network requests for improved privacy and performance.`

It includes built-in self-hosting for any font file. This means you can optimally load web fonts with no layout shift.

To start using next/font, import it from next/font/local or next/font/google, call it as a function with the appropriate options, and set the className of the element you want to apply the font to. For example:

```javascript
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin']
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={geist.className}>
      <body>{children}</body>
    </html>
  )
}
```

**Fonts are scoped to the component they're used in. To apply a font to your entire application, add it to the Root Layout.**

**We recommend using variable fonts for the best performance and flexibility. But if you can't use a variable font, you will need to specify a weight:**

```javascript
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
```

### Local fonts

To use a local font, import your font from next/font/local and specify the src of your local font file. Fonts can be stored in the public folder or co-located inside the app folder. For example:

```javascript
import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
```

If you want to use multiple files for a single font family, src can be an array:

```javascript
const roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})
```

**Good to know: Use an underscore (\_) for font names with multiple words. E.g. Roboto Mono should be imported as Roboto_Mono.**
