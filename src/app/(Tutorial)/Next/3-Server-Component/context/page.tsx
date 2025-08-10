/** @format */

import ClientComponent from './client-component'

export default async function Page() {
  return (
    <div className='flex gap-3'>
      <h2 className='m-3 p-3 bg-sky-500 rounded-xl'>Render From Server Component</h2>
      <ClientComponent />
    </div>
  )
}
