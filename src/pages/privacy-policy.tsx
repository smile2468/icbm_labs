import React from 'react'
import Link from 'next/link'

import Footer from '@/components/Footer'
import Container from '@/components/Container'

import { privacyPolicy } from '@/structures'

export default function PrivacyPolicy () {
  return (
    <>
      <div className='flex items-center justify-center bg-gradient-to-t from-jju-steps-from via-jju-blue to-jju-steps-to h-[300px] w-full'>
        <div className='text-white font-bold text-4xl text-center'>
          <p>개인정보처리방침</p>
          <p className='font-light text-base'>Privacy Policy</p>
        </div>
      </div>
      <Container className='mt-10' maxWidth='max-w-[1200px]'>
        <div className='pb-20 px-4'>
          <Link href='/' className='flex space-x-4 font-bold text-xl hover:text-jju-blue duration-200 ease-in-out w-fit'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5 self-center'>
              <path d='M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z' />
            </svg>
            <h1>돌아가기</h1>
          </Link>
          <div className='mt-8 space-y-6'>
            <section>
              <p className='mt-2'>
              ICBM Labs(이하 {'\''}연구소{'\''})는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다. 이 방침은 별도의 설명이 없는 한 연구소에서 운용하는 모든 서비스에 적용됩니다.
              </p>
            </section>

            <section>
              <h2 className='text-lg font-bold'>1. 개인정보의 처리 목적</h2>
              <p className='mt-2'>연구소는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className='list-disc list-inside mt-2'>
                <li>지원자 식별 및 본인 확인</li>
                <li>지원서 검토 및 평가</li>
                <li>합격자 통보 및 연락</li>
                <li>연구 및 분석 목적으로의 활용</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>2. 개인정보의 처리 및 보유 기간</h2>
              <p className='mt-2'>연구소는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <ul className='list-disc list-inside mt-2'>
                <li>수집 시기: 지원자가 지원서를 접수한 시점</li>
                <li>보유 기간: 지원서 접수일로부터 1개월</li>
                <li>보유 기간 종료 후: 해당 개인정보는 지체 없이 파기됩니다.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>3. 처리하는 개인정보의 항목</h2>
              <p className='mt-2'>연구소는 다음의 개인정보 항목을 필수적으로 처리하고 있습니다:</p>
              <ul className='list-disc list-inside mt-2'>
                <li>이름</li>
                <li>전화번호</li>
                <li>이메일</li>
                <li>학번</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>4. 개인정보의 파기절차 및 방법</h2>
              <p className='mt-2'>연구소는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</p>
              <ul className='list-disc list-inside mt-2'>
                <li>파기절차: 연구소는 파기 사유가 발생한 개인정보를 선정하고, 연구소의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                <li>파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>5. 개인정보의 안전성 확보조치</h2>
              <p className='mt-2'>연구소는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
              <ul className='list-disc list-inside mt-2'>
                <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>6. 개인정보 보호책임자</h2>
              <p className='mt-2'>연구소는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:</p>
              <ul className='list-disc list-inside mt-2'>
                <li>개인정보 보호책임자: {privacyPolicy.managerName}</li>
                <li>직책: 개인정보보호팀장</li>
                <li>연락처: {privacyPolicy.contactNumber}, {privacyPolicy.contactEmail}</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>7. 개인정보 열람청구</h2>
              <p className='mt-2'>정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 연구소는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p>
              <ul className='list-disc list-inside mt-2'>
                <li>개인정보 열람청구 접수·처리 부서: 개인정보보호팀</li>
                <li>담당자: {privacyPolicy.managerName}</li>
                <li>연락처: {privacyPolicy.contactNumber}, {privacyPolicy.contactEmail}</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>8. 권익침해 구제방법</h2>
              <p className='mt-2'>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</p>
              <ul className='list-disc list-inside mt-2'>
                <li>개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                <li>개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>
                <li>대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
                <li>경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
              </ul>
            </section>

            <section>
              <h2 className='text-lg font-bold'>9. 개인정보처리방침의 변경</h2>
              <p className='mt-2'>이 개인정보 처리방침은 2023년 6월 1일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
