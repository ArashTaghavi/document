/** @format */

import ThemeProvider from './theme-provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
