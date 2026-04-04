/** @format */

import { LI, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'

import { FirstStep, SecondStep, ThirdStep } from './components'

import { breadcrumb, steps, url, title } from './data'

export default function SqlInjection() {
  return (
    <PageLayout title='SQL Injection' breadcrumb={breadcrumb}>
      <UL title={title}>
        {steps.map(step => (
          <LI title={step.title} key={step.title}>
            {step.body}
          </LI>
        ))}
      </UL>

      <FirstStep url={url} />
      <SecondStep url={url} />
      <ThirdStep url={url} />
    </PageLayout>
  )
}
