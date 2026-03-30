/** @format */

import { PageLayout } from './Components/PageLayout/page-layout'

import { LinkItem } from './types'
import { Toc } from './Components/Toc'

export default function Page() {
  const links: LinkItem[] = [
    {
      title: 'هک و امنیت',
      href: 'security'
    }
  ]

  return (
    <PageLayout title='فهرست مستندات'>
      <Toc links={links} />
    </PageLayout>
  )
}
