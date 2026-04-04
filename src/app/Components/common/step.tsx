/** @format */

type StepType = 'GOAL' | 'DESCRIPTION' | 'METHOD' | 'RESULT' | 'QUERY'

type PropTypes = {
  type: StepType
  children: React.ReactNode
}

const stepConfig: Record<
  StepType,
  {
    label: string
    className: string
  }
> = {
  GOAL: {
    label: 'هدف',
    className: 'bg-green-50 text-orange-700 ring-1 ring-green-200'
  },
  DESCRIPTION: {
    label: 'توضیح',
    className: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200'
  },
  METHOD: {
    label: 'روش انجام',
    className: 'bg-orange-50 text-green-700 ring-1 ring-orange-200'
  },
  RESULT: {
    label: 'نتیجه',
    className: 'bg-orange-50 text-purple-700 ring-1 ring-purple-200'
  },
  QUERY: {
    label: 'تحلیل کوئری',
    className: 'bg-orange-50 text-teal-700 ring-1 ring-teal-200'
  }
}

export default function Step({ children, type }: PropTypes) {
  const { label, className } = stepConfig[type]

  return (
    <div className={`rounded-lg px-4 py-3 my-2 ${className}`}>
      <p className='mb-1 font-bold opacity-80'>{label}</p>
      <div className='text-sm'>{children}</div>
    </div>
  )
}
