import { useContext } from './structures'

import { FormSchemaType } from '@/structures/schema/FormSchema'

interface FormErrorProps {
  id: keyof FormSchemaType
}

export default function FormError ({
  id
}: FormErrorProps) {
  const { formState: { errors } } = useContext()

  // eslint-disable-next-line security/detect-object-injection
  const error = errors?.[id]

  return (
    error && <p className='text-medium text-red-500 text-sm'>{error.message}</p>
  )
}
