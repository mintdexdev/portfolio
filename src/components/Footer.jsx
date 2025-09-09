import { socialLinksList, navList, otherLinksList } from '@/data/lists'

import ContainerX from '@/components/ui/ContainerX';
import { ButtonLightOutline } from './ui/Button';
import Time from './ui/Time';
import DeepakGobari from './ui/DeepakGobari';

export default function Footer() {

  return (

    <footer className='bg-black '>
      <ContainerX>


        <nav className='pt-20 relative'>

          <h2 className='text-l4 text-center border-b'>Links</h2>
          <div className='flex justify-around py-10'>
            <ul>
              {navList.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
            <ul>
              {socialLinksList.map((item) => (
                <li key={item.name}>
                  <a href={item.link} target='_blank'>{item.name}</a>
                </li>
              ))}
            </ul>
            <ul>
              {otherLinksList.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <a className='absolute right-0 bottom-0'
            href="#section-hero">
            <ButtonLightOutline>
              Go To Top ↑
            </ButtonLightOutline>
          </a>

        </nav>

        <Time />
        <DeepakGobari />
      </ContainerX>
    </footer>
  )
}
