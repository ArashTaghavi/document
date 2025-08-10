/** @format */

import { cookies } from 'next/headers'
import { Suspense } from 'react'

 

// بخش استاتیک جدا
function StaticContent() {
  return <p>این بخش استاتیک است و همیشه سریع رندر می‌شود</p>
}

// بخش داینامیک با تاخیر
async function DynamicContent() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value || 'No session'
  return <p>Session ID (داینامیک): {session}</p>
}

export default async function Page() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Partial Prerendering Demo</h1>
      <p>
        Partial Prerendering is <b>{experimental_ppr ? 'Enabled' : 'Disabled'}</b>
      </p>

      {/* بخش استاتیک بدون تاخیر */}
      <StaticContent />

      {/* بخش داینامیک داخل Suspense */}
      <Suspense fallback={<p>Loading dynamic content...</p>}>
        <DynamicContent />
      </Suspense>
    </div>
  )
}
