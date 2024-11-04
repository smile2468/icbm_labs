import Link from 'next/link'

import ICBMLogo from '@/public/logo-no-background.png'

import Container from './Container'
import Image from './Image'

import { classNames } from '@/utils'

export default function Navbar ({ revertState = false }: { revertState?: boolean }) {
  return (
    <header
      className={classNames(
        'sticky top-0 py-3 w-full h-fit backdrop-filter backdrop-blur-[5px] z-[10]',
        'duration-[250ms] ease-in-out font-medium',
        revertState
          ? 'text-white bg-head/40'
          : 'text-head bg-head/15'
      )}
    >
      <Container className='px-4'>
        <nav className='flex justify-between'>
          <div className='flex space-x-2'>
            <div className='self-center'>
              <Image src={ICBMLogo} alt='ICBM Labs' width={30} height={30} />
            </div>
            <p className='self-center text-base'>전주대학교 ICBM Labs</p>
          </div>
          <div className='md:flex space-x-4 hidden self-center'>
            <NavbarBtn to='#information' routeName='연구실 소개' revertState={revertState} />
            <NavbarBtn to='#researchers' routeName='연구원들' revertState={revertState} />
            <NavbarBtn to='#apply' routeName='지원하기' revertState={revertState} />
          </div>
          <div className='md:hidden block self-center px-2 py-2 rounded-[5px] hover:bg-head/10 duration-200 ease-in-out cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </div>
        </nav>
      </Container>
    </header>
  )
}

function NavbarBtn ({ routeName, to, revertState = false }: { routeName: string, to: string, revertState?: boolean }) {
  return (
    <Link href={to} replace className='self-center'>
      <div
        className={classNames(
          'text-base rounded-[8px] px-4 py-2',
          'duration-200 ease-in-out',
          revertState ? 'hover:bg-white/25' : 'hover:bg-head/25'
        )}
      >
        <p>{routeName}</p>
      </div>
    </Link>
  )
}
