import Container from '@/components/Container'
import FormContainer from '@/components/Form/FormBox'
import { classNames } from '@/utils'

export default function Test () {
  return (
    <Container maxWidth='max-w-[1000px]'>
      <div className='w-full py-20 px-4'>
        <div className='w-full flex space-x-8 justify-between'>
          <Card id='Bronze' />
          <Card id='Silver' />
          <Card id='Gold' />
        </div>
      </div>
    </Container>
  )
}

function Card ({ id }: { id: string }) {
  return (
    <FormContainer className='w-1/3'>
      <div className='w-full rounded-[15px]'>
        <div className='bg-jju-coolGray rounded-tl-[15px] rounded-br-[15px] h-[150px] flex items-center justify-center'>
          <p>Image Container</p>
        </div>
        <div className='mt-6 font-medium w-full'>
          <div className='w-full'>
            <div className='w-full flex'>
              <p className='font-semibold text-xl self-center'>{id}</p>
              <div
                className={classNames(
                  'w-full h-[5px] bg-gradient-to-r to-transparent self-center ml-2',
                  id === 'Bronze'
                    ? 'from-orange-700'
                    : id === 'Silver'
                      ? 'from-jju-silver'
                      : id === 'Gold'
                        ? 'from-jju-gold'
                        : 'from-head/25'
                )}
              />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae veniam! Ut, nobis, aspernatur numquam saepe sapiente necessitatibus nam animi, consectetur veritatis ipsum odio distinctio hic blanditiis non recusandae beatae.</p>
          </div>
          <div className='w-full h-px bg-head/25 my-4' />
          <div className='w-full h-[40px] bg-basicGrey rounded-[5px] flex justify-center items-center hover:bg-placeholder/25 duration-[250ms] ease-in-out'>
            <p>Pay Now</p>
          </div>
        </div>
      </div>
    </FormContainer>
  )
}
