/** @format */

type PropTypes = { children: React.ReactNode }

export default function Code({ children }: PropTypes) {
  return (
    <div>
      <pre className='px-5 py-2 rounded-lg bg-gray-800 my-5 text-left' dir='ltr'>
        {children}
      </pre>
    </div>
  )
}
