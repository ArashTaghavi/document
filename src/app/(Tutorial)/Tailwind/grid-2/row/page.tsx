/** @format */

export default function Page() {
  return (
    <>
      <h1 className='text-right my-5'>
        توو این حالت تعداد سطر ها همیشه چهار تاست. هرچقدر المان هارو زیاد کنی عرضشون کم میشه ستون ها زیاد میشه ولی سطر
        ها چهارتا میمونه
      </h1>
      <div className='grid grid-flow-col grid-rows-4 p-5 m-5 gap-4 border text-center'>
        <div className='bg-sky-700'>01</div>
        <div className='bg-sky-700'>02</div>
        <div className='bg-sky-700'>03</div>
        <div className='bg-sky-700'>04</div>
        <div className='bg-sky-700'>05</div>
        <div className='bg-sky-700'>06</div>
        <div className='bg-sky-700'>07</div>
        <div className='bg-sky-700'>08</div>
        <div className='bg-sky-700'>09</div>
        {/* <div className='bg-sky-700'>10</div>
        <div className='bg-sky-700'>11</div>
        <div className='bg-sky-700'>12</div>
        <div className='bg-sky-700'>13</div>
        <div className='bg-sky-700'>14</div> */}
      </div>

      <div className='grid grid-flow-col grid-rows-3 p-5 m-5 gap-4 border bg-green-200 text-center'>
        <div className='row-span-3 bg-amber-600'>row-span-3 (01)</div>
        <div className='bg-red-600'>(02)</div>
        <div className='bg-green-600 '>03</div>
      </div>

      <div className='grid grid-flow-col grid-rows-3 p-5 m-5 gap-4 border bg-blue-200 text-center'>
        <div className='row-span-3 bg-amber-600'>row-span-3 (01)</div>
        <div className='col-span-2 bg-red-600'>col-span-2(02)</div>
        <div className='bg-green-600 row-span-2'>row-span-2 (03)</div>
      </div>

      <div className='grid grid-flow-col grid-rows-8 p-5 m-5 gap-4 border bg-red-200 text-center'>
        <div className='row-span-5 col-span-2 bg-amber-600'>row-span-5 col-span-2 (01)</div>
        <div className='row-span-2 row-start-2 col-span-4 bg-red-600'>row-span-2 row-start-2 col-span-4 (02)</div>
        <div className='row-span-1 col-span-4 bg-green-600'>row-span-1 col-span-4 (03)</div>
      </div>
      <h1 className='text-right'>
        دیو اول 6 سطر و دیو دوم ۱ سطر. قاعدتا باید زیر هم باشن.چون پرنتشون ۸ سطره. ولی وقتی به دیو دوم کلاس رو استارت ۱
        بدی میره ستون دوم. اگه تعداد رو هاشو ۳ کنیم و رو استارت ۱ رو ازش بگیریم بازم همین میشه
      </h1>
      <div className='grid grid-flow-col grid-rows-8 p-5 m-5 gap-4 border bg-orange-200 text-center'>
        <div className='row-span-6 col-span-2 bg-amber-600'>row-span-6 col-span-2 (01)</div>
        <div className='row-span-2 row-start-1 col-span-4 bg-red-600'>row-span-2 row-start-1 col-span-4 (02)</div>
        <div className='row-span-1 row-start-6 col-span-3 bg-green-600'>row-span-1 row-start-6 col-span-3 (04)</div>
      </div>

      <div className='grid grid-cols-6 p-5 m-5 gap-4 border bg-fuchsia-200 text-center'>
        <div className='bg-amber-600 col-span-4 col-start-2'>col-span-4 row-start-2 (01)</div>
        <div className='bg-amber-600 col-span-2'>col-span-2 (02)</div>
        <div className='bg-amber-600 col-span-2 col-end-7'>col-span-2 col-end-7 (03)</div>
        <div className='bg-amber-600 col-span-2 col-start-2'>col-span-2 col-start-2 (03)</div>
        <div className='bg-amber-600 col-span-2 col-end-7'>col-span-2 col-end-7 (04)</div>
        <div className='bg-amber-600 col-start-4 col-end-7'>col-start-4 col-end-7 (04)</div>
      </div>
    </>
  )
}
