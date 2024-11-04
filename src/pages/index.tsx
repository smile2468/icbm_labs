import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import ICBMLogo from '@/public/logo-no-background.png'

import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from '@/components/Image'
import ResearcherCard from '@/components/_ResearcherCard'

import { classNames, createUniqueUUIDKey } from '@/utils'

import { researchers, posts } from '@/structures'

export default function Index () {
  const elementRef = useRef<HTMLDivElement>(null)
  const [revertState, setRevertState] = useState<boolean>(false)

  const notLeaveOfAbsenceResearchers = researchers.filter(el => !el.note)

  useEffect(() => {
    const ref = elementRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (element) => {
            if (element.intersectionRatio > 0) {
              setRevertState(true)
            } else {
              setRevertState(false)
            }
          }
        )
      }
    )

    if (ref) observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [])

  return <>
    <div className='min-h-screen flex flex-col items-center justify-center relative bg-dotted-pattern'>
      <div className='py-20 text-head px-2 z-10'>
        <Image src={ICBMLogo} alt='ICBM Labs' width={500} height={500} className='w-1/2 h-auto mb-8 mx-auto' />
        <h1 className='text-4xl font-extrabold mb-4 text-center'>ICBM Labs</h1>
        <div className='md:text-lg text-base text-center max-w-[500px] px-4 mx-auto'>
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
      <div
        className={classNames(
          'absolute inset-0 mix-blend-multiply w-full h-full',
          'bg-gradient-to-tr from-jju-steps-to via-jju-violet to-jju-green',
          'animate-[gradient_15s_ease-in-out_infinite] opacity-20'
        )}
        style={{
          backgroundSize: '300% 300%'
        }}
      />
    </div>
    <Navbar revertState={revertState} />
    <div id='information'>
      <div className='relative'>
        <Container>
          <div ref={elementRef} id='informationImageBanner' className='px-4 py-10 text-white'>
            <div className='w-full'>
              <div className='font-black lg:text-6xl text-4xl'>
                <div className='relative w-fit h-fit'>
                  <p className='px-2'>ICBM Labs,</p>
                  <div className='absolute bottom-[4px] w-full md:h-[15px] h-[10px] bg-jju-yellow z-[-1] opacity-50 -skew-x-6' />
                </div>
                <div className='relative w-fit h-fit md:-mt-2 -mt-1'>
                  <div className='flex px-2'>
                    <p>무슨 동아리인가요</p>
                    <p className='rotate-[10deg]'>?</p>
                  </div>
                  <div className='absolute bottom-[4px] w-full md:h-[15px] h-[10px] bg-jju-yellow z-[-1] opacity-50 -skew-x-6' />
                </div>
              </div>
              <div className='md:mt-10 mt-4 lg:text-lg text-base font-medium'>
                <p>ICBM Labs 는 사물인터넷 {'(IoT)'}, 인공지능 {'(AI)'}, 빅데이터 등</p>
                <p>여러가지 전문 분야에 접해보며, 직접 서비스까지 해볼 수 있으며,</p>
                <p>연구원들과 함께 프로젝트를 진행하고 함께 발전해나갈 수 있는 연구 동아리입니다.</p>
              </div>
            </div>
          </div>
        </Container>
        <BackgroundImageDiv />
      </div>
      <div>
        <Container>
          <div className='py-10 text-head space-y-10'>
            <div className='flex md:flex-row md:flex-nowrap flex-wrap md:justify-between px-4'>
              <div className='md:w-1/4 w-1/2 font-extrabold text-2xl flex justify-center p-1'>
                <div className='md:text-left text-center md:p-0 p-4 md:border-hidden border-[1px] border-placeholder/30 rounded-tl-[25px] md:w-fit w-full'>
                  <p>서버PC</p>
                  <p className='font-normal -mt-1'>2대</p>
                </div>
              </div>
              <div className='w-px h-[40px] bg-head/25 -skew-x-12 self-center md:block hidden' />
              <div className='md:w-1/4 w-1/2 font-extrabold text-2xl flex justify-center p-1'>
                <div className='md:text-left text-center md:p-0 p-4 md:border-hidden border-[1px] border-placeholder/30 rounded-tr-[25px] md:w-fit w-full'>
                  <p>연구원</p>
                  <p className='font-normal -mt-1'>
                    {
                      notLeaveOfAbsenceResearchers.length < 100
                        ? `${notLeaveOfAbsenceResearchers.length}명`
                        : <>100명<sup>+</sup></>
                    }
                  </p>
                </div>
              </div>
              <div className='w-px h-[40px] bg-head/25 -skew-x-12 self-center md:block hidden' />
              <div className='md:w-1/4 w-1/2 font-extrabold text-2xl flex justify-center p-1'>
                <div className='md:text-left text-center md:p-0 p-4 md:border-hidden border-[1px] border-placeholder/30 rounded-bl-[25px] md:w-fit w-full'>
                  <p>완료한 연구</p>
                  <p className='font-normal -mt-1'>5건</p>
                </div>
              </div>
              <div className='w-px h-[40px] bg-head/25 -skew-x-12 self-center md:block hidden' />
              <div className='md:w-1/4 w-1/2 font-extrabold text-2xl flex justify-center p-1'>
                <div className='md:text-left text-center md:p-0 p-4 md:border-hidden border-[1px] border-placeholder/30 rounded-br-[25px] md:w-fit w-full'>
                  <p>진행중인 연구</p>
                  <p className='font-normal -mt-1'>3건</p>
                </div>
              </div>
            </div>
            <div ref={elementRef} className='flex xl:flex-row flex-col justify-between xl:px-4 xl:space-x-4 space-x-0'>
              {
                posts.map((post, index) => (
                  <PostCard
                    key={createUniqueUUIDKey()}
                    index={index}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.img.url}
                  />
                ))
              }
            </div>
          </div>
        </Container>
      </div>
    </div>
    <div id='researchers' className='py-10'>
      <Container>
        <div className='px-4 text-head'>
          <div className='flex 2xl:flex-row flex-col w-full h-full 2xl:space-y-0 space-y-6'>
            <div className='font-black text-6xl 2xl:w-[400px] w-full'>
              <div className='relative w-fit h-fit mx-auto'>
                <p className='px-2'>연구원들을</p>
                <div className='absolute bottom-[4px] w-full md:h-[15px] h-[10px] bg-jju-violet z-[-1] opacity-50 -skew-x-6' />
              </div>
              <div className='relative w-fit h-fit -mt-2 mx-auto'>
                <div className='flex px-2'>
                  <p>소개합니다</p>
                  <p className='rotate-[10deg]'>!</p>
                </div>
                <div className='absolute bottom-[4px] w-full md:h-[15px] h-[10px] bg-jju-violet z-[-1] opacity-50 -skew-x-6' />
              </div>
            </div>
            <div className='w-px min-h-full bg-head/25 mx-10 2xl:block hidden' />
            <div className='h-px w-full bg-head/25 my-10 2xl:hidden block' />
            <div className='flex flex-wrap w-full 2xl:justify-normal justify-center'>
              {
                researchers.map((val) => (
                  <ResearcherCard key={createUniqueUUIDKey()} researcher={val} />
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div
      id='apply'
      className='rounded-t-[50px] border-t-[1px] border-placeholder/30'
      style={{
        background: 'linear-gradient(90deg, #ffff 20px, transparent 1%) center, linear-gradient(#fff 20px, transparent 1%) center, #D1906A',
        backgroundSize: '22px 22px'
      }}
    >
      <Container>
        <div className='px-4 py-10 text-head max-w-xl mx-auto'>
          <div
            className={classNames(
              'bg-radial-gradient',
              'rounded-[20px] shadow-md',
              'text-white text-center',
              'w-full p-5'
            )}
          >
            <h1 className='font-bold text-2xl'>함께 할 당신을 기다립니다.</h1>
            <div className='mt-4 font-medium md:text-base text-sm space-y-2'>
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
                  'mt-6 w-full rounded-[10px] py-2',
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

const BackgroundImageFilter = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: absolute;
  inset: 0;
  z-index: -2;
  backdrop-filter: blur(5px);
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&h=1080&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 50%;
  position: absolute;
  inset: 0;
  z-index: -3
`

function BackgroundImageDiv () {
  return (
    <>
      <BackgroundImageFilter />
      <BackgroundImage />
    </>
  )
}

function PostCard ({ index, title, description, imageUrl = null }: { index: number, title: string, description: string, imageUrl?: string | null }) {
  return <div className='xl:w-1/3 w-full p-10 relative text-white xl:hover:scale-105 xl:ease-in-out xl:duration-[250ms]'>
    <div className='flex'>
      <div className='flex bg-jju-yellow text-2xl font-black h-[55px] w-[55px] rounded-l-[10px] rounded-tr-[10px] justify-center text-head'>
        <p className='self-center'>{index + 1}</p>
      </div>
      <div className='relative w-fit h-[55px] xl:self-center self-end font-black text-[25px] flex flex-col'>
        <div className='flex px-4 mt-auto'>
          <p>{title}</p>
        </div>
        <div className='bg-jju-yellow rounded-r-[10px] h-[10px] w-full mt-auto' />
        {/* <div className='xl:block hidden absolute bottom-0 w-full h-[10px] bg-jju-yellow  rounded-r-[10px] self-end' /> */}
      </div>
    </div>
    <div className='mt-4 px-2 text-lg font-light'>
      <p>{description}</p>
    </div>
    {
      imageUrl && (
        <>
          <div
            // className='xl:hidden'
            className='xl:rounded-tl-[25px] xl:rounded-br-[25px]'
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,.6)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              inset: 0,
              zIndex: '-1',
              backdropFilter: 'blur(3px)'
            }}
          />
          <div
            // className='xl:hidden'
            className='xl:rounded-tl-[25px] xl:rounded-br-[25px]'
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              inset: 0,
              zIndex: '-2'
            }}
          />
        </>
      )
    }
  </div>
}
