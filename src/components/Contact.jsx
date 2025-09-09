import { ButtonDark, ButtonLightOutline } from '@/components/ui/Button';
import ContainerX from '@/components/ui/ContainerX';
import { socialList } from '@/data/links';


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
              href={`mailto:${socialList.workEmail.link}`}
              title='send email to dex'
            >
              <ButtonDark>
                Send me an Email ↗
              </ButtonDark>
            </a>
            <a className='block mb-2'
              href={socialList.x.link}
              title='send email to dex'
              target='_blank'
            >
              <ButtonLightOutline>Message me on X ↗</ButtonLightOutline>
            </a>
            {/* <a href='#'>Schedule a meeting</a> */}

          </div>

          <div className='flex justify-between'>
            <div className=''>
              <p>Availibility?</p>
              <p>Currently Available</p>
            </div>
            <div>
              <p className='text-right'>for other inquires</p>
              <p>{socialList.contactEmail.link}</p>
            </div>
          </div>

        </ContainerX>
      </div>
    </section>

  )
}
