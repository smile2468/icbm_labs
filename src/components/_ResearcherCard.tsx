import { useEffect, useState } from 'react'

import SymbolTextLogo from '@/public/symbol+text_logo.jpg'

import Image from './Image'

import { classNames, randomIntFromInterval } from '@/utils'

import { Researcher } from '@/types'

export default function ResearcherCard ({ researcher }: { researcher: Researcher }) {
  const [state, setState] = useState<boolean>(false)
  const [cvcNumber, setCvcNumber] = useState<string>('') // 무작위 숫자

  // Hydration Error / SSR 와 CSR 에서의 값이 달라 생기는 오류로 인해 useEffect 를 이용하여 DOM 이 로드 되었을때 useState 에 저장하는 식으로 해결함
  useEffect(() => {
    let num = ''

    for (let i = 0; i <= 2; i++) {
      num += String(randomIntFromInterval(0, 9))
    }

    setCvcNumber(num)
  }, [])

  return <div
    id='main'
    className={classNames(
      'sm:w-[410px] w-full h-[210px] group relative cursor-pointer',
      'ease-in-out duration-[250ms]',
      '[transform-style:preserve-3d]',
      state ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
    )}
    onClick={() => setState(val => !val)}
  >
    <div
      id='front'
      className={classNames(
        'flex sm:w-[410px] w-full h-[210px] p-2 backface-hidden absolute drop-shadow-md'
      )}
    >
      <div className='w-1/2 h-full bg-white rounded-l-[15px]'>
        <div
          className={classNames(
            'w-full h-full text-white font-light',
            //   'bg-gradient-to-tr from-jju-steps-from via-jju-blue to-jju-steps-to',
            'rounded-l-[15px] rounded-tr-[45px]',
            'p-4 flex flex-col'
          )}
          style={{
            background: 'radial-gradient(circle at right bottom, #02ABEE 0%, #0078AD 55%, #014B8C 100%)'
          }}
        >
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
          <div className='h-1/3 flex font-light text-xs'>
            <p className='self-end'>ICBM Labs Researcher Card</p>
          </div>
        </div>
      </div>
      <div className='w-1/2 h-full bg-gradient-to-tr from-jju-steps-to via-jju-steps-from to-jju-blue rounded-r-[20px] relative'>
        <div className={classNames(
          'w-full h-full text-head font-light',
          'bg-white',
          'rounded-r-[15px] rounded-bl-[45px]',
          'p-4 font-light flex'
        )}>
          <div className='self-center h-full py-4'>
            <div className='text-sm self-end'>
              <p>{researcher.grade}학년 / {researcher.class ?? '연구원'}</p>
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
        <Image alt='symbol+text_logo' src={SymbolTextLogo} className='w-[100px] h-[40px] bg-center bg-contain bg-no-repeat absolute right-4 bottom-4 mx-auto my-auto opacity-100' />
      </div>
    </div>
    <div
      id='back'
      className={classNames(
        'flex sm:w-[410px] w-full h-[210px] p-2 backface-hidden absolute',
        '[transform:rotateY(180deg)]'
      )}
    >
      <div className='bg-jju-blue/15 w-full h-full rounded-[15px] shadow-md'>
        <div>
          <div className='py-1 px-4 text-[10px] font-medium text-head uppercase'>
            <div className='flex justify-between'>
              <p>ICBM Labs Researcher Card</p>
              <p>Jeonju Univ.</p>
            </div>
          </div>
          <div className='w-full bg-black h-[40px]' />
          <div className='mt-2 px-3 space-y-[8px]'>
            <div className='text-sm text-head w-full font-medium'>
              <p className='text-[10px] uppercase'>Description</p>
              <div className='bg-[#ebebeb] w-full h-[50px] px-2 py-2 mt-[2px] rounded-[5px]'>
                <p>{researcher.description ?? ''}</p>
              </div>
            </div>
            <div className='flex space-x-4'>
              <div className='text-sm text-head w-fit font-medium'>
                <p className='text-[10px] uppercase'>Authorized Signature</p>
                <div className='bg-[#ebebeb] w-full h-fit px-2 py-1 mt-[2px] rounded-[5px]'>
                  <p className='tracking-[4px]'>{researcher.name}</p>
                </div>
              </div>
              <div className='text-sm text-head w-fit font-medium'>
                <p className='text-[10px] uppercase'>CVC</p>
                <div className='bg-[#ebebeb] w-full h-fit px-2 py-1 mt-[2px] rounded-[5px]'>
                  <p>{cvcNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
