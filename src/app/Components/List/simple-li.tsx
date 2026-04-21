/** @format */
type PropTypes = {
  children: React.ReactNode
  title?: string
}

export default function SimpleLI({ children, title }: PropTypes) {
  return (
    <li className='list-disc my-5'>
      {title && <strong>{title}</strong>}
      {title && <span>: </span>}
      {children}
    </li>
  )
}
