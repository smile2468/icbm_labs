import { useRegister, useContext } from './structures'
import { FormOptions } from './structures/FormOptions'

import { classNames } from '@/utils'

import { FormSchemaType } from '@/structures/schema/FormSchema'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: keyof FormSchemaType
  placeholder?: string
  className?: string
}

export default function FormInput ({
  id,
  type = 'text',
  placeholder = undefined,
  className = '',
  ...props
}: FormInputProps) {
  const { formState: { errors } } = useContext()

  return (
    <input
      type={type}
      className={classNames(
        'w-full p-3 rounded-[5px] border-[1px]',
        // eslint-disable-next-line security/detect-object-injection
        errors?.[id]
          ? 'border-red-300 text-red-500 bg-red-100 outline-red-400'
          : classNames(
            'bg-white',
            FormOptions.colors.border,
            FormOptions.colors.highlight.outline
          ),
        className
      )}
      placeholder={placeholder}
      {...useRegister(id)}
      {...props}
    />
  )
}
