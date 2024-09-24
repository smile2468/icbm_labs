import Link from 'next/link'

import Container from './Container'

export default function Footer () {
  return (
    <footer className='relative w-full h-fit bg-head'>
      <Container>
        <div className='text-white px-4 py-10'>
          <div className='flex lg:flex-row flex-col lg:justify-between'>
            <div>
              <p className='font-bold text-4xl'>ICBM Labs</p>
              <div className='mt-2 font-light text-[15px]'>
                <p>ICBM Labs in Jeonju University Club, Grows together goes together.</p>
              </div>
              <div className='flex space-x-4 mt-6'>
                <Link href='https://github.com/Jj-ICBM-Labs' target='_blank' className='self-center'>
                  <svg viewBox='0 0 24 24' aria-hidden='true' className='size-6 fill-white hover:fill-jju-steps-to duration-200 ease-in-out'>
                    <path fill-rule='evenodd' clip-rule='evenodd' d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z'></path>
                  </svg>
                </Link>
                <Link href='https://www.jj.ac.kr/' target='_blank' className='self-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6 hover:text-jju-steps-to duration-200 ease-in-out'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5' />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='flex space-x-4 lg:self-end lg:mt-0 mt-6 font-light text-sm'>
              <Link href='/privacy-policy'>
                <span className='hover:text-jju-steps-to duration-200 ease-in-out'>개인정보처리방침</span>
              </Link>
            </div>
          </div>
          <div className='w-full h-px my-6 bg-white/25 rounded-full' />
          <p className='font-extralight text-sm'>&copy; 2024 ICBM Labs in Jeonju University. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
