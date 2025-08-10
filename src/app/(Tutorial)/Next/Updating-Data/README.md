<!-- @format -->

### What are Server Functions?

A Server Function is an asynchronous function that runs on the server. They can be called from client through a network request, which is why they must be asynchronous.

In an action or mutation context, they are also called Server Actions.

By convention, a Server Action is an async function used with startTransition. This happens automatically when the function is:

- Passed to a < form > using the action prop.
- Passed to a < button > using the formAction prop.

In Next.js, Server Actions integrate with the framework's caching architecture. When an action is invoked, Next.js can return both the updated UI and new data in a single server roundtrip.

`Behind the scenes, actions use the POST method, and only this HTTP method can invoke them.`

### Creating Server Functions

A Server Function can be defined by using the use server directive. You can place the directive at the top of an asynchronous function to mark the function as a Server Function, or at the top of a separate file to mark all exports of that file.

```javascript
export async function createPost(formData: FormData) {
  'use server'
  const title = formData.get('title')
  const content = formData.get('content')

  // Update data
  // Revalidate cache
}

export async function deletePost(formData: FormData) {
  'use server'
  const id = formData.get('id')

  // Update data
  // Revalidate cache
}
```

### Server Components

`Server Functions can be inlined in Server Components by adding the "use server" directive to the top of the function body:
`

```javascript
export default function Page() {
  // Server Action
  async function createPost(formData: FormData) {
    'use server'
    // ...
  }

  return <></>
}
```

### Client Components

It's not possible to define Server Functions in Client Components. However, you can invoke them in Client Components by importing them from a file that has the "use server" directive at the top of it:

```javascript
'use server'

export async function createPost() {}
;('use client')

import { createPost } from '@/app/actions'

export function Button() {
  return <button formAction={createPost}>Create</button>
}
```

### Good to know:

In Client Components, forms invoking Server Actions will queue submissions if JavaScript isn't loaded yet, and will be prioritized for hydration. After hydration, the browser does not refresh on form submission.

### Passing actions as props

You can also pass an action to a Client Component as a prop:

```javascript
'use client'

export default function ClientComponent({ updateItemAction }: { updateItemAction: (formData: FormData) => void }) {
  return <form action={updateItemAction}>{/* ... */}</form>
}
```

### Invoking Server Functions

There are two main ways you can invoke a Server Function:

- Forms in Server and Client Components
- Event Handlers and useEffect in Client Components

### Event Handlers

You can invoke a Server Function in a Client Component by using event handlers such as onClick.

```javascript
'use client'

import { incrementLike } from './actions'
import { useState } from 'react'

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}>
        Like
      </button>
    </>
  )
}
```

### Examples

Showing a pending state
While executing a Server Function, you can show a loading indicator with React's useActionState hook. This hook returns a pending boolean:

```javascript
'use client'

import { useActionState, startTransition } from 'react'
import { createPost } from '@/app/actions'
import { LoadingSpinner } from '@/app/ui/loading-spinner'

export function Button() {
  const [state, action, pending] = useActionState(createPost, false)

  return <button onClick={() => startTransition(action)}>{pending ? <LoadingSpinner /> : 'Create Post'}</button>
}
```

### Revalidating

After performing an update, you can revalidate the Next.js cache and show the updated data by calling revalidatePath or revalidateTag within the Server Function:

```javascript
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  'use server'
  // Update data
  // ...

  revalidatePath('/posts')
}
```

### Redirecting

You may want to redirect the user to a different page after performing an update. You can do this by calling redirect within the Server Function:

```javascript
'use server'

import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  // Update data
  // ...

  redirect('/posts')
}
```

### Cookies

You can get, set, and delete cookies inside a Server Action using the cookies API:

```javascript
'use server'

import { cookies } from 'next/headers'

export async function exampleAction() {
  const cookieStore = await cookies()

  // Get cookie
  cookieStore.get('name')?.value

  // Set cookie
  cookieStore.set('name', 'Delba')

  // Delete cookie
  cookieStore.delete('name')
}
```

### useEffect

You can use the React useEffect hook to invoke a Server Action when the component mounts or a dependency changes. This is useful for mutations that depend on global events or need to be triggered automatically. For example, onKeyDown for app shortcuts, an intersection observer hook for infinite scrolling, or when the component mounts to update a view count:

```javascript
'use client'

import { incrementViews } from './actions'
import { useState, useEffect, useTransition } from 'react'

export default function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      const updatedViews = await incrementViews()
      setViews(updatedViews)
    })
  }, [])

  // You can use `isPending` to give users feedback
  return <p>Total Views: {views}</p>
}
```
