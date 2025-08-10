<!-- @format -->

## Server Rendering

In Next.js, Layouts and Pages are React Server Components by default. On initial and subsequent navigations, the Server Component Payload is generated on the server before being sent to the client.
There are two types of server rendering, based on when it happens:

- `Static Rendering (or Prerendering)` happens at **build time** or **during revalidation** and the result is cached.
- `Dynamic Rendering` happens at **request time** in response to a client request.
  The trade-off of server rendering is that the client must wait for the server to respond before the new route can be shown. Next.js addresses this delay by prefetching routes the user is likely to visit and performing client-side transitions.

## Prefetching

Prefetching is the process of loading a route in the background before the user navigates to it. This makes navigation between routes in your application feel instant, because by the time a user clicks on a link, the data to render the next route is already available client side.

Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport.

## How much of the route is prefetched depends on whether it's static or dynamic:

`Static Route: the full route is prefetched.`
Dynamic Route: prefetching is skipped, or the route is `partially prefetched if loading.tsx is present`.
By skipping or partially prefetching dynamic routes, Next.js avoids unnecessary work on the server for routes the users may never visit. However, waiting for a server response before navigation can give the users the impression that the app is not responding.
`To improve the navigation experience to dynamic routes, you can use streaming.`

## Streaming

Streaming allows the server to send parts of a dynamic route to the client as soon as they're ready, rather than waiting for the entire route to be rendered. This means users see something sooner, even if parts of the page are still loading.

For dynamic routes, it means they can be partially prefetched. That is, `shared layouts and loading skeletons can be requested ahead of time`.

`To use streaming, create a loading.tsx in your route folder`.

Behind the scenes, Next.js will automatically wrap the page.tsx contents in a < Suspense > boundary. The prefetched fallback UI will be shown while the route is loading, and swapped for the actual content once ready.

## Benefits of loading.tsx:

- Immediate navigation and visual feedback for the user.
- Shared layouts remain interactive and navigation is interruptible.
- Improved Core Web Vitals: TTFB, FCP, and TTI.

To further improve the navigation experience, Next.js performs a client-side transition with the <Link> component.

## Client-side transitions

Traditionally, navigation to a server-rendered page triggers a full page load. This clears state, resets scroll position, and blocks interactivity.

Next.js avoids this with client-side transitions using the <Link> component. Instead of reloading the page, it updates the content dynamically by:

- Keeping any shared layouts and UI.
- Replacing the current page with the prefetched loading state or a new page if available.

Client-side transitions are what makes a server-rendered apps feel like client-rendered apps. And when paired with prefetching and streaming, it enables fast transitions, even for dynamic routes.

## What can make transitions slow?

- Dynamic routes without loading.tsx
- Dynamic segments without generateStaticParams
- Slow networks [ **2-Link/slow-network** ]

## Disabling prefetching

You can opt out of prefetching by setting the prefetch prop to false on the < Link > component. This is useful to avoid unnecessary usage of resources when rendering large lists of links (e.g. an infinite scroll table).

However, disabling prefetching comes with trade-offs:

- Static routes will only be fetched when the user clicks the link.
- Dynamic routes will need to be rendered on the server first before the client can navigate to it.
  To reduce resource usage without fully disabling prefetch, you can prefetch only on hover. This limits prefetching to routes the user is more likely to visit, rather than all links in the viewport. (**2-Link/hover-prefetch-link**)

## Hydration not completed

< Link > is a Client Component and must be hydrated before it can prefetch routes. On the initial visit, large JavaScript bundles can delay hydration, preventing prefetching from starting right away.

React mitigates this with Selective Hydration and you can further improve this by:

Using the @next/bundle-analyzer plugin to identify and reduce bundle size by removing large dependencies.
Moving logic from the client to the server where possible. See the Server and Client Components docs for guidance.

# MORE

## [Examples](https://nextjs.org/docs/app/getting-started/linking-and-navigating#examples)
