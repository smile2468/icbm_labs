import {
  Researcher,
  Post
} from '@/types'

export const privacyPolicy: { [key: string]: string } = {
  managerName: '홍길동',
  contactNumber: '010-1234-5678',
  contactEmail: 'privacy@icbm.jj.ac.kr'
}

export const posts: Post[] = [
  {
    title: '여러분을 지원합니다',
    description: '고사양 서버 PC들을 통해 여러분의 연구에서 필요한 자원 또는 가상 환경을 제공하며, 연구실 지원 비용을 통해 간단한 다과 및 커피등 연구원들에 대한 편의를 제공합니다.',
    img: {
      url: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  {
    title: '당신의 길잡이',
    description: '교수님간 상담 외 연구원간 대화를 통해 자신의 진로를 명확히 찾아 나아가는 활동을 하며 꿈이 맞는 연구원과 서로 응원해주며 앞으로 나아가는 연구실입니다.',
    img: {
      url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  {
    title: '함께 성장합니다',
    description: '연구실 내 네트워킹을 통해 자료 및 정보를 공유하며 함께 성장합니다. 또한 연구실 내 프로젝트를 기획하고 운영하며 연구실 내 노하우를 공유하며 또 한번 성장합니다.',
    img: {
      url: '/Study.jpg'
    }
  }
]

export const researchers: Researcher[] = [
  {
    name: '박지혁',
    grade: 4,
    contribute: '캡트톤 디자인 참여',
    interest: ['웹', 'DevOps'],
    description: '화이팅'
  },
  {
    name: '염휘건',
    grade: 4,
    contribute: '캡트톤 디자인 참여',
    interest: ['웹', '앱'],
    description: '안녕하세요'
  },
  {
    name: '이강일',
    grade: 4,
    contribute: '캡트톤 디자인 참여',
    interest: ['DevOps', '서버', '데이터']
  },
  {
    name: '유용찬',
    grade: 4,
    contribute: '캡트톤 디자인 참여',
    interest: ['웹', '앱', '게임'],
    description: '게임개발자(기획자)를 목표로 공부중인 Java를 주력으로 하는 예비 개발자'
  },
  {
    name: '정기태',
    grade: 4,
    contribute: '캡트톤 디자인 참여'
  },
  {
    name: '유현빈',
    grade: 4,
    contribute: '캡트톤 디자인 참여'
  },
  {
    name: '한재성',
    grade: 4,
    contribute: '캡트톤 디자인 참여',
    interest: ['웹', '게임']
  },
  {
    name: '추승우',
    grade: 4,
    contribute: '캡트톤 디자인 참여'
  },
  {
    name: '성민우',
    class: '연구실장',
    interest: ['웹', '보안', '서버'],
    grade: 3,
    contribute: '웹 개발',
    description: '코이의 법칙'
  },
  {
    name: '이기성',
    grade: 3,
    class: '부연구실장',
    interest: ['창업', '기획', '건축'],
    description: '👍👍🏻👍🏼👍🏽👍🏾👍🏿 굿굿굿굿굿굿!'
  },
  {
    name: '송인섭',
    grade: 3,
    interest: ['보안', '인공지능', '데이터'],
    description: '안녕하세요. 저는 창업을 하고싶은 컴퓨터공학과 송인섭입니다.'
  },
  {
    name: '김규륭',
    grade: 3,
    note: '휴학'
  },
  {
    name: '강민경',
    grade: 3,
    interest: ['웹', '보안', '데이터']
  },
  {
    name: '안효선',
    grade: 3,
    interest: ['웹', '앱', '데이터', '게임']
  },
  {
    name: '윤시훈',
    grade: 2
  },
  {
    name: '장나정',
    grade: 2,
    note: '휴학'
  },
  {
    name: '이승준',
    grade: 2,
    interest: ['게임']
  },
  {
    name: '양수회',
    grade: 2,
    interest: ['앱', '웹', '서버'],
    description: '👍👍'
  },
  {
    name: '최민서',
    grade: 1,
    description: '깍두기 / 랩장 희망자'
  },
  {
    name: '김유나',
    grade: 1,
    interest: ['인공지능']
  },
  {
    name: '신민주',
    grade: 1,
    interest: ['서버'],
    description: '.'
  },
  {
    name: '이수현',
    grade: 1,
    description: '병아리'
  },
  {
    name: '김윤아',
    grade: 1,
    interest: ['서버', '인공지능', '데이터'],
    description: '열심히 노력하는 연구원이 되도록 하겠습니다.'
  },
  {
    name: '이현정',
    grade: 1,
    interest: ['웹', '앱', '임베디드', '보안', '서버', '인공지능', '데이터', '게임'],
    description: '여러 분야에 관심이 많고, 열정도 많은 연구원 입니다 🙂'
  },
  {
    name: '김준영',
    grade: 1,
    interest: ['서버', '데이터'],
    description: '다양한 지식들을 통해서 연구원들에게 도움이 될 수 있는 사람.'
  },
  {
    name: '이창록',
    grade: 1,
    interest: ['게임'],
    description: '짝수반 1학년 이창록입니다.'
  },
  {
    name: '김성현',
    grade: 1,
    interest: ['앱']
  },
  {
    name: '조현우',
    grade: 1
  },
  {
    name: '오현준',
    grade: 1,
    interest: ['웹', '보안'],
    description: '안녕하세요 오현준입니다'
  }
]
