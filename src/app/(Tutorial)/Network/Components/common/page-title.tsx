/** @format */

type PropTypes = { children?: React.ReactNode; title: string }

export default function PageTitle({ children, title }: PropTypes) {
  return (
    <>
      <h1 className='text-5xl font-bold text-center mt-5'>{title}</h1>
      {children}
    </>
  )
}
