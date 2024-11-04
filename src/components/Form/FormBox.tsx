import React from 'react'

import { FormOptions } from './structures/FormOptions'

import { classNames } from '@/utils'

interface FormParentProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export default function FormParent ({
  children,
  className = ''
}: FormParentProps) {
  return (
    <div
      className={classNames(
        'rounded-[15px] p-6 shadow-md',
        'text-head font-medium',
        FormOptions.classNames.border,
        FormOptions.colors.background,
        className
      )}
    >
      {children}
    </div>
  )
}
