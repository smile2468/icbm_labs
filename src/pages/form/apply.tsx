import React, {
  useState,
  useMemo,
  useCallback
} from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { Transition } from '@headlessui/react'
import {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormRegister
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Container from '@/components/Container'

import { classNames } from '@/utils'

import {
  FormSchema,
  FormSchemaType
} from '@/structures/schema/FormSchema'

/**
 * 신청서-1 : https://form.naver.com/response/RXRZ0rN0dH-VPKXKtRsjiw
 * 신청서-2 : https://form.naver.com/response/cOombZE4C0lX45OoHfRgQg
 * 추방사유 : https://cistusf.notion.site/ICBM-1bb72f9e5dcc4c99b660f8573f9c8dec
 */

const FormOptions = {
  colors: {
    background: 'bg-lightGrey',
    border: 'border-placeholder/30',
    highlight: {
      text: 'text-jju-blue',
      background: 'bg-jju-blue',
      outline: 'outline-jju-blue',
      border: 'border-jju-blue'
    }
  },
  classNames: {
    border: 'border-[1px] border-placeholder/30'
  }
}

export default function FormApply () {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [check, setCheck] = useState<boolean>(false)
  const [privacyAgreementState, setPrivacyAgreementState] = useState<boolean>(false)

  const {
    register,
    handleSubmit: createSubmitHandler,
    setValue,
    reset,
    formState: {
      errors: formErrors,
      isSubmitting
    }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    defaultValues: {
      studentId: '123456789',
      studentName: '홍길동',
      phoneNumber: '01012345678',
      email: 'example@example.com'
    }
  })

  const handleCautionMenu = () => setOpen((state) => !state)
  const gotoPrivacyPolicyPage = () => router.push('/privacy-policy')

  // onSubmitHandler 에서 event.preventDefault() 가 없으면, query string 으로 Form 데이터를 넘기게 되어 페이지 새로고침 됨
  // () => () => void 형식으므로 2번째 Callback 에 event 인자를 넣어 handleSubmit 함수가 실행되었을때 form(219번째 줄) 의 onSubmiit action  을 막음
  const checkPrivacyPolicy = useCallback(() => {
    return (event: React.SyntheticEvent) => {
      event.preventDefault()
      if (!privacyAgreementState) setPrivacyAgreementState(true)
    }
  }, [privacyAgreementState])

  const onValid = useCallback<SubmitHandler<FormSchemaType>>((data) => {
    /**
     * 문제 없을시 ...
     */
    console.log('OnValid', data)
    return data
  }, [])

  const onInvaild = useCallback<SubmitErrorHandler<FormSchemaType>>((data) => {
    /**
     * 문제 있을시 ...
     */
    console.log('OnInvaild', data)
    return data
  }, [])

  // 설문 제출하기
  const onSubmitHandler = useCallback(() => {
    if (!check) return checkPrivacyPolicy()
    return createSubmitHandler(onValid, onInvaild)
  }, [check, createSubmitHandler, onInvaild, onValid, checkPrivacyPolicy])
  const handleSubmit = useMemo(onSubmitHandler, [onSubmitHandler])

  // 입력란 전체 초기화
  const onResetHandler = useCallback(() => {
    reset()
    setValue('privacyAgreement', false)
    setCheck(false)
    setPrivacyAgreementState(false)
    return () => {}
  }, [reset, setValue, setCheck, setPrivacyAgreementState])
  const handleReset = useMemo(onResetHandler, [onResetHandler])

  return (
    <>
      <NextSeo title='가입신청' />
      <Container maxWidth='max-w-[1000px]'>
        <div className='px-4 py-10 w-full text-head space-y-10'>
          <div
            id='survey-container'
            className={classNames(
              'rounded-[15px] shadow-md',
              FormOptions.classNames.border
            )}
          >
            <div
              className={classNames(
                'w-full h-[10px] rounded-t-[15px]',
                FormOptions.colors.highlight.background
              )}
            />
            <div
              className={classNames(
                'rounded-b-[15px] p-10',
                FormOptions.colors.background
              )}
            >
              <div className='flex sm:flex-row flex-col sm:justify-between sm:space-y-0 space-y-4'>
                <div className='self-start'>
                  <p className='font-black text-2xl'>ICBM Labs 연구 동아리 가입 신청서</p>
                  <div className='mt-1 font-medium text-sm'>
                    <p >ICBM Labs 연구실은 당신을 기다리고 있습니다!</p>
                  </div>
                </div>
                <div className='sm:block flex sm:space-x-0 space-x-4 font-medium text-sm sm:self-center'>
                  <p>· 모집인원 : 제한 없음</p>
                  <p>· 학년제한 : 제한 없음</p>
                  <p>· 모집기간 : 제한 없음</p>
                </div>
              </div>
              <div className='h-px w-full bg-head/10 my-10' />
              <div className='space-y-10'>
                <div>
                  <p className='font-extrabold text-xl'>모집대상</p>
                  <div className='mt-2 font-medium'>
                    <p>전주대학교 ICBM Labs 연구 동아리에 가입을 희망하는 컴퓨터공학과 재학생</p>
                  </div>
                </div>
                <div>
                  <p className='font-extrabold text-xl'>규칙사항</p>
                  <div className='mt-2 font-medium'>
                    <p>ICBM Labs 연구실에 대한 규칙은 아래를 눌러 확인하실 수 있습니다.</p>
                    <p>면접 보시기 전 잘 숙지하시기 바랍니다.</p>
                  </div>
                  <div id='caution-menu'>
                    <div
                      className={classNames(
                        'w-full bg-white font-medium py-2 px-4 text-sm mt-2',
                        open ? 'rounded-t-[5px]' : 'rounded-[5px]',
                        'duration-[250ms] ease-in-out',
                        FormOptions.colors.border,
                        open ? 'border-t-[1px] border-l-[1px] border-r-[1px]' : 'border-[1px]',
                        'cursor-pointer'
                      )}
                      onClick={handleCautionMenu}
                    >
                      <div className='flex justify-between'>
                        <p className='self-center'>연구실 규칙 확인하기</p>
                        <div
                          className={classNames(
                            'self-center',
                            open ? 'rotate-[0deg]' : 'rotate-[180deg]',
                            'duration-[250ms] ease-in-out'
                          )}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-4'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {
                      open && <div className='h-px w-full bg-head/10' />
                    }
                    <CautionList open={open} />
                  </div>
                </div>
                <div>
                  <p className='font-extrabold text-xl'>주의사항</p>
                  <div className='mt-2 font-medium space-y-6'>
                    <div className='flex space-x-2'>
                      <p className='font-bold text-base self-start'>1.</p>
                      <div className='self-center'>
                        <p>ICBM Labs 연구실이 아닌 타 연구실에 가입이 되어있으신 학우분께서는<br />기존 연구실의 연구실장님과 상의 후 탈퇴신청을 한 후 ICBM Labs 연구실에 가입 신청해주셔야 합니다.</p>
                        <p className='text-sm font-semibold text-red-500'>다중 연구실 가입이 불가하여 불가피하게 제한되고 있습니다. 양해 부타드리겠습니다.</p>
                      </div>
                    </div>
                    <div className='flex space-x-2'>
                      <p className='font-bold text-base self-start'>2.</p>
                      <div className='self-center'>
                        <p>연구실 내 일부 좌석은 지원하지 않을 수 있습니다. {'(미사용, 사용하지 않는 좌석)'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='servey-container__form'>
            <div className='font-semibold w-full text-right text-sm'>
              <p className='text-red-500'>* 는 답변 필수란입니다.</p>
            </div>
            <form
              id='form-container'
              className='space-y-8 mt-2 sm:pb-20 pb-16'
              onSubmit={handleSubmit}
              onReset={handleReset}
              noValidate
            >
              <FormContainer>
                <FormTitle
                  index='1'
                  title='개인정보 수집 및 이용 동의'
                  required
                />
                <div className='mt-2 font-medium'>
                  <p>신청자 분의 개인정보를 아래와 같이 수집하고 활용하고자 합니다.</p>
                  <p>동의를 거부하실 경우 해당 신청서를 진행하실 수 없습니다.</p>
                  <p>자세한 내용은 <span onClick={gotoPrivacyPolicyPage} className={classNames('font-bold cursor-pointer', FormOptions.colors.background)}>{'"여기"'}</span>에서 확인가능합니다.</p>
                </div>
                <div className='mt-4 font-medium space-y-4'>
                  <div
                    className={classNames(
                      'bg-white p-4 rounded-[5px] text-sm font-semibold space-y-4',
                      FormOptions.classNames.border
                    )}
                  >
                    <div className='flex sm:flex-row flex-col sm:justify-betwee sm:w-2/3 w-full sm:space-y-0 space-y-1'>
                      <p className={classNames('sm:w-1/2 w-full', FormOptions.colors.highlight.text)}>수집하는 개인정보 항목</p>
                      <p className='sm:w-1/2 w-full text-left'>이름, 전화번호, 이메일, 학번</p>
                    </div>
                    <div className='h-px w-full bg-head/10' />
                    <div className='flex sm:flex-row flex-col sm:justify-betwee sm:w-2/3 w-full sm:space-y-0 space-y-1'>
                      <p className={classNames('sm:w-1/2 w-full', FormOptions.colors.highlight.text)}>수집 및 이용 목적</p>
                      <p className='sm:w-1/2 w-full text-left'>신청 결과 전달 및 면접 준비</p>
                    </div>
                    <div className='h-px w-full bg-head/10' />
                    <div className='flex sm:flex-row flex-col sm:justify-betwee sm:w-2/3 w-full sm:space-y-0 space-y-1'>
                      <p className={classNames('sm:w-1/2 w-full', FormOptions.colors.highlight.text)}>보유 및 이용기간</p>
                      <p className='sm:w-1/2 w-full text-left'>신청일로부터 1개월 후</p>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      'p-4 border-[1px] rounded-[5px] w-full',
                      'duration-[250ms] ease-in-out cursor-pointer sm:text-base text-sm',
                      privacyAgreementState
                        ? 'border-red-300 text-red-500 bg-red-100 outline-red-400'
                        : check
                          ? 'border-green-500 text-green-700 bg-green-300/25 outline-green-400'
                          : classNames(
                            'text-head bg-head/5',
                            FormOptions.colors.border,
                            FormOptions.colors.highlight.outline
                          )
                    )}
                    onClick={() => {
                      setCheck(state => {
                        const val = !state
                        setValue('privacyAgreement', val)
                        setPrivacyAgreementState(!val)
                        return val
                      })
                    }}
                  >
                    <div className='flex justify-center'>
                      <div className='flex space-x-2'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={4} stroke='currentColor' className='size-4 self-center'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                        </svg>
                        <p className='self-center'>개인정보 수집 및 활용에 동의합니다.</p>
                      </div>
                    </div>
                  </div>
                  {
                    privacyAgreementState && (
                      <label className='text-medium text-red-500 text-sm'>개인정보 수집 및 활용에 동의해야합니다.</label>
                    )
                  }
                </div>
              </FormContainer>
              <FormContainer>
                <FormTitle
                  index='2'
                  title='개인정보 작성'
                  required
                />
                <div className='mt-2 font-medium'>
                  <p>신청자님의 개인정보를 입력해주세요.</p>
                </div>
                <div className='mt-4 font-medium space-y-4'>
                  <div className='flex sm:flex-row flex-col justify-between sm:space-x-4 sm:space-y-0 space-x-0 space-y-4'>
                    <FormInput
                      id='studentName'
                      type='text'
                      label='이름'
                      placeholder='이름을 입력해주세요.'
                      errors={formErrors}
                      register={register}
                    />
                    <FormInput
                      id='phoneNumber'
                      type='tel'
                      label='전화번호'
                      placeholder='전화번호를 입력해주세요 (- 없이)'
                      errors={formErrors}
                      register={register}
                      // onChange={(event) => {
                      //   // 휴대폰 번호 입력시 자동으로 중간에 하이픈 넣어줌, 하지만 Zod onChange 모드에서 검증되지 않음, Submit 해야만 검증값 나옴
                      //   event.target.value = event.target.value
                      //     .replace(/[^0-9]/g, '')
                      //     .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')
                      // }}
                    />
                  </div>
                  <div className='flex sm:flex-row flex-col justify-between sm:space-x-4 sm:space-y-0 space-x-0 space-y-4'>
                    <FormInput
                      id='studentId'
                      type='string'
                      label='학번'
                      placeholder='학번을 입력해주세요.'
                      errors={formErrors}
                      register={register}
                      maxLength={9}
                    />
                    <FormInput
                      id='email'
                      type='email'
                      label='이메일'
                      placeholder='이메일을 입력해주세요.'
                      errors={formErrors}
                      register={register}
                    />
                  </div>
                  <FormActionBtns isSubmitting={isSubmitting} />
                </div>
              </FormContainer>
              <div id='input-area' className='space-y-8'>
                <FormContainer>
                  <FormRadioInput
                    id='preferredJob'
                    label='test'
                    errors={formErrors}
                    register={register}
                  />
                </FormContainer>
                <FormTextareaComponent
                  index='3'
                  title='연구 동아리란?'
                  description='신청자님께서 생각하는 연구 동아리란 무엇인지, 신청자님의 역할과 함께일 때 기대 효과를 적어주세요.'
                />
                <FormTextareaComponent
                  index='4'
                  title='연구실에 바라는 점'
                  description='연구실에 가입하시게 된다면 바라는 점, 바라는 혜택 등 다양하게 적어주세요.'
                />
                <FormTextareaComponent
                  index='5'
                  title='목표 직무'
                  description='신청자님께서 원하시는 목표 직무를 선택하여주세요.'
                />
                <FormTextareaComponent
                  index='6'
                  title='사용 가능하신 프로그래밍 언어'
                  description='신청자님께서 사용 가능하신 프로그래밍 언어를 모두 적어주세요.'
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

