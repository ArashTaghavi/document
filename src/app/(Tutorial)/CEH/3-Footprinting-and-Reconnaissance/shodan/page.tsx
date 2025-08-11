/** @format */

import { Item, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='موتور جستجوی Shodan'>
      <UL>
        <LI simple={false}>
          این موتور جستجو دستگاه هایی که به اینترنت هستند رو سرچ میکنه. مثه روتر ها و دوربین های مدار بسته و...
        </LI>
      </UL>
    </PageTitle>
  )
}
