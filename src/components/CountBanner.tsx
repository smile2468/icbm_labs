import {
  ComputerDesktopIcon,
  UsersIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid'

import { classNames } from '@/utils'

import { studies, researchers } from '@/dataset'

type CardTypes = 'pc' | 'researchers' | 'ongoing_studies' | 'complete_studies'

interface DataValue {
  icon: React.ReactNode
  text: string
  num: number
  suffix: string | null
  more?: boolean
}

const getICBMCountCardData = (type: CardTypes, filter = true): DataValue => {
  const className = 'w-8 h-8'
  if (type === 'pc') {
    return {
      icon: <ComputerDesktopIcon className={className} />,
      text: '서버 PC',
      num: 2,
      suffix: '대'
    }
  }
  if (type === 'researchers') {
    const absenceFilterResearchers = researchers.filter(el => filter ? !el.note?.includes('휴학') : true).length
    return {
      icon: <UsersIcon className={className} />,
      text: '연구원',
      num: absenceFilterResearchers > 100 ? 100 : absenceFilterResearchers,
      more: absenceFilterResearchers > 100,
      suffix: '명'
    }
  }
  if (type === 'ongoing_studies') {
    const onGoingStudies = studies.filter(el => el.ongoing).length
    return {
      icon: <DocumentTextIcon className={className} />,
      text: '진행중인 연구',
      num: onGoingStudies > 10 ? 10 : onGoingStudies,
      more: onGoingStudies > 10,
      suffix: '개'
    }
  }
  if (type === 'complete_studies') {
    const completeStudies = studies.filter(el => !el.ongoing).length
    return {
      icon: <DocumentCheckIcon className={className} />,
      text: '완료한 연구',
      num: completeStudies > 10 ? 10 : completeStudies,
      more: completeStudies > 10,
      suffix: '개'
    }
  }
  return {
    icon: <QuestionMarkCircleIcon className={className} />,
    text: '알 수 없음',
    num: 0,
    suffix: null
  }
}

function Card ({ type }: { type: CardTypes }) {
  const { icon, text, num, suffix, more } = getICBMCountCardData(type, !(type === 'researchers'))

  return <div className='flex font-black text-3xl tracking-tighter leading-tight w-fit space-x-4'>
    {icon}
    <div>
      <p>{num}{suffix}{more && <span>+</span>}</p>
      <p className='font-normal text-xl'>{text}</p>
    </div>
  </div>
}

export default function CountBanner () {
  return <div
    className={classNames(
      'w-full mt-10',
      'text-head',
      'flex justify-between'
    )}
  >
    {
      ['pc', 'researchers', 'ongoing_studies', 'complete_studies'].map((element, index) => (
        <Card
          key={`ICBMCountCard_${index}`}
          type={element as CardTypes}
        />
      ))
    }
  </div>
}
