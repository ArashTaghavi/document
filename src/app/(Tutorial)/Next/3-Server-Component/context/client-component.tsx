/** @format */

'use client'
import { useContext } from 'react'
import { ThemeContext } from './theme-provider'
export default function ClientComponent() {
  const theme = useContext(ThemeContext)

  return <h2 className='m-3 p-3 bg-sky-500 rounded-xl'>Render From Context: {theme}</h2>
}
