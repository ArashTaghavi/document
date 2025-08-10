/** @format */

export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-[250px_300px_1fr] text-black'>
      <aside className='bg-gray-800 text-white p-4'>Sidebar (عرض ثابت 250px)</aside>
      <aside className='bg-blue-800 text-white p-4'>Sidebar (عرض ثابت 300)</aside>

      <main className='bg-gray-100 p-4'>
        <p>Main content (فضای باقی‌مانده)</p>
        <p className='underline font-black mt-10'>grid-cols-[250px_300px_1fr]:</p>
        <p className='text-right'>
          این کلاس باعث میشه تگ های چایلد بصورت سه تا سه تا آرایش بگیرن. یعنی اگه سه تا تگ دیگه بزارم صفحه با همین ساختا
          تکرار میشه توو ارتفاع
        </p>
      </main>

      {/* ------------------------------ Second ------------------------------ */}

      {/* <aside className='bg-gray-400 text-white p-4'>Sidebar (عرض ثابت 250px)</aside>
      <aside className='bg-blue-400 text-white p-4'>Sidebar (عرض ثابت 300)</aside>

      <main className='bg-gray-100 p-4'>
        <p>Main content (فضای باقی‌مانده)</p>
        <p className='underline font-black mt-10'>grid-cols-[250px_300px_1fr]:</p>
        <p className='text-right'>
          این کلاس باعث میشه تگ های چایلد بصورت سه تا سه تا آرایش بگیرن. یعنی اگه سه تا تگ دیگه بزارم صفحه با همین ساختا
          تکرار میشه توو ارتفاع
        </p>
      </main> */}

      {/* ------------------------------ Third ------------------------------ */}

      {/* <aside className='bg-gray-200 text-white p-4'>Sidebar (عرض ثابت 250px)</aside>
      <aside className='bg-blue-200 text-white p-4'>Sidebar (عرض ثابت 300)</aside>

      <main className='bg-gray-100 p-4'>
        <p>Main content (فضای باقی‌مانده)</p>
        <p className='underline font-black mt-10'>grid-cols-[250px_300px_1fr]:</p>
        <p className='text-right'>
          این کلاس باعث میشه تگ های چایلد بصورت سه تا سه تا آرایش بگیرن. یعنی اگه سه تا تگ دیگه بزارم صفحه با همین ساختا
          تکرار میشه توو ارتفاع
        </p>
      </main> */}
    </div>
  )
}
