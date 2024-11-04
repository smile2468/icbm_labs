import {
  useCallback,
  useMemo,
  useContext,
  useEffect
} from 'react'
import {
  SubmitErrorHandler,
  SubmitHandler
} from 'react-hook-form'

import {
  useContext as useFormContext
} from '@/components/Form/structures'

import { FormStateContext } from '@/structures/contexts'
import { FormSchemaType } from '@/structures/schema/FormSchema'

export const useFormHandler = () => {
  const ctx = useContext(FormStateContext)
  if (!ctx.state || !ctx.setState) throw new Error('FormStateContext.Provider does not exist on parent element.')
  const {
    state,
    setState
  } = ctx

  const {
    handleSubmit: createSubmitHandler,
    reset,
    setValue
  } = useFormContext()

  const onValidHandler = useCallback<SubmitHandler<FormSchemaType>>((data) => {
    console.log('OnSubmitHandler > OnValidHandler :: Called.')
    /**
     * api request
     */
    return data
  }, [])

  const onInvaildHandler = useCallback<SubmitErrorHandler<FormSchemaType>>((data) => {
    console.log('OnSubmitHandler > OnInavildHandler :: Called.')
    return data
  }, [])

  const onSubmitHandler = useCallback(() => {
    console.log('OnSubmitHandler :: Called.')
    return createSubmitHandler(onValidHandler, onInvaildHandler)
  }, [createSubmitHandler, onInvaildHandler, onValidHandler])
  const handleSubmit = useMemo(onSubmitHandler, [onSubmitHandler])

  useEffect(() => {
    console.log('FormHandler', state)
  }, [state, setState])

  const onResetHandler = useCallback(() => {
    return () => {
      console.log('OnResetHandler :: Called.')
      reset()
      setState({
        privacyPolicy: {
          checked: false,
          notChecked: false
        },
        radioInput: {
          selected: null,
          etcToText: null
        }
      })
      setValue('preferredJobKey', null)
      setValue('preferredJobContent', undefined)
    }
  }, [reset, setState, setValue])
  const handleReset = useMemo(onResetHandler, [onResetHandler])

  return {
    handleSubmit,
    handleReset
  }
}
