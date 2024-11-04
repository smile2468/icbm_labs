import { createContext } from 'react'

import { FormStateValueProps } from '@/types'

interface FormStateContextProps {
  state: FormStateValueProps | null
  setState: React.Dispatch<React.SetStateAction<FormStateValueProps>> | null
}

export const FormStateContext = createContext<FormStateContextProps>({ state: null, setState: null })
