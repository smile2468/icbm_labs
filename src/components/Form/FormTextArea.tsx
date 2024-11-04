import React from 'react'

import { useContext } from './structures'
import { FormOptions } from './structures/FormOptions'

import { classNames } from '@/utils'

import { FormSchemaType } from '@/structures/schema/FormSchema'

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: keyof FormSchemaType
  placeholder?: string
}

export default function FormTextArea ({
  id,
  placeholder = '답변을 입력해주세요.',
  ...props
}: FormTextAreaProps) {
  const { formState: { errors } } = useContext()

  return (
    <textarea
      className={classNames(
        'w-full h-[120px] p-3 rounded-[5px]',
        'overflow-y-auto resize-none',
        'font-medium',
        // eslint-disable-next-line security/detect-object-injection
        errors?.[id]
          ? 'border-red-300 text-red-500 bg-red-100 outline-red-400'
          : classNames(
            'bg-white',
            FormOptions.classNames.border,
            FormOptions.colors.highlight.outline
          )
      )}
      maxLength={300}
      placeholder={placeholder}
      {...props}
    />
  )
}
