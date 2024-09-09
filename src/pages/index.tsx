import Container from '@/components/Container'
import CountBanner from '@/components/CountBanner'
import ResearcherCard from '@/components/ResearcherCard'
import FixResearcherCard from '@/components/_ResearcherCard'

import { classNames, createUniqueUUIDKey } from '@/utils'

import { researchers, studies } from '@/dataset'
import { Studie } from '@/types/DatasetTypes'

export default function Main () {
  const researcherCount = researchers.length

  return <div className='tracking-tighter pb-10'>
    <div
      className={classNames(
        'relative w-full xl:py-40 py-20',
        'bg-no-repeat bg-cover bg-center',
        'bg-[url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format)]'
      )}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-400 mix-blend-multiply backdrop-blur-[8px]' />
      <Container className='flex h-full text-white backdrop-brightness-100 xl:px-0 px-4'>
        <div className='self-center text-lg font-light' style={{ WebkitBackdropFilter: 'brightness(1)' }}>
          <p className='font-black text-6xl'>ICBM Labs.</p>
          <div className='mt-1'>
            <p>여러분의 학습과 연구를 위해 힘쓰고 더욱 더 노력하는</p>
            <p>전주대학교 ICBM Labs. 동아리 입니다.</p>
          </div>
        </div>
      </Container>
      <div className='py-4 rounded-t-full bg-[#e6e8ec] absolute z-[1] bottom-0 left-0 right-0' />
    </div>
    <div className='w-full xl:px-0 px-4 mt-10'>
      <Container>
        <div className='text-head'>
          <div className='font-black text-4xl'>
            <p>ICBM Labs는</p>
            <p>이렇습니다.</p>
          </div>
          <div className='font-light mt-2 text-lg'>
            <p>고사양 서버 PC와 다양한 연구를 {researcherCount}명의 연구원과 함께합니다.</p>
          </div>
        </div>
        <CountBanner />
      </Container>
    </div>
    <Container className='mt-20'>
      <div className='flex xl:px-0 px-4'>
        <div className='flex text-white bg-gradient-to-tr from-indigo-500 via-indigo-700 to-purple-600 text-4xl font-black w-[400px] h-[450px] rounded-l-[40px] p-10'>
          <div className='text-left'>
            <p>ICBM Labs는</p>
            <p>이런 곳입니다.</p>
          </div>
        </div>
        <div className='text-head mt-2 px-10 text-2xl space-y-10'>
          <div>
            <div className='flex'>
              <div className='text-white flex justify-center font-black text-3xl bg-gradient-to-tr from-indigo-500/50 via-indigo-700/50 to-purple-600/75 w-[40px] h-[40px] rounded-tl-[10px] rounded-br-[10px] rounded-tr-[5px] rounded-bl-[5px]'>
                <p className='self-center'>1</p>
              </div>
              <p className='self-end font-bold ml-4'>함께 성장합니다.</p>
            </div>
            <div className='font-light text-lg mt-2'>
              <p>연구실 내 네트워킹을 통한 자료 및 정보를 {researcherCount}명의 연구원들과 공유하며 함께 성장합니다.</p>
              <p>또한, 연구실 내 프로젝트를 함께 기획하고 운영하며 다른 연구원과 내 노하우를 공유하며 또 다시 한번 성장해갑니다.</p>
            </div>
          </div>
          <div>
            <div className='flex'>
              <div className='text-white flex justify-center font-black text-3xl bg-gradient-to-tr from-indigo-500/50 via-indigo-700/50 to-purple-600/75 w-[40px] h-[40px] rounded-tl-[10px] rounded-br-[10px] rounded-tr-[5px] rounded-bl-[5px]'>
                <p className='self-center'>2</p>
              </div>
              <p className='self-end font-bold ml-4'>당신의 길잡이.</p>
            </div>
            <div className='font-light text-lg mt-2'>
              <p>교수님과의 상담 외 연구원간 대화를 통해 자신의 진로를 명확히 찾을 수 있는 활동을 진행하며</p>
              <p>진로가 같은 연구원과 서로 응원하고 도와주며 앞으로 더 나아가는 연구실입니다.</p>
            </div>
          </div>
          <div>
            <div className='flex'>
              <div className='text-white flex justify-center font-black text-3xl bg-gradient-to-tr from-indigo-500/50 via-indigo-700/50 to-purple-600/75 w-[40px] h-[40px] rounded-tl-[10px] rounded-br-[10px] rounded-tr-[5px] rounded-bl-[5px]'>
                <p className='self-center'>3</p>
              </div>
              <p className='self-end font-bold ml-4'>여러분을 지원합니다.</p>
            </div>
            <div className='font-light text-lg mt-2'>
              <p>고사양 서버 PC들을 통해 연구에 필요한 자원 또는 가상 환경 등을 제공하고 있으며,</p>
              <p>연구실에서 잠시 쉬어갈 수 있는 커피, 차 등 연구원들의 편의를 제공하고 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Container className='text-head mt-20'>
      <div className='font-black text-4xl xl:px-0 px-4'>
        <p>ICBM Labs의</p>
        <p>연구원들</p>
      </div>
      <div className='mt-2 flex flex-wrap'>
        {
          researchers.map((res) => {
            const key = createUniqueUUIDKey()
            return <ResearcherCard key={key} researcher={res} />
          })
        }
      </div>
    </Container>
    <div className='mt-20'>
      <div className='py-10 bg-white rounded-t-full w-full' />
      <div className='bg-white'>
        <Container className='text-head'>
          <div className='font-black text-4xl xl:px-0 px-4'>
            <p>ICBM Labs</p>
            <p>연구 현역</p>
          </div>
          <div className='mt-2'>
            {
              studies.map((res, index) => {
                const key1 = createUniqueUUIDKey()
                const key2 = createUniqueUUIDKey()
                return <>
                  <HistoryCard key={key1} studie={res} />
                  {studies.length !== index + 1 && <HistoryCardDivide key={key2} />}
                </>
              })
            }
          </div>
        </Container>
      </div>
      <div className='py-10 bg-white rounded-b-full w-full'>
      </div>
    </div>
    <Container className='text-head mt-20'>
      <div className='font-black text-4xl xl:px-0 px-4'>
        <p>ICBM Labs의</p>
        <p>연구원들</p>
      </div>
      <div className='mt-2 flex flex-wrap'>
        {
          researchers.map((res) => {
            const key = createUniqueUUIDKey()
            return <FixResearcherCard key={key} researcher={res} />
          })
        }
      </div>
    </Container>
  </div>
}

function HistoryCard ({ studie }: { studie: Studie }) {
  return <div className='flex w-fit'>
    <div className='w-[40px] self-center'>
      <div className='w-[30px] h-[30px] rounded-full border-[1px] border-gray-300 mx-auto flex bg-gradient-to-tr from-indigo-700 to-purple-500'>
      </div>
    </div>
    <div className='self-center ml-3 leading-none'>
      <div className='font-bold text-lg flex'>
        {
          studie.ongoing
            ? <div className='flex self-center font-light text-xs mr-2 space-x-1'>
              <div className='bg-orange-500 w-2 h-2 rounded-full self-center' />
              {/* <p className='self-center'>진행 중</p> */}
            </div>
            : <div className='flex self-center font-light text-xs mr-2 space-x-1'>
              <div className='bg-green-500 w-2 h-2 rounded-full self-center' />
              {/* <p className='self-center'>완료됨</p> */}
            </div>
        }
        <p>{studie.title}</p>
      </div>
      <p className='text-base'>{studie.date}</p>
    </div>
  </div>
}

function HistoryCardDivide () {
  return <div className='w-[40px] py-2'>
    <div className='w-[3px] h-[20px] bg-gray-200 rounded-full mx-auto' />
  </div>
}
