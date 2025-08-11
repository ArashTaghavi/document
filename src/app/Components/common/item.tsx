/** @format */

type PropTypes = { children: React.ReactNode }

export default function Item({ children }: PropTypes) {
  return <span className='px-5 py-2 rounded-lg bg-gray-800'>{children}</span>
}
