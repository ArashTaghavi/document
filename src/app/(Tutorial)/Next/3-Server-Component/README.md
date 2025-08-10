<!-- @format -->

###### By default, layouts and pages are Server Components

## Use Client Components when you need:

- State and event handlers. E.g. onClick, onChange.
- Lifecycle logic. E.g. useEffect.
- Browser-only APIs. E.g. localStorage, window, Navigator.geolocation, etc.
- Custom hooks.

## Use Server Components when you need:

- Fetch data from databases or APIs close to the source.
- Use API keys, tokens, and other secrets without exposing them to the client.
- Reduce the amount of JavaScript sent to the browser.
- Improve the First Contentful Paint (FCP), and stream content progressively to the client.

## On the server

On the server, Next.js uses React's APIs to orchestrate rendering. The rendering work is split into chunks, by individual route segments (layouts and pages):

Server Components are rendered into a special data format called the React Server Component Payload (RSC Payload).

Client Components and the RSC Payload are used to prerender HTML.

## What is the React Server Component Payload (RSC)?

The RSC Payload is a `compact binary representation`of the rendered React Server Components tree. It's used by React on the client to
update the browser's DOM. The RSC Payload contains:

- The rendered result of Server Components
- Placeholders for where Client Components should be rendered and references to their JavaScript files
- Any props passed from a Server Component to a Client Component

## On the client (first load)

Then, on the client:

- HTML is used to immediately show a fast non-interactive preview of the route to the user.
- RSC Payload is used to reconcile the Client and Server Component trees.
- JavaScript is used to hydrate Client Components and make the application interactive.

## What is hydration?

Hydration is React's process for attaching event handlers to the DOM, to make the static HTML interactive.

## Subsequent Navigations

On subsequent navigations:

- The RSC Payload is prefetched and cached for instant navigation.
- Client Components are rendered entirely on the client, without the server-rendered HTML.

## Context

[ **2-Server-Component/context** ]

## Third-party components

When using a third-party component that relies on client-only features, you can wrap it in a Client Component to ensure it works as expected.

For example, the < Carousel /> can be imported from the acme-carousel package. This component uses useState, but it doesn't yet have the "use client" directive.

If you use < Carousel /> within a Client Component, it will work as expected:

```javascript
app/carousel.tsx
'use client'

import { Carousel } from 'acme-carousel'

export default Carousel
---------------------------------------------
import Carousel from './carousel'

export default function Page() {
  return (
    <div>
      <p>View pictures</p>
      {/*  Works, since Carousel is a Client Component */}
      <Carousel />
    </div>
  )
}
```

## [Advice for Library Authors](https://nextjs.org/docs/app/getting-started/server-and-client-components)

## [Preventing environment poisoning](https://nextjs.org/docs/app/getting-started/server-and-client-components)
