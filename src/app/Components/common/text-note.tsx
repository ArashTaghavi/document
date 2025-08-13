/** @format */

type PropTypes = { children: React.ReactNode; size?: string; important?: boolean }

export default function TextNote({ children, important = true, size = 'text-md' }: PropTypes) {
  return (
    <p
      className={`my-1 ${
        important ? 'font-bold underline underline-offset-4 text-red-500 bg-white py-1 px-2 rounded-sm' : ''
      } ${size}`}>
      {children}
    </p>
  )
}
