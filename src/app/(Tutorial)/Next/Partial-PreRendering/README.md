<!-- @format -->

## Partial Prerendering (PPP):

Partial Prerendering (PPR) is a rendering strategy that allows you to combine static and dynamic content in the same route. This improves the initial page performance while still supporting personalized, dynamic data.

## When a user visits a route:

- The server sends a shell containing the static content, ensuring a fast initial load.
- The shell leaves holes for the dynamic content that will load in asynchronously.
- The dynamic holes are streamed in parallel, reducing the overall load time of the page.

## How does Partial Prerendering work?

React Suspense is used to defer rendering parts of your application until some condition is met.

In Partial Prerendering, Suspense is used to mark dynamic boundaries in your component tree.

At build time, Next.js prerenders the static content and the fallback UI. The dynamic content is postponed until the user requests the route.

Wrapping a component in Suspense doesn't make the component itself dynamic (your API usage does), but rather Suspense is used as a boundary that encapsulates dynamic content and enable streaming.

```javascript
import { Suspense } from 'react'
import StaticComponent from './StaticComponent'
import DynamicComponent from './DynamicComponent'
import Fallback from './Fallback'

export const experimental_ppr = true

export default function Page() {
  return (
    <>
      <StaticComponent />
      <Suspense fallback={<Fallback />}>
        <DynamicComponent />
      </Suspense>
    </>
  )
}
```

## Enabling Partial Prerendering

```javascript
next.config.ts

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  }
}

export default nextConfig

// app/components/PartialPrerenderComponent.tsx
import { cookies } from 'next/headers'

export async function PartialPrerenderComponent() {
  const session = cookies().get('session')?.value || 'No session'
  return <div>Session ID (داینامیک): {session}</div>
}

// app/components/StreamingComponent.tsx
import React from 'react'

export async function StreamingComponent() {
  // شبیه‌سازی تاخیر async برای شبیه‌سازی بارگذاری داده
  await new Promise(resolve => setTimeout(resolve, 2000))

  return <div>این بخش با Streaming بارگذاری شده است.</div>
}
```
