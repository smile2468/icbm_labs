import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { classNames, useDragPreventionProps } from '@/utils'

export default function Index () {
  const applyCardRef = useRef<HTMLDivElement>(null)
  const gradientOverlayRef = useRef<HTMLDivElement>(null)
  const [animationState, setAnimationState] = useState<'running' | 'paused'>('paused')

  const dragPreventionProps = useDragPreventionProps()

  const onAnimationRunning = () => setAnimationState('running')
  const onAnimationPaused = () => setAnimationState('paused')

  useEffect(() => {
    const applyRef = applyCardRef.current
    const gradientRef = gradientOverlayRef.current

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        if (element.target.id === 'apply') {
          onAnimationRunning()
        } else {
          onAnimationPaused()
        }
      })
    }, { threshold: 0.1 })

    if (applyRef) observer.observe(applyRef)
    if (gradientRef) observer.observe(gradientRef)
    window.addEventListener('focus', onAnimationRunning)
    window.addEventListener('blur', onAnimationPaused)

    return () => {
      if (gradientRef) observer.unobserve(gradientRef)
      window.removeEventListener('focus', onAnimationRunning)
      window.removeEventListener('blur', onAnimationPaused)
    }
  }, [])

  return <>
    <div className='min-h-screen flex flex-col items-center justify-center relative bg-dotted-pattern'>
      <div className='py-20 text-head px-2 z-10'>
        <Image src='/logo-no-background.png' alt='ICBM Labs' width={500} height={500} className='w-1/2 h-auto mb-8 mx-auto' {...dragPreventionProps} />
        <h1 className='text-4xl font-bold mb-4 text-center'>ICBM Labs</h1>
        <div className='text-lg text-center max-w-[500px] px-4 mx-auto'>
          <p>전주대학교의 연구 동아리로</p>
          <p>사물인터넷, 빅데이터, 인공지능 등</p>
          <p>다양한 분야에서 연구하고 개발하며 실제 서비스까지 실천하는</p>
          <p className='font-bold'>{'"'}저희는 ICBM Labs 입니다.{'"'}</p>
        </div>
      </div>
      <div className='absolute bottom-4 flex flex-col items-center text-head z-10'>
        <span className='text-sm mb-1'>Scroll</span>
        <div className='animate-bounce'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </div>
      </div>
      {/* Gradient color overlay */}
      <div
        ref={gradientOverlayRef}
        id='gradientOverlay'
        className={classNames(
          'absolute inset-0 mix-blend-multiply w-full h-full',
          'bg-gradient-to-tr from-jju-steps-to/50 via-jju-violet/50 to-jju-green/50',
          'animate-[gradient_15s_ease-in-out_infinite]',
          animationState === 'running'
            ? '[animation-play-state:running]'
            : '[animation-play-state:paused]'
        )}
        style={{
          backgroundSize: '300% 300%'
        }}
      />
    </div>
    <Navbar />
    <div ref={applyCardRef} id='apply'>
      <Container>
        <div className='p-4 text-head max-w-xl mx-auto'>
          <div
            className={classNames(
              'bg-gradient-animation',
              'rounded-[20px] shadow-md',
              'text-white text-center',
              'w-full p-5',
              animationState === 'running'
                ? '[animation-play-state:running]'
                : '[animation-play-state:paused]'
            )}
          >
            <h1 className='font-bold text-2xl'>함께 할 당신을 기다립니다.</h1>
            <div className='mt-4 font-light space-y-2'>
              <div>
                <p>ICBM Labs 는 최첨단 기술을 연구하고 개발하는 곳으로,</p>
                <p>다양한 프로젝트를 통해 실무 경험을 쌓을 수 있습니다.</p>
              </div>
              <div>
                <p>또한, 연구원들과 함께 성장할 수 있는 기회를 제공합니다.</p>
                <p>당신의 열정과 아이디어를 실현할 수 있는 최고의 환경을 제공합니다.</p>
              </div>
              <div>
              </div>
            </div>
            <Link href='/form/apply' target='_blank'>
              <div
                className={classNames(
                  'mt-6 w-full rounded-[20px] py-2',
                  'text-head text-center font-semibold',
                  'bg-white hover:bg-gray-200 duration-300 ease-in-out'
                )}
              >
                <p>지원하기</p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
    <Footer />
  </>
}
