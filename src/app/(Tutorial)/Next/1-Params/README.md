<!-- @format -->

# What to use and when

- Use the `searchParams` prop when you need search parameters to load data for the page (e.g. pagination, filtering from a database).

- Use `useSearchParams` when search parameters are used only on the client (e.g. filtering a list already loaded via props).

- As a small optimization, you can use new `URLSearchParams(window.location.search)` in callbacks or event handlers to read search params without triggering re-render
