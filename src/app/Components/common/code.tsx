/** @format */

type PropTypes = { children: React.ReactNode }

export default function Code({ children }: PropTypes) {
  return (
    <div className='w-fit mr-auto px-5 py-2 rounded-lg bg-gray-800/10 my-5' dir='ltr'>
      <pre className=''>{children}</pre>
    </div>
  )
}
