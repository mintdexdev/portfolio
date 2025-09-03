import ContainerX from '@/components/ui/ContainerX';

export default function Hero() {
  return (
    <section id='section-hero'>

      {/* Not Visible, for SEO/accesibility use*/}
      <div className='sr-only' >
        <h1 >Hi, I'm Deepak Gobari, Frontend Developer & Designer</h1>
        <p>Creating Stunning Experiences, a Pixel at a Time</p>
      </div>

      {/* Visible, for style use*/}
      <div aria-hidden="true">
        <ContainerX>
          <div className='h-dvh min-h-[640px] flex items-center justify-center'>

            <div className='w-full'>
              <span className='text-l4'>Hi, I'm</span>
              <img src="/assets/deepak-gobari.svg" alt="deepak gobari" />
              <div className='w-fit ml-auto mt-4 text-l4 '>Frontend Developer & Designer</div>
              <div className='mt-12 text-l1 text-center '>Creating Stunning Experiences, a Pixel at a Time</div>
            </div>
          </div>
        </ContainerX>
      </div>
    </section>
  )
}