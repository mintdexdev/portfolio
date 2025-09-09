import { links } from '@/data/links';

import ContainerX from '@/components/ui/ContainerX';
import { ButtonLight } from '@/components/ui/Button';

export default function About() {
  return (

    <section id='section-about' className='py-50' >
      <ContainerX>

        <h2 className='mb-20 text-l9 text-center'>About</h2>

        <div className='flex items-center justify-center'>
          <div>
            <div className='max-w-[50ch] bg text-l2 text-justify'>
              <p className='my-12'>I am 'Deepak Gobari', or you can call me 'Dex'. I recently graduated with a Bachelor's degree in Computer Applications.</p>
              <p className='my-12'>I am passionate about frontend development and Web design, driven by my love for technology and creativity. I aspire to craft digital experiences that are as functional as they are visually engaging.</p>
              <p className='my-12'>I am working toward building my career by crafting high performance pretty things on the web with interactive user experience.</p>
            </div>
            <div className='flex justify-end'>
              <a
                href={links.github}
                title='View my GitHub Profile'
                target='_blank'
              >
                <ButtonLight>
                  View my Github ↗
                </ButtonLight>
              </a>
            </div>
          </div>
        </div>

      </ContainerX>
    </section>
  )
}