function FormContainer ({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <div
      className={classNames(
        'rounded-[15px] p-6 shadow-md',
        FormOptions.classNames.border,
        FormOptions.colors.background
      )}
    >
      {children}
    </div>
  )
}

function FormTitle ({ index, title, required = false }: { index: number | string, title: string, required?: boolean }) {
  return (
    <div className='flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-2'>
      <div
        className={classNames(
          'w-[35px] h-[35px] text-white',
          'flex items-center justify-center',
          'sm:text-2xl text-lg sm:font-black font-semibold',
          'rounded-t-[6px] rounded-l-[6px]',
          FormOptions.colors.highlight.background
        )}
      >
        <p>{index}</p>
      </div>
      <p className='text-xl font-extrabold sm:self-end'>{title} {required && <sup className='text-red-500'>*</sup>}</p>
    </div>
  )
}

function FormInputError ({ id, errors }: { id: keyof FormSchemaType, errors: FieldErrors<FormSchemaType> | null }) {
  // eslint-disable-next-line security/detect-object-injection
  const err = errors?.[id]

  return (
    err && <label className='text-medium text-red-500 text-sm'>{err.message}</label>
  )
}

function FormTextarea ({ index }: { index: string | number }) {
  const formTextareaId = `idx-${index}_content_area`

  return (
    <div className='mt-4 font-medium'>
      <textarea
        id={formTextareaId}
        className={classNames(
          'w-full h-[120px] overflow-y-auto p-3 rounded-[5px]',
          'text-head bg-white',
          'resize-none',
          FormOptions.classNames.border,
          FormOptions.colors.highlight.outline
        )}
        maxLength={300}
        placeholder='답변을 입력해주세요.'
      />
    </div>
  )
}

