/** @format */

type PropTypes = { children: React.ReactNode; title: string; width?: string }

export default function LI({ children, title, width }: PropTypes) {
  return (
    <li className={`bg-gray-700 py-2 px-5 m-1 rounded-md shadow-sm shadow-white/30 mb-2 ${width ? width : ''}`}>
      <strong>
        {title} {title !== '-' && ':'}{' '}
      </strong>
      <span>{children}</span>
    </li>
  )
}
