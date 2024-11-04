import {
  useFormContext,
  type RegisterOptions,
  FieldPath
} from 'react-hook-form'

import { FormSchemaType } from '@/structures/schema/FormSchema'

type IdType = FieldPath<FormSchemaType>
type UseRegisterOptions = RegisterOptions<FormSchemaType, IdType>

export const useRegister = (id: IdType, options?: UseRegisterOptions) => {
  const { register } = useFormContext<FormSchemaType>()

  return register(
    id,
    Object.assign(RegisterOptions(id), options)
  )
}

const RegisterOptions = (id: IdType): UseRegisterOptions => {
  return {
    ...(id === 'studentId' && { valueAsNumber: false })
  }
}

export const useContext = () => useFormContext<FormSchemaType>()
