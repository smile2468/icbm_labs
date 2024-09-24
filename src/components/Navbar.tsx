import Link from 'next/link'
import Image from 'next/image'

import Container from './Container'

import { useDragPreventionProps } from '@/utils'

export default function Navbar () {
  const dragPreventionProps = useDragPreventionProps()

  return (
    <header className='sticky top-0 w-full py-3 h-fit text-head backdrop-blur-sm bg-head/25'>
      <Container className='px-4'>
        <nav className='flex justify-between'>
          <div className='flex space-x-2'>
            <div className='self-center'>
              <Image src='/logo-no-background.png' alt='ICBM Labs' width={30} height={30} {...dragPreventionProps} />
            </div>
            <p className='self-center text-base'>전주대학교 ICBM Labs</p>
          </div>
          <div className='lg:flex space-x-4 hidden self-center'>
            <NavbarBtn to='#information' routeName='연구실 소개' />
            <NavbarBtn to='#researchers' routeName='연구원들' />
            <NavbarBtn to='#apply' routeName='지원하기' />
          </div>
          <div className='lg:hidden block self-center px-2 py-2 rounded-[5px] hover:bg-head/10 duration-200 ease-in-out cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </div>
        </nav>
      </Container>
    </header>
  )
}

function NavbarBtn ({ routeName, to }: { routeName: string, to: string }) {
  return (
    <Link href={to} replace className='self-center'>
      <div className='text-head text-base rounded-[5px] px-4 py-2 hover:bg-head/10 duration-200 ease-in-out'>
        <p>{routeName}</p>
      </div>
    </Link>
  )
}
