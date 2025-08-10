<!-- @format -->

### Caching and Revalidating

Caching is a technique for storing the result of data fetching and other computations so that future requests for the same data can be served faster, without doing the work again. While revalidation allows you to update cache entries without having to rebuild your entire application.

Next.js provides a few APIs to handle caching and revalidation. This guide will walk you through when and how to use them.

- fetch
- unstable_cache
- revalidatePath
- revalidateTag

### fetch

```javascript
export default async function Page() {
  const data = await fetch('https://...', { cache: 'force-cache' })
}
export default async function Page() {
  const data = await fetch('https://...', { next: { revalidate: 3600 } })
}


export async function getUserById(id: string) {
  const data = await fetch(`https://...`, {
    next: {
      tags: ['user'],
    },
  })
}

import { revalidateTag } from 'next/cache'

export async function updateUser(id: string) {
  // Mutate data
  revalidateTag('user')
}
```

### revalidatePath

revalidatePath is used to revalidate a route and following an event. To use it, call it in a Route Handler or Server Action:
import { revalidatePath } from 'next/cache'

```javascript

export async function updateUser(id: string) {
// Mutate data
revalidatePath('/profile')
```
