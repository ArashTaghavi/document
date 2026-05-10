/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

const Security = () => {
  const links: LinkItem[] = [
    {
      title: 'اصطلاحات و مفاهیم',
      href: '/ai/chat-bot/terminology'
    },
    {
      title: 'قوانین پرامپت نویسی خوب',
      href: '/ai/chat-bot/prompt-engineering'
    }
  ]

  return (
    <PageLayout
      title='چت بات هوش مصنوعی'
      toc={links}
      breadcrumb={[
        { title: 'فهرست مستندات', href: '/' },
        { title: 'هوش مصنوعی', href: '/ai' }
      ]}
    />
  )
}
export default Security
