/** @format */

type PropTypes = { children: React.ReactNode; light?: boolean }

export default function Code({ children, light = false }: PropTypes) {
  return (
    <div className={`w-fit mr-auto px-5 py-2 rounded-lg ${light ? 'bg-gray-700' : 'bg-gray-800/10'} my-5`} dir='ltr'>
      <pre className=''>{children}</pre>
    </div>
  )
}
