import { useState } from 'react'

import { classNames } from '@/utils'

import { Researcher } from '@/types/DatasetTypes'

export default function ResearcherCard ({ researcher }: { researcher: Researcher }) {
  const [state, setState] = useState<boolean>(false)

  return <div
    id='main'
    className={classNames(
      'w-[400px] h-[210px] group relative cursor-pointer',
      'ease-in-out duration-[350ms]',
      '[transform-style:preserve-3d]',
      state ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
    )}
    onClick={() => setState(val => !val)}
  >
    <div
      id='front'
      className={classNames(
        'flex w-[400px] h-[210px] p-3 backface-hidden absolute drop-shadow-md'
      )}
    >
      <div className='w-1/2 h-full bg-white rounded-l-[20px]'>
        <div className={classNames(
          'w-full h-full text-white font-light',
          'bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-400',
          'rounded-l-[20px] rounded-tr-[50px]',
          'p-4 flex flex-col'
        )}>
          <div className='h-1/3'>
            <div
              className={classNames(
                'font-black text-2xl text-transparent tracking-wider'
              )}
              style={{
                WebkitTextStroke: '0.5px #fff',
                textShadow: '0 0 2px rgba(0,0,0,0), 0 0 4px rgba(0,0,0,0), 0 0 9px rgba(0,0,0,0), 0 0 5px rgba(255, 255, 255, .05), 0 0 5px rgba(255, 255, 255, .05), 0 0 5px rgba(255, 255, 255, .05), 0 0 5px rgba(255, 255, 255, .05), 0 0 5px rgba(255, 255, 255, .05)'
              }}
            >
              <span>ICBM Labs</span>
            </div>
          </div>
          <div className='h-full flex'>
            <div className='flex flex-col bg-[#e6e8ec]/10 rounded-[10px] w-fit h-fit p-[5px] scale-[.70] self-center'>
              <div className='flex w-full space-x-2'>
                <div className='bg-[#e6e8ec] h-[8px] w-[20px] rounded-tl-[5px]' />
                <div className='bg-[#e6e8ec] h-[8px] w-[20px] rounded-tr-[5px]' />
              </div>
              <div className='bg-[#e6e8ec] h-[8px] w-full my-2' />
              <div className='flex w-full space-x-2'>
                <div className='bg-[#e6e8ec] h-[8px] w-[20px] rounded-bl-[5px]' />
                <div className='bg-[#e6e8ec] h-[8px] w-[20px] rounded-br-[5px]' />
              </div>
            </div>
          </div>
          <div className='h-1/3 flex font-light text-sm'>
            <p className='self-end'>ICBM Labs Researcher Card</p>
          </div>
        </div>
      </div>
      <div className='w-1/2 h-full bg-gradient-to-tr from-indigo-600 via-purple-400 to-purple-200 rounded-r-[20px] relative'>
        <div className={classNames(
          'w-full h-full text-head font-light',
          'bg-white',
          'rounded-r-[20px] rounded-bl-[50px]',
          'p-4 font-light flex'
        )}>
          <div className='self-center h-full py-4'>
            <div className='text-sm self-end'>
              <p>{researcher.grade}학년 / {researcher.note?.includes('휴학') ? '휴학' : researcher.class ?? '연구원'}</p>
              <p className='font-bold text-xl -mt-1'>{researcher.name}</p>
            </div>
            <div className='h-full mt-3'>
              {
                (researcher.interest ?? researcher.contribute) && (
                  <div className='text-sm space-y-1'>
                    {researcher.contribute && <p className='font-medium'>{researcher.contribute}</p>}
                    {researcher.interest && <p>{researcher.interest.join(' / ')}</p>}
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className='bg-[url(/logo.svg)] w-[50px] h-[50px] bg-center bg-no-repeat absolute right-3 top-4 mx-auto my-auto opacity-100' />
      </div>
    </div>
    <div
      id='back'
      className={classNames(
        'flex w-[400px] h-[210px] p-3 backface-hidden absolute drop-shadow-md',
        '[transform:rotateY(180deg)]'
      )}
    >
      <div className='bg-white w-full h-full rounded-[20px] p-6 flex flex-col justify-center'>
        <h3 className='text-lg font-semibold mb-2'>연구원 정보</h3>
        <p className='text-sm mb-1'>학년: {researcher.grade}학년</p>
        <p className='text-sm mb-1'>분류: {researcher.note?.includes('휴학') ? '휴학' : researcher.class ?? '연구원'}</p>
        {researcher.contribute && <p className='text-sm mb-1'>기여: {researcher.contribute}</p>}
        {researcher.interest && <p className='text-sm'>관심사: {researcher.interest.join(', ')}</p>}
      </div>
    </div>
  </div>
}
