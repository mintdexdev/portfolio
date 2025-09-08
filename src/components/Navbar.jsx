import { useEffect, useState } from 'react';
import ContainerX from './ui/ContainerX';
import { navList } from '@/data/navList'

export default function Navbar() {

  const [lastScrollY, setLastScrollY] = useState(window.scrollY)
  const [headerHideStyle, setHeaderHideStyle] = useState(null)

  useEffect(() => {
    const navigationHide = () => {
      const scrollY = window.scrollY

      if (scrollY === 0) {
        setHeaderHideStyle('border-b border-white/0')
      } else if (scrollY > lastScrollY) {
        setHeaderHideStyle('translate-y-[-100%]')
      }
      else if (scrollY < lastScrollY) {
        setHeaderHideStyle('border-b border-white/20')
      }

      setLastScrollY(scrollY)
    }
    window.addEventListener('scroll', navigationHide)
    return () => window.removeEventListener('scroll', navigationHide)
  }, [lastScrollY])

  return (
    <nav className={`navbar fixed w-full z-10  duration-300 ${headerHideStyle}`}>
      <ContainerX>

        <div className='py-2 flex justify-between'>

          <a href="/">
            {/* <img src="" alt="image" /> */}
            mintdexdev
          </a>

          <ul className='flex gap-12'>
            {navList.map((item) => (
              <li className=' will-change-transform duration-300 hover:brightness-75 hover:scale-[1.02] active:scale-[0.98] '
                key={item.name} >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>

        </div>

      </ContainerX>
    </nav>
  )
}