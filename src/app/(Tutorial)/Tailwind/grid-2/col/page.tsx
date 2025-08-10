/** @format */

export default function Page() {
  return (
    <>
      <div className='grid grid-cols-5 gap-2 border p-3 my-3 text-center'>
        <div className='bg-sky-600 col-span-2'>col-span-2 (01)</div>
        <div className='bg-sky-600 col-span-1'>col-span-1 (02)</div>
        <div className='bg-sky-600'>(03)</div>
        <div className='bg-sky-600'> (04)</div>
        <div className='bg-sky-600 col-span-4'>col-span-4 (05)</div>
      </div>

      <div className='grid grid-cols-5 gap-2 border p-3 my-3 text-center'>
        <div className='bg-sky-600 col-span-2'>col-span-2 (01)</div>
        <div className='bg-sky-600 col-span-2'>col-span-2 (02)</div>
        <div className='bg-sky-600 col-span-2'>col-span-2 (03)</div>
        <div className='bg-sky-600'>(04)</div>
        <div className='bg-sky-600'>(05)</div>
      </div>

      <div className='grid grid-cols-5 gap-2 border p-3 my-3 text-center'>
        <div className='bg-sky-600 col-span-1'>col-span-1 (01)</div>
        <div className='bg-sky-600 col-span-1'>col-span-1 (02)</div>
        <div className='bg-sky-600 col-span-1'>col-span-1 (03 )</div>
        <div className='bg-sky-600 col-span-1'>col-span-1 (04 )</div>
        <div className='bg-sky-600 col-span-1'>col-span-1 (05 )</div>

        <div className='bg-sky-600 col-span-2 col-start-2'>col-start-2 col-span-2 (06)</div>
        <div className='bg-sky-600 col-span-2'>col-span-2 (07)</div>

        <div className='bg-sky-600 col-end-3'>col-end-3 (08)</div>
      </div>
    </>
  )
}
