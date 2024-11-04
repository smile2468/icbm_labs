import {
  useEffect,
  useState
} from 'react'

import {
  useRegister,
  useContext
} from './structures'
import { FormOptions } from './structures/FormOptions'

import FormError from './FormError'

import {
  classNames,
  createUniqueUUIDKey
} from '@/utils'

import { FormSchemaType } from '@/structures/schema/FormSchema'

import { RadioValueProps } from '@/types'

interface FormRadioProps {
  id: keyof FormSchemaType,
  subId: keyof FormSchemaType
  values: RadioValueProps[]
  multiple?: boolean
}

export default function FormRadio ({
  id,
  subId,
  values,
  multiple = false
}: FormRadioProps) {
  const register = useRegister(id)
  const {
    formState: {
      errors
    },
    setValue,
    setError,
    clearErrors,
    watch
  } = useContext()

  const [radioValue, setRadioValue] = useState<RadioValueProps | null>(null)
  const [radioState, setRadioState] = useState<boolean>(false)

  useEffect(() => {
    const watcher = watch(id)
    console.log(watcher)
  }, [id, watch])

  const handleState = (value: RadioValueProps) => {
    return () => {
      if (radioState) {
        setRadioState(false)
        clearErrors(id)
      }
      if (radioValue === value) {
        setRadioValue(() => {
          if (!radioState) {
            setRadioState(true)
            setError(id, {
              message: '목표 직무를 선택해주세요.'
            })
          }
          return null
        })
      } else {
        setRadioValue(() => {
          if (radioState) {
            setRadioState(false)
            clearErrors(id)
          }
          return value
        })
      }
    }
  }

  useEffect(() => {
    setValue(id, radioValue?.key ?? null)
  }, [id, radioValue, setValue])

  return (
    <div className='space-y-4'>
      {
        values.map((value) => (
          <div key={createUniqueUUIDKey()}>
            <div
              className={classNames(
                'rounded-[5px] p-4',
                'border-[1px]',
                radioState || errors.preferredJobKey?.message
                  ? 'border-red-300 text-red-500 bg-red-100 outline-red-400'
                  : radioValue === value
                    ? classNames(
                      FormOptions.colors.highlight.border,
                      FormOptions.colors.highlight.text,
                      FormOptions.colors.highlight.background,
                      'bg-opacity-10'
                    )
                    : classNames(
                      FormOptions.colors.border,
                      'bg-white',
                      'text-head'
                    )
              )}
              onClick={handleState(value)}
            >
              <div className='flex space-x-4'>
                <span>{value.text}</span>
              </div>
              {
                value.textInput && (
                  <SubComponent
                    id={subId}
                    props={value}
                    radioValue={radioValue}
                  />
                )
              }
              <input
                type='checkbox'
                checked={radioValue === value}
                value={value.key}
                className='hidden h-px w-px'
                {...register}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

interface SubComponentProps {
  id: keyof FormSchemaType
  props: RadioValueProps
  radioValue: RadioValueProps | null
}

function SubComponent ({
  id,
  props,
  radioValue
}: SubComponentProps) {
  const register = useRegister(id)
  const {
    formState: {
      errors
    }
  } = useContext()

  return (
    <div
      className={classNames(
        radioValue === props ? 'block' : 'hidden'
      )}
    >
      <input
        type='text'
        className={classNames(
          'w-full rounded-[5px] p-2 mt-1 border-[1px]',
          // eslint-disable-next-line security/detect-object-injection
          errors?.[id]
            ? 'border-red-300 text-red-500 bg-red-100 outline-red-400'
            : classNames(
              'bg-white text-head',
              FormOptions.colors.border,
              FormOptions.colors.highlight.outline
            )
        )}
        placeholder={props.textInput?.placeholder ?? ''}
        onClick={(e) => e.stopPropagation()}
        {...register}
      />
      <FormError id={id} />
    </div>
  )
}
