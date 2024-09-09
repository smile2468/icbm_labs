// export type Studies = Record<string, string | boolean>
export interface Studie {
  title: string
  date: string
  ongoing?: boolean
}

export interface Researcher {
  name: string
  class?: string
  note?: string
  grade: number
  contribute?: string
  description?: string
  interest?: string[]
}
