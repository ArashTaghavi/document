/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

const Security = () => {
  const links: LinkItem[] = [
    {
      title: 'اصطلاحات و مفاهیم',
      href: '/ai/machine-learning-basic/terminology'
    }
  ]

  return (
    <PageLayout
      title='مبانی هوش مصنوعی و یادگیری ماشین'
      toc={links}
      breadcrumb={[
        { title: 'فهرست مستندات', href: '/' },
        { title: 'هوش مصنوعی', href: '/ai' }
      ]}
    />
  )
}
export default Security
