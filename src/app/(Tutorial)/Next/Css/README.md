<!-- @format -->

## CSS Modules

CSS Modules `locally scope CSS by generating unique class names`. This allows you to use the same class in different files without worrying about naming collisions.

To start using CSS Modules, create a new file with the extension .module.css and import it into any component inside the app directory:

```css
.blog {
  padding: 24px;
}
```

```javascript
import styles from './blog.module.css'

export default function Page() {
  return <main className={styles.blog}></main>
}
```

## Global CSS

You can use global CSS to apply styles across your application.

Create a app/global.css file and import it in the root layout to apply the styles to every route in your application:

```javascript
// These styles apply to every route in the application
import './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
```

`Good to know:` Global styles can be imported into any layout, page, or component inside the app directory. However, since Next.js uses React's built-in support for stylesheets to integrate with Suspense, this currently does not remove stylesheets as you navigate between routes which can lead to conflicts. We recommend using global styles for truly global CSS, and CSS Modules for scoped CSS.

**Styles that are different between pages but share the same class name ❌ should not be placed in global.css, because this can lead to conflicts.**

### Recommendations

To keep CSS ordering predictable:

- Try to contain CSS imports to a single JavaScript or TypeScript entry file
- Import global styles and Tailwind stylesheets in the root of your application.
- Use CSS Modules instead of global styles for nested components.
- Use a consistent naming convention for your CSS modules. For example, using <name>.module.css over <name>.tsx.
- Extract shared styles into shared components to avoid duplicate imports.
- Turn off linters or formatters that auto-sort imports like ESLint’s sort-imports.
- You can use the cssChunking option in next.config.js to control how CSS is chunked.

```javascript
import type { NextConfig } from 'next'

const nextConfig = {
experimental: {
cssChunking: true, // default
},
} satisfies NextConfig

export default nextConfig
```

### Options

- true (default): Next.js will try to merge CSS files whenever possible, determining explicit and implicit dependencies between files from import order to reduce the number of chunks and therefore the number of requests.
- false: Next.js will not attempt to merge or re-order your CSS files.
- 'strict': Next.js will load CSS files in the correct order they are imported into your files, which can lead to more chunks and requests.

You may consider using 'strict' if you run into unexpected CSS behavior. For example, if you import a.css and b.css in different files using a different import order (a before b, or b before a), true will merge the files in any order and assume there are no dependencies between them. However, if b.css depends on a.css, you may want to use 'strict' to prevent the files from being merged, and instead, load them in the order they are imported - which can result in more chunks and requests.

For most applications, we recommend true as it leads to fewer requests and better performance.
