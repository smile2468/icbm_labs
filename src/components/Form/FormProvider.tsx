import React from 'react'
import {
  FormProvider as UseFormProvider,
  useForm
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormSchema } from '@/structures/schema/FormSchema'

interface FormProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export default function FormProvider ({
  children
}: FormProviderProps) {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    defaultValues: {
      studentId: '123456789',
      studentName: '홍길동',
      phoneNumber: '01012345678',
      email: 'example@example.com'
    }
  })

  return (
    <UseFormProvider {...methods}>
      {children}
    </UseFormProvider>
  )
}
