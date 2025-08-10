<!-- @format -->

When using the 'use client' directive, the props of the Client Components must be serializable. This means the props need to be in a format that React can serialize when sending data from the server to the client.

```javascript
'use client'

export default function Counter({ onClick /* ❌ Function is not serializable */ }) {
  return (
    <div>
      <button onClick={onClick}>Increment</button>
    </div>
  )
}
```
