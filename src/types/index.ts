// export type Studies = Record<string, string | boolean>
export interface Studie {
  title: string
  date: string
  ongoing?: boolean
}

type ResearcherClassType = '휴학' | '연구실장' | '부연구실장' | '교수' | undefined /* undefined equals 연구원 */

export interface Researcher {
  name: string
  class?: ResearcherClassType
  note?: ResearcherClassType
  grade: number
  contribute?: string
  description?: string
  interest?: string[]
}

export interface Post {
  title: string
  description: string
  img: PostImage
}

export interface PostImage {
  url: string | null
}

// export type RadioKey = 'web_developer' | 'app_developer' | 'embeded_developer' | 'security_architect' | 'server_manager' | 'etc'

export interface RadioValueProps {
  text: string
  key: string
  textInput?: {
    state: boolean
    placeholder: string
  }
}

export interface FormStateValueProps {
  privacyPolicy: {
    checked: boolean,
    notChecked: boolean
  }
  radioInput: {
    selected: string | null,
    etcToText: string | null
  }
}
