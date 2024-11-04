import { FormOptions } from './structures/FormOptions'

import { classNames } from '@/utils'

interface FormTitleProps {
  id: string | number
  title: string
  required?: boolean
}

export default function FormTitle ({
  id,
  title,
  required = false
}: FormTitleProps) {
  return (
    <div className='flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-2'>
      <div
        className={classNames(
          'w-[35px] h-[35px] text-white',
          'flex items-center justify-center',
          'sm:text-2xl text-lg sm:font-black font-semibold',
          'rounded-t-[6px] rounded-l-[6px]',
          FormOptions.colors.highlight.background
        )}
      >
        <p>{id}</p>
      </div>
      <p className='text-xl font-extrabold sm:self-end'>{title} {required && <sup className='text-red-500'>*</sup>}</p>
    </div>
  )
}
