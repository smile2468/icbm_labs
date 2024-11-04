import { RadioValueProps } from '@/types'

export const preferredJobs: RadioValueProps[] = [
  {
    text: '웹 개발자',
    key: 'web_developer'
  },
  {
    text: '앱 개발자',
    key: 'app_developer'
  },
  {
    text: '임베디드 개발자',
    key: 'embeded_developer'
  },
  {
    text: '보안 설계사',
    key: 'security_architect'
  },
  {
    text: '서버 관리자',
    key: 'server_manager'
  },
  {
    text: '기타',
    key: 'etc',
    textInput: {
      state: true,
      placeholder: '답변을 입력해주세요.'
    }
  }
]
