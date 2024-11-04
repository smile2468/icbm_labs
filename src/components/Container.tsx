import React from 'react'

import { classNames } from '@/utils'

export default function Container ({ children, className = '', maxWidth = 'max-w-[1800px]' }: { children: React.ReactNode | React.ReactNode[]; className?: string, maxWidth?: string }) {
  return (
    <div
      className={classNames(
        'container mx-auto',
        maxWidth,
        className
      )}
    >
      {children}
    </div>
  )
}
