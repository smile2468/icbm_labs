import { useFormHandler } from '@/hooks/FormHandler'

export default function Form ({
  children
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  const {
    handleSubmit,
    handleReset
  } = useFormHandler()

  return (
    <form
      className='space-y-8 mt-2 sm:pb-20 pb-16 text-head px-4'
      noValidate
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      {children}
    </form>
  )
}
