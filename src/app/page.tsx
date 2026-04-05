/** @format */

import { PageLayout } from './Components/PageLayout/page-layout'

import { LinkItem } from './types'
import { Toc } from './Components/Toc'

export default function Page() {
  const links: LinkItem[] = [
    {
      title: 'هک و امنیت',
      href: 'security'
    },
    {
      title: 'هنر شی گرایی',
      href: 'oop'
    }
  ]

  return (
    <PageLayout title='فهرست مستندات'>
      <Toc links={links} />
    </PageLayout>
  )
}
