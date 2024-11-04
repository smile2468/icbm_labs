import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Container from '@/components/Container'
import FormProvider from '@/components/Form/FormProvider'
import Form from '@/components/Form/Form'
import FormBox from '@/components/Form/FormBox'
import FormTitle from '@/components/Form/FormTitle'
import FormInput from '@/components/Form/FormInput'
import FormRadio from '@/components/Form/FormRadio'
import FormError from '@/components/Form/FormError'

import { FormOptions } from '@/components/Form/structures/FormOptions'

import { classNames } from '@/utils'

import { FormStateContext } from '@/structures/contexts'
import { preferredJobs } from '@/structures/FormRadioValues'

import { FormStateValueProps } from '@/types'

const initailState: FormStateValueProps = {
  privacyPolicy: {
    checked: false,
    notChecked: false
  },
  radioInput: {
    selected: null,
    etcToText: null
  }
}

export default function Test () {
  const router = useRouter()

  const [state, setState] = useState<FormStateValueProps>(initailState)

  const gotoPrivacyPolicyPage = () => router.push('/privacy-policy')

  useEffect(() => {
    console.log('State changed', state)
  }, [state])

  return (
    <Container
      maxWidth='max-w-[1000px]'
    >
      <FormStateContext.Provider value={{ state, setState }}>
        <FormProvider>
          <Form>
            <FormBox>
              <FormTitle
                id='1'
                title='개인정보 수집 및 활용 동의'
              />
              <div className='mt-2 font-medium'>
                <p>신청자 분의 개인정보를 아래와 같이 수집하고 활용하고자 합니다.</p>
                <p>동의를 거부하실 경우 해당 신청서를 진행하실 수 없습니다.</p>
                <p>자세한 내용은 <span onClick={gotoPrivacyPolicyPage} className={classNames('font-bold cursor-pointer', FormOptions.colors.highlight.text)}>{'"여기"'}</span>에서 확인가능합니다.</p>
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
                    state.privacyPolicy.notChecked
                      ? 'border-red-300 text-red-500 bg-red-100 outline-red-400'
                      : state.privacyPolicy.checked
                        ? 'border-green-500 text-green-700 bg-green-300/25 outline-green-400'
                        : classNames(
                          'text-head bg-head/5',
                          FormOptions.colors.border,
                          FormOptions.colors.highlight.outline
                        )
                  )}
                  onClick={() => {
                    setState((state) => {
                      const value = !state.privacyPolicy.checked

                      return {
                        ...state,
                        privacyPolicy: {
                          checked: value,
                          notChecked: !value
                        }
                      }
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
                  state.privacyPolicy.notChecked && (
                    <label className='text-medium text-red-500 text-sm'>개인정보 수집 및 활용에 동의해야합니다.</label>
                  )
                }
              </div>
            </FormBox>
            <FormBox>
              <FormTitle
                id='1'
                title='TEST_1'
              />
              <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className='mt-4 space-y-4'>
                <div className='flex sm:flex-row flex-col justify-between sm:space-x-4 sm:space-y-0 space-x-0 space-y-4'>
                  <div className='w-full'>
                    <label>이름</label>
                    <FormInput
                      id='studentName'
                      type='text'
                      placeholder='이름을 입력해주세요.'
                      className='my-[2px]'
                    />
                    <FormError id='studentName' />
                  </div>
                  <div className='w-full'>
                    <label>이름</label>
                    <FormInput
                      id='phoneNumber'
                      type='text'
                      placeholder='이름을 입력해주세요.'
                      className='my-[2px]'
                    />
                    <FormError id='phoneNumber' />
                  </div>
                </div>
                <div className='flex sm:flex-row flex-col justify-between sm:space-x-4 sm:space-y-0 space-x-0 space-y-4'>
                  <div className='w-full'>
                    <label>학번</label>
                    <FormInput
                      id='studentId'
                      type='text'
                      placeholder='학번을 입력해주세요.'
                      className='my-[2px]'
                      maxLength={9}
                    />
                    <FormError id='studentId' />
                  </div>
                  <div className='w-full'>
                    <label>이메일</label>
                    <FormInput
                      id='email'
                      type='email'
                      placeholder='이메일을 입력해주세요.'
                      className='my-[2px]'
                    />
                    <FormError id='email' />
                  </div>
                </div>
              </div>
            </FormBox>
            <FormBox>
              <FormTitle
                id='2'
                title='TEST_2'
              />
              <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className='mt-4'>
                <FormRadio
                  id='preferredJobKey'
                  subId='preferredJobContent'
                  values={preferredJobs}
                />
                <FormError id='preferredJobKey' />
              </div>
            </FormBox>
            <FormActionBtns
              isSubmitting={false}
            />
          </Form>
        </FormProvider>
      </FormStateContext.Provider>
    </Container>
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
