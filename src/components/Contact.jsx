import { links } from '@/data/links';

import ContainerX from '@/components/ui/ContainerX';
import { ButtonDark, ButtonLightOutline } from '@/components/ui/Button';

export default function Contact() {
  return (

    <section
      id='section-contact' className='my-20 px-[clamp(20px,15.3846px+1.2821vw,40px)] '>
      <div className='section-contact py-[clamp(20px,15.3846px+1.2821vw,40px)]  h-full w-full  rounded-2xl '>
        <ContainerX>
          <h2 className='mb-20 text-l9 text-center'>Contact</h2>

          <div className='text-center my-[100px]'>

            <p  >Let's make someting amazing together</p>
            <p className='mt-4 text-sm font-mono'> dexdevwork@gmail.com </p>
            <a className='block mb-2'
              href={`mailto:${links.workEmail}`}
              title='send email to dex'
            >
              <ButtonDark>
                Send me an Email ↗
              </ButtonDark>
            </a>
            <a className='block mb-2'
              href={links.x}
              title='send email to dex'
              target='_blank'
            >
              <ButtonLightOutline>Message me on X ↗</ButtonLightOutline>
            </a>
            {/* <a href='#'>Schedule a meeting</a> */}

          </div>

          <div className='text-center flex flex-col gap-4 sm:flex-row sm:justify-between '>
            <div className=''>
              <p className=''>availibility?</p>
              <p className='bg-neutral-300 rounded-full w-fit mx-auto px-5    sm:w-auto sm:p-0 sm:m-0 sm:bg-transparent '>Currently Available</p>
            </div>
            <div>
              <p className='sm:text-right'>for other inquires:</p>
              <p className='bg-neutral-300 rounded-full w-fit mx-auto px-5    sm:w-auto sm:p-0 sm:m-0 sm:bg-transparent '>{links.contactEmail}</p>
            </div>
          </div>

        </ContainerX>
      </div>
    </section>

  )
}
