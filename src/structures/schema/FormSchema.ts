import { z } from 'zod'

export const FormSchema = z
  .object({
    privacyAgreement: z
      .boolean({
        required_error: '개인정보 수집 및 활용 동의가 포함되어야 합니다.'
      })
      .default(false)
      .refine(value => value === true, {
        message: '개인정보 수집 및 활용에 동의해야합니다.'
      }),
    studentName: z
      .string({
        required_error: '이름이 포함되어야 합니다.'
      })
      .min(1, {
        message: '이름을 입력해주세요.'
      }),
    studentId: z
      .string({
        required_error: '학번이 포함되어야 합니다.'
      })
      .min(9, {
        message: '학번을 입력해주세요.'
      })
      .max(9, {
        message: '학번은 9자리입니다.'
      })
      .regex(
        /^[0-9]*$/,
        '올바른 학번을 입력해주세요. (학번은 총 9자리입니다.)'
      ),
    email: z
      .string({
        required_error: '이메일이 포함되어야 합니다.'
      })
      .min(1, {
        message: '이메일을 입력해주세요.'
      })
      .email('올바른 이메일을 입력해주세요. (예시: example@example.com)'),
    phoneNumber: z
      .string({
        required_error: '전화번호가 포함되어야 합니다.'
      })
      .min(1, {
        message: '전화번호를 입력해주세요.'
      })
      .regex(
        /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
        '올바른 전화번호를 입력해주세요.'
      ),
    preferredJobKey: z
      .nullable(
        z
          .string({
            required_error: '목표 직무가 포함되어야 합니다.',
            invalid_type_error: '목표 직무를 선택해주세요.'
          })
          .min(1, {
            message: '목표 직무를 선택해주세요.'
          })
      ),
    preferredJobContent: z
      .string({
        required_error: '답변이 포함되어야 합니다.'
      })
      .min(1, {
        message: '답변을 입력해주세요.'
      })
      .optional()
  })
  .refine((data) => data.preferredJobKey !== null, {
    message: '목표 직무를 선택해주세요.'
  })

// export const ApplyFormInputSchema = z
//   .object({
//     preferredJob: z
//       .string({
//         required_error: '목표 직무가 포함되어야 합니다.'
//       })
//   })

// export const Schema = z.union([FromSchema, ApplyFormInputSchema])
// export type SchemaType = ApplyFormSchemaType & ApplyFormInputType

// export interface ApplyFormInputType {
//   preferredJob: string
// }

export interface FormSchemaType {
  privacyAgreement: boolean
  studentName: string
  studentId: string
  email: string
  phoneNumber: string
  preferredJobKey: string | null
  preferredJobContent?: string
}