function FormTextareaComponent ({ index, title, description }: { index: string | number, title: string, description: string }) {
  return (
    <FormContainer>
      <FormTitle
        index={index}
        title={title}
        required
      />
      <div className='mt-2 font-medium'>
        <p>{description}</p>
      </div>
      <FormTextarea index={index} />
    </FormContainer>
  )
}

interface FormInputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: keyof FormSchemaType
  errors: FieldErrors<FormSchemaType>
  register: UseFormRegister<FormSchemaType>
}

interface FormInputProps extends FormInputElementProps {
  type?: string
  label: string
  placeholder?: string
}

function FormInput ({ id, type = 'text', label, placeholder = undefined, errors, register, ...props }: FormInputProps) {
  return (
    <div className='w-full'>
      <label>{label}</label>
      <input
        type={type}
        className={classNames(
          'mt-1 w-full p-3 rounded-[5px] border-[1px]',
          // eslint-disable-next-line security/detect-object-injection
          errors?.[id]
            ? 'border-red-300 text-red-500 bg-red-100 outline-red-400'
            : classNames(
              'text-head bg-white',
              FormOptions.colors.border,
              FormOptions.colors.highlight.outline
            )
        )}
        placeholder={placeholder}
        {...props}
        {
          ...register(id, {
            ...(id === 'studentId' && { valueAsNumber: false })
            // ...(props.onChange && ({ onChange: props.onChange }))
          })
        }
      />
      <FormInputError id={id} errors={errors} />
    </div>
  )
}

