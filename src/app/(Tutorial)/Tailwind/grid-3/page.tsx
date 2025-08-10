/** @format */

export default function Page() {
  return (
    <>
      <h1 className='text-right my-5'></h1>

      <div className='grid grid-cols-6 p-5 m-5 gap-4 border bg-fuchsia-200 text-center'>
        <div className='bg-amber-600 col-span-4 col-start-2'>col-span-4 row-start-2 (01)</div>
        <div className='bg-amber-600 col-span-2'>col-span-2 (02)</div>
        <div className='bg-amber-600 col-span-2 col-end-7'>col-span-2 (02)</div>
        <div className='bg-amber-600 col-span-6'>col-span-2 (02)</div>
      </div>
    </>
  )
}
