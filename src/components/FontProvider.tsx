import localFont from 'next/font/local'

import { classNames } from '@/utils'

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export default function FontProvider ({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div
      id='font-provider_global'
      className={classNames(
        pretendard.className
      )}
    >
      {children}
    </div>
  )
}