interface FormRadioInputProps extends FormInputElementProps {
  label: string
}

function FormRadioInput ({ id, label, errors, register, ...props }: FormRadioInputProps) {
  return (
    <div className='w-full'>
      <label>{label}</label>
      <div className='relative w-fit h-fit flex justify-center items-center'>
        <input
          type='radio'
          className={classNames(
            'appearance-none peer',
            'rounded-full w-[20px] h-[20px]',
            'border-[1px]',
            FormOptions.colors.highlight.border
          )}
          {...props}
          {...register(id)}
        />
        <div
          className={classNames(
            'absolute inset-0 mx-auto self-center',
            'w-[10px] h-[10px] rounded-full peer-checked:block hidden',
            FormOptions.colors.highlight.background
          )}
        />
      </div>
      <FormInputError id={id} errors={errors} />
    </div>
  )
}

function FormActionBtns ({ isSubmitting = false }: { isSubmitting: boolean }) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center',
        'fixed mx-auto left-0 right-0 rounded-t-[15px] bottom-0 z-[5]',
        'max-w-[1000px] h-[80px]',
        'bg-black/10 backdrop-blur-[5px]',
        FormOptions.classNames.border
      )}
    >
      <Container maxWidth='max-w-[1000px]'>
        <div className='flex space-x-4 px-4'>
          <button
            id='form-submit-btn'
            type='submit'
            disabled={isSubmitting}
            className={classNames(
              'w-full h-fit',
              'bg-white px-6 py-2 rounded-full',
              'text-head text-center font-semibold text-lg shadow-md',
              'disabled:opacity-95 duration-[250ms] ease-in-out',
              FormOptions.classNames.border
            )}
          >
            <p>제출하기</p>
          </button>
          <button
            id='form-reset-btn'
            type='reset'
            disabled={isSubmitting}
            className={classNames(
              'sm:w-1/4 w-full h-fit',
              'bg-red-100 text-red-500 px-6 py-2 rounded-full border-[1px] border-red-300',
              'text-head text-center font-semibold text-lg shadow-md',
              'disabled:opacity-95 duration-[250ms] ease-in-out'
            )}
          >
            <p>초기화</p>
          </button>
        </div>
      </Container>
      <div />
    </div>
  )
}

function CautionList ({ open = false }: { open: boolean }) {
  return (
    <Transition show={open}>
      <div
        className={classNames(
          'transition ease-in-out',
          'bg-white p-4 rounded-b-[5px] border-b-[1px] border-l-[1px] border-r-[1px] h-[300px]',
          'data-[closed]:opacity-0',
          FormOptions.colors.border
        )}
      >
      </div>
    </Transition>
  )
}
