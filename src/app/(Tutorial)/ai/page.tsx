/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

const Security = () => {
  const links: LinkItem[] = [
    {
      title: 'مبانی هوش مصنوعی و یادگیری ماشین',
      href: '/ai/machine-learning-basic'
    },
    {
      title: 'چت بات هوش مصنوعی',
      href: '/ai/chat-bot'
    }
  ]

  return <PageLayout title='هوش مصنوعی' toc={links} breadcrumb={[{ title: 'فهرست مستندات', href: '/' }]} />
}
export default Security
