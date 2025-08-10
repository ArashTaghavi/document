/** @format */

type PropTypes = { children?: React.ReactNode; title: string; subTitle?: string }

export default function PageTitle({ children, title, subTitle }: PropTypes) {
  return (
    <>
      <div className='w-full bg-indigo-700 py-5'>
        <h1 className='text-3xl font-bold text-center'>{title}</h1>
        {subTitle && <h2 className='text-xl font-bold text-center mt-2'>{subTitle}</h2>}
      </div>
      {children}
    </>
  )
}
