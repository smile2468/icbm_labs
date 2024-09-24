import React from 'react'

import { classNames } from '@/utils'

export default function Container ({ children, className = '' }: { children: React.ReactNode | React.ReactNode[]; className?: string }) {
  return (
    <div
      className={classNames(
        'container mx-auto max-w-[1800px]',
        className
      )}
    >
      {children}
    </div>
  )
}
